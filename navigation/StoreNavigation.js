import React from "react";
// NavigationContainer - gives the root navigator.
import { NavigationContainer } from "@react-navigation/native";
// createNativeStackNavigator - create stack navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from './../screens/HomeScreen';
import CategoryScreen from './../screens/CategoryScreen';
import ProductScreen from './../screens/ProductScreen';
import CartScreen from "./../screens/CartScreen"
import PaymentScreen from './../screens/PaymentScreen';
import PurchaseMadeScreen from './../screens/PurchaseMadeScreen';


const Stack = createNativeStackNavigator();
const HeaderStyle = {
  headerStyle: {
    backgroundColor: "#2B2B2B"
  },
  headerTintColor: "white"
}

export default function StoreNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={HeaderStyle} />
        <Stack.Screen name="Category" component={CategoryScreen} options={({ route }) => ({
          title: route.params.categoryName,
          headerStyle: {
            backgroundColor: "#2B2B2B"
          },
          headerTintColor: "white"
        })} />
        <Stack.Screen name="Product" component={ProductScreen} options={({ route }) => ({
          title: route.params.productTitle,
          headerStyle: {
            backgroundColor: "#2B2B2B"
          },
          headerTintColor: "white"
        })} />
        <Stack.Screen name="Cart" component={CartScreen} options={HeaderStyle} />
        <Stack.Screen name="Payment" component={PaymentScreen} options={HeaderStyle} />
        <Stack.Screen name="Purchase" component={PurchaseMadeScreen} options={{
          headerStyle: {
            backgroundColor: "#2B2B2B"
          },
          headerTintColor: "white"
          ,
          headerBackVisible: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}