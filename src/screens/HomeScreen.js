import React, {Component}from 'react'
import { 
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
    Text,
    border,
    TouchableOpacity,
    Button
} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Icon } from 'native-base';
import * as NativeBase from 'native-base';
import listtowerData from '../data/listtowerData'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import FooterComponent from './FooterComponent'
function Item({ name,numberRoom,numberVisit,numberNonvisit,navigation }) {
    return (
        <View style={styles.item}>
            <View>
            <TouchableOpacity
                onPress={() => navigation.navigate({name})}
            >
                <Text style={styles.headerTitlle}>{name}</Text>
                <Text style={styles.content}>
                Số phòng: {numberRoom}
                </Text>
                <Text style={styles.content}>
                Số phòng đã kiểm tra: {numberVisit}
                </Text>
                <Text style={styles.content}>
                Số phòng chưa kiểm tra: {numberNonvisit}
                </Text>
            </TouchableOpacity>

            </View>

         </View>
    )
  }


export default function HomeScreen({ navigation }){
    const [selected, setSelected] = React.useState(new Map());

    const onSelect = React.useCallback(
      name => {
        const newSelected = new Map(selected);
        newSelected.set(name, !selected.get(name));
  
        setSelected(newSelected);
      },
      [selected],
    )
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.headerTitlle}>Danh sách các toà</Text>
                <FlatList data={listtowerData} renderItem={({item})=>(
                        <Item

                            name={item.name}
                            numberRoom={item.numberRoom}
                            numberVisit={item.numberVisit}
                            numberNonvisit={item.numberNonvisit}
                            navigation={navigation}
                            selected={!!selected.get(item.name)}
                            onSelect={onSelect}
                            
                        />
                    )}
                    keyExtractor={item => item.name}
                    extraData={selected}
                />
             <FooterComponent/>
            </SafeAreaView>
            
        )
    
}
const styles= StyleSheet.create({
    container:{
        justifyContent: "center",
        height:760
    },
    button:{
        backgroundColor:"#0390fc",
        padding: 10
    },
    item:{
        backgroundColor:"#CEAE9B",
        padding: 10,
        marginVertical: 8,
        borderRadius: 30
    },
    headerTitlle:{
        color: "#2F3136",
        fontSize: 30,
        textAlign:'center',
        paddingBottom: 5,
        fontWeight: "bold"
    },
    content:{
        color: "#08777A",
        fontWeight: 'bold'
    }

})



