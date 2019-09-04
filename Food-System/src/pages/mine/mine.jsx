import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'
import './mine.scss'
import TopNav from '../../components/topnav/topnav'
import cxk from "../../asset/image/cxk.gif"
import { AtAvatar ,AtList, AtListItem } from 'taro-ui'

import {connect} from '@tarojs/redux'
import {modifypwd,loginexits} from '../../action/manageruserinfo'

@connect(({ manageruserinfo }) => ({
    manageruserinfo
  }), (dispatch) => ({
    modifypwd(){
      dispatch(modifypwd())
    },
    loginexits(){
      dispatch(loginexits())
    }
  }))
  

export default class Mine extends Component{
    config={
        navigationBarTitleText:"个人中心"
    }
    constructor(props){
        super(props)
    }

    componentWillMount () { 
        if(Object.keys( this.props.manageruserinfo.userinfo).length===0){
            Taro.reLaunch({url:"../login/login"})
        }
    }
  
    componentDidMount () { }
  
    componentWillUnmount () {
      
     }
  
    componentDidShow () { }
  
    componentDidHide () {
       
     }

     AtListClick=(e)=>{
       
        switch(e){
            case 'modifypwd':
                Taro.showModal({
                    title:'提示',
                    content:"暂未实现"
                }).then(re=>{
                    if(re.confirm){

                    }
                    else if(re.cancel){

                    }
                })
                break;
            case 'loginexits':
                    Taro.showModal({
                        title:'提示',
                        content:"暂未实现"
                    }).then(re=>{
                        if(re.confirm){
    
                        }
                        else if(re.cancel){
                            
                        }
                    })
                 break;      
        }
     }

     render(){
         return(
             <View className="container-mine">
                 <TopNav isdisplaynagator={false} title="个人中心" isdisplaydaydate={false} ishavedate={false}></TopNav>
                 <View className="mine-content">
                     <View className="mine-info">
                        <View className="mine-content-header">
                            <View className="mine-info-avatar">
                                <View className="mineavator-view">
                                   <AtAvatar image={this.props.manageruserinfo.userinfo.image}  size="small" circle={true}></AtAvatar>
                                </View>
                            </View>
                            <View className="mine-info-desc">
                                    <View className="mine-info-desc-name">
                                         {this.props.manageruserinfo.userinfo.name}
                                    </View>
                                    <View className="mine-info-desc-comp">
                                         {this.props.manageruserinfo.userinfo.decription}
                                    </View>
                            </View>
                        </View>
                        <View className="mine-content-list">
                            <AtList>
                                <AtListItem title='密码修改' arrow='right' onClick={this.AtListClick.bind(this,"modifypwd")} />
                            </AtList>
                            <AtList>
                                <AtListItem title='退出登录' arrow='right' onClick={this.AtListClick.bind(this,"loginexits")} />
                            </AtList>
                        </View>
                     </View>
                 </View>
             </View>
         )
     }
}
