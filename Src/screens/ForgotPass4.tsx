import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import ForgotPass from '../Assests/Image/ForgotPass.png'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function ForgotPass4({navigation}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image source={ForgotPass} style={styles.image} />
        </View>

       

        <View style={styles.secondContainer}>
          <Image source={require('../Assests/Image/LOGO.png')} style={styles.image1} />

          <Ionicons name ='checkmark-done-circle-outline' size={120} color={'black'}/>
     
         <Text style={{color : 'black', fontFamily :'Poppins', fontWeight :'bold', fontSize : 18, paddingBottom : 30}}>Successful</Text>
         <Text style = {{color : 'gray',paddingBottom : 30}}>{`Congratulations! Your password has\nbeen changed. Click continue to login`}</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backgroundImage: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  secondContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    paddingBottom: 40,
    marginTop: -30,
  },
  image1: {
    marginTop : 20,
    marginBottom : 40
  },
  loginButton: {
    backgroundColor: '#FB1351',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 10,
    width: '89%',
  },
  loginButtonText: {
    color: 'white',
    fontFamily: 'poppins',
    fontSize: 16,
    alignSelf: 'center',
  },
});

