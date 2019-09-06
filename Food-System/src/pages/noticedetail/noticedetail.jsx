import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'


import TopNav from "../../components/topnav/topnav"

import styles from './noticedetail.module.scss'

import 'taro-ui/dist/style/components/article.scss'
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
             <View className={styles.containernoticedetail}>
                   <TopNav  title="公告" isdisplaydaydate={false} isdisplaynagator={true} ishavedate={false} ></TopNav>
                   <View className={styles.noticedetailcontent}>
                            <View className='at-article'>
                                <View className='at-article__h1' >
                                    报餐规则调整通知
                                </View>
                                <View className='at-article__info ' >
                                    2017-05-07 8:00
                                </View>
                                <View className='at-article__content'>
                                    <View className='at-article__section'>
                                        <View className=".at-article__p">
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