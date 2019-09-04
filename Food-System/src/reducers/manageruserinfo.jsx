import {MODIFYPWD,LOGINEXITS,LOGIN} from '../constants/manageruserinfo'

import cxk from '../asset/image/cxk.gif'
 
const INITIAL_STATE={
       userinfo:{
        //    image:cxk,
        //    name:'周琦',
        //    decription:'你发球像极了周奇--波兰篮球运动员'
       }
}

export default function manageruserinfo(state=INITIAL_STATE,action){
          switch(action.type){
              case MODIFYPWD://修改密码
                  return{
                      ...state,
                      userinfo:state.userinfo
                  }
              case LOGINEXITS://退出登录
                  return{
                      ...state,
                      userinfo:state.userinfo
                  }
               case LOGIN://登录保存用户信息
                  
                  var account=action.account;//账号
                  var pwd=action.pwd;//密码
                  //调用接口登录
                   
                  state.userinfo.image=cxk;
                  state.userinfo.name='周琦';
                  state.userinfo.decription='波兰著名篮球运动员';
                  
                  return{
                      ...state,
                      userinfo:state.userinfo
                  }
                 
                  default:
                      return state
          }
}