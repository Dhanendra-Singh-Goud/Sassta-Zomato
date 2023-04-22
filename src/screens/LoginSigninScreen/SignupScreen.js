import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {View, Text, StyleSheet,ScrollView, TextInput, TouchableOpacity  } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';

const SignupScreenScreen = ({navigation}) => {
  const [emailFocus, setEmailFocus]=useState(false)
  const [passwordFocus, setPasswordFocus]=useState(false)
  const [showPassword, setShowPassword]=useState(false)
  const [cpasswordFocus, setCPasswordFocus]=useState(false)
  const [showcPassword, setShowCPassword]=useState(false)
  const [nameFocus, setNameFocus]=useState(false)
  const [phoneFocus, setPhoneFocus]=useState(false)

  return (
    
   <View>
    <ScrollView>
      <View style={styles.container}>
    <StatusBar backgroundColor='red'/>
    <Text style={styles.title}>Sign Up</Text>
    <View style={styles.inputContainer}>
    <AntDesign name="user" size={24} color={
      nameFocus === true ?  'green' :'red'
    } />
    <TextInput style={styles.input} placeholder='User Name'
    onFocus={()=>{
      setEmailFocus(false)
      setPasswordFocus(false)
      setShowPassword(true)
      setCPasswordFocus(false)
      setShowCPassword(true)
      setNameFocus(true)
      setPhoneFocus(false)
    }}
    />
    </View>

    <View style={styles.inputContainer}>
      <AntDesign name="phone" size={24} color={
        phoneFocus === true? 'green' :'red'
      }  />
      <TextInput style={styles.input} placeholder='Phone Number'
      onFocus={()=>{
        setEmailFocus(false)
        setPasswordFocus(false)
        setShowPassword(true)
        setCPasswordFocus(false)
        setShowCPassword(true)
        setNameFocus(false)
        setPhoneFocus(true)
      }}
      />
    </View>


    <View style={styles.inputContainer}>
    <Zocial name="gmail" size={24} color={
      emailFocus === true?  'green' :'red'
    } />
    <TextInput style={styles.input} placeholder='Email'
    onFocus={()=>{
      setEmailFocus(true)
      setPasswordFocus(false)
      setShowPassword(true)
      setCPasswordFocus(false)
      setShowCPassword(true)
      setNameFocus(false)
      setPhoneFocus(false)
    }}
    />
    </View>

    <View style={styles.inputContainer}>
    <AntDesign name="lock" size={24} color={
      passwordFocus === true ? 'green' :'red' 
    } />
  
    <TextInput style={styles.input} placeholder='Password'
    onFocus={()=>{
      setPasswordFocus(true)
      setEmailFocus(false)
      setCPasswordFocus(false)
      setShowCPassword(true)
      setNameFocus(false)
      setPhoneFocus(false)
      
      
    }}
    secureTextEntry={showPassword=== true? true : false}
    />

    <Entypo name={showPassword == false ? 'eye':"eye-with-line" }size={24} color="black" style={styles.icon} 
      onPress={()=>{
         setShowPassword(!showPassword)
       }}
    />
    </View>

   {/*  */}

   <View style={styles.inputContainer}>
    <AntDesign name="lock" size={24} color={
      cpasswordFocus === true ? 'green' :'red' 
    } />
  
    <TextInput style={styles.input} placeholder=' Confirm Password'
    onFocus={()=>{
      setPasswordFocus(false)
      setEmailFocus(false)
      setCPasswordFocus(true) 
      setShowPassword(true)
      setNameFocus(false)
      setPhoneFocus(false)
    }}
    secureTextEntry={showcPassword=== true ? true : false}
    />

    <Entypo name={showcPassword == false ? 'eye':"eye-with-line" }size={24} color="black" style={styles.icon} 
      onPress={()=>{
         setShowCPassword(!showcPassword)
       }}
    />
    </View>

   {/*  */}
  
     <Text>Please Enter your Address</Text>
     <View style={styles.inputContainer}>
     <AntDesign name="home" size={24} color="black" />
      <TextInput placeholder='Enter your address'
      style={styles.input}
      />
      </View>
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.btn}>Sign In</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Text style={styles.forget}>Forget Password ?</Text>
      </TouchableOpacity>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.signinwith}>Sign in with</Text>
      <View style={styles.gfcontainer}>
        <TouchableOpacity >
          <View style={styles.gficon}>
          <AntDesign name="google" size={24} color="#dc143c" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.gficon}>
          <Entypo name="facebook" size={24} color="#3b5998" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.hx80}/>
     
          <Text>Already have an account ?
            <Text style={{color:'red',fontWeight:'400',}} onPress={()=>navigation.navigate('Login')}>Sign In</Text>
          </Text>
          
    </View>
    </View>
    </ScrollView>
   </View>
   
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'red',
    alignSelf:'center',
    marginBottom:10,
    elevation:5
  },
  inputContainer:{
    borderRadius:10,
    width:'80%',
    backgroundColor:'white',
    elevation:20,
    padding:10,
    marginVertical:8,
    flexDirection:'row'
  },
  input:{
    fontSize:17,
    marginLeft:15,
    width:'80%',
   
  },
  icon:{
    position:'absolute',
    right:13,
    marginVertical:8,
    padding:4,
  },
  btn:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    elevation:15,
    margin:12,
    padding:8,
    borderRadius:6,
    borderWidth:1,
    borderColor:'white',
    backgroundColor:'red',
    width:300,
    textAlign:'center',
  },
  forget:{
    color:'grey',
    fontSize:17,
    fontWeight:'500',
    marginBottom:7,
    marginTop:7,
    textAlign:'center',
  },
  or:{
    color:'red',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:7,
  },
  signinwith:{
    color:'grey',
    fontSize:17,
    fontWeight:'500',
    marginBottom:15,
    marginTop:7,
    textAlign:'center',
  },
  gfcontainer:{
   flexDirection:'row',
   justifyContent:'center'
  },
  gficon:{
   backgroundColor:'white',
   width:55,
   padding:7,
   elevation:10,
   borderRadius:10,
   margin:9,
   alignItems: 'center',
  },
  hx80:{
    borderBottomWidth:1,
    borderBottomColor:'grey',
    margin:10,
  },
  signup:{
     marginTop:10,
     marginBottom:15
  }
})
export default SignupScreenScreen

