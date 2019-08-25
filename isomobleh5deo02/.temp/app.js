import Taro, { Component } from "@tarojs/taro-h5";

import "taro-ui/dist/style/index.scss";
import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import Nerv from "nervjs";
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis(_taroHistory);
class App extends Component {
  state = {
    __tabs: {
      color: "#000000",
      selectedColor: "#fe292d",
      backgroundColor: "#eee",
      list: [{ pagePath: "/pages/index/index", text: "首页", iconPath: require("././asset/image/home.png"), selectedIconPath: require("././asset/image/home_focus.png") }, { pagePath: "/pages/orderfood/orderfood", text: "报餐", iconPath: require("././asset/image/canyin.jpg"), selectedIconPath: require("././asset/image/canyin.jpg") }, { pagePath: "/pages/minemenu/minemenu", text: "我的菜单", iconPath: require("././asset/image/liebiao.jpg"), selectedIconPath: require("././asset/image/liebiao.jpg") }, { pagePath: "/pages/minemenu/minemenu", text: "个人中心", iconPath: require("././asset/image/company.png"), selectedIconPath: require("././asset/image/company_focus.png") }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };


  config = {
    pages: ["/pages/index/index", "/pages/orderfood/orderfood", "/pages/minemenu/minemenu"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: { color: "#000000", selectedColor: "#fe292d", backgroundColor: "#eee", list: [{ pagePath: "/pages/index/index", text: "首页", iconPath: require("././asset/image/home.png"), selectedIconPath: require("././asset/image/home_focus.png") }, { pagePath: "/pages/orderfood/orderfood", text: "报餐", iconPath: require("././asset/image/canyin.jpg"), selectedIconPath: require("././asset/image/canyin.jpg") }, { pagePath: "/pages/minemenu/minemenu", text: "我的菜单", iconPath: require("././asset/image/liebiao.jpg"), selectedIconPath: require("././asset/image/liebiao.jpg") }, { pagePath: "/pages/minemenu/minemenu", text: "个人中心", iconPath: require("././asset/image/company.png"), selectedIconPath: require("././asset/image/company_focus.png") }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <TabbarContainer>

                    <TabbarPanel>
                      
              <Router history={_taroHistory} routes={[{
          path: '/pages/index/index',
          componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
          isIndex: true
        }, {
          path: '/pages/orderfood/orderfood',
          componentLoader: () => import( /* webpackChunkName: "orderfood_orderfood" */'./pages/orderfood/orderfood'),
          isIndex: false
        }, {
          path: '/pages/minemenu/minemenu',
          componentLoader: () => import( /* webpackChunkName: "minemenu_minemenu" */'./pages/minemenu/minemenu'),
          isIndex: false
        }]} customRoutes={{}} />
              
                    </TabbarPanel>

                    <Tabbar conf={this.state.__tabs} homePage="pages/index/index" router={Taro} />

                  </TabbarContainer>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}

Nerv.render(<App />, document.getElementById('app'));