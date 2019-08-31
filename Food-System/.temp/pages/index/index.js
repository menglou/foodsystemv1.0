import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import './index.scss';
import startoderdood from '../../asset/image/startoderdood.png';
import rules from '../../asset/image/rules.png';
import mymenu from '../../asset/image/mymenu.png';
import mine from '../../asset/image/mine.png';
import gonggao from '../../asset/image/gonggao.png';

import TopNav from "../../components/topnav/topnav";


const tabList = [{ title: '早餐' }, { title: '中餐' }, { title: '晚餐' }];

export default class Index extends Component {

  config = {
    navigationBarTitleText: "首页"
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onNavigatoOrderfood = () => {
    Taro.redirectTo({
      url: "../orderfood/orderfood" //跳转到报餐页面  0//代表是tabbar切换到这个页面的  1//代表不是tabbar切换到这个页面的 
    });
  };
  onRedircto = () => {
    Taro.navigateTo({
      url: "../rules/rules" //跳转到规则页面  0//代表是tabbar切换到这个页面的  1//代表不是tabbar切换到这个页面的 
    });
  };
  onredirectomymenu = () => {
    Taro.redirectTo({
      url: "../minemenu/minemenu" //跳转到我的菜单页面  0//代表是tabbar切换到这个页面的  1//代表不是tabbar切换到这个页面的 
    });
  };
  onredirecttonotice = () => {
    Taro.navigateTo({
      url: "../notice/notice" //跳转到公告  0//代表是tabbar切换到这个页面的  1//代表不是tabbar切换到这个页面的 
    });
  };

  onredirecttomine = () => {
    Taro.redirectTo({
      url: "../mine/mine"
    });
  };

  render() {
    return <View className="containerview-first">

          <TopNav title="首页" isdisplaydaydate={false} isdisplaynagator={false}></TopNav>
          <View className="listcontent"> 
               <View className="functionmenu">
                   <View className="firstrow" onClick={this.onNavigatoOrderfood}>
                         <Image className="firstrow-image" src={startoderdood}></Image>
                   </View>
                   <View className="nextrow">
                        <View className="nextrow-one">
                             <View className="nextrow-one-imae1" onClick={this.onredirectomymenu}>
                                <Image className="mymenu" src={mymenu}></Image>
                             </View>
                             <View className="nextrow-one-imae2" onClick={this.onRedircto}>
                                <Image className="rules" src={rules}></Image>
                             </View>
                        </View>
                        <View className="nextrow-two">
                             <View className="nextrow-two-imae1" onClick={this.onredirecttonotice}>
                                <Image className="gonggao" src={gonggao}></Image>
                             </View>
                             <View className="nextrow-two-imae2" onClick={this.onredirecttomine}>
                                <Image className="mine" src={mine}></Image>
                             </View>
                        </View>
                   </View>
               </View>
          </View>
          
      </View>;
  }
}