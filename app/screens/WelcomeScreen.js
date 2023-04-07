import React from 'react';
import { ImageBackground, Image, StatusBar, StyleSheet, View, Text } from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={3} style={styles.background} source={require('../assets/background2.jpg')}>
            <StatusBar></StatusBar>
            <View style={styles.logoContainer} >
                <Image style={styles.logo}  source={require('../assets/logo2.png')} />
                <Text style={styles.slogan} >Sell your unwanted items hassle-free</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" />
                <AppButton title="Sign Up" color="secondary" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
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
    slogan: {
        fontSize: 20,
        fontWeight: 600,
    }
});

export default WelcomeScreen;