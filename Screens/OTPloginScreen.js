import React, {useContext, useState, useRef} from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import PhoneInput from "react-native-phone-number-input";
import Button from '../components/Button'
import {useNavigation} from '@react-navigation/native'


const OTPloginScreen = () => {
    const navigation = useNavigation()

    const [phoneNumber, setphoneNumber] = useState("");
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const phoneInput = useRef(null);

    const GetOTP = () => {
        if(phoneNumber && phoneNumber.length > 9){
            navigation.navigate('OTPverify', {phoneNumber});
        }
        else
            alert("Please enter 10 digit phone number");
    }

    return (
        <View style={{...styles.container, backgroundColor: '#ffffff'}}>
            <Image source={require('../assets/logo.png')} style={{height: 80, width: 80, resizeMode: 'contain', marginBottom: 50}}/>
            <Text style={{fontSize: 24, marginBottom: 15, fontWeight: '900', color: '#000000', textAlign: 'center'}}>Enter Phone number to get verified.</Text>
            <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="IN"
                layout="first"
                onChangeText={(text) => {
                    setphoneNumber(text);
                }}
                onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
          />
          <Button onPress={GetOTP} buttontext="Request OTP"/>
        </View>
    )
}

export default OTPloginScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5
    },
})