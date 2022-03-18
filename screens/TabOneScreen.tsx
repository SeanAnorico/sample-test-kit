import React from 'react';
import { View, Image, Text, Dimensions, Button, ImageBackground, StyleSheet } from "react-native";
import Footer from '../components/LogInScreen/footer';
import Header from '../components/LogInScreen/Header';
import Login from '../components/LogInScreen/login';



export default function TabOneScreen() {
  // return <CmpLogin />;
  return (
     <View style={styles.main}>
       {/* Header */}
       <View style={styles.header}>
          <Header />
       </View>
       {/* Login */}
       <View style= {styles.login}>
        <Login />
       </View>
       {/* Footer */}
       <View style={styles.footer}>
         <Footer />
       </View>
     </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#1E2749',
    alignItems: 'center',
  },
  header: {
    height: Dimensions.get('screen').height * 0.4,
    width: '80%',
    paddingTop:20,
    alignItems: 'center'
  },
  login: {
    // backgroundColor: '#E4D9FF',
    height: Dimensions.get('screen').height * 0.4,
    width: '80%',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom:10,
    // backgroundColor: '#30343F',
  },
})