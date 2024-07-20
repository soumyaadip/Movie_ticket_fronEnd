import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';
import ForgotPass from '../Assests/Image/ForgotPass.png';

export default function ForgotPass2({ navigation }) {
  const [code, setCode] = useState(['', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleInputChange = (value, index) => {
    if (value.length === 1 && index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <Image source={ForgotPass} style={styles.image} />
        </View>

        <View style={styles.secondContainer}>
          <Image source={require('../Assests/Image/LOGO.png')} style={styles.image1} />
          <Text style={styles.welcome}>Forgot Password</Text>
          <Text style={styles.subText}>We sent a reset link to contact@dscode...com</Text>
          <Text style={styles.subText1}>enter 5 digit code that mentioned in the email</Text>
          <View style={styles.inputContainer}>
            {code.map((value, index) => (
              <TextInput
                key={index}
                ref={el => inputRefs.current[index] = el}
                style={styles.inputBox}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={(text) => handleInputChange(text, index)}
                value={value}
              />
            ))}
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('ForgotPass3')} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Verify Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    // flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backgroundImage: {
    height: 250, 
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
    marginTop: -30,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    marginBottom: 50,
  },
  subText: {
    color: '#A9A2A3',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 2
  },
  subText1: {
    color: '#A9A2A3',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  inputBox: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    borderRadius: 12,
    color: 'black',
    textAlign: 'center',
    width: '18%',
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
    fontSize: 16,
    alignSelf: 'center',
  },
});
