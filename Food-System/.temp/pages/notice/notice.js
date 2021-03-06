import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { AtList, AtListItem } from "taro-ui";
import TopNav from "../../components/topnav/topnav";
import styles from './notice.module.scss';
import './notice.scss';

export default class Notice extends Component {
  config = {
    navigationBarTitleText: "公告"
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onSeeNoticeDetail = () => {
    Taro.navigateTo({
      url: "../noticedetail/noticedetail"
    });
  };

  render() {
    return <View className={styles.containernotice}>
                   <TopNav title="公告" isdisplaydaydate={false} isdisplaynagator={true} ishavedate={false}></TopNav>
                   <View className={styles.noticecontent}>
                       <View className={styles.noticecontentdetail}>
                            <AtList>
                                        <AtListItem className={styles.noticeitem} title="报餐规则调整通知" note="2019-8-8  8:00" arrow="right" iconInfo={{ size: 25, color: '#fb4241', value: 'volume-plus' }} onClick={this.onSeeNoticeDetail} />
                                            <AtListItem className={styles.noticeitem} title="早餐报餐时间更改通知" note="2019-8-8  8:00" arrow="right" iconInfo={{ size: 25, color: '#fb4241', value: 'volume-plus' }} onClick={this.onSeeNoticeDetail} /> 
                                            <AtListItem className={styles.noticeitem} title="早餐就餐时间公告" note="2019-8-8  8:00" arrow="right" iconInfo={{ size: 25, color: '#fb4241', value: 'volume-plus' }} onClick={this.onSeeNoticeDetail} /> 
                                            <AtListItem className={styles.noticeitem} title="午餐报餐时间公告" note="2019-8-8  8:00" arrow="right" iconInfo={{ size: 25, color: '#fb4241', value: 'volume-plus' }} onClick={this.onSeeNoticeDetail} /> 
                                            <AtListItem className={styles.noticeitem} title="午餐就餐时间公告" note="2019-8-8  8:00" arrow="right" iconInfo={{ size: 25, color: '#fb4241', value: 'volume-plus' }} onClick={this.onSeeNoticeDetail} />  
                                </AtList>
                       </View>
                        
                       
                   </View>
                   
             </View>;
  }
}