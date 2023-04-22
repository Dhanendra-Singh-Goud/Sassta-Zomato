import { View,StatusBar, TextInput,Text, StyleSheet } from 'react-native'
import React from 'react'
import HomeHeadnav from '../../components/HomeHeadnav'
import Categories from '../../components/Categories'
import OfferSlider from '../../components/OfferSlider'
import { Feather } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HomeHeadnav/>
      <View style={styles.searchbox} >
      <Feather name="search" size={24} color="black" />
      <TextInput placeholder='search' style={styles.input}
      />
      </View>
      <Categories/>
      <OfferSlider/>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom:182
  },
  searchbox:{
    borderRadius:30,
    backgroundColor: '#fff',
    elevation:30,
    padding: 10,
    margin: 10,
    width: '90%',
    alignItems:'center',
    flexDirection:'row', 
  
  },
  input: {
    width:'90%',
    marginLeft:10,
    fontSize:16
  }
})

export default HomeScreen