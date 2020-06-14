import React, { useState } from 'react'
import { View, Text, Image, Button,StyleSheet, Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { HeaderTitle } from '@react-navigation/stack'

export default function UploadScreen({ route, navigation }) {
  const { numberRoom } = route.params;
  const { subject} = route.params;
  const { teacher} = route.params;
  const { time } = route.params;
  const  [photo,setPhotos] = useState(null)
  const createButtonAlert = () =>
    Alert.alert(
      "Xác nhận thông tin kiểm tra lớp học",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  const createButtonAlertUpdate = ({navigation}) =>
    Alert.alert(
      "Chức năng đang cập nhật",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress:() => navigation.navigate('Home') }
      ],
      { cancelable: false }
    );

  handleChoosePhoto = () => {
    options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setPhotos(response)
      }
    })
  }

  return(
        <View style={styles.container}>
                <View style={styles.row1}>
                    <Text style={styles.header}>Phòng:{numberRoom}</Text>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.row2}>{time}</Text>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.row2}>Môn học:{subject}</Text>
                    <Text style={styles.row2}>Giảng viên:{teacher}</Text>
                </View>
                

          {photo && (
            <View>
            <Image
              source={{ uri: photo.uri }}
              style={{ width: 300, height: 300 }}
            />
            <Text style={styles.row3}>Số lượng người trong ảnh là: 5</Text>
            </View>
          )}
          <View style={styles.buttonrow1}>
            <Button style={styles.buttonrow2} title="Thêm ảnh" onPress={this.handleChoosePhoto} />
            <Button style={styles.buttonrow2} title="Chụp ảnh" onPress={createButtonAlertUpdate} />
          </View>
          <View style={styles.buttonrow1}>
            <Button style={styles.buttonSubmit} title="Xác nhận" onPress={createButtonAlert} />
          </View>
        </View>
  )
}
const styles= StyleSheet.create({
  buttonSubmit:{
    flex:1,
    backgroundColor: "#3275a8"
  },
  buttonrow1:{
    flexDirection: 'row'
  },
  buttonrow2:{
    flex:1
  },
  container:{
    alignContent:'center',
    alignItems:'center'
  },
  header:{
    fontSize: 30,
    flex: 1,
    textAlign:'center',
    padding: 5,
    fontWeight: "bold",
    color:"#03722B"
  },
  row1:{
      flexDirection: "row",
      alignItems:'center',
      paddingTop: 20,
      paddingBottom: 10,
  },
  row2:{
      flex: 1,
      textAlign:'center',
      fontSize: 20,
      padding: 5,
      fontWeight: "bold",
      color:"#08777A"
      
  },
  row3:{
    textAlign:'center',
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
    color:"#08777A"
  }
})