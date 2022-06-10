import React, {Component, useState} from 'react'
import { Text, View, StyleSheet,Button,Image,TouchableOpacity,StatusBar,FlatList,Dimensions,Alert,TextInput } from 'react-native';
import Constants from 'expo-constants';
const windownWidth = Dimensions.get('window').width;
const windownHeight= Dimensions.get('window').height;

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={{flex: 1,backgroundColor:'#EDE3AF'}}>
        {/* Tim kiem*/}
            <View style = {{height:30, width: "100%", alignItems: 'center', marginTop:0.04*windownHeight, flexDirection: 'row' }}>
                <View style = {{height:40, width: "90%", alignItems: 'center', marginTop:0.07*windownHeight, flexDirection: 'row',backgroundColor:'white',marginHorizontal:15,borderRadius:20}}>  
            <TouchableOpacity style ={{height:"100%", aspectRatio: 1, position: 'absolute', paddingRight: 20, right:0}}>
                    <Image source={require('./src/assets/research1.png')} style={{width:'60%',height:'60%',paddingRight:30,marginTop:8}}></Image>
            </TouchableOpacity> 
                  <TextInput placeholder='Bạn đang tìm kiếm món nào...' style ={{height: '100%',     textAlign:'left',paddingLeft: 40, marginLeft:20, width: "80%",color:'black'}}></TextInput>      
                </View>
          </View>
          <View style={{flexDirection:'row'}}>  
                  <Image source={require('./src/assets/Icon2.png')} style={{width:'10%',height:'35%',marginLeft:10,marginTop:60}}></Image>
                   <View style={{marginTop: 0.08*windownHeight,justifyContent: "center",alignItems:'center'}}>
                       <Text style={{fontSize:17,fontWeight:'bold',marginLeft:20}}>Món Thịt Kho Tiêu Đã Kiểm Chứng</Text>
                  </View>
          </View>  
          <View>
            <View>
              <FlatList
              horizontal
            data = {
            [
                {key: '1' ,imgPersion: './src/assets/ThitHeo1.png'},
                {key: '1' ,imgPersion: './src/assets/ThitHeo1.png'},
                {key: '1' ,imgPersion: './src/assets/ThitHeo1.png'},
                {key: '1' ,imgPersion: './src/assets/ThitHeo1.png'},
                {key: '1' ,imgPersion: './src/assets/ThitHeo1.png'},
                {key: '1' ,imgPersion: './src/assets/ThitHeo1.png'},
                {key: '1' ,imgPersion: './src/assets/ThitHeo1.png'},
            ]
        }       
          renderItem={({item}) =>  
                                <Image source ={require('./src/assets/ThitHeo1.png')} resizeMode= 'contain' style = {{aspectRatio: 1,height:10, width: 150,marginTop:30}}></Image>
          }       
                />   
            </View>
        <FlatList
          data={
            [ 
              {key:'1',heading:'Thịt kho tiêu đơn giản',img1:'./src/assets/Icon3.png',namecook:'Lâm Võ',heading1:'Thịt ba rọi, Gia vị: đường, muối tiêu, hạt nêm, nước màu, nước mắm ',img2:'./src/assets/ThitHeo1.png'},
              {key:'1',heading:'Thịt kho tiêu đơn giản',img1:'./src/assets/Icon3.png',namecook:'Lâm Võ',heading1:'Thịt ba rọi, Gia vị: đường, muối tiêu, hạt nêm, nước màu, nước mắm ',img2:'./src/assets/ThitHeo1.png'},
              {key:'1',heading:'Thịt kho tiêu đơn giản',img1:'./src/assets/Icon3.png',namecook:'Lâm Võ',heading1:'Thịt ba rọi, Gia vị: đường, muối tiêu, hạt nêm, nước màu, nước mắm ',img2:'./src/assets/ThitHeo1.png'},
              {key:'1',heading:'Thịt kho tiêu đơn giản',img1:'./src/assets/Icon3.png',namecook:'Lâm Võ',heading1:'Thịt ba rọi, Gia vị: đường, muối tiêu, hạt nêm, nước màu, nước mắm ',img2:'./src/assets/ThitHeo1.png'},
            ]
          }
           renderItem={({item}) =>    
            <View style={{backgroundColor:'white',marginHorizontal:10,marginTop:20,height:430,borderRadius:15}}>
                    <Text style={{marginTop:10,fontSize:20,fontWeight:'bold',marginLeft:20}}> Thịt kho tiêu đơn giản</Text> 
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('./src/assets/chef2.png')} style={{marginLeft:10,marginTop:15}}></Image>
                            <Text style={{fontSize:20,marginLeft:30,marginTop:30}}>Lâm Võ </Text>
                        </View>
                        <Text style={{fontSize:20,marginTop:20,marginHorizontal:20}}>Thịt ba rọi, Gia vị: đường, muối tiêu, hạt nêm, nước màu, nước mắm</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                        <TouchableOpacity>
                          <Image source ={require('./src/assets/ThitBaChi.png')}  style = {{height:200, width: 150,marginTop:20,marginLeft:25,borderRadius:20}}></Image>
                        </TouchableOpacity>
                        </View>
                        <View style={{paddingLeft:20}}>
                          <Image source ={require('./src/assets/GiaVi.png')}  style = {{height:200, width: 150,marginTop:20,borderRadius:20}}></Image>
                        </View>
                    </View> 
            </View>
           }
           />
      </View>
  </View>
  );
}