import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { Formik } from "formik";
import * as yup from "yup";



// REGISTRATION-SCREEN

export default function TabOneScreen() {
    // const [name, setName] = useState<string>()
    // const [surname, setSurname] = useState<string>()
    // const [email, setEmail] = useState<string>()
    // const [password, setPassword] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)

    const ErrorReg = () => {
    
        setLoading(true)
        setTimeout (() =>{
            setLoading(false)
          Alert.alert("Message", "Successfully Registered!");
        }, 3000)
        }
    


    const registerSchema = yup.object({
        email: yup.string().required('Email is required').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/, 'Invalid e-mail'),
        password: yup.string().required('Password is required'),
        confirmPassword: yup.string().required('Confirm Password is required'),
        // confirmPassword: yup.string().equals([yup.ref('password'), null],  'password did not match')
    })


    return (

        <View style={styles.container}>

            {/* HEADER */}

            <View style={styles.head}>
                <LottieView style={styles.lottieHead}
                    source={
                        require('../assets/Animation/68766-register.json')
                    }
                    autoPlay
                />
            </View>


            {/* REGISTER */}

            <View style={styles.register}>
                <Text style={{
                    fontFamily: 'poppins-semi-bold',
                    fontSize: 38,
                    alignItems: 'center'
                }}>
                    Registration Screen
                </Text>

                <View style={styles.txtContainer}>
                    <TextInput
                        label='Please type your name'
                        style={styles.regContainer}
                        autoComplete={false}
                        mode={'outlined'}
                    />
                </View>

                <View style={styles.txtContainer}>
                    <TextInput
                        label='Please type your surname'
                        style={styles.regContainer}
                        autoComplete={false}
                        mode={'outlined'}
                    />
                </View>

                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={(values, acion) => {
                        console.log(values)
                    }}
                    validationSchema={registerSchema}
                >
                    {({ handleChange, values, errors, touched, handleSubmit }) => (

                        <View style={styles.txtContainer}>
                            <TextInput
                                label='Type e-mail address here'
                                style={styles.regContainer}
                                autoComplete={false}
                                mode={'outlined'}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                error={errors.email !== undefined}
                            />
                            {errors.email &&
                                <Text style={{
                                    color: 'red'
                                }}>
                                    {errors.email}
                                </Text>
                            }
                        </View>
                    )}
                </Formik>


                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={(values, acion) => {
                        console.log(values)
                    }}
                    validationSchema={registerSchema}
                >
                    {({ handleChange, values, errors, touched, handleSubmit }) => (
                        <View style={styles.txtContainer}>
                            <TextInput
                                label='Type your password here'
                                style={styles.regContainer}
                                autoComplete={false}
                                mode={'outlined'}
                                secureTextEntry
                                value={values.password}
                                onChangeText={handleChange('password')}
                                error={errors.password !== undefined}
                            />
                            {errors.password &&
                                <Text style={{
                                    color: 'red'
                                }}>
                                    {errors.password}
                                </Text>
                            }
                        </View>
                    )}
                </Formik>

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    onSubmit={(values, acion) => {
                        console.log(values)
                    }}
                    validationSchema={registerSchema}
                >
                    {({ handleChange, values, errors, touched, handleSubmit }) => (
                        <View style={styles.txtContainer}>
                            <TextInput
                                label='Confirm password'
                                style={styles.regContainer}
                                autoComplete={false}
                                mode={'outlined'}
                                secureTextEntry
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                error={errors.confirmPassword !== undefined}
                            />
                            {errors.confirmPassword &&
                                <Text style={{
                                    color: 'red'
                                }}>
                                    {errors.confirmPassword}
                                </Text>
                            }
                        </View>
                    )}
                </Formik>

                <View style={styles.toContainer}>
                    <TouchableOpacity
                    onPress={ErrorReg}
                    >
                        <Text style={{
                            fontSize: 25,
                            fontFamily: 'poppins-semi-bold'
                        }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/* FOOTER */}

            <View style={styles.foot}>
                <Text style={styles.footerTxt}>App Dev</Text>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        backgroundColor: 'wheat',
        padding: 15
    },
    regContainer: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'poppins-regular',
        height: 50,
    },
    head: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    register: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    foot: {
        flex: .5,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    txtContainer: {
        height: 50,
        fontFamily: 'poppins-regular',
        width: 280,
        marginTop: 20,
    },
    toContainer: {
        color: 'black',
        marginTop: 40,
        height: 48,
        width: 120,
        backgroundColor: '#F9EDEB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    lottieHead: {
        marginTop: 15,
        width: '40%',
        height: '70%',
        justifyContent:'flex-start',
        alignItems: 'center'
    },
    footerTxt: {
        fontFamily: 'poppins-bold',
        fontSize: 14,
        paddingBottom:10
    }
})


function handleChange(arg0: string): (((text: string) => void) & Function) | undefined {
    throw new Error('Function not implemented.');
}
// TABONE-ORIG
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Footer from '../components/Folder/Footer';
// import Header from '../components/Folder/Header';
// import Login from '../components/Folder/Login';
// export default function TabTwoScreen() {
// return (
//   // HEADER
//   <View style={styles.container}>
//     <View style={styles.head}>
//       <Header />
//     </View>
//     <View style={styles.log}>
//       <Login />
//     </View>
//     <View style={styles.foot}>
//     <Footer />
//     </View>
//   </View>
//   )
// }
// const styles = StyleSheet.create({
//   head: {
//    flex: 2,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'wheat'
//   },
//   log:{
//     flex: 2,
//   },
// foot:{
//   flex:1,
//   justifyContent:'flex-end',
//   alignItems:'center',
//   paddingBottom:15,
// },
// })




// onChangeText={(value: string) => {
// setCpassword(value);
// }}
// value={cpassword}