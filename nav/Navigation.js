import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from '../Screens/OnboardScreen'
import WorkerInfo from '../Screens/WorkerInfo'
import EarningScreen from '../Screens/EarningScreen'
import OTPloginScreen from '../Screens/OTPloginScreen';
import OTPverifyScreen from '../Screens/OTPverifyScreen';
import LanguageScreen from '../Screens/LanguageScreen'
import AppNav from './AppNav'
import {useTranslation} from 'react-i18next';

const Navigation = () => {
    const {t, i18n} = useTranslation();
    const [user, setuser] = useState(false)
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: true}}>
                    <Stack.Screen name="Onboard" component={OnboardScreen}  options={{ headerShown: false }}/>
                    {user ? (
                    <>
                        <Stack.Screen name="AppNav" component={AppNav} options={{ headerShown: false }}/>
                    </>
                    ) : (
                    <>
                        <Stack.Screen name="Language" component={LanguageScreen} options={{ headerShown: false }}/>
                        <Stack.Screen name="OTPlogin" component={OTPloginScreen} options={{ title: t('otplogin') }}/>
                        <Stack.Screen name="OTPverify" component={OTPverifyScreen} options={{ title: t('verifyotp') }}/>
                        <Stack.Screen name="WorkerInfo" component={WorkerInfo} options={{ title: t('tellusaboutyou') }}/>
                        <Stack.Screen name="Earning" component={EarningScreen} options={{ headerShown: false }}/>
                        <Stack.Screen name="AppNav" component={AppNav} options={{ headerShown: false }}/>
                    </>
                    )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
