import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import masterCard from '../Assests/Image/MasterCard.png'

export default function PaymentMethod({navigation}) {
    const [cvvVisible, setCvvVisible] = useState(false)
  const [saveCard, setSaveCard] = useState(false)
  return (
    <View style={styles.container}>
        <View style= {styles.Navbar}>
            <View>
              <TouchableOpacity  onPress={()=>navigation.navigate('CheckOut')}>
              <AntDesign name='arrowleft' size={30} color={'black'}/>
             
              </TouchableOpacity>
               
            </View>
            <View>
                <Text style={{color : 'black',fontSize : 18, fontWeight : 'bold'}}>Payment Method</Text>
            </View>
            <View>
                <AntDesign name='pluscircleo' size={30} color={'black'}/>
            </View>
        </View>

        <ScrollView style={styles.ScrollContainer}>
            <View style={styles.defaultCard}>
                <View style={{flexDirection : 'row',justifyContent : 'space-evenly', borderBottomColor : 'gray',borderWidth : 1}}>
                    <View>
                        <Image source={masterCard}/>
                    </View>
                    <View>
                        <Text style={{color : 'black',fontSize : 15,fontFamily : 'Poppins',fontWeight : 'bold'}}>Master Card</Text>
                        <Text style={{color : 'black',fontSize : 15,fontFamily : 'Poppins',fontWeight : 'bold'}}>{`XXXX XXXX XXXX 2435`}</Text>
                        <Text style={{color : 'black',fontSize : 13,fontFamily : 'Poppins',fontWeight : 'bold'}}>Expiry : 01/22       <Text>CVV : 908</Text></Text>
                    </View>
                </View>
                <View>
                <View style={styles.InputContainer}>
          <View style={styles.InputWrapper}>
            <FontAwesome name='user' size={20} color='#666' style={styles.InputIcon} />
            <TextInput style={styles.Input} placeholder="Name on Card" placeholderTextColor="#666" />
          </View>
          <View style={styles.InputWrapper}>
            <FontAwesome name='credit-card' size={20} color='#666' style={styles.InputIcon} />
            <TextInput style={styles.Input} placeholder="Card Number" placeholderTextColor="#666" keyboardType="numeric" />
          </View>
          <View style={styles.RowInputContainer}>
            <View style={styles.HalfWrapper}>
              <MaterialIcons name='calendar-today' size={20} color='#666' style={styles.InputIcon} />
              <TextInput style={styles.HalfInput} placeholder="Month/Year" placeholderTextColor="#666" keyboardType="numeric" />
            </View>
            <View style={styles.HalfWrapper}>
              <TouchableOpacity onPress={() => setCvvVisible(!cvvVisible)}>
                <Ionicons name={cvvVisible ? 'eye' : 'eye-off'} size={20} color='#666' style={styles.InputIcon} />
              </TouchableOpacity>
              <TextInput
                style={styles.HalfInput}
                placeholder="CVV"
                placeholderTextColor="#666"
                keyboardType="numeric"
                secureTextEntry={!cvvVisible}
              />
            </View>
          </View>
        </View>  
        </View>
        </View>


        <View style={{flexDirection : 'row',justifyContent : 'space-evenly',marginBottom :20}}>
                    <View>
                        <Image source={masterCard}/>
                    </View>
                    <View>
                        <Text style={{color : 'black',fontSize : 15,fontFamily : 'Poppins',fontWeight : 'bold'}}>Master Card</Text>
                        <Text style={{color : 'black',fontSize : 15,fontFamily : 'Poppins',fontWeight : 'bold'}}>{`XXXX XXXX XXXX 2435`}</Text>
                        <Text style={{color : 'black',fontSize : 13,fontFamily : 'Poppins',fontWeight : 'bold'}}>Expiry : 01/22       <Text>CVV : 908</Text></Text>
                    </View>
                </View>


                <View style={{flexDirection : 'row',justifyContent : 'space-evenly',marginBottom :20}}>
                    <View>
                        <Image source={masterCard}/>
                    </View>
                    <View>
                        <Text style={{color : 'black',fontSize : 15,fontFamily : 'Poppins',fontWeight : 'bold'}}>Master Card</Text>
                        <Text style={{color : 'black',fontSize : 15,fontFamily : 'Poppins',fontWeight : 'bold'}}>{`XXXX XXXX XXXX 2435`}</Text>
                        <Text style={{color : 'black',fontSize : 13,fontFamily : 'Poppins',fontWeight : 'bold'}}>Expiry : 01/22       <Text>CVV : 908</Text></Text>
                    </View>
                </View>


                <TouchableOpacity style={styles.SaveButton}  onPress={()=>navigation.navigate('Ticket')}>
          <Text style={styles.SaveButtonText}>Save Settings</Text>
        </TouchableOpacity>
            
            
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    Navbar : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        margin : 10,
        marginTop : 40,
        marginBottom : 40
    }, 
    ScrollContainer : {

    },
    defaultCard : {
        borderColor : "black",
        borderWidth : 1,
        margin : 10
    },
    InputContainer: {
        padding: 20,
        
      },
      InputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
      HalfWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
      },
      InputIcon: {
        marginRight: 10,
      },
      Input: {
        flex: 1,
        backgroundColor : '#F4F5F9',

      },
      HalfInput: {
        flex: 1,
      },
      RowInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      ToggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
      },
      ToggleText: {
        fontSize: 16,
        color: '#333',
      },
      SaveButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
      },
      SaveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
})