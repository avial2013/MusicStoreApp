import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../assets/Style";


export default function ProductGridTile(props) {
    return (
        <View style={styles.categoryWrapper}>
            <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
                <ImageBackground source={{ uri: props.imageURL }} resizeMode="cover" style={styles.BGImg}>
                    <View>
                        <Text style={[styles.titles,styles.textFont,{marginLeft:12}]}>{props.title}{"\n"}{props.price}$</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};