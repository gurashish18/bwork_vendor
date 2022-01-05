import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import {useTranslation} from 'react-i18next';

const EarningScreen = () => {
    const {t, i18n} = useTranslation();
    const navigation = useNavigation()
    const[fourhrs, setfourhrs] = useState(false)
    const[sixhrs, setsixhrs] = useState(true)
    const[eighthrs, seteighthrs] = useState(false)
    const[selected, setselected] = useState(6)
    const[amount, setamount] = useState('27,400')

    const handlefour = () => {
        setfourhrs(true)
        setsixhrs(false)
        seteighthrs(false)
        setselected(4)
        setamount('24,200')
    }
    const handlesix = () => {
        setfourhrs(false)
        setsixhrs(true)
        seteighthrs(false)
        setselected(6)
        setamount('27,400')
    }
    const handleeight = () => {
        setfourhrs(false)
        setsixhrs(false)
        seteighthrs(true)
        setselected(8)
        setamount('35,400')
    }
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: "space-around", backgroundColor: '#ffffff'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image source={require('../assets/rupee.png')} style={{height: 100, width: 100, resizeMode: 'contain'}}/>
                <Text style={{color: '#1A0F91', fontSize: 25, fontWeight: 'bold'}}>{t('youcanearn')}</Text>
                <Text style={{color: '#DA9D00', fontSize: 35, fontWeight: 'bold'}}>₹ {amount}</Text>
                <Text style={{color: 'grey', fontSize: 16}}>{t('permonth')}</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <Text style={{color: '#000000', fontSize: 20}}>{t('ifyouwork')} {selected}{t('houreveryday')}</Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{margin: 5, width: 100, alignItems: 'center', padding: 10, backgroundColor: fourhrs?'#000000':'#E7E7E7'}} onPress={handlefour}>
                        <Text style={{color: fourhrs?'#ffffff':'#000000'}}>4{t('hour')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin: 5,width: 100, alignItems: 'center', padding: 10, backgroundColor: sixhrs?'#000000':'#E7E7E7'}} onPress={handlesix}>
                        <Text style={{color: sixhrs?'#ffffff':'#000000'}}>6{t('hour')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin: 5, width: 100, alignItems: 'center', padding: 10, backgroundColor: eighthrs?'#000000':'#E7E7E7'}} onPress={handleeight}>
                        <Text style={{color: eighthrs?'#ffffff':'#000000'}}>8{t('hour')}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Button buttontext={t('continue')} onPress={()=>navigation.navigate("AppNav")}/>
        </View>
    )
}

export default EarningScreen

const styles = StyleSheet.create({})
