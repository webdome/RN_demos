import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles";

export default class extends React.Component {
  render() {
    let {list,active,change} = this.props
    return (
      <View style={styles.nav} ref={view => (this.nav = view)}>
        {list.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                change(item.id,index);
              }}
              key={index}
              activeOpacity={1}
            >
              <View
                style={
                  active === item.id
                    ? styles.navIconActive
                    : styles.navIcon
                }
              >
                <Image
                  source={{ uri: item.imgUrl }}
                  style={styles.navIconImage}
                />
              </View>
              <Text
                style={
                  active === item.id
                    ? styles.navTxtActive
                    : styles.navTxt
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
