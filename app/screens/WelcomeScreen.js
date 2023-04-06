import React from 'react';
import { ImageBackground, Image, StatusBar, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background2.jpg')}>
            <StatusBar></StatusBar>
            
            <View style={styles.logoContainer} >
                <Image style={styles.logo}  source={require('../assets/logo2.png')} />
                <Text>Sell your unwanted items hassle-free</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.signUpButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#FF914C',
    },
    logo: {
        width: 400,
        height: 300,
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center'
    },
    signUpButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#80411b',
    }
});

export default WelcomeScreen;