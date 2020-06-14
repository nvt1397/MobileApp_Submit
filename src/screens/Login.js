import React, {Component}  from "react";
import {TextInput, View, Text,Image, StyleSheet, ImageBackground, } from "react-native";
import {Input, Item, Button} from 'native-base';
import { useState } from "react";

export default function Login({navigation}){

    const [show,setShow] = useState(true);
    _hideComponent = () => {
        if (show == true) {
          setShow(false);
        }
    };

    
    return(
    <ImageBackground style = {background.container} source={require("../Images/backgroundLogin.jpg")}>
        <View style={styles.mainbody}>
            <View>
                {show ? (
                <Image style = {styles.imageLogin} source={require("../Images/Logo-hcmut.png")}></Image>) : null}                
            </View>       
            <Text style={styles.titleLogin}>Inspector</Text>
            <View>
                <Input placeholder = "Username"returnKeyType="next" onFocus={_hideComponent} blurOnSubmit={false} style = {styles.inputLogin}  maxLength={15}></Input>
                <Input placeholder = "Password" onFocus={_hideComponent}  style = {styles.inputLogin}  secureTextEntry={true} ></Input>
                    
                <Button rounded block style={styles.buttonLogin} 
                 onPress={() => navigation.navigate('Home')}  >  
                    <Text style = {styles.buttonLoginText}> LOGIN</Text>
                </Button> 
            </View>
        </View>
    </ImageBackground>
    )
}

const background = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    alignItems: 'center',
  },
  outline: {
    position: 'absolute'
  }
});

const styles = StyleSheet.create({
  mainbody:{
      position: 'absolute',
      marginTop:30,
      marginLeft:30,
      marginRight:30,
      marginBottom:30,
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  imageLogin: {
      width: 200,
      height: 204,
      marginLeft: 50,
      marginRight:50,
      marginTop: 30,
      marginBottom: 30,
  },
  overlay: {
      opacity: 0.5,
      backgroundColor: '#000000',
      width: 160,
      height: 52
  },
  button: {
      height: 36,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
  },
  titleLogin:{
      fontSize: 28,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#010642'
  },
  labelLogin:{
      fontSize: 16,
      marginTop: 10,
      marginLeft: 5,
      color: '#292828'
  },
  inputLogin:{
        marginTop: 10,
      borderRadius: 30,
      opacity: 0.5,
      backgroundColor: '#ffffff',
      width: 300,
      height: 40,
      textAlignVertical: 'center',
      paddingLeft: 10
  },
  buttonLogin: {
      marginTop: 30, 
      height: 50,
      color: '#292828' 
  },
  buttonLoginText:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#292828'
  }
})

