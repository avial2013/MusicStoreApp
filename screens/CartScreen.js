import { useContext, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import ProductCartGridTile from '../components/ProductCartGridTile'
import { Context } from '../App';
import { Divider } from 'react-native-elements'
import styles from '../assets/Style';


export default function CartScreen({ route, navigation }) {

  const { list, addToList, removeFromList, resetList } = useContext(Context)

  const [totalPrice, setTotalPrice] = useState(0)
  const [flagCalc, setFlagCalc] = useState(true)
  const [flagCoupon, setFlagCoupon] = useState(true)
  const [coupon, setCoupon] = useState(-1)

  const couponList = [789456123, 987876765, 234345456]


  if (flagCalc) {
    runCalc()
  }
  else console.log(`Failed runCalc`);


  function runCalc() {
    let sum = 0
    for (const item of list) {
      sum += item.finalPriceIncDel
    }
    setTotalPrice(sum)
    setFlagCalc(false)
  }

  function runCoupon() {
    if (flagCoupon && coupon.length === 9) {
      const discount = whichCoupon()
      setTotalPrice(totalPrice - (totalPrice * discount))
    } else {
      console.log(`Failed runCoupon`);
    }
  }

  function whichCoupon() {
    let temp = parseInt(coupon)
    for (let index = 0; index < 3; index++) {
      if (temp === couponList[index]) {
        if (index === 0) { return 0.10 }
        else if (index === 1) return 0.15
        else return 0.25
      }
    }
    return 0
  }


  const renderGridItem = ({ item }) => {
    return (
      <ProductCartGridTile
        imageURL={item.imageURL}
        title={item.title}
        product={item}
        price={item.finalPriceIncDel}
        onSelect={() => {
          setFlagCalc(true)
          removeFromList(item)
          navigation.navigate("Cart")
        }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.cardWrapper}>
              <View style={styles.cardCart}>
                <Text style={[{ fontSize: 24, color: "white", paddingBottom: 10,marginTop:15 },styles.textFont]}>Coupon discount: </Text>
                <TextInput
                  onChangeText={text => setCoupon(text)}
                  onSubmitEditing={() => { console.log("submitted"); runCoupon() }}
                  placeholder='Enter Coupons Number'
                  keyboardType='number-pad'
                  style={[{ padding: 5, borderColor: '#dc143c', borderWidth: 1, borderRadius: 8, width: 200 },styles.textFont]}
                />

                <Text style={[{ fontSize: 26, color: "white", paddingTop: 20 },styles.textFont]}>Total Price - </Text>
                <Text style={[{ fontSize: 42, color: "white" },styles.headerFont]}>${totalPrice}</Text>
                <Text style={[{ fontSize: 16, color: "white", paddingBottom: 30 },styles.textFont]}>(Shipping {'&'} Coupon){'\n'}</Text>
                <View style={{backgroundColor:'green',width:200,height:40,paddingTop:5,borderRadius:15,elevation:15,marginBottom:20}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Payment")}
                  >
                    <Text style={[{ fontSize: 20,textAlign:'center' },styles.textFont]}>Purchase</Text>
                  </TouchableOpacity>
                </View>
                <Divider width={4} color='#dc143c' style={{ width: 250, marginVertical: 25, alignSelf: 'center' }} />
              </View>
            </View>
          </>
        }
        keyExtractor={(item, index = 0) => list.map(item => item.index = index++)}
        renderItem={renderGridItem}
        data={list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
