import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.txt}
                    onPress={() => Alert.alert("Sign Up", "Create Account")}
                    >
                    Create an Account?
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    footer: {
        padding: 20
    },
    txt: {
        fontSize: 18,
        fontFamily: 'poppins-semi-bold',
        color: 'white'
    }
})