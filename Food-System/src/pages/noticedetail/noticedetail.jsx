import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'
import {AtList, AtListItem} from "taro-ui"
import TopNav from "../../components/topnav/topnav"
import './noticedetail.scss'

export default class NoticeDetail extends Component{
    config={
        navigationBarTitleText:"公告详情"
    }
    constructor(props){
        super(props)
    }

    componentWillMount () { 
        
    }
  
    componentDidMount () { }
  
    componentWillUnmount () {
      
     }
  
    componentDidShow () { }
  
    componentDidHide () {
       
     }

     onSeeNoticeDetail=()=>{
         
     }

     render(){
         return(
             <View className="container-noticedetail">
                   <TopNav  title="公告" isdisplaydaydate={false} isdisplaynagator={true} ></TopNav>
                   <View className="noticedetail-content">
                            <View className='at-article'>
                                <View className='at-article__h1 title'>
                                    报餐规则调整通知
                                </View>
                                <View className='at-article__info datetime'>
                                    2017-05-07 8:00
                                </View>
                                <View className='at-article__content'>
                                    <View className='at-article__section'>
                                        <View className='at-article__p noticedetailcontent'>
                                            这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                        </View>
                                   </View>
                                </View>
                            </View>
                  </View>
           </View>
         )
     }
}