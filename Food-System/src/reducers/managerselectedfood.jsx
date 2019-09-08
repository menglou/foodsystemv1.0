import {ADDCHANGESELECTEDFOOD,MINUSCHANGESELECTEDFOOD,SELECTEDADDCHANGESELECTEDFOOD,SELECTEDMINUSCHANGESELECTEDFOOD,CLEARCHANGESELECTEDFOOD,ISDISPLAYSELECTEDFOODVIEW} from '../constants/managerselectedfood'

import foodlist from '../components/foodlist/foodlist'

const INITIAL_STATE={
    selectedfood:[],//已选择的菜单list集合
    listfood:foodlist,//菜单list集合
    foodcount:0,
    totalmoney:0.0,
    isdiaplaymealfood:false,//控制是否显示报餐导航
    floatisOpened:false
};


export default function managerselectedfood(state=INITIAL_STATE,action){
   
       switch(action.type){
           case ADDCHANGESELECTEDFOOD://列表中的加
                var index = action.index;//获取索引
                var count=state.listfood[index].count//获取数量
                state.listfood[index].count=state.listfood[index].count+1;
                state.listfood[index].Isdisplay=true;

                var ishave=false;
                if(state.selectedfood.length>0){
                    state.selectedfood.forEach(item=>{
                        if(item.id===state.listfood[index].id){
                            ishave=true;
                            item.count+1;
                        }
                    })
                    if(!ishave){
                        state.selectedfood.push(state.listfood[index])
                    }
                }
                else{
                    state.selectedfood.push(state.listfood[index])
                }

                //计算总价和总数量
                let price=parseFloat(state.listfood[index].price.replace("￥","")); 
                var result= onCalculateTotal(state.foodcount,state.totalmoney,1,price,"add")
                
               return{
                ...state,
                selectedfood:state.selectedfood,
                listfood: state.listfood,
                foodcount:result.foodcount,
                totalmoney:result.totalmoney,
                isdiaplaymealfood:true,
               }
           case MINUSCHANGESELECTEDFOOD://列表中的减

                var index = action.index;//获取索引
                var count=state.listfood[index].count;//获取数量
                state.listfood[index].count=state.listfood[index].count-1;
                 
                state.selectedfood.forEach(item=>{
                    if(item.id===state.listfood[index].id){
                           item.count-1;
                          if(item.count<1){
                           var returnaay= removeAaary(state.selectedfood,item);
                           state.selectedfood=returnaay;
                          }
                    }
                })
               
                var nowlistcount=count-1;
                
                if(nowlistcount<1){
                    state.listfood[index].Isdisplay=false;
                }

                //计算总价和总数量
                let prices=parseFloat(state.listfood[index].price.replace("￥","")); 
                var result= onCalculateTotal(state.foodcount,state.totalmoney,1,prices,"miuns")

                return{
                    ...state,
                    selectedfood:state.selectedfood,
                    listfood: state.listfood,
                    foodcount:result.foodcount,
                    totalmoney:result.totalmoney,
                    isdiaplaymealfood:result.isdiaplaymealfood,
                   }
           case CLEARCHANGESELECTEDFOOD://清除所有的

                console.log(foodlist);
                state.selectedfood.splice(0,state.selectedfood.length);//清除所有的已选择的

                 //暂时这样写
                // state.listfood.splice(0,state.listfood.length);
                 state.listfood.forEach(item=>{
                    // debugger;
                     if(item.count>0){
                         item.count=0;
                     }
                     if(item.Isdisplay==true){
                        item.Isdisplay=false
                     }
                 });
                
                return{
                    ...state,
                    selectedfood:state.selectedfood,//已选择的菜单list集合
                    listfood: state.listfood,//菜单list集合
                    foodcount:0,
                    totalmoney:0.0,
                    isdiaplaymealfood:false,//控制是否显示报餐导航
                    floatisOpened:false
                   }
           case SELECTEDADDCHANGESELECTEDFOOD://选中菜单中的加
               
                var index=action.index;
                state.selectedfood[index].count=state.selectedfood[index].count+1;

                state.listfood.forEach(item=>{
                    if(item.id===state.selectedfood[index].id){
                        item.count+1;
                    }
                })
                  //计算总价和总数量
                let pricess=parseFloat(state.selectedfood[index].price.replace("￥","")); 
                var result= onCalculateTotal(state.foodcount,state.totalmoney,1,pricess,"add")
                
                return{
                    ...state,
                    selectedfood:state.selectedfood,
                    listfood: state.listfood,
                    foodcount:result.foodcount,
                    totalmoney:result.totalmoney,
                    isdiaplaymealfood:true,
                   }
           case SELECTEDMINUSCHANGESELECTEDFOOD://选中菜单中的减
                var index=action.index;
                var price=state.selectedfood[index].price
                state.selectedfood[index].count=state.selectedfood[index].count-1;
                 
                //修改列表中的
                state.listfood.forEach(item=>{
                    if(item.id===state.selectedfood[index].id){
                        item.count-1;
                        if(item.count<1){
                            item.Isdisplay=false;
                        }
                    }
                })

                if(state.selectedfood.length>1){
                    if(state.selectedfood[index].count<1){
                        state.selectedfood.splice(index,1)
                    }
                }
                else{
                    if(state.selectedfood[index].count<1){
                        state.selectedfood.splice(index,1)
                    }
                }

                  //计算总价和总数量
                  let pricesss=parseFloat(price.replace("￥","")); 
                  var result= onCalculateTotal(state.foodcount,state.totalmoney,1,pricesss,"minus")

                return{
                    ...state,
                    selectedfood:state.selectedfood,
                    listfood: state.listfood,
                    foodcount:result.foodcount,
                    totalmoney:result.totalmoney,
                    isdiaplaymealfood:result.isdiaplaymealfood,
                    floatisOpened:result.floatisOpened,
                   }
            case ISDISPLAYSELECTEDFOODVIEW://控制是否显示展示已选菜品的model
                 if(action.isdiplay==='close'){
                     state.floatisOpened=false
                 }
                 else{
                    state.floatisOpened=true
                 }
             
                return{
                    ...state,
                    floatisOpened:state.floatisOpened
                }
                   default:
                return state;              
       }
}

function onCalculateTotal (allfoodcount,alltotalmoney,count,price,type){
    if(type=="add")
    {
      let moenyindex=String(price*count);
       
      return{
          foodcount:allfoodcount+count,
          totalmoney:alltotalmoney+parseFloat(moenyindex)
      }
    }
    else{
     
      let moenyindex=String(price*count);

      if(allfoodcount<=1){
          return{
            isdiaplaymealfood:false,
            floatisOpened:false,
            foodcount:allfoodcount-count,
            totalmoney:alltotalmoney-parseFloat(moenyindex)
          }
      }
      else{
          return{
            foodcount:allfoodcount-count,
            totalmoney:alltotalmoney-parseFloat(moenyindex),
            isdiaplaymealfood:true,
            floatisOpened:true
          }
      }
     
    }
}

/*删除数组中的某一个对象
_arr:数组
_obj:需删除的对象
*/
function removeAaary(_arr, _obj) {
    var length = _arr.length;
    for (var i = 0; i < length; i++) {
        if (_arr[i] == _obj) {
            if (i == 0) {
                _arr.shift(); //删除并返回数组的第一个元素
                return _arr;
            }
            else if (i == length - 1) {
                _arr.pop();  //删除并返回数组的最后一个元素
                return _arr;
            }
            else {
                _arr.splice(i, 1); //删除下标为i的元素
                return _arr;
            }
        }
    }
}