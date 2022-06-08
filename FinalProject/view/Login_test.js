// Login.js
import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, Button, Image, SafeAreaView, Alert,TouchableOpacity} from 'react-native'
export default Login =({navigation}) =>{
    return ( 
        <SafeAreaView>
        <View style = {styles.container}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}> 
                <View style = {styles.textBoqua}>
                    <Text style = {{alignSelf: 'flex-end', marginRight: 10}}>Bỏ qua</Text>
                </View>
            </TouchableOpacity>
            <View style = {styles.img}>
                <Image source={require('/home/nguyentai/FinalProject/resources/bake.png')}></Image>
            </View>
            <View style = {styles.inputcontainer}>
                <TextInput style = {styles.textInput} placeholder = 'Username'></TextInput>
                <TextInput style = {styles.textInput} placeholder = 'Password' ></TextInput>
                <View style = {styles.buttonLogin}>
                    <Button color = '#302D1A' title='Login' onPress={()=>{navigation.navigate('Home')}}></Button>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  textBoqua:{
  alignSelf: 'flex-start',
  flex: 1,
  marginTop: 25,
  marginRight: 5,
  width: '100%',
  color: '#646464',
  },
  inputcontainer: {
    flex: 3,
    width: '100%',
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#EDE3AF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    height: 40,
    width: '75%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    alignSelf: 'center',
    marginBottom: 10
  },
  buttonLogin: {
    width: '25%',
    marginTop: 20,
    alignSelf: 'center',
  },
  img:{
    flex:1 }
})