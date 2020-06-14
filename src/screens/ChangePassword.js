import React, {Component, useReducer} from "react";
import { View, Text,Image, StyleSheet} from "react-native";
import {Item, Label, Button, Input} from 'native-base';

export default function ChangePassword(){
    const value ={
        oldPassword: null,
        newPassword: null,
        checkPassword: null,
    }
    return(
    <View style = {styles.container} >
        <Text style = {styles.title}> CHANGE PASSWORD</Text>
        <View>
                <Item floatingLabel>
                        <Label>Mật khẩu cũ:</Label>
                    <Input style= {styles.input} secureTextEntry={true}/>
                </Item>
                <Item floatingLabel>
                        <Label>Mật khẩu mới:</Label>
                    <Input style= {styles.input} secureTextEntry={true}/>
                </Item>
                <Item floatingLabel>
                        <Label>Kiểm tra mật khẩu cũ:</Label>
                    <Input style= {styles.input} secureTextEntry={true}/>
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