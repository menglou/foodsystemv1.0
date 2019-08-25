import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'
import './index.scss'
import {AtNavBar,AtTabs, AtTabsPane,AtIcon,AtList,AtListItem,AtBadge,AtFloatLayout,AtActionSheet, AtActionSheetItem } from "taro-ui"
import foodlist from "../../components/foodlist/foodlist"
import getNextPreDate from "../../util/getdate"

const date=getNextPreDate(new Date())
const foodlists=foodlist

const tabList = [{ title: '早餐' }, { title: '中餐' }, { title: '晚餐' }]

export default class Index extends Component {

  config = {
      
  }
  constructor (props) {
    super(props)
    this.state = {
      current: 0,
      data:date,
      nochangedate:new Date().toLocaleDateString(),
      foodforlist:foodlists,//菜品列表
      isdiaplaymealfood:false,//控制是否显示饱餐导航
      foodcount:0,//总数量
      totalmoney:0.0,//总价钱
      floatisOpened:false//悬窗是否显示
    }
  }

  componentWillMount () { 
    Taro.pxTransform(86)
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  
  onNavigatoOrderfood=()=>{
        Taro.navigateTo({
          url:"../orderfood/orderfood"
        })
  }

  render () {
    return (
      <View className='containerview-first' >

          <View className="topnav-first">
                <View className="content-first">
                  <View className="nagator-first">
                      <View className="daohanwrrow-first">
                           
                      </View>
                      <View className="nagatortitle-first">
                           首页
                      </View>
                  </View>
                  
                </View>
          </View>
          <View className="listcontent"> 
               <View className="functionmenu">
                   <View className="firstrow" onClick={this.onNavigatoOrderfood}>
                        
                   </View>
                   <View className="nextrow">
                        <View className="nextrow-one">
                             <View className="nextrow-one-imae1"></View>
                             <View className="nextrow-one-imae2"></View>
                        </View>
                        <View className="nextrow-two">
                             <View className="nextrow-two-imae1"></View>
                             <View className="nextrow-two-imae2"></View>
                        </View>
                   </View>
               </View>
          </View>
      </View>
    )
  }
}
