// import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import splash from '../Assests/Image/Splash.png';
const Splash = ({navigation}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.navigate('FirstPage');
    }, 1000); 

   
    return () => clearTimeout(timer);
}, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={splash}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'center'
  }
});


  

export default Splash;
