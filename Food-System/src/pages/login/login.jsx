import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import TopNav from "../../components/topnav/topnav"
import './login.scss'

import {connect} from '@tarojs/redux'
import {modifypwd,loginexits,login} from '../../action/manageruserinfo'

@connect(({ manageruserinfo }) => ({
    manageruserinfo
  }), (dispatch) => ({
    modifypwd(){
      dispatch(modifypwd()) 
    },
    loginexits(){
      dispatch(loginexits())
    },
    login(accout,pwd){
        dispatch(login(accout,pwd))
    }
  }))

export default class Login extends Component{
    config={
        navigationBarTitleText:"登录"
    }
    constructor(props){
        super(props)
        this.state={
            account:"",
            pwd:""
        }
    }

    componentWillMount () { 
        
    }
  
    componentDidMount () { }
  
    componentWillUnmount () {
      
     }
  
    componentDidShow () { }
  
    componentDidHide () {
       
     }

     //登录
     onLogin=()=>{
            
        //各种检查

        //通过登录
        Taro.showLoading({ title: '登录中...' , mask: true })
        this.props.login(this.state.account,this.state.pwd);
        if(Object.keys(this.props.manageruserinfo.userinfo).length!==0){
            Taro.hideLoading();
            Taro.redirectTo({url:'../mine/mine'})
        }
       
     }
     
     onAccountInput=(e)=>{
        let value=e.target.value;
        this.setState({
              account:value
        })
     }
     onPwdInput=(e)=>{
        let value=e.target.value;
        this.setState({
            pwd:value
      })
     }

     render(){
         return(
             <View className="container-login">
                  <TopNav isdisplaynagator={true} title="登录" isloginpage={true} isdisplaydaydate={false} ishavedate={false}></TopNav>
                   <View className="loginconetnt">
                        <View className="login-form">
                             <View className="form-input">
                                 <View className="account">
                                     <View className="account-icon">
                                        <AtIcon value='user' size='20' color='#999999'></AtIcon>
                                     </View>
                                     <View className="account-input">
                                         <Input placeholder="个人账号" type="text" onInput={this.onAccountInput.bind(this)}  value={this.state.account}></Input>
                                     </View>
                                 </View>
                                 <View className="pwd">
                                     <View className="pwd-icon">
                                        <AtIcon value='lock' size='20' color='#999999'></AtIcon>
                                     </View>
                                     <View className="pwd-input">
                                         <Input placeholder="密码" password={true}  onInput={this.onPwdInput.bind(this)} value={this.state.pwd}></Input>
                                     </View>
                                 </View>
                                 <View className="modify-pwd">
                                      修改密码
                                 </View>
                                 <View className="login-btn-view" onClick={this.onLogin}>
                                         立即登录
                                 </View>
                             </View>
                             <View className="tip-title">
                                <View className="contents">
                                   <View className="onecntent">
                                       <View className="phone-icon">
                                           <AtIcon value="phone" size="20" color="#eee"></AtIcon>
                                           &nbsp;&nbsp;客户服务热线：0510-88568485
                                       </View>
                                    </View>
                                    <View className="twocntent">
                                      <AtIcon value="help" size="20" color="#d9d8d8"></AtIcon>
                                       &nbsp;&nbsp;常见问题
                                    </View>
                                </View>
                             </View>
                        </View>
                   </View>
             </View>
         )
     }
}