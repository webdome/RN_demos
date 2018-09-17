import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { DeviceStorage } from "../../../Config/utils";
import styles from "../styles";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  _goGoodsDetail(detail) {
    DeviceStorage.setItem("detail", detail);
    this.props.navigation.navigate("Detail");
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      list: newProps.list[newProps.nid] || []
    });
  }
  componentWillMount(){
    this.setState({
      list: this.props.list[this.props.nid] || []
    });
  }
  render() {
    return (
      <View style={styles.list}>
        
        {this.state.list.map((item, index) => {
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
          );
        })}
      </View>
    );
  }
}
