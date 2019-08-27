import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'
import TopNav from "../../components/topnav/topnav"
import   './orderdetail.scss'

import shujiao from "../../asset/food/6.jpg"

//import 

export default class OrderDetail extends Component{
    config={

    }


    componentWillMount () { 
        
    }
  
    componentDidMount () { }
  
    componentWillUnmount () {
      
     }
  
    componentDidShow () { }
  
    componentDidHide () {
       
     }

     render(){
        return (
            <View className="containerview-detail">
                <TopNav title="订单详情" isdisplaydaydate={true} isdisplaynagator={true} date="8月8号  星期五" mealtype="早餐" orderstatus="已预定" navigatetourl="../minemenu/minemenu"></TopNav>
                <View className="meal-deatil">
                    <View className="meal-deatil-content">
                         <View className="meal-info">
                               <View className="meal-info-left">
                                   <View className="meal-image-view">
                                        <Image className="meal-image" src={shujiao}></Image>
                                   </View>
                                   <View className="meal-name-view">
                                           水饺
                                   </View>
                                   <View className="meal-count-view">
                                           x 1
                                   </View>
                               </View>
                               <View className="meal-info-right">
                                           ￥30
                               </View>
                         </View>
                         <View className="meal-info">
                               <View className="meal-info-left">
                                   <View className="meal-image-view">
                                        <Image className="meal-image" src={shujiao}></Image>
                                   </View>
                                   <View className="meal-name-view">
                                           水饺
                                   </View>
                                   <View className="meal-count-view">
                                           x 1
                                   </View>
                               </View>
                               <View className="meal-info-right">
                                           ￥30
                               </View>
                         </View>
                         <View className="meal-info">
                               <View className="meal-info-left">
                                   <View className="meal-image-view">
                                        <Image className="meal-image" src={shujiao}></Image>
                                   </View>
                                   <View className="meal-name-view">
                                           水饺
                                   </View>
                                   <View className="meal-count-view">
                                           x 1
                                   </View>
                               </View>
                               <View className="meal-info-right">
                                           ￥30
                               </View>
                         </View>
                         
                         

                         <View className="order-total-money-view">
                               <View className="order-total-money-text">
                                    总价:
                               </View>
                               <View className="order-total-money-cont">
                                    ￥30
                               </View>
                         </View>
                    </View>
                    
                </View>
                <View className="order-detail-footer">
                        <View className="footer-fun">
                            <View className="undo-order">
                                <View className="undo-order-btn">撤销订单</View>
                            </View>
                            <View className="edit-order">
                                <View className="edit-order-btn">重新选择</View>
                            </View>
                        </View>
                </View>
                
            </View>
        )
     }
}