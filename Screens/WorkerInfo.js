import React, {useState, useRef} from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, Image, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { jobs, states } from '../API/api';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

const WINDOW_WIDTH = Dimensions.get("window").width
const CARD_WIDTH = Math.round(WINDOW_WIDTH)

const WorkerInfo = () => {
    const navigation = useNavigation()
    const [name, setname] = useState('')
    const [job, setjob] = useState('Select your job here...')
    const [state, setstate] = useState('Select your area here...')

    return (
        <View style={{flex: 1}}>
            <View style={{marginVertical: 20, marginHorizontal: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000', marginBottom: 5}}>What is your name?</Text>
                <View style={{...styles.container, backgroundColor: '#ffffff'}}>
                    {/* <Icon name="person" style={{...styles.icon, color: 'grey'}}/> */}
                    <TextInput value={name} onChangeText={setname} placeholder={"Enter name here..."} placeholderTextColor={'grey'} style={{...styles.input, color: '#000000'}} />
                </View>
            </View>

            <View style={{marginVertical: 20, marginHorizontal: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000', marginBottom: 5}}>What do you do?</Text>
                    <SearchableDropdown
                        value={job}
                        onItemSelect={(item) => setjob(item.name)}
                        containerStyle={{ padding: 5, backgroundColor: '#ffffff',borderRadius: 10,elevation: 20,shadowColor: '#000000',shadowOffset: {width: -2, height: 2},shadowOpacity: 0.25,shadowRadius: 3, }}
                        onRemoveItem={(item, index) => {
                    
                        }}
                        itemStyle={{
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#eeeeee',
                            borderColor: '#bbb',
                            borderWidth: 1,
                            borderRadius: 5,
                        }}
                    itemTextStyle={{ color: '#000000' }}
                    itemsContainerStyle={{ maxHeight: 200 }}
                    items={jobs}
                    // defaultIndex={0}
                    resetValue={false}
                    textInputProps={
                        {
                            placeholder: job,
                            placeholderTextColor: 'grey',
                            // underlineColorAndroid: "transparent",
                            style: {
                                color: '#000000',
                                fontSize: 16
                            },
                            // onTextChange: text => alert(text)
                        }
                    }
                    listProps={
                        {
                            nestedScrollEnabled: true,
                        }
                    }
                />
        </View>

        <View style={{marginVertical: 20, marginHorizontal: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000', marginBottom: 5}}>Where do you live?</Text>
                    <SearchableDropdown
                        value={state}
                        onItemSelect={(item) => setstate(item.name)}
                        containerStyle={{ padding: 5, backgroundColor: '#ffffff',borderRadius: 10,elevation: 20,shadowColor: '#000000',shadowOffset: {width: -2, height: 2},shadowOpacity: 0.25,shadowRadius: 3, }}
                        onRemoveItem={(item, index) => {
                    
                        }}
                        itemStyle={{
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#eeeeee',
                            borderColor: '#bbb',
                            borderWidth: 1,
                            borderRadius: 5,
                        }}
                        itemTextStyle={{ color: '#000000' }}
                        itemsContainerStyle={{ maxHeight: 200 }}
                        items={states}
                        // defaultIndex={0}
                        resetValue={false}
                        textInputProps={
                            {
                                placeholder: state,
                                placeholderTextColor: 'grey',
                                // underlineColorAndroid: "transparent",
                                style: {
                                    color: '#000000',
                                    fontSize: 16
                                },
                                // onTextChange: text => alert(text)
                            }
                        }
                        listProps={
                            {
                                nestedScrollEnabled: true,
                            }
                        }
                    />
            </View>

            <Pressable style={styles.btncontainer} onPress={()=>navigation.navigate("Earning")}>
                <Text style={styles.btntext}>Continue</Text>
            </Pressable>
        </View>
    )
}

export default WorkerInfo

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        // marginVertical: 30,
        // marginHorizontal: 20,
        borderRadius: 10,
        elevation: 20,
        shadowColor: '#000000',
        shadowOffset: {width: -2, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    input: {
        fontSize: 16,
    },
    icon: {
        fontSize: 24
    },
    searchResults:{
        flex: 1,
        position: "absolute",
        zIndex: 100,
        top: 60,
        left: 0,
        // marginHorizontal: 10
    },
    card_container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        height: 100,
        width: CARD_WIDTH,
        borderRadius: 10,
        margin: 5,
    },
    Image: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
    },
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