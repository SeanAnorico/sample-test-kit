import React from 'react';
import {View, StyleSheet} from 'react-native';
import Lottieview from "lottie-react-native";

export default function Header() {
    return (
        <View style={styles.lottiecontainer}>
            <Lottieview 
                style={styles.lottie}
                source={require('../../assets/Animation/40141-bigflip-login-screen.json')}
                autoPlay
            />
        </View>
    );
}
const styles = StyleSheet.create({
    lottiecontainer: {
        padding: 20,
        alignItems: 'center'
    },
    lottie: {
        width: '100%',
        height: '100%',
    }
})
