import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'
import './mine.scss'
import TopNav from '../../components/topnav/topnav'
import cxk from "../../asset/image/cxk.gif"
import { AtAvatar ,AtList, AtListItem } from 'taro-ui'

export default class Mine extends Component{
    config={
        navigationBarTitleText:"个人中心"
    }

    componentWillMount () { 
        
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
                 <TopNav isdisplaynagator={false} title="个人中心" isdisplaydaydate={false}></TopNav>
                 <View className="mine-content">
                     <View className="mine-info">
                        <View className="mine-content-header">
                            <View className="mine-info-avatar">
                                <View className="mineavator-view">
                                   <AtAvatar image={cxk}  size="small" circle={true}></AtAvatar>
                                </View>
                            </View>
                            <View className="mine-info-desc">
                                    <View className="mine-info-desc-name">
                                         菜虚鲲
                                    </View>
                                    <View className="mine-info-desc-comp">
                                          NBA中国形象大使
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
