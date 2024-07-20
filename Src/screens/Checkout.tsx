import { StyleSheet, Text, View,TouchableOpacity ,Image,TextInput,ScrollView} from 'react-native'
import React from 'react'
import background from '../Assests/Image/checkoutBack.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Card from '../Assests/Image/CreditCardr.png'
import Entypo from 'react-native-vector-icons/Entypo'
export default function Checkout({navigation}) {
  return (
    <View style= {styles.container}>
            <View style={styles.Navbar}>
            <View>
            <TouchableOpacity  onPress={()=>navigation.navigate('ChooseSeat')}>
                <AntDesign name='arrowleft' size={30} color={'white'} style={{ paddingLeft: 10 }} />
            </TouchableOpacity>
            </View>
            <View>
            <Text style={styles.NavbarText}>Checkout</Text>
            </View>
            
      </View>

      <View style={styles.Subdiv}>
         <Image source={background} style={styles.image}/>
         <View style={{position :'absolute',paddingLeft : 40}}>
            <Text style={{color : 'black',fontSize : 25,fontFamily : 'Poppins',paddingTop : 20}}>Ghore Baire</Text>
            <Text>2 sep,sat,10:00am </Text>
            <Text style={{paddingBottom : 30}}>{`Audi : #06,PVR Logix,Noida\nPlot No. BW-08 Golf Marg,Sector 32,\nNear Noida Metro Station,Noida\nUP-201301`}</Text>
            <Text>2 Gold ticket - 960</Text>

            <View style={{flexDirection :'row',justifyContent : 'space-between',paddingTop : 30,}}>
                <View>
                    <Text>Total amount</Text>
                </View>
                <View>
                    <Text>RS 960</Text>
                </View>
            </View>
         </View>
      </View>

      <View>
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

        <TouchableOpacity style={styles.SaveButton}  onPress={()=>navigation.navigate('PaymentMethod')}>
          <Text style={styles.SaveButtonText}>PROCEED PAYMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
        container : {
            flex : 1,
        },
      Navbar: {
        flexDirection: 'row',
        paddingTop : 30,
        backgroundColor : '#BD3EB9',
        paddingBottom : 10
      },
      NavbarText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        paddingLeft: 100,
      },
      Subdiv : {
           backgroundColor : '#BD3EB9'
      },
      image : {
        resizeMode : 'contain',
        height :250,
        width : '100%'
      },
      CardContainer: {
        marginTop: 20,
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
        color: 'black'
      },
      CardDots: {
        paddingTop : 20,
        alignSelf: 'flex-end',
      },
      CardNumber: {
        color: 'black',
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
        color: 'black',
        fontSize: 15,
        
      },
      CardExpiry: {
        alignItems: 'flex-end',
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