import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import EStylesheet from "react-native-extended-stylesheet";
import { pxToDp, DeviceStorage, deviceWidth } from "../../Config/utils";
import { $post, $fetch } from "../../Config/fetch";
import RefreshModel from "../../Components/RefreshModel";

class SearchScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      goodsList: [],
      isLast: false
    };
    this.page = 1;
  }
  _getGoodsList = async (keyword, page) => {
    let { data } = await $post("/goodsList", {
      column: keyword ? "" : 1,
      keyword: keyword,
      current: page ? page : 1,
      pageSize: 10
    });
    console.log("data.length:", data.length);
    if (!data.length) {
      this.setState({
        isLast: true
      });
    } else {
      this.setState({
        isLast: false
      });
    }
    if (page) {
      data = data.concat(this.state.goodsList);
    }
    // console.log(data);
    this.setState({
      goodsList: data
    });
  };
  _goGoodsDetail(detail) {
    DeviceStorage.setItem("detail", detail);
    this.props.navigation.navigate("Detail");
  }
  componentWillMount() {
    this._getGoodsList("");
  }
  _loadMore = () => {
    return new Promise((resolve, reject) => {
      console.log("load-start");
      this.page++;
      let keyword = this.state.text;
      let page = this.page;
      $fetch(
        "/goodsList",
        {
          column: keyword ? "" : 1,
          keyword: keyword,
          current: page ? page : 1,
          pageSize: 10
        },
        ({ data }) => {
          console.log("data.length:", data.length);
          if (!data.length) {
            this.setState({
              isLast: true
            });
          } else {
            this.setState({
              isLast: false
            });
          }
          data = data.concat(this.state.goodsList);
          this.setState({
            goodsList: data
          });
          resolve();
        }
      );
    });
  };
  _onRefresh = () => {
    return new Promise((resolve, reject) => {
      console.log("refresh-start");
      this.page = 1;
      let keyword = this.state.text;
      let page = this.page;
      $fetch(
        "/goodsList",
        {
          column: keyword ? "" : 1,
          keyword: keyword,
          current: page ? page : 1,
          pageSize: 10
        },
        ({ data }) => {
          console.log("data.length:", data.length);
          this.setState({
            goodsList: data,
            isLast: false
          });
          resolve();
        }
      );
    });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.top}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.pop();
            }}
          >
            <Image
              source={require("./images/back.png")}
              style={styles.topBack}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="搜一搜~"
            autoFocus={true}
            returnKeyType="search"
            onChangeText={text => this.setState({ text })}
            onSubmitEditing={() => {
              this._getGoodsList(this.state.text);
            }}
            style={styles.topInput}
          />
        </View>
        <View style={{ flex: 1, marginTop: pxToDp(44) }}>
          <RefreshModel
            list
            dataSource={this.state.goodsList}
            renderFooter={() => (
              <View>
                <Text style={{ textAlign: "center" }}>没有更多记录了</Text>
              </View>
            )}
            renderRow={(item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                  this._goGoodsDetail(item);
                }}
              >
                <View style={styles.listItem}>
                  <Image
                    source={{ uri: item.imgUrl }}
                    style={styles.listItemImage}
                  />
                  <View style={styles.listItemDetail}>
                    <Text style={styles.listItemDetailTitle}>{item.name}</Text>
                    <Text style={styles.listItemDetailLimit}>
                      {item.listDescribe}
                    </Text>
                    <View style={styles.listItemDetailOperator}>
                      <View style={styles.listItemDetailOperatorHot}>
                        <Image source={require("./images/hot.png")} />
                        <Text style={styles.listItemDetailOperatorText}>
                          热度：
                          {item.hotNum}
                        </Text>
                      </View>
                      <View style={styles.listItemDetailOperatorBtn}>
                        <Text style={styles.listItemDetailOperatorBtnTxt}>
                          立即抢
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
            isLast={this.state.isLast}
            loadMore={() => this._loadMore()}
            onRefresh={() => this._onRefresh()}
          />
        </View>
        {/* <View>
          <ScrollView
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.list}>
              {this.state.goodsList.map((item, index) => {
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => {
                      this._goGoodsDetail(item);
                    }}
                  >
                    <View style={styles.listItem}>
                      <Image
                        source={{ uri: item.imgUrl }}
                        style={styles.listItemImage}
                      />
                      <View style={styles.listItemDetail}>
                        <Text style={styles.listItemDetailTitle}>
                          {item.name}
                        </Text>
                        <Text style={styles.listItemDetailLimit}>
                          {item.listDescribe}
                        </Text>
                        <View style={styles.listItemDetailOperator}>
                          <View style={styles.listItemDetailOperatorHot}>
                            <Image source={require("./images/hot.png")} />
                            <Text style={styles.listItemDetailOperatorText}>
                              热度：
                              {item.hotNum}
                            </Text>
                          </View>
                          <View style={styles.listItemDetailOperatorBtn}>
                            <Text style={styles.listItemDetailOperatorBtnTxt}>
                              立即抢
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          </ScrollView>
        </View> */}
      </View>
    );
  }
}

const styles = EStylesheet.create({
  top: {
    height: pxToDp(88),
    paddingLeft: pxToDp(32),
    paddingRight: pxToDp(32),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: 10
  },
  topBack: {
    marginRight: pxToDp(20)
  },
  topInput: {
    flex: 1,
    width: pxToDp(200),
    height: pxToDp(60),
    backgroundColor: "#F8F8F8",
    borderRadius: pxToDp(30),
    paddingLeft: pxToDp(34)
  },
  list: {
    display: "flex",
    alignItems: "center",
    // backgroundColor: "#fff",
    paddingTop: pxToDp(32),
    paddingBottom: pxToDp(88)
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    width: pxToDp(720),
    height: pxToDp(272),
    backgroundColor: "#fff",
    borderRadius: pxToDp(30),
    marginBottom: pxToDp(40),
    padding: pxToDp(32),
    marginLeft: (deviceWidth - pxToDp(720)) / 2
  },
  listItemImage: {
    width: pxToDp(208),
    height: pxToDp(208),
    resizeMode: "center"
  },
  listItemDetail: {
    flex: 1,
    marginLeft: pxToDp(32)
  },
  listItemDetailTitle: {
    fontSize: pxToDp(30),
    height: pxToDp(70),
    color: "#000",
    fontWeight: "bold",
    marginTop: pxToDp(15),
    marginBottom: pxToDp(15)
  },
  listItemDetailLimit: {
    fontSize: pxToDp(24),
    height: pxToDp(30),
    color: "#A5A8B2"
  },
  listItemDetailOperator: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: pxToDp(29)
  },
  listItemDetailOperatorHot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    flexDirection: "row"
  },
  listItemDetailOperatorText: {
    fontSize: pxToDp(24),
    color: "#FFB834",
    marginLeft: pxToDp(10)
  },
  listItemDetailOperatorBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: pxToDp(133),
    height: pxToDp(54),
    backgroundColor: "#53DEDC",
    borderRadius: pxToDp(27),
    shadowColor: "#3AD8D5",
    shadowOffset: {
      height: pxToDp(5)
    },
    shadowRadius: pxToDp(5),
    shadowOpacity: 0.8
  },
  listItemDetailOperatorBtnTxt: {
    fontSize: pxToDp(24),
    color: "#fff",
    fontWeight: "bold"
  }
});

export default SearchScreen;
