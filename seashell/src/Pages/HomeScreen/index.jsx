import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { pxToDp } from "../../Config/utils";
import Swiper from "react-native-swiper";
import { $post } from "../../Config/fetch";
import ScrollVertical from "../../Components/ScrollVertical";
import ScrollableTabView from "react-native-scrollable-tab-view";
import NavTabBar from "./components/NavTabBar";
import NavTabContent from "./components/NavTabContent";
import styles from "./styles";
import Loading from "../../Components/Loading";

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      advList: [],
      noticeList: [],
      navList: [],
      goodsList: {},
      isShowToTop: false,
      isShowTopNav: false,
      navActive: "",
      navActiveIndex: 0
    };
  }
  _onScroll(e) {
    let offsetY = e.nativeEvent.contentOffset.y;
    if (offsetY > 100) {
      this.setState({
        isShowToTop: true
      });
    } else {
      this.setState({
        isShowToTop: false
      });
    }
    if (offsetY > pxToDp(800)) {
      this.setState({
        isShowTopNav: true
      });
    } else {
      this.setState({
        isShowTopNav: false
      });
    }
  }
  _goTop() {
    this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
  }
  _navChange(id,index) {
    if (id === this.state.navActive) {
      return;
    }
    this._getGoodsList(id);
    this.setState({
      navActive: id,
      navActiveIndex: index
    });
  }
  _tabChange(index){
    if (this.state.navList[index]) {
      let id = this.state.navList[index].id
      this.setState({
        navActive: id,
        navActiveIndex: index
      });
      if (!this.state.goodsList[id].length) {
        this._getGoodsList(id);
      }
    }
  }
  _goSearch() {
    this.props.navigation.navigate("Search");
  }
  _getAdvList = async () => {
    let { data } = await $post("/advertList", {
      bannerNumber: 5,
      floatNumber: 1
    });
    this.setState({
      advList: data
    });
  };
  _getNoticeList = async () => {
    let { data } = await $post("/noticeList", {
      current: 1,
      pageSize: 10
    });
    let array = [];
    if (data.length > 0) {
      for (let item of data) {
        array.push({ content: item.title });
      }
    }
    this.setState({
      noticeList: array
    });
  };
  _getNavList = async () => {
    let { data } = await $post("/columnList", {});
    if (data.length) {
      let goodsList = {}
      for (let index = 0; index < data.length; index++) {
        goodsList[data[index].id] = []
      }
      this.setState({
        navList: data,
        navActive: data[0].id,
        goodsList: goodsList
      });
      this._getGoodsList(data[0].id);
    }
  };
  _getGoodsList = async id => {
    let { data } = await $post("/goodsList", {
      column: id,
      keyword: "",
      current: 1,
      pageSize: 10
    });
    let goodsList = this.state.goodsList
    goodsList[id] = data
    this.setState({
      goodsList: goodsList
    });
  };
  componentWillMount() {
    this._getAdvList();
    this._getNoticeList();
    this._getNavList();
  }
  componentDidMount() {
    Loading.show()
    setTimeout(() => {
      Loading.hidden()
    }, 1000);
  }
  render() {
    return (
      <View>
        {this.state.isShowTopNav ? (
          <View style={styles.floatNav}>
            <View style={styles.floatNavList}>
              {this.state.navList.map((item, index) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this._navChange(item.id,index);
                    }}
                    key={index}
                    activeOpacity={1}
                  >
                    <View style={styles.floatNavListItem}>
                      <Text
                        style={[
                          styles.floatNavListItemTxt,
                          this.state.navActive === item.id
                            ? styles.floatNavListItemTxtActive
                            : ""
                        ]}
                      >
                        {item.name}
                      </Text>
                      <View
                        style={[
                          styles.floatNavListItemLine,
                          this.state.navActive === item.id
                            ? styles.floatNavListItemLineActive
                            : ""
                        ]}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ) : null}
        <ScrollView
          onScroll={e => {
            this._onScroll(e);
          }}
          ref={view => {
            this.scrollView = view;
          }}
          scrollEventThrottle={400}
        >
          <View style={styles.top}>
            <Text style={styles.topTxt}>首页</Text>
            <TouchableOpacity
              onPress={() => {
                this._goSearch();
              }}
            >
              <View style={styles.topSearchBox}>
                <Image
                  source={require("./images/search.png")}
                  style={styles.topSearch}
                />
              </View>
            </TouchableOpacity>
          </View>
          {
            this.state.advList.length ? (
              <Swiper
                style={styles.wrapper}
                renderPagination={renderPagination}
                autoplay={true}
                loop={true}
              >
                {this.state.advList.map((item, index) => {
                  return (
                    <View style={styles.slide} key={index}>
                      <Image style={styles.image} source={{ uri: item.imgUrl }} />
                    </View>
                  );
                })}
              </Swiper>
            ) : null
          }
          <View style={styles.notice}>
            <Image source={require("./images/notice.png")} />
            <View style={styles.noticeTxt}>
              <ScrollVertical
                onChange={index => {
                  this.index = index;
                }}
                enableAnimation={true}
                data={this.state.noticeList}
                delay={1500}
                duration={1000}
                scrollHeight={pxToDp(60)}
                scrollStyle={{ alignItems: "flex-start" }}
                textStyle={{ color: "#666", fontSize: pxToDp(26) }}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.noticeMore}>更多 ></Text>
            </TouchableOpacity>
          </View>
          <ScrollableTabView
            style={{backgroundColor: '#fff'}}
            initialPage={0}
            page={this.state.navActiveIndex}
            onChangeTab={({i})=>this._tabChange(i)}
            renderTabBar={() => <NavTabBar list={this.state.navList} active={this.state.navActive} change={(id,index)=>this._navChange(id,index)}/>}
          >
            {
              this.state.navList.map((item,index)=>{
                return <NavTabContent navigation={this.props.navigation} key={index} list={this.state.goodsList} nid={item.id}/>
              })
            }
          </ScrollableTabView>
          {/* <NavTabBar list={this.state.navList} active={this.state.navActive} change={(id)=>this._navChange(id)}/> */}
          {/* <NavTabContent list={this.state.goodsList} /> */}
        </ScrollView>
        {this.state.isShowToTop ? (
          <TouchableOpacity
            style={styles.gotop}
            onPress={() => {
              this._goTop();
            }}
          >
            <Image source={require("./images/top.png")} />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "grey" }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};



export default HomeScreen;
