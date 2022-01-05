import React from 'react'
import { StyleSheet, Text, View, FlatList, Pressable, Image, TouchableOpacity } from 'react-native'
import { nearbyjobs } from '../API/api'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {useTranslation} from 'react-i18next';

const MainScreen = () => {
    const {t, i18n} = useTranslation();
    return (
        <FlatList
                style={{backgroundColor: '#ffffff'}}
                ListHeaderComponent={
                    <>
                        <Text style={{fontSize: 25, color: '#000000', fontWeight:'bold', alignSelf: 'center', marginVertical: 20}}>{nearbyjobs.length} {t('newjobs')}</Text>
                    </>
                }
                horizontal={false} 
                data={nearbyjobs}
                numColumns={1}  
                renderItem={({item, index}) => (
                    <TouchableOpacity key={item.id} style={{height: 150,justifyContent: "space-between", backgroundColor: '#ffffff', margin: 10,padding: 10, elevation: 10,shadowColor: '#000000',shadowOffset: {width: -2, height: 2},shadowOpacity: 0.25,shadowRadius: 3,borderRadius: 10}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{}}>
                                {/* Address and job */}
                                <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>{item.address}</Text>
                                <Text style={{color: 'grey', fontSize: 16}}>{item.jobtype}</Text>
                            </View>
                            <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
                                {/* Time */}
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name="date-range" size={30} style={{color: '#000000'}}/>
                                    <Text style={{color: '#000000', fontSize: 16}}>{item.time}</Text>
                                </View>
                                <Text style={{color: 'grey', fontSize: 16}}>{item.date}</Text>
                            </View>
                        </View>
                        <View>
                            {/* Booking amount */}
                            <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>{t('bookingamt')}: ₹{item.amount}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                ListFooterComponent={
                    <>
        
                    </>
                }    
            />
    )
}

export default MainScreen

const styles = StyleSheet.create({})