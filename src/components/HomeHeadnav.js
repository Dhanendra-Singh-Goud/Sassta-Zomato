import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeHeadnav = () => {
  return (
    <View style={styles.container}>
     <Fontisto name="nav-icon-list-a" size={24} color="black" style={styles.myicon} />
     <View style={styles.containerIn}>
     <Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:5,}}>Foodie</Text>
     <MaterialCommunityIcons name="food-outline" size={24} color="black" style={styles.myicon} />
     </View>
     <MaterialCommunityIcons name="account-circle" size={24} color="black" style={styles.myicon} />
    </View>
  )
}

export default HomeHeadnav

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        elevation:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        padding:13,
        backgroundColor:'white',
       
    },
    containerIn:{
       flexDirection:'row',
       alignItems:'center',
    },
    myicon:{
        color:'red',
    }
})