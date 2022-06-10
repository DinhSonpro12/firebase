import React, {Component, useState} from 'react'
import { Text, View, StyleSheet,Button,Image,TouchableOpacity,StatusBar,FlatList,Dimensions,Alert,TextInput } from 'react-native';
import Constants from 'expo-constants';
const windownWidth = Dimensions.get('window').width;
const windownHeight= Dimensions.get('window').height;


import { Card } from 'react-native-paper';

export default function App() {
  return (
       <View style ={{height: '100%', width: '100%', backgroundColor: '#EDE3AF'}}>           
            {/* Tim kiem*/}
            <View style = {{height:40, width: "90%", alignItems: 'center', marginTop:0.07*windownHeight, flexDirection: 'row',backgroundColor:'white',marginHorizontal:15,borderRadius:20}}>  
            <TouchableOpacity style ={{height:"100%", aspectRatio: 1, position: 'absolute', paddingRight: 20, right:0}}>
                    <Image source={require('./src/assets/research1.png')} style={{width:'60%',height:'60%',paddingRight:30,marginTop:8}}></Image>
            </TouchableOpacity> 
                  <TextInput placeholder='Bạn đang tìm kiếm món nào...' style ={{height: '100%',     textAlign:'left',paddingLeft: 40, marginLeft:20, width: "80%",color:'black'}}></TextInput>      
            </View>
            <View style={{marginTop: 0.02*windownHeight,justifyContent: "center",alignItems:'center'}}>
                  <Text style={{fontSize:17,fontWeight:'bold'}}>MÓN TÌM KIẾM PHỔ BIẾN HÔM NAY</Text>
            </View>
            <FlatList
              data={
                [
                  {key:'1',namefood: 'Nước Giải Khát',namefood1:'Ăn Vặt',imgnamefood:'./src/assets/Nuocgiaikhat.png',imgnamefood1:'./src/assets/AnVat.png'},
                   {key:'2',namefood: 'Cá',namefood1:'Ức Gà',imgnamefood:'./src/assets/Ca.png',imgnamefood1:'./src/assets/UcGa.png'},
                   {key:'3',namefood: 'Thịt Heo',namefood1:'Cà Tím',imgnamefood:'./src/assets/ThitHeo.png',imgnamefood1:'./src/assets/CaTim.png'},
                   {key:'4',namefood: 'Thịt Kho Tiêu',namefood1:'Món Chay',imgnamefood:'./src/assets/ThitKhoTieu.png',imgnamefood1:'./src/assets/MonChay.png'},
                  {key:'5',namefood: 'NuocGiaiKhat',namefood1:'AnVat',imgnamefood:'./src/assets/Nuocgiaikhat.png',imgnamefood1:'./src/assets/AnVat.png'},
                  {key:'6',namefood: 'NuocGiaiKhat',namefood1:'AnVat',imgnamefood:'./src/assets/Nuocgiaikhat.png',imgnamefood1:'./src/assets/AnVat.png'},
                   {key:'7',namefood: 'NuocGiaiKhat',namefood1:'AnVat',imgnamefood:'./src/assets/Nuocgiaikhat.png',imgnamefood1:'./src/assets/AnVat.png'},
                  {key:'8',namefood: 'NuocGiaiKhat',namefood1:'AnVat',imgnamefood:'./src/assets/Nuocgiaikhat.png',imgnamefood1:'./src/assets/AnVat.png'},
                ]
              }
              renderItem={({item}) => 
               <View style={{height: 0.2*windownHeight, width: windownWidth*0.6, flexDirection: 'column'}}>
             
                  <View style ={{flexDirection: 'row', alignItems:'center', paddingTop:20, height: 0.08*windownHeight, width: '100%'}}>
                    <TouchableOpacity>
                      <View style={{flexDirection:'column'}}>
                        <Image source={require('./src/assets/UcGa.png')} style={{marginTop:100,marginLeft:10,width:180,borderRadius:10}} >
                        </Image>
                        <Text style={{marginTop:-25,marginLeft:25,fontSize:18,color:'#FFFFFF'}}> {item.namefood}</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={{flexDirection:'column'}}>
                        <Image source={require('./src/assets/AnVat.png')} style={{marginTop:100,marginLeft :10,width:180,borderRadius:10}} ></Image>
                       <Text style={{marginTop:-25,marginLeft:30,fontSize:18,color:'#FFFFFF'}}>{item.namefood1}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
               </View> 
               }
            />    
        </View>
  );
}