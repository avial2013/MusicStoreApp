import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../assets/Style";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { Context } from "../App";


export default function ProductCartGridTile(props) {

    return (
        <View style={styles.prodWrapper}>
            <View style={[styles.gridCartContainer, { flexDirection: "row" }]}>
                <TouchableOpacity onPress={props.onSelect} style={styles.deleteBtn}>
                    <Icon name="delete" style={{ fontSize: 40, color: "white" }} />
                </TouchableOpacity>
                <ImageBackground source={{ uri: props.imageURL }} resizeMode='cover' style={{ width: "100%" }}>
                    <View>
                        <Text style={[styles.titles,styles.textFont,{marginLeft:10}]}>{props.title}{"\n"}${props.price}</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};