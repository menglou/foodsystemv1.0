import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Picker,Input,Image} from '@tarojs/components'
import styles from './topnav.module.scss'
import { AtIcon } from 'taro-ui'

export default class TopNav extends Component{

    constructor(props){
        super(props);
        this.state={
            isdisplaynagator:false,
            pagecount:0
        }
    }
    
    componentWillMount () { 
       
      }
    
      componentDidMount () {
        
       }
    
      componentWillUnmount () {
        
       }
    
      componentDidShow () { 
       
      }
    
      componentDidHide () {
         
       }
       onNavigateBack=()=>{
         
        if(this.props.isloginpage==true){
             Taro.redirectTo({url:'../../pages/index/index'})
        }
        else{
            Taro.navigateBack({
                delta:1//倒退
           })
        }
    }
       

    render(){
        return(
           
                <View className={styles.topnavcomponent}>
                    <View className={this.props.ishavedate==true?styles.contentcomponent:styles.contentcomponentnodate}>
                       <View className={styles.nagatortitlecomponent}>
                                 {this.props.title}
                        </View>
                        <View className={styles.nagatorcomponent}>
                            <View className={styles.daohanwrrowcomponent}>
                               <View className={this.props.isdisplaynagator==true?styles.nagatornodhidden:styles.nagatordidden} onClick={this.onNavigateBack}>
                                  <AtIcon value="chevron-left" size="33"></AtIcon>
                               </View>
                            </View>
                           
                        </View>
                       
                        <View className={this.props.isdisplaydaydate==true?styles.dayview: styles.dayviewhidden}>
                                    <View className={styles.dayviewcontent}>
                                        <View className={styles.daydateview}>
                                            <View className={styles.daydate}>
                                                {this.props.date}
                                            </View>
                                            <View className={styles.mealtype}>
                                                 {this.props.mealtype}
                                            </View>
                                        </View>
                                        <View className={styles.orderstatus}>
                                           {this.props.orderstatus}
                                        </View>
                                    </View>
                            </View>
                        

                    </View>
                </View>
        )
    }
}