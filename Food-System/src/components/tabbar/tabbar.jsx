import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'

import shouye from '../../asset/image/home.png'
import shouyefocus from '../../asset/image/home_focus.png'
import baocan from '../../asset/image/canyin.jpg'
import mymeal from '../../asset/image/liebiao.jpg'
import mine from '../../asset/image/company.png'
import minefocus from '../../asset/image/company_focus.png'

import './tabbar.scss'

export default class TabBar extends Component{

     constructor(props){
         super(props)
         
     }

    componentWillMount () { 
   
    }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { 
     
    }

    onTabClick=(e)=>{
      
         switch(e){
             case "shouye":
                Taro.redirectTo({
                    url:"../../pages/index/index"
                 })
                
                 break;
             case "baocan":
                 Taro.redirectTo({
                     url:"../../pages/orderfood/orderfood"
                 })
                     
                  break;
             case "mymeal":
                  Taro.redirectTo({
                      url:"../../pages/minemenu/minemenu"
                  })
                 break;
             case "mine":
                  Taro.redirectTo({
                            url:"../../pages/mine/mine"
                        })
                   break;      
         }
    }

    render(){
        return (
            <View className="container-flex">
                     <View className="tabbar-content">
                         <View className="onetab" onClick={this.onTabClick.bind(this,"shouye")}>
                               <View className="ico">
                                   <Image className="ico-image"  src={this.props.homeicochange==true?shouyefocus:shouye}></Image>
                               </View>
                               <View className={this.props.homecolorchange==true?"desciption-change":"desciption"}>
                                     首页
                               </View>
                         </View>
                         <View className="twotab" onClick={this.onTabClick.bind(this,"baocan")}>
                            <View className="ico">
                                    <Image className="ico-image" src={this.props.ordermealiconchange==true?baocan:baocan}></Image>
                                </View>
                                <View className={this.props.ordermealcolorchange==true?"desciption-change":"desciption"}>
                                        报餐
                                </View>
                            </View>
                         <View className="threetab" onClick={this.onTabClick.bind(this,"mymeal")}>
                                <View className="ico">
                                        <Image className="ico-image" src={this.props.mymenuiconchange==true?mymeal:mymeal}></Image>
                                    </View>
                                    <View className={this.props.mymenucolorchange==true?"desciption-change":"desciption"}>
                                        我的菜单
                                    </View>
                                </View>
                         <View className="fourtab" onClick={this.onTabClick.bind(this,"mine")}>
                            <View className="ico">
                                    <Image className="ico-image" src={this.props.mineiconchange==true?mine:mine}></Image>
                                </View>
                                <View className={this.props.minecolorchange==true?"desciption-change":"desciption"}>
                                        个人中心
                                </View>
                            </View>
                     </View>
            </View>
        )
    }
}