import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {Schedule, trySchedule} from "../redux/reducerSchedule";
import {RouterReduxProps, SectionListData} from "../core/CoreProps";
import {ReduxState} from "../redux/store";
import {ViewPager} from "../component/schedule/ViewPager";
import DaySessionList from "../component/schedule/DaySessionList";
import TextIndicator from "../component/schedule/TextIndicator";

interface Props extends RouterReduxProps {
  sessions1: SectionListData[];
  sessions2: SectionListData[];
}

class ScheduleScreen extends Component<Props> {
  state = {
    selectedIndex: 0
  }

  componentDidMount() {
    this.props.dispatch(trySchedule())
  }

  render() {
    return (
      <View style={styles.root}>
        <TextIndicator titles={['Day1', 'Day2']} selectedIndex={this.state.selectedIndex}/>
        <ViewPager style={styles.viewPager} onPageChanged={num => this.onPageChanged(num)}>
          <View style={styles.pageStyle}>
            <DaySessionList sessions={this.props.sessions1} onPress={this.go2SessionDetail}/>
          </View>
          <View style={styles.pageStyle}>
            <DaySessionList sessions={this.props.sessions2} onPress={this.go2SessionDetail}/>
          </View>
        </ViewPager>
      </View>
    )
  }

  onPageChanged = (num: number) => {
    this.setState({selectedIndex: num})
  }

  go2SessionDetail = (item: Schedule) => {
    console.log(`-> detail screen`)
    this.props.navigation.navigate('SessionDetailScreen', {
      title: item.topic.title,
      desp: item.topic.desp,
      start: item.startTime,
      end: item.endTime,
    })
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 4,
  },
  viewPager: {},
  pageStyle: {
    padding: 20,
  },
})


const mapStateToProps = (state: ReduxState) => {
  console.log(`szw Day1 mapStateToProps: ${JSON.stringify(state)}`)
  let {day1, day2} = state.reducerSchedule
  let dataDay1 = extractDayData(day1.schedules)
  let dataDay2 = extractDayData(day2.schedules)
  return {
    sessions1: dataDay1,
    sessions2: dataDay2,
  }
}

function extractDayData(sessions: Schedule[]): SectionListData[] {
  // {"startTime":"10:00","endTime":"10:30","topic":{"title":"Android Dev in 10 minutes","desp":""}},
  //没比较双层循环, 因为这会有大量的重复比对, 完全没必要. 所以这里借用一个map
  let map = new Map()
  for (let index in sessions) {  //index分别是0,1,2
    let item = sessions[index]
    let {startTime} = item
    if (map.has(startTime)) {
      let list = map.get(startTime)
      list.push(item)
    } else {
      const list = []
      list.push(item)
      map.set(startTime, list)
    }
  }

  let result: SectionListData[] = []
  map.forEach(function (value, key, map) {
    let obj: SectionListData = {key: "", data: []}
    obj['key'] = key
    obj['data'] = value
    result.push(obj)
  })
  return result
}

export default connect(mapStateToProps)(ScheduleScreen)