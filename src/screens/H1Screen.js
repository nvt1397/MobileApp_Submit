import React, {Component}from 'react'
import { 
    StyleSheet,
    View,
    SafeAreaView,
    Button,
    FlatList,
    Text,
    SectionList,
    TouchableOpacity
} from 'react-native'
import listRoomH1 from '../data/listRoomH1'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import FooterComponent from './FooterComponent'


function Item({numberRoom, subject,navigation,teacher,time}) {
    return (
        <View style={styles.item}> 
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Chi tiết',{
                        numberRoom: numberRoom,
                        subject: subject,
                        teacher: teacher,
                        time:time
                      })
                }}
            >
                <View style={styles.row1}>
                    <Text style={styles.row2}>Phòng:{numberRoom}</Text>
                    <Text style={styles.row2}>{time}</Text>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.row2}>Môn học:{subject}</Text>
                    <Text style={styles.row2}>Giảng viên:{teacher}</Text>
                </View>
            </TouchableOpacity>
            </View>
    )
  }

export default function H1Screen({ navigation }){
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
                <SectionList
                    sections={listRoomH1}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => 
                        <Item
                    navigation={navigation}
                    numberRoom={item.numberRoom} 
                    subject={item.subject}
                    teacher={item.teacher}
                    time={item.time}
                    />
                    
                    }


                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.headerTitlle}>{title}</Text>
                    )}
                />
                <FooterComponent/>
            </SafeAreaView>
        )
    
}
const styles= StyleSheet.create({
    container:{
        justifyContent: "center",
        height: 670
    },
    button:{
        backgroundColor:"#0390fc",
        padding: 10
    },
    item:{
        flex:1,
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
    titlelist:{
        flexDirection: "row"
    },
    row1:{
        flexDirection: "row",
        alignContent:'center'
    },
    row2:{
        flex: 1,
        fontSize: 15,
        padding: 5,
        fontWeight: "bold",
        color:"#08777A"
        
    }
})



