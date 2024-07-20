import { StyleSheet, Text, View, TouchableOpacity,Image ,ImageBackground} from 'react-native'
import React from 'react'

export default function FirstPage({navigation}) {
  return (
    <View style = {styles.Container}>

        <View style = {styles.HeadingTextContainer}>
                <Text style = {styles.HeadingText}>
                    <Text style = {{color: 'black'}}>Find The </Text>
                    <Text style = {{color: '#F91B56'}}>latest and greatest </Text>
                    <Text style = {{color: 'black'}}>{`theatre \nhere`}</Text>
                </Text>      
        </View>


        <View>
                 <Text style = {styles.SubText}>
                     {` Discover the latest theatre shows in town,\n from riveting dramas to captivating\n musicals, right here. Stay tuned for the\n latest performances that promise to\n leave you spellbound!`}
                 </Text>
        </View>


        <View>
            <Image source={require('../Assests/Image/Frame1.png')}style = {styles.Frame}/>
            <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}>
            <Image source={require('../Assests/Image/Button.png')}style = {styles.Button}/>
            </TouchableOpacity>
        </View>
        


        <View>
            <Image source={require('../Assests/Image/firstpage.png')}style = {styles.image}/>
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
        
        width : "100%",
         textAlign : 'justify'
     

    }

})