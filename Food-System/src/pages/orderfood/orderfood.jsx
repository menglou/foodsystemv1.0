import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'
import $ from 'jquery'
import icon from '../../asset/image/index.jpg'
import orderfoodsuccess from '../../asset/image/mealmodel.png'
import {AtTabs, AtTabsPane,AtIcon,AtBadge,AtFloatLayout,AtCurtain,AtButton,AtAvatar  } from "taro-ui"
import foodlist from "../../components/foodlist/foodlist"
import getNextPreDate from "../../util/getdate"
import Format from '../../util/formatdate'
import TabBar from '../../components/tabbar/tabbar'

import {connect} from '@tarojs/redux'
  
import  {addchangeselectedmeal,minuschangeselectedmeal,selectedaddchangeselectedmeal,selectedminuschangeselectedmeal,clearchangeselectedmeal,displayselectdfoodview} from '../../action/managerselectedfood'
import {modifypwd,loginexits} from '../../action/manageruserinfo'
import styles from './orderfood.module.scss'
import './orderfood.scss'




const date=getNextPreDate(new Date())
const tabList = [{ title: '早餐' }, { title: '中餐' }, { title: '晚餐' }]

@connect(({ manageruserinfo,managerselectedfood, }) => ({
  manageruserinfo,managerselectedfood
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

  componentDidMount () { 
  }

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

//列表中报餐加
 onAdd=(e)=>{
    //点击加号之前检查是否登录
     console.log(Object.keys(this.props.manageruserinfo.userinfo))
     if(Object.keys(this.props.manageruserinfo.userinfo).length===0){

        Taro.showModal({
          title:'提示',
          content:'您未登录，请登录'
        }).then(res=>{
           if(res.confirm){
            Taro.redirectTo({url:'../login/login'})
           }
           else if(res.cancel){
               //点击取消留在本页面
           }
        })
     }
     else{
      this.props.addchangeselectedmeal(e)
     }
 }


  //报餐
  onMealFood=()=>{

    this.setState({
      isdisplaymeelfoodsuccess:true
    },()=>{
     
    })
    //在报餐成功的情况下清空之前reducer中存的
    this.props.clearchangeselectedmeal();
   
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

  //禁止软键盘弹出
  onInputFoucs=()=>{
    document.activeElement.blur();
  }

  render () {
    return (
      <View className={styles.containerview} >

             <View className={styles.topnav}>
                <View className={styles.content}>
                  <View className={styles.nagator}>
                      <View className={styles.daohanwrrow}>
                           
                      </View>
                      <View className={styles.nagatortitle}>
                           报餐
                      </View>
                  </View>
                  <View className={styles.daychangeview}>
                      <View className={styles.daychangeviewcontent}>
                          <View className={styles.prevdayview} >
                            <View className={styles.prebtn} onClick={this.onPrevDay.bind(this,this.state.nochangedate)}>前一天</View>
                          </View>
                                  
                          <View className={styles.dayviews}>
                              <Picker mode="date" onChange={this.onDateChange}  >
                                      <View className={styles.picker}>
                                        <View className={styles.calendariconview} >
                                          <AtIcon value="calendar" size="20" color="#fff"></AtIcon>
                                        </View>
                                        <View className={styles.datedisplayview}>
                                             <Input value={this.state.data} type="text" onFocus={this.onInputFoucs} className={styles.inputdate}></Input>
                                        </View>
                                        <View className={styles.chevrondowniconview}>
                                          <AtIcon value="chevron-down" size="20" color="#fff"></AtIcon>
                                        </View>
                                      </View>
                                </Picker>         
                          </View>
                          <View className={styles.nextdayview}>
                            <View className={styles.nextbtn}  onClick={this.onNextDay.bind(this,this.state.nochangedate)}>后一天</View>
                      </View>
                    </View>
                 </View>
               </View>
               
          </View>
              
         
           

         <View className={styles.tabview}>
            <AtTabs current={this.state.current} tabList={tabList} onClick={this.changeTab.bind(this)}   >
                  <AtTabsPane current={this.state.current} index={0} >
                      {
                        this.props.managerselectedfood.listfood.map((food,i)=>
                        <View>
                              <View className={styles.fooddisplayview}  >
                                <View className={styles.imageview}>
                                     <Image src={food.image}  className={styles.foodimg}  ></Image> 
                                </View>
                                <View className={styles.fooddescription}>
                                    <View className={styles.foodname} key={food.id} data-index={i}>
                                    {food.name}
                                    </View>
                                    <View className={styles.foodprice} key={food.id} data-index={i}>
                                    {food.price}
                                    </View>
                                </View>
                                <View className={styles.btnview}>
                                    <View className={styles.jianview}>
                                        <View className={food.Isdisplay==true?styles.btnjian:styles.btnjianhidden}  key={food.id} data-index={i} onClick={this.props.minuschangeselectedmeal.bind(this,i)}>-</View>
                                    </View>
                                    <View className={food.Isdisplay==true?styles.countview:styles.countviewhidden}>
                                      <Text key={food.id} data-index={i} >{food.count}</Text>
                                    </View>
                                    <View className={styles.addview}>
                                        <View className={styles.btnadd} key={food.id} data-index={i} onClick={this.onAdd.bind(this,i)}>+</View>
                                    </View>
                              </View>
                              </View>
                              <View className={styles.line}/>
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

           
             <View className={this.props.managerselectedfood.isdiaplaymealfood==true?styles.mealfoodviewbottonnavr:styles.mealfoodviewbottonnavrhidden}>
             
                 <View className={styles.mealfoodcontent}>
                   <View className={styles.leftcontentview} onClick={this.props.displayselectdfoodview.bind(this,'display')}>
                         <View className={styles.bageicon}>
                         <AtBadge value={this.props.managerselectedfood.foodcount} maxValue={99}>
                            <Image src={icon}  className={styles.iconimage} onClick={this.props.displayselectdfoodview.bind(this,'display')}></Image>
                          </AtBadge>
                         </View>
                         <View className={styles.totalmoneyview}>
                                 <Text>￥{this.props.managerselectedfood.totalmoney}</Text>
                         </View>
                   </View>
                     
                   <View className={styles.submitbuyfoodview} onClick={this.onMealFood}>
                        报餐
                  </View>
                 </View>
           </View>
        
         
             <View className={this.props.managerselectedfood.floatisOpened==true?styles.xuanfu:styles.xuanfuhidden}>
                    <AtFloatLayout   isOpened={this.props.managerselectedfood.floatisOpened}  onClose={this.props.displayselectdfoodview.bind(this,'close')} scrollY={true}>
                        <View className={styles.floatviewcontainer}>
                            <View className={styles.onerowcontent}>
                                <View className={styles.leftonerowcontent}>
                                    已选菜品
                                </View>
                                <View className={styles.rightonerowcontent}>
                                    <View className={styles.deleiconview}>
                                        <AtIcon value="trash" size="20" color="#9f9f9f"></AtIcon>
                                    </View>
                                    <View className={styles.celarlistview} onClick={this.props.clearchangeselectedmeal}>
                                        清空
                                    </View>
                                </View>
                            </View>
                            <View className={styles.tworowcontent}>
                                    <AtTabsPane current={this.state.current} index={0} >
                                    {
                                        this.props.managerselectedfood.selectedfood.map((food,i)=>
                                        <View>
                                             <View className={styles.selectedfooddisplayview}  >
                                                <View className={styles.selectedfooddescription}>
                                                    <View className={styles.selectedfoodname} data-index={i} >
                                                       {food.name}
                                                    </View>
                                                    <View className={styles.selectedfoodprice} data-index={i} >
                                                      {food.price}
                                                    </View>
                                                </View>
                                                <View className={styles.selectedbtnview}>
                                                    <View className={styles.selectedjianview}>
                                                        <View className={styles.selectedtnjian} data-index={i}  onClick={this.props.selectedminuschangeselectedmeal.bind(this,i)}>-</View>
                                                    </View>
                                                    <View className={styles.selectedcountview}>
                                                      <Text >{food.count}</Text>
                                                    </View>
                                                    <View className={styles.selectedaddview}>
                                                        <View className={styles.selectedbtnadd} data-index={i} onClick={this.props.selectedaddchangeselectedmeal.bind(this,i)}>+</View>
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
                  <View className={styles.melfoodpopview}>
                     <View className={styles.mealfoodsuccessimageview}>
                        <Image className={styles.successimage} src={orderfoodsuccess}></Image>
                     </View>
                     <View className={styles.mealfoodsuccesbtnview}>
                       <Button  className={styles.foodsuccesbtn} onClick={this.onSeeMenu}>查看菜单</Button>
                     </View>
                  </View>
                </AtCurtain>
             </View>
            
      </View>
    )
  }
}
