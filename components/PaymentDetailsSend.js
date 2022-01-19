import { Text, TouchableOpacity } from "react-native"
import styles from "../assets/Style"
import { isOnlyNumber, isOnlyString, isMailAddress, isExpDate, isCVV } from './../assets/functions/ValidFuncs';
import { useContext } from 'react';
import { Context } from "../App";


export default function PaymentDetailsSend(props) {

    const { list, addToList, removeFromList, resetList } = useContext(Context)

    const
        name = props.firstName,
        last = props.lastName,
        email = props.email,
        phone = props.phoneNum,
        country = props.country,
        city = props.city,
        address = props.streetAddress,
        cardName = props.ownerName,
        ID = props.IdNum,
        cardNum = props.cardNum,
        exp = props.expirationDate,
        cvv = props.CVV



    function isValid() {

        // Checks if at least one of the fields are empty...
        if (name === '' || last === '' || email === '' ||
            phone === -1 || country === '' || city === '' ||
            address === '' || cardName === '' || ID === -1 ||
            cardNum === -1 || exp === '' || cvv === -1) {
            alert("Don't forget to fill in all the fields!")
            return false
        }

        // --------- User details validation --------- //

        // Checks if names's input is valid
        if (!isOnlyString(name) || !isOnlyString(last)) {
            alert("Invalid input! Name cannot contain numbers and signs...")
            return false
        }

        // Checks if input is a valid email address
        if (!isMailAddress(email)) {
            alert("Invalid email address...")
            return false
        }

        // Checks if phone number's input is valid
        if (!isOnlyNumber(phone) || phone.length < 8) {
            alert("Invalid phone number")
            return false
        }

        // Checks if all Addresses inputs are valid
        if (!isOnlyString(country)) {
            alert("Invalid input for country")
            return false
        }
        if (!isOnlyString(city)) {
            alert("Invalid input for city")
            return false
        }
        if (isOnlyString(address)) {
            alert("Invalid input for street address... please add home number")
            return false
        }


        // --------- Card details validation --------- //

        // Card owner's name
        if (!isOnlyString(cardName)) {
            alert("Invalid input! Card owner's name cannot contain numbers and signs...")
            return false
        }

        if (!isOnlyNumber(ID)) {
            alert("Invalid input for ID number...")
            return false
        } else {
            let temp = ID
            temp = parseInt(temp)
            if (temp < 100000000 || temp > 999999999) {
                alert("ID number needs to be 9 digits...")
                return false
            }
        }

        if (!isOnlyNumber(cardNum)) {
            alert("Invalid input for card ")
            return false
        } else {
            let temp = cardNum
            if (temp < 1000000000000 || temp > 9999999999999999999) {
                alert("Card number needs to be between 13 and 19 digits...")
                return false
            }
        }

        if (!isExpDate(exp)) {
            alert("Invalid expiration date...")
            return false
        }

        if (!isCVV(cvv)) {
            alert("Invalid CVV number...")
            return false
        }

        return true
    }

    const check = () => {
        if (isValid()) {
            resetList()
            props.navigation()
        }
    }

    return (
        <TouchableOpacity onPress={() => { check() }} style={styles.sendBtn}>
            <Text style={[{ color: '#333', fontSize: 20, alignSelf: 'center' },styles.textFont]}>Send</Text>
        </TouchableOpacity>
    )
}