import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './topnav.scss';

export default class TopNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isdisplaynagator: false,
      pagecount: 0
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  onNavigateBack = () => {

    if (this.props.isloginpage == true) {
      Taro.redirectTo({ url: '../../pages/index/index' });
    } else {
      Taro.navigateBack({
        delta: 1 //倒退
      });
    }
  };

  render() {
    return <View className="topnav-component">
                    <View className={this.props.ishavedate == true ? "content-component" : "content-component-nodate"}>
                        <View className="nagatortitle-component">
                                 {this.props.title}
                        </View>
                        <View className="nagator-component">
                            <View className="daohanwrrow-component">
                               <View className={this.props.isdisplaynagator == true ? "at-icon at-icon-chevron-left" : "nagator-didden"} onClick={this.onNavigateBack}>

                               </View>
                            </View>
                           
                        </View>
                       
                        <View className={this.props.isdisplaydaydate == true ? "day-view" : "day-view-hidden"}>
                                    <View className="day-view-content">
                                        <View className="day-date-view">
                                            <View className="day-date">
                                                {this.props.date}
                                            </View>
                                            <View className="mealtype">
                                                 {this.props.mealtype}
                                            </View>
                                        </View>
                                        <View className="order-status">
                                           {this.props.orderstatus}
                                        </View>
                                    </View>
                            </View>
                        

                    </View>
                </View>;
  }
}