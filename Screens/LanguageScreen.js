import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import {useTranslation} from 'react-i18next';

const LanguageScreen = () => {
    const {t, i18n} = useTranslation();
    const navigation = useNavigation()
    const[hindi, sethindi] = useState(true)
    const[english, setenglish] = useState(false)

    const handlehindi = () => {
        sethindi(true)
        setenglish(false)
    }
    const handleEnglish = () => {
        setenglish(true)
        sethindi(false)
    }
    const handleSubmit = () => {
        if(hindi)
            i18n.changeLanguage("hi")
        if(english)
            i18n.changeLanguage("en")
        navigation.navigate("OTPlogin")
    }
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: "space-around", backgroundColor: '#ffffff'}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: '80%'}}>
                <TouchableOpacity style={{alignItems: 'center',paddingHorizontal: 10, paddingVertical: 5, borderWidth: hindi?1:0, borderRadius: 10}} onPress={handlehindi}>
                    <Image source={require('../assets/hindi.png')} style={{height: 100, width: 100, resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>हिन्दी</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center',paddingHorizontal: 10, paddingVertical: 5, borderWidth: english?1:0, borderRadius: 10}} onPress={handleEnglish}>
                    <Image source={require('../assets/english.png')} style={{height: 100, width: 100, resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>English</Text>
                </TouchableOpacity>
            </View>
            <Button buttontext={t('continue')} onPress={handleSubmit}/>
        </View>
    )
}

export default LanguageScreen

const styles = StyleSheet.create({})
