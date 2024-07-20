import { StyleSheet, Text, View,TouchableOpacity ,Image,TextInput,ScrollView} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Profile from '../Assests/Image/ProfilePic.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
export default function ProfileEdit({navigation}) {
  return (
    <View style={styles.Container}>

        <View style={styles.Navbar}>
            <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <AntDesign name='arrowleft' size={30} color={'black'} style={{ paddingLeft: 10 }} />
            </TouchableOpacity>
            </View>
            <View>
            <Text style={styles.NavbarText}>My Profile</Text>
            </View>
      </View>

      <View style={styles.ProfileContainer}>
            <Image source={Profile} style={styles.Image}/>
            <Text style={{color : 'black', fontSize : 20 ,  fontFamily : 'Poppins',  fontWeight : 'bold',paddingLeft : 5}}>GFXAgency</Text>
            <Text>xxxxxxxx@gmail.com</Text>
      </View>

      <ScrollView style={{paddingLeft : 20}}>
        <Text style={{color : 'black', fontFamily : 'Poppins', fontSize : 15, fontWeight : 'bold',paddingBottom : 10}}>Your Email</Text>
        <View style={styles.InputWrapper}>
            <MaterialCommunityIcons name='email-edit-outline' size={25}/>
            <TextInput placeholder="xxx@gmail.com" placeholderTextColor="#666" />
          </View>

          <Text style={{color : 'black', fontFamily : 'Poppins', fontSize : 15, fontWeight : 'bold',paddingBottom : 10}}>Phone Number</Text>
        <View style={styles.InputWrapper}>
            <Feather name='phone-call' size={25}/>
            <TextInput placeholder=" +98753653" placeholderTextColor="#666" keyboardType='numeric'/>
          </View>

          <Text style={{color : 'black', fontFamily : 'Poppins', fontSize : 15, fontWeight : 'bold',paddingBottom : 10}}>Password</Text>
        <View style={styles.InputWrapper}>
            <AntDesign name='lock' size={25}/>
            <TextInput placeholder="..........." placeholderTextColor="#666" />
          </View>

          <Text style={{color : 'black', fontFamily : 'Poppins', fontSize : 15, fontWeight : 'bold',paddingBottom : 10}}>Your Name</Text>
        <View style={styles.InputWrapper}>
            <Feather name='inbox' size={25}/>
            <TextInput placeholder="full name" placeholderTextColor="#666" />
          </View>


          <TouchableOpacity style={styles.SaveButton}>
          <Text style={styles.SaveButtonText}>Save Details</Text>
        </TouchableOpacity>


      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
      },
      Navbar: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom : 40
      },
      NavbarText: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        paddingLeft: 100,
      },
      ProfileContainer : {
       alignSelf : 'center',
       paddingLeft : 35,
       paddingBottom : 40
      },
      Image : {
        height : 100,
        width : 100
      },
      InputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        width : 320,
        height : 58,
        
      },

      SaveButton: {
       borderWidth : 2,
       borderColor : 'red',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop : 20,
      },
      SaveButtonText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
      },
})