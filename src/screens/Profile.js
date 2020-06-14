import React, {Component, useReducer} from "react";
import { View, Text,Image, StyleSheet} from "react-native";
import {Button} from 'native-base';
import { Avatar } from 'react-native-elements';
import FooterComponent from './FooterComponent'
export default function Profile(){
    const value ={
        name: "Nguyễn Văn A",
        id: 1,
        national_id: 1111,
        address: 11111,
        phoneNumber: null
    }
    return(
    <View style = {styles.container} >
        <Text style = {styles.title}> PROFILE </Text>
        <View style = {styles.avatar}>
            <Avatar size="xlarge" rounded source={require("../Images/avatar.png")} />    
            <View>
                <Text style = {styles.nameText}> Họ và Tên: </Text>
                <Text style = {styles.valueField}> {value.name} </Text>
                <Text style = {styles.nameText}> ID: </Text>
                <Text style = {styles.valueField}> {value.id} </Text>
            </View> 
        </View>
        <View>
                <Text style = {styles.leftText}> CMND: </Text>
                <Text style = {styles.leftValueField}> {value.national_id} </Text>
                <Text style = {styles.leftText}> Địa chỉ: </Text>
                <Text style = {styles.leftValueField}> {value.address} </Text>
                <Text style = {styles.leftText}> SĐT: </Text>
                <Text style = {styles.leftValueField}> {value.phoneNumber} </Text>
        </View>    
        <View style = {styles.buttonContainer}>
            <Button rounded style={styles.button} > 
                <Text style={styles.buttonText}>Cập nhật</Text>
            </Button>
            <Button rounded style={styles.button} >
                <Text style={styles.buttonText} >Đổi mật khẩu</Text>
            </Button>
        </View>    
        <FooterComponent/>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: undefined,
        height: undefined,
        position: 'absolute',
        marginLeft:5,
        marginRight:30,
        marginTop:10,
        marginBottom:30
        
      },
    title:{
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#010642'
    },
    avatar:{
        flex: 2,
        flexDirection: 'row',
        alignContent:'flex-start'
    },
    nameText:{
        marginTop:5,
        flexDirection: 'row',
        fontSize: 18,
        fontWeight: 'bold'
    },
    valueField:{
        marginTop:5,
        borderWidth: 1,
        width: 200,
        fontSize: 16,
    },
    leftText:{
        marginTop:5,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    leftValueField:{
        marginTop:5,
        borderWidth: 1,
        width: '100%',
        fontSize: 16,
        flexDirection: 'row',
        justifyContent: 'center'
        
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 60
    },
    button: {
        width: '40%',
        height: 40,
        marginBottom: 80,
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#292828',
    }
})