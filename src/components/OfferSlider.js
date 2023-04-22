import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

const OfferSlider = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.offerslider}>
        <Swiper autoplay={true} showsButtons={true} autoplayTimeout={3}>
        <View style={styles.slide}>
          <Image style={styles.image} source={require("../../assets/OfferSliderImages/img1.png")}/>
        </View>

        <View style={styles.slide}>
          <Image style={styles.image} source={require("../../assets/OfferSliderImages/img2.png")}/>
        </View>

        <View style={styles.slide}>
          <Image style={styles.image} source={require("../../assets/OfferSliderImages/img3.png")}/>
        </View>

        <View style={styles.slide}>
          <Image style={styles.image} source={require("../../assets/OfferSliderImages/img4.png")}/>
        </View>
        </Swiper>

        
      </View>
    </View>
  )
}

export default OfferSlider

const styles = StyleSheet.create({
  offerslider: {
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%",
    height:200,
    paddingHorizontal:10,
    backgroundColor:'#fff',
    marginTop:20
   
  },
  slide: {
    justifyContent:'center',
    alignItems:'center',
    width:"100%",
    height:"100%",
    borderRadius:10,
    backgroundColor:'#fff',
    padding:8
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius:20
  }
})