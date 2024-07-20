import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Forgotpass from '../Assests/Image/ForgotPass.png'

export default function ForgotPass3({navigation}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image source={Forgotpass} style={styles.image} />
        </View>

        <View style={styles.secondContainer}>
          <Image source={require('../Assests/Image/LOGO.png')} style={styles.image1} />
          <Text style={styles.welcome}>Forgot Password</Text>
          
          <Text style= {{color :'black', fontFamily :'Poppins', fontWeight :'bold',fontSize : 15}}>Set a new password                                                               </Text>

          <Text style= {{color :'gray', fontFamily :'Poppins',fontSize : 13 , paddingTop : 5 , paddingBottom : 20}}>Create a new password. Ensure it differs from previous ones for security</Text>

          <Text style= {{color :'black', fontFamily :'Poppins', fontWeight :'bold',fontSize : 15}}> password                                                                                    </Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder='Password'
              placeholderTextColor="black"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Image source={passwordVisible ? require('../Assests/Image/eye.jpg') : require('../Assests/Image/eye_off.png')} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
          <Text style= {{color :'black', fontFamily :'Poppins', fontWeight :'bold',fontSize : 15}}>Confirm Password                                                               </Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder='Re-enter Password'
              placeholderTextColor="black"
              secureTextEntry={!rePasswordVisible}
            />
            <TouchableOpacity onPress={() => setRePasswordVisible(!rePasswordVisible)}>
              <Image source={rePasswordVisible ? require('../Assests/Image/eye.jpg') : require('../Assests/Image/eye_off.png')} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('ForgotPass4')} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Update Password</Text>
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
    paddingBottom: 20,
    marginTop: -30, // Adjusted to bring the second container up
  },
  image1: {
    marginTop : 50,
  },
  welcome: {
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
     marginTop: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '89%',
    marginBottom: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    borderRadius: 12,
    color: 'black',
    flex: 1,
    marginBottom: 10,
    width: '89%',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginLeft: -40,
  },
  appleDiv: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    padding: 8,
    marginBottom: 16,
    width: '89%',
    borderRadius: 12,
    justifyContent: 'center',
  },
  googleDiv: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    width: '89%',
    borderRadius: 12,
    justifyContent: 'center',
    marginBottom: 16,
  },
  appleText: {
    color: 'black',
    fontSize: 16,
  },
  googleText: {
    color: 'black',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#FB1351',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 10,
    width: '93%',
    marginTop : 80
  },
  loginButtonText: {
    color: 'white',
    fontFamily: 'poppins',
    fontSize: 17,
    alignSelf: 'center',
  },
});

