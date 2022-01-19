import { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { Divider } from 'react-native-elements'
import styles from '../assets/Style';
import { PRODUCTS } from '../data/dummy-data';
import { Context } from '../App';
import { useContext } from 'react';



export default function ProductScreen({ route, navigation }) {


  // const [render, setRender] = useState(undefined)

  const productID = route.params.productID

  const currentProduct = PRODUCTS.find(product => product.id === productID)

  const image = { uri: currentProduct.imageURL }

  const { list, addToList, removeFromList, resetList } = useContext(Context)


  return (
    <View style={styles.container}>
      <ScrollView  showsVerticalScrollIndicator={false}>
        <Image style={styles.prodImg} source={image} />
        <View style={styles.cardProd}>

          <Text style={[styles.mainHL,styles.headerFont, { marginBottom: 20 }]}>{currentProduct.title}</Text>
          
          <Divider width={4} color='#dc143c' style={{ width: 250, marginVertical: 25, alignSelf: 'center' }} />

          <Text style={[styles.headLines,styles.headerFont, { marginBottom: 10 }]}>Description</Text>
          <View style={{ marginBottom: 30 }}>
            <Text style={[styles.regText,styles.textFont]}>{currentProduct.description}</Text>
          </View>
          <View style={[styles.boxFrame, { marginBottom: 30, padding: 10 }]}>
            <Text style={[styles.regText,styles.textFont, { margin: 5 }]}>Measurements:{"\n"}{currentProduct.measurements}</Text>
            <Text style={[styles.regText,styles.textFont, { margin: 5 }]}>Delivery costs: {currentProduct.delivery}$</Text>
            <Text style={[styles.regText,styles.textFont, { margin: 5 }]}>Final price: {currentProduct.finalPriceIncDel}$</Text>
          </View>
          <View style={{marginVertical:15}}>
            <Text style={[styles.headLines,styles.headerFont, { marginBottom: 10 }]}>Reviews</Text>
            <Text style={[styles.regText,styles.textFont, styles.boxFrame]}>{currentProduct.reviews}</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => {
              addToList(currentProduct)
              navigation.navigate("Cart", {
                productID: currentProduct.id,
                productName: currentProduct.title,
              });
            }}>
              <Icon name="cart" style={{ fontSize: 35, color: "white" }} />
              <Text style={[styles.regText,styles.textFont]}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}