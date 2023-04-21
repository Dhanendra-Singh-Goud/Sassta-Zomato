import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import logo1 from '../../../assets/logo1.png'


export default function WelcomeScreen({navigation}) {
  return (
    <>
    <View style={styles.container}>
        <StatusBar style='auto'
        backgroundColor='white' />
      <Text style={styles.title}>Welcome To Foodie</Text>
      <View style={styles.logoout}>
        <Image style={styles.logo} source={logo1}/>
      </View>
      <View style={styles.hx80}/>
      <View style={styles.txtline}>
        <Text style={styles.txt}>Find the best Food around you at lowest price</Text>
      </View>
      <View style={styles.hx80}/>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.btn}> Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
        <Text style={styles.btn}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff4242',
        width:'100%',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 45,
    },
    txtline:{
        justifyContent:'center',
        alignItems:'center',
        padding:8,
    },
    txt:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    logoout:{
      width:'100%',
      height:'40%',
     marginRight:50,
      alignItems:'center',
    },
    logo:{
     width:'100%',
     height:'100%',
    },
    hx80:{
      borderBottomWidth:1.5,
      borderBottomColor:'white',
      margin:10,
      width:'80%',
    },
    btn:{
      color:'red',
      fontSize:20,
      fontWeight:'500',
      elevation:10,
      margin:12,
      padding:5,
      borderRadius:6,
      borderWidth:1,
      borderColor:'white',
      backgroundColor:'white',
    },
    btnView:{
      flexDirection:'row',
    
    }

})