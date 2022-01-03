import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Button = ({buttontext, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{buttontext}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: '60%',
        maxWidth: 300,
        backgroundColor: '#ffc107',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
    },
    text: {
        fontSize: 20,
        color: '#000000'
    }
})