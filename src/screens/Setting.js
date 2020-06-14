import React, {Component, useReducer} from "react";
import { View, Text,Image, StyleSheet} from "react-native";
import {Item, Label, Button, Input} from 'native-base';
import { Avatar } from 'react-native-elements';

export default function Profile(){
    const value ={
        name: "Nguyễn Văn A",
        nation_id: "1",
        address: "11111",
        phoneNumber: ""
    }
    return(
    <View style = {styles.container} >
        <Text style = {styles.title}> SETTING </Text>
        <View>
        <Avatar size="large" containerStyle = {styles.avatar} rounded source={require("../Assets/Images/avatar.png")} onPress={() => console.log("Change Avatar")} showAccessory />
                <Item inlineLabel>
                        <Label>Tên người dùng:</Label>
                    <Input style= {styles.input} placeholder = {value.name}/>
                </Item>
                <Item inlineLabel>
                        <Label>CMND:</Label>
                    <Input style= {styles.input} placeholder = {value.nation_id}/>
                </Item>
                <Item inlineLabel>
                        <Label>Địa chỉ:</Label>
                    <Input style= {styles.input} placeholder = {value.address}/>
                </Item>
                <Item inlineLabel>
                        <Label>SĐT:</Label>
                    <Input style= {styles.input} placeholder = {value.phoneNumber}/>
                </Item>
        </View>    
        <View style = {styles.buttonContainer}>
            <Button rounded success style={styles.button} > 
                <Text style={styles.buttonText}>Xác nhận</Text>
            </Button>
            <Button rounded danger style={styles.button} >
                <Text style={styles.buttonText} >Hủy</Text>
            </Button>
        </View>    
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: undefined,
        height: undefined,
        marginTop: 10,
        marginBottom:30,
        
      },
    title:{
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#010642',
    },
    avatar:{
        width: 150,
        height: 150,
        marginLeft: 100,
        marginRight: 120,
        marginTop:20,
        marginBottom: 20,
        justifyContent: 'center'
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
        marginLeft: 10,
        marginBottom: 10
    },
    input:{
        fontSize: 18
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