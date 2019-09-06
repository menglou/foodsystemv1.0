import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';

import { AtList, AtListItem } from "taro-ui";
import TopNav from "../../components/topnav/topnav";
import styles from './rules.module.scss';
import './rules.scss';

export default class Rules extends Component {
  config = {
    navigationBarTitleText: "规则"
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className={styles.containerrule}>
                   <TopNav title="规则" isdisplaydaydate={false} isdisplaynagator={true} ishavedate={false}></TopNav>
                   <View className={styles.rulescontent}>
                       <View className={styles.rulecontentdetial}>
                                <AtList>
                                        <AtListItem className={styles.ruleitem} title="报餐规则" extraText="只可预定第二天及以后的菜品" />
                                        <AtListItem className={styles.ruleitem} title="早餐报餐时间" extraText="当日早上5点前" />
                                        <AtListItem className={styles.ruleitem} title="早餐就餐时间" extraText="7:00-8:00" />
                                        <AtListItem className={styles.ruleitem} title="午餐报餐时间" extraText="当日早上9点前" />
                                        <AtListItem className={styles.ruleitem} title="午餐就餐时间" extraText="11:00-13:00" />
                                        <AtListItem className={styles.ruleitem} title="晚餐报餐时间" extraText="当日早上15点前" />
                                        <AtListItem className={styles.ruleitem} title="晚餐就餐时间" extraText="17:00-19:00" />
                                </AtList>
                                <View className={styles.tipview}>
                                    <View className="at-icon at-icon-alert-circle" style="float:left;font-size:13px;color:#b9b9b9;">
                                         餐厅管理人员可在管理后台设置就餐规则
                                    </View>
                                </View>
                       </View>
                   </View>
             </View>;
  }
}