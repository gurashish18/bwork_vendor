import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, Dimensions, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {nearbyjobs} from '../API/api'
import Icon from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;

const JobsAroundScreen = () => {
    return (
        <View style={{flex: 1}}>
            {/* <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={{ latitude : 37.78825 , longitude : -122.4324 }}
                    image={require('../assets/logo.png')}
                />
            </MapView> */}
            <ScrollView
                horizontal
                pagingEnabled
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                style={styles.scrollView}>

                    {nearbyjobs.map((marker, index) =>(
                            <View style={styles.card} key={index}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                    <Image source={marker.imageuri} style={{height: 60, width: 60, resizeMode: 'contain', backgroundColor: '#000000'}}/>
                                    <View style={{flexDirection: 'column', alignItems: 'center', maxWidth: 250}}>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000000'}}>{marker.jobtype}</Text>
                                        <Text style={{fontSize: 16, color: '#000000'}}>{marker.address}</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 20}}>
                                            <Icon name="date-range" size={30} style={{color: '#000000'}}/>
                                            <Text style={{color: '#000000', fontSize: 16}}>{marker.time}</Text>
                                        </View>
                                        <Text style={{color: 'grey', fontSize: 16}}>{marker.date}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000000'}}>Booking Amount: </Text>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#39C16C'}}>₹{marker.amount}</Text>
                                    </View>
                                </View>
                            </View>
                            ))}
            </ScrollView>
        </View>
    )
}

export default JobsAroundScreen

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
      },
      card: {
        padding: 5,
        justifyContent: 'space-between',
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
      },
})