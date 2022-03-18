import React from 'react';
import { View, Image, Text, Dimensions,TextInput, Button, ImageBackground } from "react-native";
import Lottieview from "lottie-react-native";
import { useState } from 'react';

export default function CmpLogin() {
    
    const [email, setemail] = useState<string>("")

    return (
        // main container
    <View
    style={{
      flex: 1,
      backgroundColor: '#000814',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
    <ImageBackground
      style={{
        height: '100%',
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
      }}
     source={{
       uri: 'https://cdn.mos.cms.futurecdn.net/BfemybeKVXCf9pgX9WCxsc.jpg'
      }} 
      resizeMode="cover" 
    >
    {/* login container */}
    <View style={{
      height: Dimensions.get('screen').height * 0.5,
      width: '80%',
      backgroundColor: '#003459',
      padding: 10,
      borderRadius: 10,
      opacity: 0.8,
    }}
    >

      {/* title container */}
      <View
        style={{
          flex: 0,
          backgroundColor: '#007EA7',
          paddingVertical: 10,
          paddingHorizontal: 10,
          marginBottom: 10,
          borderRadius: 10,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontFamily: 'poppins-bold',
            fontSize: 24,
          }}
          numberOfLines={1}
        >
          LOG IN
        </Text>
      </View>

      {/* Image container */}
      <View
        style={{
          flex: 1,
          marginBottom: 10,
          borderRadius: 10,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Lottieview 
          style={{
            height: '100%',
            width: '100%',
          }}
          source={require('../../assets/Animation/98303-little-robot-icon.json')}
          autoPlay
        />

        {/* <Image
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover'
          }}
          source={require('../assets/images/1099445.png')}
        /> */}
      </View>

      {/* Inout container */}
      <View
        style={{
          flex: 0,
          minHeight: 100,
          maxHeight: 200,
          backgroundColor: '#007EA7',
          padding: 5,
          borderRadius: 10,
        }}
      >
        <TextInput
          style={{
            color: '#FFFFFF',
            height: 40,
            margin: 5,
            borderRadius:10,
            borderColor: '#00171F',
            borderWidth: 1,
            padding: 10,
            fontFamily: 'poppins-regular',
          }}
          onChangeText={text => setemail(text)}
          placeholder='Username'
        />
        <TextInput
          style={{
            color: '#FFFFFF',
            height: 40,
            margin: 5,
            borderRadius:10,
            borderColor: '#00171F',
            borderWidth: 1,
            padding: 10,
            fontFamily: 'poppins-regular',
          }}
          placeholder='Password'
          secureTextEntry={true}
        />
        <View
        style={{
          margin: 10,
          paddingHorizontal: 50,
        }}
        >
          <Button 
            title='Log In'
            onPress={()=> alert(email)}
            color='#00171F'
          />
        </View>
      </View>

    </View>
  </ImageBackground>  
  </View>
    );
}


