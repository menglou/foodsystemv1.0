import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';

import TopNav from "../../components/topnav/topnav";
import './noticedetail.scss';

export default class NoticeDetail extends Component {
  config = {
    navigationBarTitleText: "公告详情"
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onSeeNoticeDetail = () => {};

  render() {
    return <View className="container-noticedetail">
                   <TopNav isdisplaynagator={true} title="公告" isdisplaydaydate={false} navigatetourl="../notice/notice"></TopNav>
                   <View className="noticedetail-content">
                            <View className="at-article">
                                <View className="at-article__h1 title">
                                    报餐规则调整通知
                                </View>
                                <View className="at-article__info datetime">
                                    2017-05-07 8:00
                                </View>
                                <View className="at-article__content">
                                    <View className="at-article__section">
                                        <View className="at-article__p noticedetailcontent">
                                            这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
                                        </View>
                                   </View>
                                </View>
                            </View>
                  </View>
           </View>;
  }
}