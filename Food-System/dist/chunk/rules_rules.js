(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"148":function(e,t,n){},"167":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var a=n(0),o=n(2),r=n(16),i=n(116),c=n(117),l=n(92),s=(n(148),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var u=function(e){function Rules(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Rules);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Rules.__proto__||Object.getPrototypeOf(Rules)).call(this,e));return t.config={"navigationBarTitleText":"规则"},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Rules,o["a"].Component),s(Rules,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){return a.j.createElement(r.a,{"className":"container-rule"},a.j.createElement(l.a,{"title":"规则","isdisplaydaydate":!1,"isdisplaynagator":!0,"ishavedate":!1}),a.j.createElement(r.a,{"className":"rules-content"},a.j.createElement(r.a,{"className":"rule-content-detial"},a.j.createElement(i.a,null,a.j.createElement(c.a,{"className":"ruleitem","title":"报餐规则","extraText":"只可预定第二天及以后的菜品"}),a.j.createElement(c.a,{"className":"ruleitem","title":"早餐报餐时间","extraText":"当日早上5点前"}),a.j.createElement(c.a,{"className":"ruleitem","title":"早餐就餐时间","extraText":"7:00-8:00"}),a.j.createElement(c.a,{"className":"ruleitem","title":"午餐报餐时间","extraText":"当日早上9点前"}),a.j.createElement(c.a,{"className":"ruleitem","title":"午餐就餐时间","extraText":"11:00-13:00"}),a.j.createElement(c.a,{"className":"ruleitem","title":"晚餐报餐时间","extraText":"当日早上15点前"}),a.j.createElement(c.a,{"className":"ruleitem","title":"晚餐就餐时间","extraText":"17:00-19:00"})),a.j.createElement(r.a,{"className":"tipview"},a.j.createElement(r.a,{"className":"tipicon at-icon at-icon-alert-circle"}," 餐厅管理人员可在管理后台设置就餐规则")))))}}]),Rules}()},"92":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),o=n(2),r=n(16),i=(n(93),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var c=function(e){function TopNav(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TopNav);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(TopNav.__proto__||Object.getPrototypeOf(TopNav)).call(this,e));return t.onNavigateBack=function(){1==t.props.isloginpage?o.a.redirectTo({"url":"../../pages/index/index"}):o.a.navigateBack({"delta":1})},t.state={"isdisplaynagator":!1,"pagecount":0},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TopNav,o["a"].Component),i(TopNav,[{"key":"componentWillMount","value":function componentWillMount(){}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){return a.j.createElement(r.a,{"className":"topnav-component"},a.j.createElement(r.a,{"className":1==this.props.ishavedate?"content-component":"content-component-nodate"},a.j.createElement(r.a,{"className":"nagatortitle-component"},this.props.title),a.j.createElement(r.a,{"className":"nagator-component"},a.j.createElement(r.a,{"className":"daohanwrrow-component"},a.j.createElement(r.a,{"className":1==this.props.isdisplaynagator?"at-icon at-icon-chevron-left":"nagator-didden","onClick":this.onNavigateBack}))),a.j.createElement(r.a,{"className":1==this.props.isdisplaydaydate?"day-view":"day-view-hidden"},a.j.createElement(r.a,{"className":"day-view-content"},a.j.createElement(r.a,{"className":"day-date-view"},a.j.createElement(r.a,{"className":"day-date"},this.props.date),a.j.createElement(r.a,{"className":"mealtype"},this.props.mealtype)),a.j.createElement(r.a,{"className":"order-status"},this.props.orderstatus)))))}}]),TopNav}()},"93":function(e,t,n){}}]);