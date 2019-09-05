import Taro, { Component } from '@tarojs/taro'

import Index from './pages/index'
import './app.scss'


import {Provider} from '@tarojs/redux'

import configStore from './store/index'

const store = configStore()



// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/orderfood/orderfood',
      'pages/minemenu/minemenu',
      'pages/orderdetail/orderdetail',
      'pages/mine/mine',
      'pages/rules/rules',
      'pages/login/login',
      'pages/notice/notice',
      'pages/noticedetail/noticedetail'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
        color:"#000000",
        selectedColor:"#fe292d",
        backgroundColor:"#eee",
        list:[
          {pagePath:'pages/index/index',text:"首页",iconPath:"./asset/image/home.png",selectedIconPath:"./asset/image/home_focus.png"},
          {pagePath:'pages/orderfood/orderfood',text:"报餐",iconPath:"./asset/image/canyin.jpg",selectedIconPath:"./asset/image/canyin.jpg"},
          {pagePath:'pages/minemenu/minemenu',text:"我的菜单",iconPath:"./asset/image/liebiao.jpg",selectedIconPath:"./asset/image/liebiao.jpg"},
          {pagePath:'pages/mine/mine',text:"个人中心",iconPath:"./asset/image/company.png",selectedIconPath:"./asset/image/company_focus.png"},
        ]
    }
  }

  componentDidMount () {
   
  }

  componentDidShow () {
   
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
             <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
 