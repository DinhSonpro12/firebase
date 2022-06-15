// Login.js
import React, {Component, useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, Button, Image,
     SafeAreaView, Alert,TouchableOpacity,StatusBar, Dimensions} from 'react-native'
import '../firebase'
import {
    ToastAndroid,
    Platform,
    AlertIOS,
  } from 'react-native';

  import {
    getAuth,
    onAuthStateChanged,
    EmailAuthProvider,
    signInWithCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  } from 'firebase/auth';

  import firebase from 'firebase/app';

  import { getDatabase,
    ref,
    set,
    update,
    remove 
    } from "firebase/database";
import App from '../App';


/////////////////
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj3B2jCPUcHm5XEih8YK87qr0wHaORtuw",
  authDomain: "reactnativefire-f0377.firebaseapp.com",
  databaseURL: "https://reactnativefire-f0377-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactnativefire-f0377",
  storageBucket: "reactnativefire-f0377.appspot.com",
  messagingSenderId: "305324322492",
  appId: "1:305324322492:web:90d727be709aea2620aab9",
  measurementId: "G-FZLC7R5P8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//////////////////////





// import database from '@react-native-firebase/database';


const windownWidth = Dimensions.get('window').width;
const windownHeight= Dimensions.get('window').height;


export default Login =({navigation}) =>{

    const auth = getAuth();


    const db = getDatabase(app)
    // const p = firebase.auth().getDatabase()


        // func handel update data of user to realtime_db --Regis
        function PushData_user(name) {
            // uid = auth.currentUser.uid
            // email = auth.currentUser.email
            

            set(ref(db,'user/'), 
            {
                email: 'email',
                ten: 'name',
                pass: 'password',
            })
        }
    


    signOut(auth).then(() => {
        // Sign-out successful.
        

        }).catch((error) => {
        
            // An error happened.
        });

    // auto check_user_is.online
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            notifyMessage("Welcome")

            navigation.replace("Home")
          }
          else{
            notifyMessage("Login Fail: incorrect email or password")
          }
        })
    
        return unsubscribe
      }, [])

    // func_toast message
    function notifyMessage(msg) {
        if (Platform.OS === 'android') {
          ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
          AlertIOS.alert(msg);
        }
      }

    // func_HandleSigup
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Registered with:', user.email);
            // Alert.alert("lee","successful")
            notifyMessage("successful")
            PushData_user("son")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
      }

    // func_handle_Login
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            notifyMessage("successful_Login")
            // navigation.replace("Home")

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        });
    }


    const [getPasswordVisible, setPasswordVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style ={{height: '100%', width: '100%', backgroundColor: '#EDE3AF'}}> 
            <StatusBar barStyle = 'dark-content'/>
        <SafeAreaView style = {{flex: 1}}>
            <View style ={{height:'100%', width: '100%'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                    <View style = {{alignItems: 'flex-end', paddingRight: 15}}>
                        <Text style={{fontSize:16,color: '#646464'}}>Skip</Text>
                    </View>
                </TouchableOpacity>
                <View style= {{marginTop: 0.15*windownHeight, alignItems: 'center'}}>
                    <Image source={require('../resources/bake.png')}></Image>
                </View>
                {/* Username && Password*/}
                <View style ={{width:'100%', height: '20%', marginTop: 0.1*windownHeight, alignItems: 'center'}}>
                   
                    {/* Usename*/}
                    <View style ={{height: 40, width: windownWidth*0.6, marginTop: 10}}>
                        <TextInput 
                            autoCapitalize = 'none' 
                            placeholder='Username' 
                            style = {{backgroundColor:'white', height: "100%", width: "100%", borderColor: '#646464', borderWidth: 1, textAlign: 'center'}}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            >
                        </TextInput>
                    </View>

                    {/* Password*/}
                    <View style ={{flexDirection: 'row', height: 40, width: windownWidth*0.6, marginTop: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                        <TextInput
                            autoCapitalize = 'none'
                            placeholder='Password'
                            secureTextEntry = {getPasswordVisible? false:true}  
                            style = {{backgroundColor:'white', height: "100%", width: "100%", borderColor: '#646464', borderWidth: 1, textAlign: 'center'}}
                            value={password}
                            onChangeText={text => setPassword(text)}>
                        </TextInput>

                        <TouchableOpacity style ={{height:"60%", aspectRatio: 1, position: 'absolute', right: 0, paddingRight: 5}}
                        onPress ={()=>{
                            setPasswordVisible(!getPasswordVisible)
                        }}
                        >
                            <Image source={require('../resources/visible.png')} resizeMode= 'contain' style = {{height:'100%', width: '100%'}}></Image>
                        </TouchableOpacity>
                    </View>

                </View>
            
                {/*Login and Signup*/}
                <View style ={{width:'100%', height: '20%', marginTop: 0.2*windownHeight, alignItems: 'center'}}>

                    {/* Login*/}
                    <View style ={{height: 40, width: windownWidth*0.6, marginTop: 10}}>
                        <Button title='Login'
                            onPress={PushData_user("son")}>
                        </Button>
                    </View>

                    {/* SignUp*/}
                    <View style ={{height: 40, width: windownWidth*0.6, marginTop: 10}}>
                        <Button title='Sign in'
                            onPress={handleSignUp}>
                        </Button>                    
                    </View>

                </View>
            </View>
        </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
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
  }

})