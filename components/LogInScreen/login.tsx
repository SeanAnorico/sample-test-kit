import React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button} from 'react-native-elements'
import {TextInput} from 'react-native-paper'

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [visible, setVisible] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const logvalid = () =>{
        const un  = "Seanny"
        const pw = "Anorico"
        setLoading(true)
        setTimeout (() =>{
            setLoading(false)
            if(email === un && password === pw){
                return Alert.alert("Log In", "Success")
            }
            return Alert.alert("Log In", "Invalid Credentials")
        }, 3000)
        }

    return (
        <View style={styles.logincontainer}>

            <View style={styles.inputcontainer}>
            <TextInput 
                    style={styles.input}
                    label={"Username"}
                    value={email}
                    onChangeText={text => setEmail(text) }
                    mode={'outlined'}
                    activeOutlineColor={'black'}
                    right={
                        <TextInput.Icon
                            name={"email"}
                            color='black'
                        />
                    }
                    autoComplete={false}

                />
                <TextInput 
                    style={styles.input}
                    label={"Password"}
                    value={password}
                    onChangeText={text => setPassword(text) }
                    mode={'outlined'}
                    activeOutlineColor={'black'}
                    right={
                        <TextInput.Icon
                            name={visible ? "eye" : "eye-off"}
                            color='black'
                            onPress={()=> {
                                setVisible(!visible);
                            }}
                        />
                    }
                    secureTextEntry={!visible}
                    autoComplete={false}

                />

                {/* <TextInput style={styles.input}
                    onChangeText={text => setEmail(text)}
                    placeholder='Username'
                />
                <TextInput style={styles.input}
                    onChangeText={text => setPassword(text)}
                    placeholder='Password'
                    secureTextEntry={true}
                /> */}
                {/* <View style={styles.btncontainer}>
                    <Button 
                        title='Log In'
                        onPress={logvalid}
                        color='#273469'
                    />
                </View> */}
                <Button
                    title="SIGN UP"
                    onPress={logvalid}
                    loading={loading}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                />
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    logincontainer: {
        // backgroundColor: '#003459',
        paddingVertical: 30,
    },
    inputcontainer: {
        flex: 0,
        minHeight: 100,
        maxHeight: 200,
        padding: 5,
        borderRadius: 10,
        marginVertical: 40
    },
    input: {
        color: 'white',
        height: 40,
        margin: 5,
        borderRadius:10,
        // borderColor: 'white',
        // borderWidth: 1,
        paddingTop: 7,
        fontFamily: 'poppins-regular',
        fontSize: 18,
        backgroundColor: 'white',
    },
    btncontainer: {
        margin: 10,
        paddingHorizontal: 40,
        paddingVertical: 20
    }
})