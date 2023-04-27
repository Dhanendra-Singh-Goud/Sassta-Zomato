import { View,StatusBar, TextInput,Text, StyleSheet,ScrollView,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeadnav from '../../components/HomeHeadnav'
import Categories from '../../components/Categories'
import OfferSlider from '../../components/OfferSlider'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import {firebase} from '../../Firebase/FirebaseConfig'
import CartSlider from '../../components/CartSlider'

const HomeScreen = () => {
  const [foodData, setFoodData] =useState([])
  const [VegData, setVegData] =useState([])
  const [nonVegData, setNonVegData] =useState([])
  const [search, setSearch] = useState([])

  const foodRef = firebase.firestore().collection('FoodData')

  useEffect(() => {
    foodRef.onSnapshot(snapshot => {
        setFoodData(snapshot.docs.map(doc => doc.data()))
    }
    )
}, [])

useEffect(()=>{
  setVegData(foodData.filter(item=>item.foodType =='vegetarian'))
  setNonVegData(foodData.filter(item=>item.foodType =='non-vegetarian'))
},[foodData])

  console.log(foodData)
  return (
    
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HomeHeadnav/>
      <ScrollView>
      <View style={styles.searchbox} >
      <Feather name="search" size={24} color="black" />
      <TextInput placeholder='search' style={styles.input}
      onChangeText = {(text)=>{setSearch(text)}}
      />
      {search!= '' &&  <View style={styles.searchresultouter}>
        <FlatList style={styles.searchresultinner}
        data={foodData}
        renderItem={({item})=>{
          if(item.foodName.toLowerCase().includes(search.toLowerCase())){
            return(
              <View style={styles.searchresult}>
                <AntDesign name="arrowright" size={24} color="black" />
                <Text style={styles.searchresulttext}>{item.foodName}</Text>
              </View>
            )
          }
        }}/></View>}
      </View>
      <Categories/>
      <OfferSlider/>
      <CartSlider title={"Today's Special"} data={foodData}/>
      <CartSlider title={"Veg Hunger"} data={VegData}/>
      <CartSlider title={"Non-veg Lover"} data={nonVegData}/>
      </ScrollView>
    </View>
   
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
 
   
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
  },
 searchresultouter: {
     width: '100%',
    marginHorizontal: 30,
    height: '100%',
    backgroundColor:'aqua',
   
},
searchresultinner: {
    width: '100%',
},
searchresult: {
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    padding: 5,
},
searchresulttext: {
    marginLeft: 10,
    fontSize: 18,
    color: "red",
},
// bottomnav: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     backgroundColor: "red",
//     zIndex: 20,
// }
})

export default HomeScreen