import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, Alert} from "react-native"

const LoadingPage = ({navigation}) => {
    return (
        <View style={{backgroundColor: '#FCFCFC', height: '100%', width: '100%'}}>
            <Image
                style={styles.image}
                source={require('../../../assets/images/loading-iamge.png')}
                resizeMode={'contain'}
            />
            <Text style={styles.header}>
               Find Your Best Furniture
            </Text>
            <Text style={styles.description}>Check website for latest pricing and availability. Images may be subject to copyright</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.push('Home')}
            >
                <Text style={{
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>
                    Let's Get Started
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: '90%',
        height: '60%',
        left: 18

    },
    header: {
        fontWeight: 'bold',
        fontSize: 35,
        paddingHorizontal: 24,
    },
    description: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        paddingRight: 50,
        color: '#777',
        fontWeight: '600',
        lineHeight: 24,
    },
    button: {
        marginTop: 20,
        left: 23,
        width: 228,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 26,
        borderRadius: 16,
        backgroundColor: "#F56335"
    },
   
  });

export default LoadingPage