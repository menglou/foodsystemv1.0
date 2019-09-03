import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'
import './orderfood.scss'
import icon from '../../asset/image/index.jpg'
import orderfoodsuccess from '../../asset/image/mealmodel.png'
import {AtTabs, AtTabsPane,AtIcon,AtBadge,AtFloatLayout,AtCurtain,AtButton } from "taro-ui"
import foodlist from "../../components/foodlist/foodlist"
import getNextPreDate from "../../util/getdate"
import Format from '../../util/formatdate'
import TabBar from '../../components/tabbar/tabbar'

import {connect} from '@tarojs/redux'
  
import  {addchangeselectedmeal,minuschangeselectedmeal,selectedaddchangeselectedmeal,selectedminuschangeselectedmeal,clearchangeselectedmeal,displayselectdfoodview} from '../../action/managerselectedfood'



const date=getNextPreDate(new Date())
const tabList = [{ title: '早餐' }, { title: '中餐' }, { title: '晚餐' }]

@connect(({ managerselectedfood }) => ({
  managerselectedfood
}), (dispatch) => ({
  addchangeselectedmeal(e){
    dispatch(addchangeselectedmeal(e))
  },
  minuschangeselectedmeal(e){
    dispatch(minuschangeselectedmeal(e))
  },
  selectedaddchangeselectedmeal(e){
    dispatch(selectedaddchangeselectedmeal(e))
  },
  selectedminuschangeselectedmeal(e){
    dispatch(selectedminuschangeselectedmeal(e))
  },
  clearchangeselectedmeal(e){
    dispatch(clearchangeselectedmeal(e))
  },
  displayselectdfoodview(e){
    dispatch(displayselectdfoodview(e))
  }
}))


export default class OrderFood extends Component {

  config = {
    navigationBarTitleText:"报餐"
  }
  constructor (props) {
    super(props)
    this.state = {
      current: 0,
      data:date,//为了显示 某月某日  某星期
      nochangedate:new Date().toLocaleDateString(),
      isdisplaymeelfoodsuccess:false//用来控制是否显示报餐成功的模态框
    }
  }

  componentWillMount () {
    
   }

  componentDidMount () { }

  componentWillUnmount () {}

  componentDidShow () { }

  componentDidHide () {}

  //改变tab页
  changeTab (value) {
    this.setState({
      current: value
    })
  }

  /*日期的下拉列表改变*/
  onDateChange = e => {
   
    this.setState({
      data: getNextPreDate(this.onchangedateformat(e.detail.value,"down")),
      nochangedate:e.detail.value
    },()=>{})
  }

  // 需要先转换为Wed Jul 05 2017 13:50:11 GMT+0800 (中国标准时间)这种型式
  onchangedateformat=(date,type)=>{
    if(type=="down"){
      let Arr = date.split("-");
      let now = new Date(Number(Arr['0']), (Number(Arr['1']) - 1), Number(Arr['2']));
      return now;
    }
    else{
      var Arr=this.SpliteDateSring(date);
      let now = new Date(Number(Arr['0']), (Number(Arr['1']) - 1), Number(Arr['2']));
      if(type=="add"){
        now.setDate(now.getDate() + 1)
      }
      else {
        now.setDate(now.getDate() - 1)
      }
      return now;
    }
  }

  //后一天
  onNextDay(date){
    let data=getNextPreDate(this.onchangedateformat(date,"add"));
    this.setState({
      data:data,
      nochangedate:(this.onchangedateformat(date,"add")).toLocaleDateString()
    },()=>{})
  }

  //前一天
  onPrevDay(date){
    let data=getNextPreDate(this.onchangedateformat(date,"minus"));
    this.setState({
      data:data,
      nochangedate:(this.onchangedateformat(date,"minus")).toLocaleDateString()
    },()=>{})
  }

//分割日期
  SpliteDateSring=(date)=>{
    var Arr;
    if(date.search("-")==-1)
    {
       Arr = date.split("/");
    }
    else if(date.search("/")==-1){
       Arr = date.split("-");
    }
    return Arr;
  }

//判断字符是否为空的方法
 isEmpty=(obj)=>{
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}

  //报餐
  onMealFood=()=>{
    this.setState({
      isdisplaymeelfoodsuccess:true
    })
    //在报餐成功的情况下清空之前reducer中存的
    this.props.clearchangeselectedmeal()
  }

  //关闭订单成功的悬浮窗
  onClose=()=>{
    this.setState({
      isdisplaymeelfoodsuccess:false
    })

    Taro.redirectTo({
      url:"../orderfood/orderfood"
    })
  }
   
  //查看菜单
  onSeeMenu=()=>{
    Taro.navigateTo({
      url:"../minemenu/minemenu"
    })
  }

