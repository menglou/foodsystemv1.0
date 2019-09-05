import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'

import zaocan from "../../asset/image/zaocan.png"
import wucan from "../../asset/image/wancan.png"
import wancan from "../../asset/image/wancan.png"


import TopNav from "../../components/topnav/topnav"

import {connect} from '@tarojs/redux'

import './minemenu.scss'



@connect(({ manageruserinfo }) => ({
      manageruserinfo
    }), (dispatch) => ({
    }))

export default class MineMenu extends Component{
    config={
        navigationBarTitleText:"我的菜单"
    }

    constructor(props){
        super(props)
       
    }

    componentWillMount () { 
          if(Object.keys(this.props.manageruserinfo.userinfo).length===0){
             Taro.redirectTo({url:'../login/login'})
          }
          else{
                //去加载菜单列表
          }
      }
    
      componentDidMount () { }
    
      componentWillUnmount () {
           
       }
    
      componentDidShow () { }
    
      componentDidHide () {
         
       }

       onSeeMeilDetail=()=>{
             Taro.navigateTo({
                   url:"../orderdetail/orderdetail"
             });
       }

    render(){
        return(
            <View className="containerview-minemenu">
                <TopNav title="我的菜单" isdisplaydaydate={false}  isdisplaynagator={false}></TopNav>

                <View className="listmenuconent">
                    <View className="menulist">
                        <View className="menuconent">
                                <View className="menuconent-onerow">
                                     <View className="datetime">
                                            8月8号  星期四
                                     </View>
                                     <View className="orderstatus">
                                           <View className="orderstatus-ico at-icon at-icon-check-circle">
                                                   
                                           </View>
                                           <View className="orderstatus-text">
                                                 已核销
                                           </View>
                                     </View>
                                </View>
                                <View className="menuconent-tworow">
                                    <View className="wheremeal">
                                         <View className="meal-icon">
                                            <Image src={zaocan} className="icon-image"></Image>
                                            
                                         </View>
                                         <View className="wheremeal-name">
                                              早餐
                                         </View>
                                    </View>
                                    <View className="totalmoney">
                                         ￥10
                                    </View>
                                </View>
                        </View>
                        <View className="menuconent">
                                <View className="menuconent-onerow">
                                     <View className="datetime">
                                            8月8号  星期四
                                     </View>
                                     <View className="orderstatus">
                                           <View className="orderstatus-ico at-icon at-icon-check-circle">
                                                   
                                           </View>
                                           <View className="orderstatus-text">
                                                 已核销
                                           </View>
                                     </View>
                                </View>
                                <View className="menuconent-tworow">
                                    <View className="wheremeal">
                                         <View className="meal-icon">
                                            <Image src={zaocan} className="icon-image"></Image>
                                         </View>
                                         <View className="wheremeal-name">
                                               早餐
                                         </View>
                                    </View>
                                    <View className="totalmoney">
                                         ￥10
                                    </View>
                                </View>
                        </View>
                        <View className="menuconent">
                                <View className="menuconent-onerow">
                                     <View className="datetime">
                                            8月8号  星期四
                                     </View>
                                     <View className="orderstatus">
                                           <View className="orderstatus-ico at-icon at-icon-check-circle">
                                                   
                                           </View>
                                           <View className="orderstatus-text">
                                                 已核销
                                           </View>
                                     </View>
                                </View>
                                <View className="menuconent-tworow">
                                    <View className="wheremeal">
                                         <View className="meal-icon">
                                            <Image src={zaocan} className="icon-image"></Image>
                                         </View>
                                         <View className="wheremeal-name">
                                               早餐
                                         </View>
                                    </View>
                                    <View className="totalmoney">
                                         ￥10
                                    </View>
                                </View>
                        </View>
                        <View className="menuconent">
                                <View className="menuconent-onerow">
                                     <View className="datetime">
                                            8月8号  星期四
                                     </View>
                                     <View className="orderstatus">
                                           <View className="orderstatus-ico at-icon at-icon-check-circle">
                                                   
                                           </View>
                                           <View className="orderstatus-text">
                                                 已核销
                                           </View>
                                     </View>
                                </View>
                                <View className="menuconent-tworow">
                                    <View className="wheremeal">
                                         <View className="meal-icon">
                                            <Image src={zaocan} className="icon-image"></Image>
                                         </View>
                                         <View className="wheremeal-name">
                                               早餐
                                         </View>
                                    </View>
                                    <View className="totalmoney">
                                         ￥10
                                    </View>
                                </View>
                        </View>
                        <View className="menuconent">
                                <View className="menuconent-onerow">
                                     <View className="datetime">
                                            8月8号  星期四
                                     </View>
                                     <View className="orderstatus">
                                           <View className="orderstatus-ico at-icon at-icon-check-circle">
                                                   
                                           </View>
                                           <View className="orderstatus-text">
                                                 已核销
                                           </View>
                                     </View>
                                </View>
                                <View className="menuconent-tworow">
                                    <View className="wheremeal">
                                         <View className="meal-icon">
                                            <Image src={zaocan} className="icon-image"></Image>
                                         </View>
                                         <View className="wheremeal-name">
                                               早餐
                                         </View>
                                    </View>
                                    <View className="totalmoney">
                                         ￥10
                                    </View>
                                </View>
                        </View>
                        
                        <View className="menuconent">
                                <View className="menuconent-onerow">
                                     <View className="datetime">
                                            8月8号  星期四
                                     </View>
                                     <View className="orderstatus">
                                           <View className="orderstatus-ico at-icon at-icon-clock" style="color:#ffbe30">
                                                   
                                           </View>
                                           <View className="orderstatus-text">
                                                 已预定
                                           </View>
                                     </View>
                                </View>
                                <View className="menuconent-tworow">
                                    <View className="wheremeal">
                                         <View className="meal-icon">
                                            <Image src={zaocan} className="icon-image"></Image>
                                         </View>
                                         <View className="wheremeal-name">
                                               早餐
                                         </View>
                                    </View>
                                    <View className="totalmoney">
                                         ￥8
                                    </View>
                                </View>
                        </View>
                        <View className="menuconent">
                                <View className="menuconent-onerow">
                                     <View className="datetime">
                                            8月9号  星期五
                                     </View>
                                     <View className="orderstatus">
                                           <View className="orderstatus-ico at-icon at-icon-clock" style="color:#ffbe30">
                                                   
                                           </View>
                                           <View className="orderstatus-text">
                                                 已预定
                                           </View>
                                     </View>
                                </View>
                                <View className="menuconent-tworow">
                                    <View className="wheremeal">
                                         <View className="meal-icon">
                                            <Image src={wucan} className="icon-image"></Image>
                                         </View>
                                         <View className="wheremeal-name">
                                               午餐
                                         </View>
                                    </View>
                                    <View className="totalmoney">
                                         ￥18
                                    </View>
                                </View>
                        </View>
                        <View className="menuconent">
                                <View className="menuconent-onerow">
                                     <View className="datetime">
                                            8月10号  星期六
                                     </View>
                                     <View className="orderstatus">
                                           <View className="orderstatus-ico at-icon at-icon-clock" style="color:#ffbe30">
                                                   
                                           </View>
                                           <View className="orderstatus-text">
                                                 已预定
                                           </View>
                                     </View>
                                </View>
                                <View className="menuconent-tworow">
                                    <View className="wheremeal">
                                         <View className="meal-icon">
                                            <Image src={zaocan} className="icon-image"></Image>
                                         </View>
                                         <View className="wheremeal-name">
                                               早餐
                                         </View>
                                    </View>
                                    <View className="totalmoney">
                                         ￥8
                                    </View>
                                </View>
                        </View>
                        <View className="menuconent" onClick={this.onSeeMeilDetail}>
                                <View className="menuconent-onerow">
                                     <View className="datetime">
                                            8月11号  星期天
                                     </View>
                                     <View className="orderstatus">
                                           <View className="orderstatus-ico at-icon at-icon-clock" style="color:#ffbe30">
                                                   
                                           </View>
                                           <View className="orderstatus-text">
                                                 已预定
                                           </View>
                                     </View>
                                </View>
                                <View className="menuconent-tworow">
                                    <View className="wheremeal">
                                         <View className="meal-icon" >
                                            <Image src={wancan} className="icon-image"></Image>
                                         </View>
                                         <View className="wheremeal-name">
                                               晚餐
                                         </View>
                                    </View>
                                    <View className="totalmoney">
                                         ￥15
                                    </View>
                                </View>
                        </View>
                    </View>
                </View>
              
            </View>
        )
    }
}