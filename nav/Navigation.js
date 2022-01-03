import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardScreen from '../Screens/OnboardScreen'
import WorkerInfo from '../Screens/WorkerInfo'
import EarningScreen from '../Screens/EarningScreen'
import OTPloginScreen from '../Screens/OTPloginScreen';
import OTPverifyScreen from '../Screens/OTPverifyScreen';
import AppNav from './AppNav'

const Navigation = () => {
    const [user, setuser] = useState(false)
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: true}}>
                    <Stack.Screen name="Onboard" component={OnboardScreen}  options={{ headerShown: false }}/>
                    {user ? (
                    <>
                        <Stack.Screen name="AppNav" component={AppNav} />
                    </>
                    ) : (
                    <>
                        <Stack.Screen name="OTPlogin" component={OTPloginScreen} options={{ title: 'OTP Login' }}/>
                        <Stack.Screen name="OTPverify" component={OTPverifyScreen} options={{ title: 'Verify OTP' }}/>
                        <Stack.Screen name="WorkerInfo" component={WorkerInfo} options={{ title: 'Tell us about yourself' }}/>
                        <Stack.Screen name="Earning" component={EarningScreen} options={{ headerShown: false }}/>
                        <Stack.Screen name="AppNav" component={AppNav} />
                    </>
                    )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
