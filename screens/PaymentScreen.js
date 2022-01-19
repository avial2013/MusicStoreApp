import { TextInput, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import styles from '../assets/Style';
import { useState } from 'react';
import PaymentDetailsSend from '../components/PaymentDetailsSend';


export default function PaymentScreen({ navigation }) {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState(-1)
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [IdNum, setIdNum] = useState(-1)
  const [cardNum, setCardNum] = useState(-1)
  const [expirationDate, setExpirationDate] = useState('')
  const [CVV, setCVV] = useState(-1)

  return (
    <View style={[styles.cardCart, { alignSelf: 'center' }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={[styles.titles,styles.headerFont, { marginTop: 15 }]} >User {'$'} Card Details</Text>
        <Divider width={4} color='#dc143c' style={{ width: 250, marginVertical: 25, alignSelf: 'center' }} />

        <TextInput style={[styles.inputBox,styles.textFont]}
          placeholder='First Name'
          placeholderTextColor={'bisque'}
          onChangeText={text => setFirstName(text)}
        />

        <TextInput style={[styles.inputBox,styles.textFont]}
          placeholder='Last Name'
          placeholderTextColor={'bisque'}
          onChangeText={text => setLastName(text)}
        />

        <TextInput style={[styles.inputBox,styles.textFont]}
          placeholder='Email'
          placeholderTextColor={'bisque'}
          onChangeText={text => setEmail(text)}
        />

        <TextInput style={[styles.inputBox,styles.textFont]}
          placeholder='Phone number'
          keyboardType='number-pad'
          placeholderTextColor={'bisque'}
          onChangeText={text => setPhoneNum(text)}
        />

        <TextInput style={[styles.inputBox,styles.textFont]}
          placeholder='Country'
          placeholderTextColor={'bisque'}
          onChangeText={text => setCountry(text)}
        />

        <TextInput style={[styles.inputBox,styles.textFont]}
          placeholder='City'
          placeholderTextColor={'bisque'}
          onChangeText={text => setCity(text)}
        />

        <TextInput style={[styles.inputBox,styles.textFont]}
          placeholder='Street address'
          placeholderTextColor={'bisque'}
          onChangeText={text => setStreetAddress(text)}
        />

        <Text style={[styles.titles,styles.headerFont, { marginTop: 15, marginLeft: 13 }]}>Card</Text>

        <TextInput style={[styles.inputBox,styles.textFont]}
          placeholder="Owner's name"
          placeholderTextColor={'bisque'}
          onChangeText={text => setOwnerName(text)}
        />

        <TextInput style={[styles.inputBox,styles.textFont]}
          placeholder='ID number'
          keyboardType='number-pad'
          placeholderTextColor={'bisque'}
          onChangeText={text => setIdNum(text)}
        />

        <TextInput style={[styles.inputBox,styles.textFont]}
          placeholder='Card Number'
          keyboardType='number-pad'
          placeholderTextColor={'bisque'}
          onChangeText={text => setCardNum(text)}
        />

        <TextInput style={[styles.inputBox,styles.textFont]}
          placeholder='Expiration date'
          placeholderTextColor={'bisque'}
          onChangeText={text => setExpirationDate(text)}
        />

        <TextInput style={[styles.inputBox,styles.textFont]}
          placeholder='CVV'
          keyboardType='number-pad'
          placeholderTextColor={'bisque'}
          onChangeText={text => setCVV(text)}
        />

        <PaymentDetailsSend
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNum={phoneNum}
          country={country}
          city={city}
          streetAddress={streetAddress}
          ownerName={ownerName}
          IdNum={IdNum}
          cardNum={cardNum}
          expirationDate={expirationDate}
          CVV={CVV}
          navigation={() => navigation.replace("Purchase")}
        />

        {/* <TouchableOpacity onPress={() => navigation.replace("Purchase")} style={styles.sendBtn}>
          <Text style={{ color: '#333', fontSize: 20, alignSelf: 'center' }}>Send</Text>
        </TouchableOpacity> */}

      </ScrollView>
    </View>
  );
}
