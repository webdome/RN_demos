import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Container } from "native-base";
import { observer, inject } from "mobx-react";


@inject(["HomeStore"])
@observer
export default class MobxTest extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.HomeStore
    this.state = {
    };
  }

  render() {
    const { text, num } = this.store;
    return (
      <Container>
        <Text>{text}</Text>
        <Button style={styles.button} primary onPress={() => this.store.plus()}>
          <Text>add</Text>
        </Button>
        <Text>{num}</Text>
        <Button style={styles.button} primary onPress={() => this.store.minus()}>
          <Text>minus</Text>
        </Button>
      </Container>
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
  button: {
    paddingHorizontal: 20,
  }
});