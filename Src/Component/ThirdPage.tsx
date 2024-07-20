import { StyleSheet, Text, View, TouchableOpacity,Image,ImageBackground } from 'react-native'
import React from 'react'

export default function ThirdPage({navigation}) {
  return (
    <View style = {styles.Container}>

        <View style = {styles.HeadingTextContainer}>
                <Text style = {styles.HeadingText}>
                    <Text style = {{color: 'black'}}>Book your </Text>
                    <Text style = {{color: '#F91B56'}}>favorite theatre </Text>
                    <Text style = {{color: 'black'}}>{`show ticket \nhere`}</Text>
                </Text>      
        </View>
         <View>
                <Text style = {styles.SubText}>
                    {`Discover the best seats in the house for\nyour favorite theatre productions. Enjoy\neasy booking and exclusive discounts for\nan unforgettable experience. Don't miss\nout—reserve your tickets now!`}
                </Text>

         </View>
        <View>
                <Image source={require('../Assests/Image/Frame3.png')}style = {styles.Frame}/>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Image source={require('../Assests/Image/Button.png')}style = {styles.Button}/>
                </TouchableOpacity>
        </View>
       

        <View style = {styles.background1}>
                <Image source={require('../Assests/Image/1st.png')}style = {{height : 130}}/>
                <Image source={require('../Assests/Image/2nd.png')}style = {{height : 120,width : 190}}/>
                
         </View>

       <View style = {styles.background2}>
       <Image source={require('../Assests/Image/3rd.png')}style = {{height : 120,width : 180}}/>
       <Image source={require('../Assests/Image/4th.png')}style = {{height : 160, width : 180}}/>
       </View>


        
     
    </View>
  )
}

const styles = StyleSheet.create({
    Container :{
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'space-between' ,
    },
    HeadingTextContainer : {
        marginLeft: 20,
        marginTop : 10,
    },
    HeadingText : {
        fontFamily : 'Poppins',
        fontSize : 34,
        fontWeight : 'bold'
    },
    SubText :{
        width : "100%",
        fontFamily : 'Regular',
        fontSize : 16,
        color : 'black',
        marginLeft: 20,

    },
    Frame : {
        marginTop : 10,
        marginLeft: 20,
    },
    Button : {
        marginLeft: 20,
        marginTop : 15,
        height : 50,
        width : 50,
        
    },
    background1 : {
        position : 'relative',
        flexDirection : 'row',
        height : 160
    },
    background2: {
        position : 'relative',
        flexDirection : 'row',
         height : 160,
        
    },
  

})