import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'
import startoderdood from '../../asset/image/startoderdood.png'
import rules from '../../asset/image/rules.png'
import mymenu from '../../asset/image/mymenu.png'
import mine from '../../asset/image/mine.png'
import gonggao from '../../asset/image/gonggao.png'
import TopNav from "../../components/topnav/topnav"
import styles from './index.module.scss'


const tabList = [{ title: '早餐' }, { title: '中餐' }, { title: '晚餐' }]

export default class Index extends Component {

  config = {
    navigationBarTitleText:"首页"
  }
  constructor (props) {
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

  
  onNavigatoOrderfood=()=>{
        Taro.redirectTo({
          url:"../orderfood/orderfood" //跳转到报餐页面  0//代表是tabbar切换到这个页面的  1//代表不是tabbar切换到这个页面的 
        })
  }
  onRedircto=()=>{
    Taro.navigateTo({
      url:"../rules/rules"//跳转到规则页面  0//代表是tabbar切换到这个页面的  1//代表不是tabbar切换到这个页面的 
    })
  }
  onredirectomymenu=()=>{
    Taro.redirectTo({
      url:"../minemenu/minemenu"//跳转到我的菜单页面  0//代表是tabbar切换到这个页面的  1//代表不是tabbar切换到这个页面的 
    })
  }
  onredirecttonotice=()=>{
    Taro.navigateTo({
      url:"../notice/notice"//跳转到公告  0//代表是tabbar切换到这个页面的  1//代表不是tabbar切换到这个页面的 
    })
  }

  onredirecttomine=()=>{
    Taro.redirectTo({
      url:"../mine/mine"
    })
  }

  render () {
    return (
      <View className={styles.containerviewfirst} >

          <TopNav title="首页" isdisplaydaydate={false}  isdisplaynagator={false} ishavedate={false}></TopNav>
          <View className={styles.listcontent}> 
               <View className={styles.functionmenu}>
                   <View className={styles.firstrow} onClick={this.onNavigatoOrderfood}>
                         <Image className={styles.firstrowimage} src={startoderdood}></Image>
                   </View>
                   <View className={styles.nextrow}>
                        <View className={styles.nextrowone}>
                             <View className={styles.nextrowoneimae1} onClick={this.onredirectomymenu}>
                                <Image className={styles.mymenu} src={mymenu} mode="scaleToFill"></Image>
                             </View>
                             <View className={styles.nextrowoneimae2} onClick={this.onRedircto}>
                                <Image className={styles.rules} src={rules} mode="scaleToFill"></Image>
                             </View>
                        </View>
                        <View className={styles.nextrowtwo} >
                             <View className={styles.nextrowtwoimae1} onClick={this.onredirecttonotice}>
                                <Image className={styles.gonggao} src={gonggao} mode="scaleToFill"></Image>
                             </View>
                             <View className={styles.nextrowtwoimae2} onClick={this.onredirecttomine}>
                                <Image className={styles.mine} src={mine} mode="scaleToFill"></Image>
                             </View>
                        </View>
                   </View>
               </View>
          </View>
          
      </View>
    )
  }
}
