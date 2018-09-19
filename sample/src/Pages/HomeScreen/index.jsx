import React, { PureComponent } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default class HomeScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>HomeScreen</Text>
        <Button
          style={styles.instructions}
          title="GO Calculate"
          onPress={() => this.props.navigation.navigate("Calculate",{name:'Calculate'})}
        />
        <Button
          style={styles.instructions}
          title="GO ScrollView"
          onPress={() => this.props.navigation.navigate("Scroll",{name:'ScrollView'})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
