import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../assets/Style';


export default function PurchaseMadeScreen({navigation}) {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <Text style={[styles.headLines,{textAlign:'center'},styles.headerFont]}>PURCHASE WAS SUCCESSFUL !</Text>
        <Text style={[styles.purchText,styles.textFont]}>Thank you for choosing to buy in our store</Text>
        <Text style={[styles.purchText,styles.textFont]}>Feel free to keep wondering through the store</Text>
        <TouchableOpacity onPress={()=>{navigation.popToTop()}} style={styles.popToTop}><Text style={[{textAlign:'center',fontSize:22},styles.textFont]}>Back to Store</Text></TouchableOpacity>
        <></>
      </View>
    </View>
  );
}
