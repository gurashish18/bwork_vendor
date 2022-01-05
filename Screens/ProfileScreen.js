import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Pressable } from 'react-native'
import { profiledata } from '../API/api'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../components/Button'
import {useTranslation} from 'react-i18next';

const ProfileScreen = () => {
    const {t, i18n} = useTranslation();
    return (
        <FlatList
                style={{backgroundColor: '#ffffff'}}
                ListHeaderComponent={
                    <>
                        <Text style={{fontSize: 30, color: '#000000', fontWeight:'bold', alignSelf: 'center'}}>{t('profileprogress')}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginVertical: 20}}>
                            <View>
                                <Text style={{fontSize: 20, color: 'grey'}}>{t('completesteps')}</Text>
                                <Text style={{fontSize: 20, color: 'grey'}}>{t('tobecomeMember')}</Text>
                            </View>
                            <View>
                                <Icon name="camera-enhance" size={50} style={{color: '#ffc107'}}/>
                            </View>
                        </View>
                    </>
                }
                horizontal={false} 
                data={profiledata}
                numColumns={1}  
                renderItem={({item, index}) => (
                    <TouchableOpacity key={item.id} style={{backgroundColor: '#ffffff', flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between',  padding: 10, margin: 10, elevation: 10,shadowColor: '#000000',shadowOffset: {width: -2, height: 2},shadowOpacity: 0.25,shadowRadius: 3,borderRadius: 10}}>
                        <View>
                            <Text style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
                            <Text style={{color: '#000000', fontSize: 16}}>{item.text}</Text>
                        </View>
                        <View style={{}}>
                            <Icon name={item.icon} style={{color: '#ffc107'}} size={40}/>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                ListFooterComponent={
                    <>
                            <Pressable style={styles.btncontainer}>
                                <Text style={styles.btntext}>{t('submit')}</Text>
                            </Pressable>
                    </>
                }    
            />
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    btncontainer: {
        width: '60%',
        maxWidth: 300,
        backgroundColor: '#ffc107',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 20,
        alignSelf: 'center'
    },
    btntext: {
        fontSize: 20,
        color: '#ffffff'
    }
})