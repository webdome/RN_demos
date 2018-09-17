/* import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import ScrollVertical from "~components/ScrollVertical";

const dataArray = [
  {
    title: "降价了"
  },
  {
    title: "全场五折"
  },
  {
    title: "打到骨折"
  }
];
export default class extends React.Component {
  render() {
    let array = [{ content: "" }];
    if (dataArray && dataArray.length > 0) {
      array = [];
      for (let item of dataArray) {
        array.push({ content: item.title });
      }
    }
    return (
      <View
        style={{ padding: 0, paddingBottom: 0, backgroundColor: "#FFFFFF" }}
      >
        <TouchableOpacity
          onPress={() => {
            if (dataArray && dataArray.length > 0) {
              console.log(dataArray[this.index].title);
            }
          }}
          style={{
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            borderRadius: 8,
            paddingLeft: 5,
            paddingRight: 5
          }}
        >
          <Text style={{ fontSize: 16 }} fontWeight={"bold"}>
            公告
          </Text>
          <View
            style={{
              marginLeft: 5,
              marginRight: 8,
              backgroundColor: "#b01638",
              borderRadius: 8,
              width: 22,
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", fontSize: 14 }}>新</Text>
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <ScrollVertical
              onChange={index => {
                this.index = index;
              }}
              enableAnimation={true}
              data={array}
              delay={1500}
              duration={1000}
              scrollHeight={34}
              scrollStyle={{ alignItems: "flex-start" }}
              textStyle={{ color: "#000", fontSize: 14 }}
            />
          </View>
          <View style={{ height: 14, width: 1, backgroundColor: "#fff" }} />
          <Text style={{ color: "#000", paddingLeft: 0, fontSize: 14 }}>
            查看
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
 */
/* import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RefreshModel from '../../Components/RefreshModel'
export default class extends React.Component {
  _loadMore= async (resolve)=>{
    console.log('loadmore');
  }
  _onRefresh= async (resolve)=>{
    console.log('onRefresh');
  }
  render() {
    let newsList = []
    for (let i = 0; i < 20; ++i) newsList.push({id:1,content:123123});
    return (
      <View style={styles.container}>
        <RefreshModel
          list
          dataSource={newsList}
          renderFooter={()=> (
            <View><Text>没有更多记录了</Text></View>
          )}
          renderRow={item => (
            <Text style={styles.text}>item.content</Text>
          )}
          isLast={false}
          loadMore={resolve=> this._loadMore(resolve)}
          onRefresh={resolve => this._onRefresh(resolve)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text:{
    fontSize:16,
    margin:20
  }
}); */


/* import React from 'react';
import {
  Text,
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default () => {
  return <ScrollableTabView
    style={{marginTop: 20, }}
    initialPage={0}
    renderTabBar={() => <DefaultTabBar />}
  >
    <Text tabLabel='Tab #1'>My</Text>
    <Text tabLabel='Tab #2'>favorite</Text>
    <Text tabLabel='Tab #3'>project</Text>
  </ScrollableTabView>;
} */

// import React, {Component} from 'react';
// import {
//     View,
//     StyleSheet,
//     ScrollView,
//     Text,
// } from 'react-native';

// const styles = StyleSheet.create({
  
// })

// /*
//  * 引入这个两个头文件
//  * */
// import {observable, action} from 'mobx';
// import {observer} from 'mobx-react/native';

// /*
// * 假数据
// * */
// const datas = [
//     {name:'苹果',count:0},
//     {name:'梨',count:0},
//     {name:'香蕉',count:0},
//     {name:'草莓',count:0},
//     {name:'橘子',count:0},
// ];

// /*
// * 对整个列表添加观察，观察列表个数的变化
// * */
// @observer 
// class MobxTestSecond extends Component {

//     /*
//     * 数据管理器
//     * */
//     dataManager = new DataSource();

//     componentWillMount() {
//         /*
//         * 赋值初始数据
//         * */
//         this.dataManager.replace(datas);
//     }

//     /*
//     * 添加一个新的Item
//     * */
//     addItem = () => {
//        let item = {name:'西瓜',count:0};
//         this.dataManager.addItem(item)
//     };

//     /*
//     * 删除第一个Item
//     * */
//     deleteItem = () => {
//         this.dataManager.deleteItem(0);
//     };

//     render() {
//         return (
//         <View style={styles.container}>
//             <View style={styles.addItemView}>
//                 <Text style={styles.addItem} onPress={this.addItem}>增加</Text>
//                 <Text style={styles.addItem} onPress={this.deleteItem}>删除</Text>
//             </View>
//             <ScrollView>
//                 {
//                     this.dataManager.dataSource.slice(0).map((item,i)=> <ItemView key = {i} item = {item}/>)
//                 }
//             </ScrollView>
//         </View>
//         );
//     }
// }



// /*
// * 对每一个Item添加观察,改变个数
// * */
// @observer
// class ItemView extends Component {
//     constructor(props){
//       super(props)
//     }
//     countAdd = () => {
//         this.props.item.add();
//     };

//     countDec = () => {
//         this.props.item.dec();
//     };

//     render() {
//         const {item} = this.props;
//         return (
//             <View style={styles.itemContainer}>
//                 <Text>{item.name}</Text>
//                 <Text>{item.count}</Text>
//                 <Text style={styles.btn} onPress={this.countAdd}> + </Text>
//                 <Text style={styles.btn} onPress={this.countDec}> - </Text>
//             </View>
//         );
//     }
// }



// /*
//  * 整个列表页数据管理器
//  * */
// class DataSource {
//     // 本地数据源
//     @observable
//     dataSource = [];

//     // 添加初始数据
//     @action
//     replace = (items) => {
//         // 1. 清空原数据
//         this.dataSource.splice(0, this.dataSource.length);

//         // 2. 加载新数据
//         items.map((item, i) => {
//             this.dataSource.push(new Item(item));
//         });
//     };

//     // 添加新数据
//     @action
//     addItem = (item) => {
//         this.dataSource.unshift(new Item(item));
//     };


//     // 删除一条数据
//     @action
//     deleteItem = (idx) => {
//         this.dataSource.splice(idx, 1);
//     };
// }
// /*
//  * 单条Item数据管理器
//  * */
// class Item {

//     /*
//     * 商品名称（此值是不变的所以不需要检测此值）
//     * */
//     name;

//     /*
//     * 监控商品个数
//     * */
//     @observable
//     count;

    
//     constructor(item) {
//         this.name = item.name;
//         this.count = item.count;
//     };

//     /*
//     * 商品个数+1
//     * */
//     @action
//     add = () => {
//         this.count += 1;
//     };

//     /*
//     * 商品个数-1
//     * */
//     @action
//     dec= () => {
//         this.count > 0 && (this.count -= 1);
//     };
// }

// export default MobxTestSecond


import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';


export default () => {
  return (
    <View>
      <Text>123</Text>
    </View>
  );
}