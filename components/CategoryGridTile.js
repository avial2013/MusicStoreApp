import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../assets/Style";
import { ImageBackground } from 'react-native';


export default function CategoryGridTile(props) {
  return (
    <View style={styles.categoryWrapper}>
      <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
        <View>
          <ImageBackground source={{ uri: props.imgURL }} resizeMode="cover" style={styles.BGImg}>
            <View style={styles.gridContainer}>
              <Text style={[styles.titles, styles.textFont, { marginLeft: 10 }]}>{props.title}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
};