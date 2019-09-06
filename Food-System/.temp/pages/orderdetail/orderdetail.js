import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';

import TopNav from "../../components/topnav/topnav";
import styles from './orderdetail.module.scss';

import shujiao from "../../asset/food/6.jpg";

//import 

export default class OrderDetail extends Component {
  config = {
    navigationBarTitleText: "订单详情"
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
    return <View className={styles.containerviewdetail}>
                <TopNav title="订单详情" isdisplaydaydate={true} ishavedate={false} isdisplaynagator={true} date="8月8号  星期五" mealtype="早餐" orderstatus="已预定"></TopNav>
                <View className={styles.mealdeatil}>
                    <View className={styles.mealdeatilcontent}>
                         <View className={styles.mealinfo}>
                               <View className={styles.mealinfoleft}>
                                   <View className={styles.mealimageview}>
                                        <Image className={styles.mealimage} src={shujiao}></Image>
                                   </View>
                                   <View className={styles.mealnameview}>
                                           水饺
                                   </View>
                                   <View className={styles.mealcountview}>
                                           x 1
                                   </View>
                               </View>
                               <View className={styles.mealinforight}>
                                           ￥30
                               </View>
                         </View>
                         <View className={styles.mealinfo}>
                               <View className={styles.mealinfoleft}>
                                   <View className={styles.mealimageview}>
                                        <Image className={styles.mealimage} src={shujiao}></Image>
                                   </View>
                                   <View className={styles.mealnameview}>
                                           水饺
                                   </View>
                                   <View className={styles.mealcountview}>
                                           x 1
                                   </View>
                               </View>
                               <View className={styles.mealinforight}>
                                           ￥30
                               </View>
                         </View>
                         <View className={styles.mealinfo}>
                               <View className={styles.mealinfoleft}>
                                   <View className={styles.mealimageview}>
                                        <Image className={styles.mealimage} src={shujiao}></Image>
                                   </View>
                                   <View className={styles.mealnameview}>
                                           水饺
                                   </View>
                                   <View className={styles.mealcountview}>
                                           x 1
                                   </View>
                               </View>
                               <View className={styles.mealinforight}>
                                           ￥30
                               </View>
                         </View>
                         <View className={styles.mealinfo}>
                               <View className={styles.mealinfoleft}>
                                   <View className={styles.mealimageview}>
                                        <Image className={styles.mealimage} src={shujiao}></Image>
                                   </View>
                                   <View className={styles.mealnameview}>
                                           水饺
                                   </View>
                                   <View className={styles.mealcountview}>
                                           x 1
                                   </View>
                               </View>
                               <View className={styles.mealinforight}>
                                           ￥30
                               </View>
                         </View>
                         <View className={styles.mealinfo}>
                               <View className={styles.mealinfoleft}>
                                   <View className={styles.mealimageview}>
                                        <Image className={styles.mealimage} src={shujiao}></Image>
                                   </View>
                                   <View className={styles.mealnameview}>
                                           水饺
                                   </View>
                                   <View className={styles.mealcountview}>
                                           x 1
                                   </View>
                               </View>
                               <View className={styles.mealinforight}>
                                           ￥30
                               </View>
                         </View>
                         <View className={styles.mealinfo}>
                               <View className={styles.mealinfoleft}>
                                   <View className={styles.mealimageview}>
                                        <Image className={styles.mealimage} src={shujiao}></Image>
                                   </View>
                                   <View className={styles.mealnameview}>
                                           水饺
                                   </View>
                                   <View className={styles.mealcountview}>
                                           x 1
                                   </View>
                               </View>
                               <View className={styles.mealinforight}>
                                           ￥30
                               </View>
                         </View>
                         <View className={styles.mealinfo}>
                               <View className={styles.mealinfoleft}>
                                   <View className={styles.mealimageview}>
                                        <Image className={styles.mealimage} src={shujiao}></Image>
                                   </View>
                                   <View className={styles.mealnameview}>
                                           水饺
                                   </View>
                                   <View className={styles.mealcountview}>
                                           x 1
                                   </View>
                               </View>
                               <View className={styles.mealinforight}>
                                           ￥30
                               </View>
                         </View>
                        
                         

                         <View className={styles.ordertotalmoneyview}>
                               <View className={styles.ordertotalmoneytext}>
                                    总价:
                               </View>
                               <View className={styles.ordertotalmoneycont}>
                                    ￥210
                               </View>
                         </View>
                    </View>
                    
                </View>
                <View className={styles.orderdetailfooter}>
                        <View className={styles.footerfun}>
                            <View className={styles.undoorder}>
                                <View className={styles.undoorderbtn}>撤销订单</View>
                            </View>
                            <View className={styles.editorder}>
                                <View className={styles.editorderbtn}>重新选择</View>
                            </View>
                        </View>
                </View>
                
            </View>;
  }
}