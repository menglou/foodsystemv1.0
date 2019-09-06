import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View, Input, Image } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import TopNav from "../../components/topnav/topnav";
import bg from '../../asset/image/canyin-bg.jpg';

import { connect } from "@tarojs/redux-h5";
import { modifypwd, loginexits, login } from '../../action/manageruserinfo';
import androidinput from '../../util/androidinput';
import styles from './login.module.scss';

export default @connect(({ manageruserinfo }) => ({
  manageruserinfo
}), dispatch => ({
  modifypwd() {
    dispatch(modifypwd());
  },
  loginexits() {
    dispatch(loginexits());
  },
  login(accout, pwd) {
    dispatch(login(accout, pwd));
  }
}))
class Login extends Component {
  config = {
    navigationBarTitleText: "登录"
  };
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      pwd: ""
    };
  }

  componentWillMount() {
    androidinput();
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  //登录
  onLogin = () => {

    //各种检查

    //通过登录
    Taro.showLoading({ title: '登录中...', mask: true });
    this.props.login(this.state.account, this.state.pwd);
    if (Object.keys(this.props.manageruserinfo.userinfo).length !== 0) {
      Taro.hideLoading();
      Taro.redirectTo({ url: '../index/index' });
    }
  };

  onAccountInput = e => {
    let value = e.target.value;
    this.setState({
      account: value
    });
  };
  onPwdInput = e => {
    let value = e.target.value;
    this.setState({
      pwd: value
    });
  };

  render() {
    return <View className={styles.containerlogin}>
                  <TopNav isdisplaynagator={true} title="登录" isloginpage={true} isdisplaydaydate={false} ishavedate={false}></TopNav>
                  <View className={styles.loginconetntbg}>
                       <Image src={bg} className={styles.loginconetntbgimg}></Image>
                  </View>
                   <View className={styles.loginconetnt}>
                        <View className={styles.loginform}>
                             <View className={styles.forminput}>
                                 <View className={styles.account}>
                                     <View className={styles.accounticon}>
                                        <AtIcon value="user" size="20" color="#999999"></AtIcon>
                                     </View>
                                     <View className={styles.accountinput}>
                                         <Input className={styles.inputs} placeholder="个人账号" type="text" onInput={this.onAccountInput.bind(this)} value={this.state.account}></Input>
                                     </View>
                                 </View>
                                 <View className={styles.pwd}>
                                     <View className={styles.pwdicon}>
                                        <AtIcon value="lock" size="20" color="#999999"></AtIcon>
                                     </View>
                                     <View className={styles.pwdinput}>
                                         <Input className={styles.inputs} placeholder="密码" password={true} onInput={this.onPwdInput.bind(this)} value={this.state.pwd}></Input>
                                     </View>
                                 </View>
                                 <View className={styles.modifypwd}>
                                      密码修改
                                 </View>
                                 <View className={styles.loginbtnview} onClick={this.onLogin}>
                                         立即登录
                                 </View>
                             </View>
                            
                        </View>
                   </View>
                   <View className={styles.tiptitle}>
                                <View className={styles.contents}>
                                   <View className={styles.onecntent}>
                                       <View className={styles.phoneicon}>
                                           <AtIcon value="phone" size="20" color="#eee"></AtIcon>
                                             客户服务热线：0510-88568485
                                       </View>
                                    </View>
                                    <View className={styles.twocntent}>
                                      <AtIcon value="help" size="20" color="#d9d8d8"></AtIcon>
                                         常见问题
                                    </View>
                                </View>
                    </View>
             </View>;
  }
}