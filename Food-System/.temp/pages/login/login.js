import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import TopNav from "../../components/topnav/topnav";
import './login.scss';

export default class Login extends Component {
  config = {
    navigationBarTitleText: "登录"
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="container-login">
                  <TopNav isdisplaynagator={false} title="登录" isdisplaydaydate={false}></TopNav>
             </View>;
  }
}