  render () {
    return (
      <View className='containerview' >

             <View className="topnav">
                <View className="content">
                  <View className="nagator">
                      <View className="daohanwrrow">
                           
                      </View>
                      <View className="nagatortitle">
                           报餐
                      </View>
                  </View>
                  <View className="daychange-view">
                      <View className="daychange-view-content">
                          <View className="prevday-view" >
                            <View className="pre-btn" onClick={this.onPrevDay.bind(this,this.state.nochangedate)}>前一天</View>
                          </View>
                                  
                          <View className="dayviews">
                              <Picker mode="date" onChange={this.onDateChange} className="sds" >
                                      <View className='picker'>
                                        <View className='calendariconview' >
                                          <AtIcon value="calendar" size="20" color="#fff"></AtIcon>
                                        </View>
                                        <View className="datedisplayview">
                                          <Input placeholder={this.state.data} value={this.state.data}></Input>
                                        </View>
                                        <View className='chevrondowniconview'>
                                          <AtIcon value="chevron-down" size="20" color="#fff"></AtIcon>
                                        </View>
                                      </View>
                                </Picker>         
                          </View>
                          <View className="nextday-view">
                            <View className="next-btn"  onClick={this.onNextDay.bind(this,this.state.nochangedate)}>后一天</View>
                      </View>
                    </View>
                 </View>
               </View>
               
          </View>
              
         
           

             <View className="tabview">
            <AtTabs current={this.state.current} tabList={tabList} onClick={this.changeTab.bind(this)}   >
                  <AtTabsPane current={this.state.current} index={0} >
                      {
                        this.props.managerselectedfood.listfood.map((food,i)=>
                        <View>
                              <View className="fooddisplayview"  >
                                <View className="image-view">
                                     <Image src={food.image}  className="food-img" ></Image> 
                                </View>
                                <View className="food-description">
                                    <View className="food-name" key={food.id} data-index={i}>
                                    {food.name}
                                    </View>
                                    <View className="food-price" key={food.id} data-index={i}>
                                    {food.price}
                                    </View>
                                </View>
                                <View className="btnview">
                                    <View className="jianview">
                                        <View className={food.Isdisplay==true?"btnjian":"btnjianhidden"}  key={food.id} data-index={i} onClick={this.props.minuschangeselectedmeal.bind(this,i)}>-</View>
                                    </View>
                                    <View className={food.Isdisplay==true?"countview":"countviewhidden"}>
                                      <Text key={food.id} data-index={i} >{food.count}</Text>
                                    </View>
                                    <View className="addview">
                                        <View className="btnadd" key={food.id} data-index={i} onClick={this.props.addchangeselectedmeal.bind(this,i)}>+</View>
                                    </View>
                              </View>
                              </View>
                              <View className="line"/>
                        </View>
                        )}
                  </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={1}>
                    <View style='height:auto;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={2}>
                    <View style='height:auto;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
                  </AtTabsPane>
            </AtTabs>
          </View>

           
             <View className={this.props.managerselectedfood.isdiaplaymealfood==true?"mealfood-view-bottonnavr":"mealfood-view-bottonnavr-hidden"}>
             
                 <View className="mealfood-content">
                   <View className="leftcontent-view" onClick={this.props.displayselectdfoodview.bind(this,'display')}>
                         <View className="bage-icon">
                         <AtBadge value={this.props.managerselectedfood.foodcount} maxValue={99}>
                            <Image src={icon} className="icon-image" onClick={this.props.displayselectdfoodview.bind(this,'display')}></Image>
                          </AtBadge>
                         </View>
                         <View className="totalmoney-view">
                                 <Text>￥{this.props.managerselectedfood.totalmoney}</Text>
                         </View>
                   </View>
                     
                   <View className="submitbuyfood-view" onClick={this.onMealFood}>
                        报餐
                  </View>
                 </View>
           </View>
        
         
             <View className={this.props.managerselectedfood.floatisOpened==true?"xuanfu":"xuanfu-hidden"}>
                    <AtFloatLayout   isOpened={this.props.managerselectedfood.floatisOpened}  onClose={this.props.displayselectdfoodview.bind(this,'close')} scrollY={true}>
                        <View className="float-view-container">
                            <View className="onerow-content">
                                <View className="left-onerow-content">
                                    已选菜品
                                </View>
                                <View className="right-onerow-content">
                                    <View className="deleiconview">
                                        <AtIcon value="trash" size="20" color="#9f9f9f"></AtIcon>
                                    </View>
                                    <View className="celarlist-view" onClick={this.props.clearchangeselectedmeal}>
                                        清空
                                    </View>
                                </View>
                            </View>
                            <View className="tworow-content">
                                    <AtTabsPane current={this.state.current} index={0} >
                                    {
                                        this.props.managerselectedfood.selectedfood.map((food,i)=>
                                        <View>
                                             <View className="selected-fooddisplayview"  >
                                                <View className="selected-food-description">
                                                    <View className="selected-food-name" data-index={i} >
                                                       {food.name}
                                                    </View>
                                                    <View className="selected-food-price" data-index={i} >
                                                      {food.price}
                                                    </View>
                                                </View>
                                                <View className="selected-btnview">
                                                    <View className="selected-jianview">
                                                        <View className="selected-tnjian" data-index={i}  onClick={this.props.selectedminuschangeselectedmeal.bind(this,i)}>-</View>
                                                    </View>
                                                    <View className="selected-countview">
                                                      <Text >{food.count}</Text>
                                                    </View>
                                                    <View className="selected-addview">
                                                        <View className="selected-btnadd" data-index={i} onClick={this.props.selectedaddchangeselectedmeal.bind(this,i)}>+</View>
                                                    </View>
                                                </View>
                                             </View>
                                        </View>
                                        )}
                                </AtTabsPane>
                                
                            </View>
                        </View>
                    </AtFloatLayout>
            </View>
             <View className={this.state.isdisplaymeelfoodsuccess==true?"":""}>
                <AtCurtain isOpened={this.state.isdisplaymeelfoodsuccess} onClose={this.onClose} >
                  <View className="melfoodpopview">
                     <View className="mealfoodsuccess-image-view">
                        <Image className="successimage" src={orderfoodsuccess}></Image>
                     </View>
                     <View className="mealfoodsuccesbtnview">
                       <Button  className="foodsuccesbtn" onClick={this.onSeeMenu}>查看菜单</Button>
                     </View>
                  </View>
                </AtCurtain>
             </View>
            
      </View>
    )
  }
}
