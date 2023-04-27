import { StyleSheet, Text, Image,View,  FlatList  } from 'react-native'
import React from 'react'

const CartSlider = ({title,data}) => {
  console.log(title)
  console.log(data)
  return (
    <View style={styles.container}>
      <Text style={styles.cardouthead}>
        {title}
        </Text> 
      <FlatList style={styles.cardsout}
      horizontal
      showsHorizontalScrollIndicator={false}
       data={data}
       renderItem={({item})=>( 
         <View style={styles.card}>
                            <View >
                                <Image source={{
                                    uri: item.foodImageUrl
                                }} style={styles.cardimgin} />
                            </View>
                            <View style={styles.s2}>
                                <Text style={styles.txt1}>{item.foodName}</Text>

                                <View style={styles.s2in}>
                                    <Text style={styles.txt2}>Rs.{item.foodPrice}/-</Text>
                                    {item.foodType == 'vegetarian' ? <Text style={styles.veg}></Text> : <Text style={styles.nonveg}></Text>}
                                </View>

                            </View>
                            <View style={styles.s3}>
                                <Text style={styles.buybtn}>
                                    Buy
                                </Text>
                            </View>
                            </View>

       )}/>
    </View>
  )
}

export default CartSlider

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
},
//card
cardouthead: {
    color: 'black',
    width: '90%',
    fontSize: 30,
    fontWeight: '200',
    borderRadius: 10,
    marginHorizontal: 10,
},
cardsout: {
    width: '100%',
    // backgroundColor: 'red',
},
card: {
    // backgroundColor: "aqua",
    width: 300,
    height: 300,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    backgroundColor: 'white',
},
cardimgin: {
    width: "100%",
    height: 200,
    borderRadius: 10,
},
s2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'aqua',
    borderRadius:15,
    margin:2
},
s2in: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
   
},
txt1: {
    fontSize: 18,
    color:'black',
    marginHorizontal: 5,
    width: 150,
},
txt2: {
    fontSize: 20,
    color: 'red',
    marginRight: 10,
},
s3: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 1,
    width: '100%',
},
buybtn: {
    backgroundColor: 'red',
    color:'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 20,
    borderRadius: 10,
    width: '90%',
    textAlign: 'center',
},
veg:{
    width:22,
    height:22,
    borderRadius:8,
    backgroundColor:'green'
},
nonveg:{
    width:22,
    height:22,
    borderRadius:8,
    backgroundColor:'red'
}
})