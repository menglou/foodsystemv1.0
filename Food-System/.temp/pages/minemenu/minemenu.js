import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';

import wancan from "../../asset/image/wancan.png";

import TopNav from "../../components/topnav/topnav";
import { AtIcon } from 'taro-ui';
import { connect } from "@tarojs/redux-h5";

import styles from './minemenu.module.scss';

export default @connect(({ manageruserinfo }) => ({
  manageruserinfo
}), dispatch => ({}))
class MineMenu extends Component {
  config = {
    navigationBarTitleText: "我的菜单"
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (Object.keys(this.props.manageruserinfo.userinfo).length === 0) {
      Taro.redirectTo({ url: '../login/login' });
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onSeeMeilDetail = () => {
    Taro.navigateTo({
      url: "../orderdetail/orderdetail"
    });
  };

  render() {
    return <View className={styles.containerviewminemenu}>
                <TopNav title="我的菜单" isdisplaydaydate={false} isdisplaynagator={false}></TopNav>

                <View className={styles.listmenuconent}>
                    <View className={styles.menulist}>
                        <View className={styles.menuconent}>
                                <View className={styles.menuconentonerow}>
                                     <View className={styles.datetime}>
                                            8月11号  星期天
                                     </View>
                                     <View className={styles.orderstatus}>
                                           <View className={styles.orderstatusico} style="color:#11ce68">
                                                <AtIcon className={styles.aticos} value="check-circle" size="18"></AtIcon>
                                           </View>
                                           <View className={styles.orderstatustext}>
                                                 已预定
                                           </View>
                                     </View>
                                </View>
                                <View className={styles.menuconenttworow}>
                                    <View className={styles.wheremeal}>
                                         <View className={styles.mealicon}>
                                            <Image src={wancan} className={styles.iconimage}></Image>
                                         </View>
                                         <View className={styles.wheremealname}>
                                               晚餐
                                         </View>
                                    </View>
                                    <View className={styles.totalmoney}>
                                         ￥15
                                    </View>
                                </View>
                        </View>
                        <View className={styles.menuconent}>
                                <View className={styles.menuconentonerow}>
                                     <View className={styles.datetime}>
                                            8月11号  星期天
                                     </View>
                                     <View className={styles.orderstatus}>
                                           <View className={styles.orderstatusico} style="color:#11ce68">
                                                <AtIcon className={styles.aticos} value="check-circle" size="18"></AtIcon>
                                           </View>
                                           <View className={styles.orderstatustext}>
                                                 已预定
                                           </View>
                                     </View>
                                </View>
                                <View className={styles.menuconenttworow}>
                                    <View className={styles.wheremeal}>
                                         <View className={styles.mealicon}>
                                            <Image src={wancan} className={styles.iconimage}></Image>
                                         </View>
                                         <View className={styles.wheremealname}>
                                               晚餐
                                         </View>
                                    </View>
                                    <View className={styles.totalmoney}>
                                         ￥15
                                    </View>
                                </View>
                        </View>
                        <View className={styles.menuconent}>
                                <View className={styles.menuconentonerow}>
                                     <View className={styles.datetime}>
                                            8月11号  星期天
                                     </View>
                                     <View className={styles.orderstatus}>
                                           <View className={styles.orderstatusico} style="color:#11ce68">
                                                <AtIcon className={styles.aticos} value="check-circle" size="18"></AtIcon>
                                           </View>
                                           <View className={styles.orderstatustext}>
                                                 已预定
                                           </View>
                                     </View>
                                </View>
                                <View className={styles.menuconenttworow}>
                                    <View className={styles.wheremeal}>
                                         <View className={styles.mealicon}>
                                            <Image src={wancan} className={styles.iconimage}></Image>
                                         </View>
                                         <View className={styles.wheremealname}>
                                               晚餐
                                         </View>
                                    </View>
                                    <View className={styles.totalmoney}>
                                         ￥15
                                    </View>
                                </View>
                        </View>
                        <View className={styles.menuconent}>
                                <View className={styles.menuconentonerow}>
                                     <View className={styles.datetime}>
                                            8月11号  星期天
                                     </View>
                                     <View className={styles.orderstatus}>
                                           <View className={styles.orderstatusico} style="color:#ffbe30">
                                                <AtIcon className={styles.aticos} value="clock" size="18"></AtIcon>
                                           </View>
                                           <View className={styles.orderstatustext}>
                                                 已预定
                                           </View>
                                     </View>
                                </View>
                                <View className={styles.menuconenttworow}>
                                    <View className={styles.wheremeal}>
                                         <View className={styles.mealicon}>
                                            <Image src={wancan} className={styles.iconimage}></Image>
                                         </View>
                                         <View className={styles.wheremealname}>
                                               晚餐
                                         </View>
                                    </View>
                                    <View className={styles.totalmoney}>
                                         ￥15
                                    </View>
                                </View>
                        </View>
                        <View className={styles.menuconent}>
                                <View className={styles.menuconentonerow}>
                                     <View className={styles.datetime}>
                                            8月11号  星期天
                                     </View>
                                     <View className={styles.orderstatus}>
                                           <View className={styles.orderstatusico} style="color:#ffbe30">
                                                <AtIcon className={styles.aticos} value="clock" size="18"></AtIcon>
                                           </View>
                                           <View className={styles.orderstatustext}>
                                                 已预定
                                           </View>
                                     </View>
                                </View>
                                <View className={styles.menuconenttworow}>
                                    <View className={styles.wheremeal}>
                                         <View className={styles.mealicon}>
                                            <Image src={wancan} className={styles.iconimage}></Image>
                                         </View>
                                         <View className={styles.wheremealname}>
                                               晚餐
                                         </View>
                                    </View>
                                    <View className={styles.totalmoney}>
                                         ￥15
                                    </View>
                                </View>
                        </View>
                        <View className={styles.menuconent}>
                                <View className={styles.menuconentonerow}>
                                     <View className={styles.datetime}>
                                            8月11号  星期天
                                     </View>
                                     <View className={styles.orderstatus}>
                                           <View className={styles.orderstatusico} style="color:#ffbe30">
                                                <AtIcon className={styles.aticos} value="clock" size="18"></AtIcon>
                                           </View>
                                           <View className={styles.orderstatustext}>
                                                 已预定
                                           </View>
                                     </View>
                                </View>
                                <View className={styles.menuconenttworow}>
                                    <View className={styles.wheremeal}>
                                         <View className={styles.mealicon}>
                                            <Image src={wancan} className={styles.iconimage}></Image>
                                         </View>
                                         <View className={styles.wheremealname}>
                                               晚餐
                                         </View>
                                    </View>
                                    <View className={styles.totalmoney}>
                                         ￥15
                                    </View>
                                </View>
                        </View>
                        <View className={styles.menuconent} onClick={this.onSeeMeilDetail}>
                                <View className={styles.menuconentonerow}>
                                     <View className={styles.datetime}>
                                            8月11号  星期天
                                     </View>
                                     <View className={styles.orderstatus}>
                                           <View className={styles.orderstatusico} style="color:#ffbe30">
                                                <AtIcon className={styles.aticos} value="clock" size="18"></AtIcon>
                                           </View>
                                           <View className={styles.orderstatustext}>
                                                 已预定
                                           </View>
                                     </View>
                                </View>
                                <View className={styles.menuconenttworow}>
                                    <View className={styles.wheremeal}>
                                         <View className={styles.mealicon}>
                                            <Image src={wancan} className={styles.iconimage}></Image>
                                         </View>
                                         <View className={styles.wheremealname}>
                                               晚餐
                                         </View>
                                    </View>
                                    <View className={styles.totalmoney}>
                                         ￥15
                                    </View>
                                </View>
                        </View>
                    </View>
                </View>
              
            </View>;
  }
}