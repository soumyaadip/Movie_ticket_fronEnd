import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity , ScrollView} from 'react-native';
import React from 'react';
export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
      <Image source={require('../Assests/Image/Loginpage.png')}style = {styles.image}/>
      </View>

      <View style={styles.secondContainer}>
      <Image source={require('../Assests/Image/LOGO.png')}style = {styles.image1}/>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.subText}>Log in to your account using email or social networks</Text>
        <TouchableOpacity style={styles.appleDiv}>
        <Image source={require('../Assests/Image/Apple.png')}/>
          <Text style={styles.appleText}>Login With Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleDiv}>
        <Image source={require('../Assests/Image/Google.png')}/>
          <Text style={styles.googleText}>Login With Google</Text>
        </TouchableOpacity>
        <Text style={{ color: 'black', marginVertical:15 }}>---------Or continue with social account--------</Text>
        <TextInput style={styles.input} placeholder='Enter Mobile Number or Email ID' placeholderTextColor="black" />
        <TextInput style={styles.input} placeholder='Enter Password' placeholderTextColor="black" secureTextEntry />
        <TouchableOpacity onPress={()=>navigation.navigate('ForgotPass1')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
       
       <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
       <Text style={{ marginVertical: 10 }}>Didn’t have an account?  <Text style={{ color: 'red' }}>Register</Text></Text>
       </TouchableOpacity>
       
      
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent :'space-between',
    
  },
  backgroundImage: {
    flex: 1,
    
    
  },
  image: {
    width: '100%',
  },
  secondContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius : 40,
    borderTopRightRadius : 40,
    backgroundColor : 'white',
    
    
  },
  image1: {
    // paddingTop : 20,
    marginTop : 90
  },
  welcome: {
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    marginBottom: 10,
  },
  subText: {
    fontFamily: 'poppins',
    color: 'gray',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  appleDiv: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
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
    
  },
//   socialIcon: {
//     marginRight: 200,
//   },
  appleText: {
    color: 'black',
    fontSize: 16,
  },
  googleText: {
    color: 'black',
    fontSize: 16,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '89%',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    color: 'black',
  },
  forgotPassword: {
    color: 'red',
    marginBottom: 20,
    alignSelf : 'flex-end',
    paddingLeft : 160
  },
  loginButton: {
    backgroundColor: '#FB1351',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 10,
    // marginBottom: 20,
    width: '89%',
  },
  loginButtonText: {
    color: 'white',
    fontFamily : 'poppins',
    fontSize: 20,
    alignSelf : 'center'
  },
});
