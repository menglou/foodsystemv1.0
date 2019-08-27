import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View, Text, Button, Picker, Input, Image } from '@tarojs/components';
import './orderfood.scss';
import icon from '../../asset/image/index.jpg';
import { AtTabs, AtTabsPane, AtIcon, AtBadge, AtFloatLayout, AtCurtain } from "taro-ui";
import foodlist from "../../components/foodlist/foodlist";
import getNextPreDate from "../../util/getdate";

const date = getNextPreDate(new Date());
const foodlists = foodlist;
const selectfoodlistparam = [];
const tabList = [{ title: '早餐' }, { title: '中餐' }, { title: '晚餐' }];

export default class OrderFood extends Component {

  config = {
    navigationBarTitleText: "报餐"
  };
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      data: date,
      nochangedate: new Date().toLocaleDateString(),
      foodforlist: foodlists, //菜品列表
      selectedfoodforlist: [], //已选择菜品
      isdiaplaymealfood: false, //控制是否显示报餐导航
      foodcount: 0, //总数量
      totalmoney: 0.0, //总价钱
      floatisOpened: false, //控制已选择菜品悬窗是否显示,
      isdisplaymeelfoodsuccess: false //用来控制是否显示报餐成功的模态框
    };
  }

  componentWillMount() {
    //初始化数据
    selectfoodlistparam.splice(0, selectfoodlistparam.length);
    var inistafoodforlist = this.state.foodforlist;
    for (let i = 0; i < inistafoodforlist.length; i++) {
      if (inistafoodforlist[i].count > 0) {
        inistafoodforlist[i].count = 0;
      }
      if (inistafoodforlist[i].Isdisplay == true) {
        inistafoodforlist[i].Isdisplay = false;
      }
    }
    this.setState({
      foodforlist: inistafoodforlist
    }, () => {});
    console.log(this.state.foodlists);
    console.log(this.state.foodforlist);
    console.log(this.state.selectedfoodforlist);
    console.log(this.state.foodcount);
    console.log(this.state.totalmoney);
    console.log(this.state.selectfoodlistparam);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  //改变tab页
  changeTab(value) {
    this.setState({
      current: value
    });
  }

  onDateChange = e => {
    this.setState({
      data: getNextPreDate(this.onchangedateformat(e.detail.value, "down")),
      nochangedate: e.detail.value
    }, () => {});
  };

  // 需要先转换为Wed Jul 05 2017 13:50:11 GMT+0800 (中国标准时间)这种型式
  onchangedateformat = (date, type) => {

    if (type == "add") {
      let Arr = date.split("/");
      let now = new Date(Number(Arr['0']), Number(Arr['1']) - 1, Number(Arr['2']));
      now.setDate(now.getDate() + 1);
      return now;
    }
    if (type == "jian") {
      let Arr = date.split("/");
      let now = new Date(Number(Arr['0']), Number(Arr['1']) - 1, Number(Arr['2']));
      now.setDate(now.getDate() - 1);
      return now;
    }
    if (type == "down") {
      let Arr = date.split("-");
      let now = new Date(Number(Arr['0']), Number(Arr['1']) - 1, Number(Arr['2']));
      return now;
    }
  };

  //前一天
  onNextDay(date) {
    let data = getNextPreDate(this.onchangedateformat(date, "add"));
    this.setState({
      data: data,
      nochangedate: this.onchangedateformat(date, "add").toLocaleDateString()
    }, () => {});
  }

  //后一天
  onPrevDay(date) {
    let data = getNextPreDate(this.onchangedateformat(date, "jian"));
    this.setState({
      data: data,
      nochangedate: this.onchangedateformat(date, "jian").toLocaleDateString()
    }, () => {});
  }

  //判断字符是否为空的方法
  isEmpty = obj => {
    if (typeof obj == "undefined" || obj == null || obj == "") {
      return true;
    } else {
      return false;
    }
  };

  //加
  onAdd = e => {

    var index = e.target.dataset.index; //获取索引
    var foodforlist = this.state.foodforlist; //获取菜品列表信息
    var count = foodforlist[index].count; //获取当前索引的count值

    foodforlist[index].count++; //点击加按钮数量加一个
    foodforlist[index].Isdisplay = true; //设置数量和减按钮是否显示


    //已选择的菜品 
    var ishave = 0;
    if (this.state.selectedfoodforlist.length >= 1) {
      this.state.selectedfoodforlist.forEach(item => {

        if (item.id === foodforlist[index].id) {
          ishave = 1;
        }
      });

      if (ishave === 0) {
        selectfoodlistparam.push(foodforlist[index]);
        this.setState({
          selectedfoodforlist: selectfoodlistparam
        }, () => {});
      }
    } else {
      selectfoodlistparam.push(foodforlist[index]);
      this.setState({
        selectedfoodforlist: selectfoodlistparam
      }, () => {});
    }

    this.setState({
      foodforlist: foodforlist,
      isdiaplaymealfood: true
    }, () => {});

    let price = parseFloat(foodforlist[e.currentTarget.dataset.index].price.replace("￥", ""));

    this.oncalculateTotal(1, price, "add");
  };
  //减
  onMinus = e => {
    var index = e.target.dataset.index;
    var foodforlist = this.state.foodforlist;
    var count = foodforlist[index].count;
    foodforlist[index].count--;
    var countnow = count - 1;

    if (countnow < 1) //判断如果当前的数量小于1 隐藏减号按钮和显示数量的text
      {
        foodforlist[index].Isdisplay = false; //用来控制是否显示减号按钮和显示数量的text（true显示 flase不显示）

        //检查已选择的菜单(如果菜单中的某个数量小于1了。那么对应的已选择的菜单中应该移除这个菜品)
        this.state.selectedfoodforlist.forEach(item => {
          if (item.id === foodforlist[index].id) {

            var returnarry = this.removeAaary(selectfoodlistparam, foodforlist[index]);
            this.setState({
              selectedfoodforlist: returnarry
            }, () => {});
          }
        });

        this.setState({
          foodforlist: foodforlist
        }, () => {});
      } else {

      //菜品列表中某个菜的数量减一，那么相对应的已选择的菜品列表中这个菜的数量也相对应的减一


      this.setState({
        foodforlist: foodforlist
      }, () => {});
    }
    let price = parseFloat(foodforlist[e.currentTarget.dataset.index].price.replace("￥", ""));

    this.oncalculateTotal(1, price, "minus");
  };

  //计算总价钱和总个数
  oncalculateTotal = (count, price, type) => {

    if (type == "add") {
      let moenyindex = String(price * count);

      this.setState({
        foodcount: this.state.foodcount + count,
        totalmoney: this.state.totalmoney + parseFloat(moenyindex)
      }, () => {});
    } else {

      let moenyindex = String(price * count);
      this.setState({
        foodcount: this.state.foodcount - count,
        totalmoney: this.state.totalmoney - parseFloat(moenyindex)
      }, () => {
        if (this.state.foodcount < 1) {
          this.setState({
            isdiaplaymealfood: false
          }, () => {});
        }
      });
    }
  };

  /*删除数组中的某一个对象
  _arr:数组
  _obj:需删除的对象
  */
  removeAaary = (_arr, _obj) => {
    var length = _arr.length;
    for (var i = 0; i < length; i++) {
      if (_arr[i] == _obj) {
        if (i == 0) {
          _arr.shift(); //删除并返回数组的第一个元素
          return _arr;
        } else if (i == length - 1) {
          _arr.pop(); //删除并返回数组的最后一个元素
          return _arr;
        } else {
          _arr.splice(i, 1); //删除下标为i的元素
          return _arr;
        }
      }
    }
  };

  //设置显示悬浮窗
  ondisplayfloatview = () => {
    this.setState({
      floatisOpened: true
    }, () => {});
  };

  oncancelfloatview = () => {
    this.setState({
      floatisOpened: false
    }, () => {});
  };

  //已选择的加
  onSelectedAdd = e => {

    //1在已选择的菜品数组中对应数量加1

    //2在展示列表中找到对应的商品数量也加一

    var index = e.target.dataset.index;
    var selectedfoodlist = this.state.selectedfoodforlist;
    selectedfoodlist[index].count++;
    var id = selectedfoodlist[index].id;
    this.setState({
      selectedfoodforlist: selectedfoodlist
    });

    var foodforlist = this.state.foodforlist;
    foodforlist.forEach(item => {
      if (item.id === id) {
        item.count + 1;
      }

      this.setState({
        foodforlist: foodforlist
      });
    });

    let price = parseFloat(selectedfoodlist[e.currentTarget.dataset.index].price.replace("￥", ""));

    this.oncalculateTotal(1, price, "add");
  };
  //已选择的减
  onSelectedMinus = e => {
    //如果在已选择的列表把某个菜品的数量减到小于1了，那么列表中要移除这个菜品  相对应的菜品列表中也要隐藏减号按钮和显示数量的文本
    var index = e.target.dataset.index;
    var selectedfoodlist = this.state.selectedfoodforlist;

    var caculatemoneyfoodlistselected = this.state.selectedfoodforlist;
    var selectedfoodlistforcaculatemoney = this.state.selectedfoodforlist; //用来计算价格的不能变


    var count = selectedfoodlist[index].count;
    var id = selectedfoodlist[index].id;
    selectedfoodlist[index].count--;
    var nowcount = count - 1;

    if (selectedfoodlist.length > 1) {

      if (nowcount < 1) {

        var fooslist = this.state.foodforlist;
        fooslist.forEach(item => {
          if (item.id === id) {
            item.count - 1;
          }
          if (item.count < 1) {
            item.Isdisplay = false;
          }
        });

        let price = parseFloat(selectedfoodlist[e.currentTarget.dataset.index].price.replace("￥", ""));
        this.oncalculateTotal(1, price, "minus");

        selectedfoodlist.splice(index, 1);

        this.setState({
          foodforlist: fooslist,
          selectedfoodforlist: selectedfoodlist
        });
      } else {
        var fooslist = this.state.foodforlist;
        fooslist.forEach(item => {
          if (item.id === id) {
            item.count - 1;
          }
        });
        this.setState({
          foodforlist: fooslist,
          selectedfoodforlist: selectedfoodlist
        });

        let price = parseFloat(selectedfoodlist[e.currentTarget.dataset.index].price.replace("￥", ""));
        this.oncalculateTotal(1, price, "minus");
      }
    } else {
      if (nowcount < 1) {

        var fooslist = this.state.foodforlist;
        fooslist.forEach(item => {
          if (item.id === id) {
            item.count - 1;
          }
          if (item.count < 1) {
            item.Isdisplay = false;
          }
        });

        let price = parseFloat(selectedfoodlist[e.currentTarget.dataset.index].price.replace("￥", ""));
        this.oncalculateTotal(1, price, "minus");

        selectedfoodlist.splice(index, 1);
        this.setState({
          foodforlist: fooslist,
          selectedfoodforlist: selectedfoodlist,
          floatisOpened: false,
          isdiaplaymealfood: false,
          totalmoney: 0.0,
          foodcount: 0
        });
      } else {

        var fooslist = this.state.foodforlist;
        fooslist.forEach(item => {
          if (item.id === id) {
            item.count - 1;
          }
          if (item.count < 1) {
            item.Isdisplay = false;
          }
        });
        this.setState({
          foodforlist: fooslist,
          selectedfoodforlist: selectedfoodlist
        });

        let price = parseFloat(selectedfoodlist[e.currentTarget.dataset.index].price.replace("￥", ""));
        this.oncalculateTotal(1, price, "minus");
      }
    }
  };

  //清空已选择的菜品
  onClearSelectedFood = () => {
    //1.把应选择的菜品的数组清空

    //2.把菜品列表中选择的菜品重置，重置成初始化模式（包括数量以及总金额，总数量）

    //初始化数据
    //selectfoodlistparam=[];
    selectfoodlistparam.splice(0, selectfoodlistparam.length);
    console.log("woshi:");

    var inistafoodforlist = this.state.foodforlist;
    for (let i = 0; i < inistafoodforlist.length; i++) {
      if (inistafoodforlist[i].count > 0) {
        inistafoodforlist[i].count = 0;
      }
      if (inistafoodforlist[i].Isdisplay == true) {
        inistafoodforlist[i].Isdisplay = false;
      }
    }
    this.setState({
      foodforlist: inistafoodforlist,
      selectedfoodforlist: [],
      floatisOpened: false,
      totalmoney: 0.0,
      foodcount: 0,
      isdiaplaymealfood: false
    }, () => {
      console.log(this.state.selectedfoodforlist);
    });
  };

  //报餐
  onMealFood = () => {
    this.setState({
      isdisplaymeelfoodsuccess: true
    });
  };

  //关闭订单成功的悬浮窗
  onClose = () => {
    this.setState({
      isdisplaymeelfoodsuccess: false
    });

    Taro.redirectTo({
      url: "../orderfood/orderfood"
    });
  };

  //查看菜单
  onSeeMenu = () => {
    Taro.navigateTo({
      url: "../minemenu/minemenu"
    });
  };

  render() {
    return <View className="containerview">

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
                          <View className="prevday-view">
                            <View className="pre-btn" onClick={this.onPrevDay.bind(this, this.state.nochangedate)}>前一天</View>
                          </View>
                                  
                          <View className="dayviews">
                              <Picker mode="date" onChange={this.onDateChange} className="sds">
                                      <View className="picker">
                                        <View className="calendariconview">
                                          <AtIcon value="calendar" size="20" color="#fff"></AtIcon>
                                        </View>
                                        <View className="datedisplayview">
                                          <Input placeholder={this.state.data} value={this.state.data}></Input>
                                        </View>
                                        <View className="chevrondowniconview">
                                          <AtIcon value="chevron-down" size="20" color="#fff"></AtIcon>
                                        </View>
                                      </View>
                                </Picker>         
                          </View>
                          <View className="nextday-view">
                            <View className="next-btn" onClick={this.onNextDay.bind(this, this.state.nochangedate)}>后一天</View>
                      </View>
                    </View>
                 </View>
               </View>
               
          </View>
              
         
           

          <View className="tabview">
            <AtTabs current={this.state.current} tabList={tabList} onClick={this.changeTab.bind(this)}>
                  <AtTabsPane current={this.state.current} index={0}>
                      {this.state.foodforlist.map((food, i) => <View>
                              <View className="fooddisplayview">
                                <View className="image-view">
                                     <Image src={food.image} className="food-img"></Image> 
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
                                        <View className={food.Isdisplay == true ? "btnjian" : "btnjianhidden"} key={food.id} data-index={i} onClick={this.onMinus}>-</View>
                                    </View>
                                    <View className={food.Isdisplay == true ? "countview" : "countviewhidden"}>
                                      <Text key={food.id} data-index={i}>{food.count}</Text>
                                    </View>
                                    <View className="addview">
                                        <View className="btnadd" key={food.id} data-index={i} onClick={this.onAdd}>+</View>
                                    </View>
                              </View>
                              </View>
                              <View className="line" />
                        </View>)}
                  </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={1}>
                    <View style="height:auto;background-color: #FAFBFC;text-align: center;">标签页二的内容</View>
                  </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={2}>
                    <View style="height:auto;background-color: #FAFBFC;text-align: center;">标签页三的内容</View>
                  </AtTabsPane>
            </AtTabs>
          </View>

           
           <View className={this.state.isdiaplaymealfood == true ? "mealfood-view-bottonnavr" : "mealfood-view-bottonnavr-hidden"}>
             
                 <View className="mealfood-content">
                   <View className="leftcontent-view" onClick={this.ondisplayfloatview}>
                         <View className="bage-icon">
                         <AtBadge value={this.state.foodcount} maxValue={99}>
                            <Image src={icon} className="icon-image" onClick={this.ondisplayfloatview}></Image>
                          </AtBadge>
                         </View>
                         <View className="totalmoney-view">
                                 <Text>￥{this.state.totalmoney}</Text>
                         </View>
                   </View>
                     
                   <View className="submitbuyfood-view" onClick={this.onMealFood}>
                        报餐
                  </View>
                 </View>
           </View>
        
           
           {/* <AtActionSheet isOpened={this.state.floatisOpened} onClose={this.oncancelfloatview}>
              <AtActionSheetItem>
                按钮一
              </AtActionSheetItem>
              <AtActionSheetItem>
                按钮二
              </AtActionSheetItem>
            </AtActionSheet> */}
            <View className={this.state.floatisOpened == true ? "xuanfu" : "xuanfu-hidden"}>
                    <AtFloatLayout isOpened={this.state.floatisOpened} onClose={this.oncancelfloatview} scrollY={true}>
                        <View className="float-view-container">
                            <View className="onerow-content">
                                <View className="left-onerow-content">
                                    已选菜品
                                </View>
                                <View className="right-onerow-content">
                                    <View className="deleiconview">
                                        <AtIcon value="trash" size="20" color="#9f9f9f"></AtIcon>
                                    </View>
                                    <View className="celarlist-view" onClick={this.onClearSelectedFood}>
                                        清空
                                    </View>
                                </View>
                            </View>
                            <View className="tworow-content">
                                    <AtTabsPane current={this.state.current} index={0}>
                                    {this.state.selectedfoodforlist.map((food, i) => <View>
                                             <View className="selected-fooddisplayview">
                                                <View className="selected-food-description">
                                                    <View className="selected-food-name" data-index={i}>
                                                       {food.name}
                                                    </View>
                                                    <View className="selected-food-price" data-index={i}>
                                                      {food.price}
                                                    </View>
                                                </View>
                                                <View className="selected-btnview">
                                                    <View className="selected-jianview">
                                                        <View className="selected-tnjian" data-index={i} onClick={this.onSelectedMinus}>-</View>
                                                    </View>
                                                    <View className="selected-countview">
                                                      <Text>{food.count}</Text>
                                                    </View>
                                                    <View className="selected-addview">
                                                        <View className="selected-btnadd" data-index={i} onClick={this.onSelectedAdd}>+</View>
                                                    </View>
                                                </View>
                                             </View>
                                        </View>)}
                                </AtTabsPane>
                                
                            </View>
                        </View>
                    </AtFloatLayout>
            </View>
             <View className={this.state.isdisplaymeelfoodsuccess == true ? "" : ""}>
                <AtCurtain isOpened={this.state.isdisplaymeelfoodsuccess} onClose={this.onClose}>
                  <View className="melfoodpopview">
                     <View className="mealfoodsuccesbtnview">
                       <Button className="foodsuccesbtn" onClick={this.onSeeMenu}>查看菜单</Button>
                     </View>
                  </View>
                </AtCurtain>
             </View>
            
      </View>;
  }
}