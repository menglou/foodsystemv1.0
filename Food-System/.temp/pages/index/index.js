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

import foodlist from "../../components/foodlist/foodlist";
import getNextPreDate from "../../util/getdate";

const date = getNextPreDate(new Date());
const foodlists = foodlist;

const tabList = [{ title: '早餐' }, { title: '中餐' }, { title: '晚餐' }];

export default class Index extends Component {

  config = {
    navigationBarTitleText: "首页"
  };
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      data: date,
      nochangedate: new Date().toLocaleDateString(),
      foodforlist: foodlists, //菜品列表
      isdiaplaymealfood: false, //控制是否显示饱餐导航
      foodcount: 0, //总数量
      totalmoney: 0.0, //总价钱
      floatisOpened: false //悬窗是否显示
    };
  }

  componentWillMount() {
    Taro.pxTransform(86);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {
    Taro.re;
  }

  onNavigatoOrderfood = () => {
    Taro.navigateTo({
      url: "../orderfood/orderfood"
    });
  };
  onRedircto = () => {
    Taro.navigateTo({
      url: "../rules/rules"
    });
  };
  onredirectomymenu = () => {
    Taro.navigateTo({
      url: "../minemenu/minemenu"
    });
  };
  onredirecttonotice = () => {
    Taro.navigateTo({
      url: "../notice/notice"
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
                        <View className="nextrow-two" onClick={this.onredirecttonotice}>
                             <View className="nextrow-two-imae1">
                                <Image className="gonggao" src={gonggao}></Image>
                             </View>
                             <View className="nextrow-two-imae2">
                                <Image className="mine" src={mine}></Image>
                             </View>
                        </View>
                   </View>
               </View>
          </View>
      </View>;
  }
}