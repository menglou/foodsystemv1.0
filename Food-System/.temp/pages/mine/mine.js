import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';

import TopNav from '../../components/topnav/topnav';

import { AtAvatar, AtList, AtListItem } from 'taro-ui';

import { connect } from "@tarojs/redux-h5";
import { modifypwd, loginexits } from '../../action/manageruserinfo';
import './mine.scss';

export default @connect(({ manageruserinfo }) => ({
  manageruserinfo
}), dispatch => ({
  modifypwd() {
    dispatch(modifypwd());
  },
  loginexits() {
    dispatch(loginexits());
  }
}))
class Mine extends Component {
  config = {
    navigationBarTitleText: "个人中心"
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (Object.keys(this.props.manageruserinfo.userinfo).length === 0) {
      Taro.redirectTo({ url: "../login/login" });
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  AtListClick = e => {

    switch (e) {
      case 'modifypwd':
        Taro.showModal({
          title: '提示',
          content: "暂未实现"
        }).then(re => {
          if (re.confirm) {} else if (re.cancel) {}
        });
        break;
      case 'loginexits':
        Taro.showModal({
          title: '提示',
          content: "暂未实现"
        }).then(re => {
          if (re.confirm) {} else if (re.cancel) {}
        });
        break;
    }
  };

  render() {
    return <View className="container-mine">
                 <TopNav isdisplaynagator={false} title="个人中心" isdisplaydaydate={false} ishavedate={false}></TopNav>
                 <View className="mine-content">
                     <View className="mine-info">
                        <View className="mine-content-header">
                            <View className="mine-info-avatar">
                                <View className="mineavator-view">
                                   <AtAvatar image={this.props.manageruserinfo.userinfo.image} size="small" circle={true}></AtAvatar>
                                </View>
                            </View>
                            <View className="mine-info-desc">
                                    <View className="mine-info-desc-name">
                                         {this.props.manageruserinfo.userinfo.name}
                                    </View>
                                    <View className="mine-info-desc-comp">
                                         {this.props.manageruserinfo.userinfo.decription}
                                    </View>
                            </View>
                        </View>
                        <View className="mine-content-list">
                            <AtList>
                                <AtListItem className="mineitem" title="密码修改" arrow="right" onClick={this.AtListClick.bind(this, "modifypwd")} />
                            </AtList>
                            <AtList>
                                <AtListItem className="mineitem" title="退出登录" arrow="right" onClick={this.AtListClick.bind(this, "loginexits")} />
                            </AtList>
                        </View>
                     </View>
                 </View>
             </View>;
  }
}