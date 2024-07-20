import { StyleSheet, Text, View, TouchableOpacity,Image,ImageBackground } from 'react-native'
import React from 'react'

export default function SecondPage({navigation}) {
  return (
    <View style = {styles.Container}>

        <View style = {styles.HeadingTextContainer}>
                <Text style = {styles.HeadingText}>
                    <Text style = {{color: 'black'}}>Enjoy your </Text>
                    <Text style = {{color: '#F91B56'}}>favorite show </Text>
                    <Text style = {{color: 'black'}}>{`at the\n`}</Text>
                    <Text style = {{color: '#F91B56'}}>{`theatre `}</Text>
                </Text>      
        </View>
        <View>
        <Text style = {styles.SubText}>
            {`Experience the magic of live performance\nat our theatre! Don't miss out on the\nlatest and greatest shows that will\ncaptivate and inspire you.`}
        </Text>
        </View>
        <View>
        <Image source={require('../Assests/Image/Frame2.png')}style = {styles.Frame}/>
        <TouchableOpacity onPress={()=>navigation.navigate('ThirdPage')}>
        <Image source={require('../Assests/Image/Button.png')}style = {styles.Button}/>
        </TouchableOpacity>

        </View>
        <View>
        <Image source={require('../Assests/Image/SecondPage.png')}style = {styles.image}/>
        </View>

       
     
    </View>
  )
}

const styles = StyleSheet.create({
    Container :{
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'space-between' 
    },
    HeadingTextContainer : {
        marginLeft: 20,
        marginTop : 30,
       
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
    image : {
        
    }

})