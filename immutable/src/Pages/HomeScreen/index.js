/**
 * NextScreen
 * @flow
 */
import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Map } from "./immutable";

import ViewOne from "../../Components/ViewOne";
import ViewTwo from "../../Components/ViewTwo";
import ViewThree from "../../Components/ViewThree";

export default class NextScreen extends Component {
  // 构造
  constructor(props) {
    super(props);
    this.state = {
      buttonTitle: "修改",
      viewOne: "ViewOne",
      viewTwo: { name: "ViewTwo" },
      viewThree: Map({ name: "ViewThree" })
    };
    this._changState = this._changState.bind(this);
    this._resetState = this._resetState.bind(this);
  }

  _changState() {
    // 由于 immutable 内部使用了 Trie 数据结构来存储，只要两个对象的 `hashCode` 相等，值就是一样的。这样的算法避免了深度遍历比较，性能非常好。
    this.setState({
      buttonTitle: "再次修改",
      viewOne: "ViewOne changed!",
      viewTwo: { name: "ViewTwo changed" },
      viewThree: this.state.viewThree.set("name", "ViewThree changed")
    });
  }

  _resetState() {
    this.setState({
      viewOne: "ViewOne",
      viewTwo: { name: "ViewTwo" },
      viewThree: this.state.viewThree.set("name", "ViewThree")
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <View style={styles.content}>
          <Button
            containerStyle={styles.touch}
            style={styles.textEnter}
            onPress={() => {
              this._changState();
            }}
            title={this.state.buttonTitle}
          />
          <Button
            containerStyle={styles.touch}
            style={styles.textEnter}
            onPress={() => {
              this._resetState();
            }}
            title="恢复"
          />
          <ViewOne content={this.state.viewOne} />
          <ViewTwo content={this.state.viewTwo} />
          <ViewThree content={this.state.viewThree} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  touch: {
    width: 90,
    height: 32,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    backgroundColor: "purple"
  },
  textEnter: {
    fontSize: 16,
    color: "white"
  }
});
