import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Signupback from '../Assests/Image/Signupback.png';

export default function SignUp({navigation}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image source={Signupback} style={styles.image} />
        </View>

        <View style={styles.secondContainer}>
          <Image source={require('../Assests/Image/LOGO.png')} style={styles.image1} />
          <Text style={styles.welcome}>Register</Text>
          <Text style={styles.subText}>Connect with us and enjoy your theatre.</Text>
          <TextInput style={styles.input} placeholder='Full Name' placeholderTextColor="black" />
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
          <Text style={{ color: 'gray', marginVertical: 15 }}>---------Or continue with social account--------</Text>
          <TouchableOpacity style={styles.appleDiv}>
            <Image source={require('../Assests/Image/Apple.png')} />
            <Text style={styles.appleText}>Login With Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleDiv}>
            <Image source={require('../Assests/Image/Google.png')} />
            <Text style={styles.googleText}>Login With Google</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={{ marginVertical: 10, color: 'black' }}>Already have an account? <Text style={{ color: 'red' }}>Log in</Text></Text>
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
    marginBottom: 5,
  },
  subText: {
    fontFamily: 'poppins',
    color: 'gray',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
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
    width: '89%',
  },
  loginButtonText: {
    color: 'white',
    fontFamily: 'poppins',
    fontSize: 20,
    alignSelf: 'center',
  },
});

