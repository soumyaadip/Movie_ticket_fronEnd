import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Card from '../Assests/Image/CardBack.png'

export default function AddCard({navigation}) {
  const [cvvVisible, setCvvVisible] = useState(false)
  const [saveCard, setSaveCard] = useState(false)

  return (
    <View style={styles.Container}>
      <View style={styles.Navbar}>
        <View>
          <TouchableOpacity>
            <AntDesign name='arrowleft' size={30} color={'black'} style={{ paddingLeft: 10 }} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.NavbarText}>Add Credit Card</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.CardContainer}>
          <Image source={Card} style={styles.CardImage} />
          <View style={styles.CardDetails}>
            <Entypo name='dots-three-vertical' color={'white'} size={20} style={styles.CardDots} />
            <Text style={styles.CardNumber}>{`XXXX XXXX XXXX 2534`}</Text>
            <View style={styles.CardInfo}>
              <View>
                <Text style={styles.CardInfoText}>CARD HOLDER</Text>
                <Text style={styles.CardInfoText}>SOUMYADIP SINGHA</Text>
              </View>
              <View style={styles.CardExpiry}>
                <Text style={styles.CardInfoText}>EXPIRE</Text>
                <Text style={styles.CardInfoText}>01/22</Text>
              </View>
            </View>
          </View>
        </View>

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

        <View style={styles.ToggleContainer}>
          <Text style={styles.ToggleText}>Save this card</Text>
          <Switch
            value={saveCard}
            onValueChange={setSaveCard}
          />
        </View>

        <TouchableOpacity style={styles.SaveButton}  onPress={()=>navigation.navigate('Profile')}>
          <Text style={styles.SaveButtonText}>Save Settings</Text>
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
  },
  NavbarText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    paddingLeft: 100,
  },
  CardContainer: {
    marginTop: 30,
    borderRadius: 15,
    alignItems: 'center',
    padding: 10,
  },
  CardImage: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius : 10
  },
  CardDetails: {
    position: 'absolute',
    width: '90%',
  },
  CardDots: {
    paddingTop : 20,
    alignSelf: 'flex-end',
  },
  CardNumber: {
    color: 'white',
    fontSize: 18,
    paddingBottom: 40,
    paddingTop: 40,
    paddingLeft: 20,
  },
  CardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  CardInfoText: {
    color: 'white',
    fontSize: 15,
  },
  CardExpiry: {
    alignItems: 'flex-end',
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
    padding: 10,
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
