import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import HomeScreen from './HomeScreen';
export default function FooterComponent({screenName}) {
    const navigation = useNavigation();
    if(screenName='Profile'){
    return (
        <Container>
            <Content />
                <Footer>
                    <FooterTab>
                        <Button vertical active onPress={() => navigation.navigate('Home')} >
                            <Icon name="home" />
                            <Text>Home</Text>
                        </Button>
                        <Button vertical onPress={() => navigation.navigate('Profile')} >
                            <Icon name="person" />
                            <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        </Container>
    )
    }
    else if(screenName='Home'){
        return (
            <Container>
                <Content />
                    <Footer>
                        <FooterTab>
                            <Button vertical onPress={() => navigation.navigate('Home')} >
                                <Icon name="home" />
                                <Text>Home</Text>
                            </Button>
                            <Button vertical active onPress={() => navigation.navigate('Profile')} >
                                <Icon name="person" />
                                <Text>Profile</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
            </Container>
        )
        }
}   
