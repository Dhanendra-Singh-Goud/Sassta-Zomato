import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
        <MaterialCommunityIcons name="noodles" size={24} color="black" style={styles.icon} />
        <Text style={styles.text}>BreakFast</Text>
        </View>

        <View style={styles.box}>
        <FontAwesome5 name="pizza-slice" size={24} color="black" style={styles.icon} />
        <Text style={styles.text}>Starters</Text>
        </View>

        <View style={styles.box}>
        <MaterialIcons name="lunch-dining" size={24} color="black" style={styles.icon}  />
        <Text style={styles.text}>Lunch</Text>
        </View>

        <View style={styles.box}>
        <MaterialIcons name="dinner-dining" size={24} color="black" style={styles.icon} /> 
        <Text style={styles.text}>Dinner</Text>
        </View>

        <View style={styles.box}>
        <Entypo name="drink" size={24} color="black" style={styles.icon}  />
        <Text style={styles.text}>Mojito Coctails</Text>
        </View>

        <View style={styles.box}>
        <MaterialCommunityIcons name="cupcake" size={24} color="black" style={styles.icon} />
        <Text style={styles.text}>Desert</Text>
        </View>

      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    width:'100%',
    borderRadius:12,
    elevation:15,
    marginHorizontal:5,
  },
  head:{
    fontSize:25,
    fontWeight:'600',
    color:`#dc143c`,
    alignSelf:'center',
    marginBottom:6,
    paddingBottom:6,
    borderBottomWidth:1,
    borderBottomColor:`#dc143c`,
  },
  box:{
    backgroundColor:'white',
    elevation:20,
    margin:10,
    padding:10,
    borderRadius:12,
    shadowColor: '#000',
    alignItems:'center',
    // width:90,
    // height:65,
    justifyContent:'center',
    flexDirection: 'row',
  },
 
  icon:{
    marginRight:10
  }
})