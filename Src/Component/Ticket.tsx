import { StyleSheet, Text, View,TouchableOpacity ,Image,TextInput,ScrollView} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import shape from '../Assests/Image/CombinedShape.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function Ticket({navigation}) {
  return (
    <View style= {styles.Container}>
        <View style={styles.Navbar}>
            <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <AntDesign name='arrowleft' size={30} color={'white'} style={{ paddingLeft: 10 }} />
            </TouchableOpacity>
            </View>
            <View>
            <Text style={styles.NavbarText}>My Ticket</Text>
            </View>
      </View>

      <View>
         <Image source={shape} style={styles.image}/>
         <View style={styles.subdiv}>
            <View style={styles.SubDiv1}>
                <Text>Tittle</Text>
                <Text style={{color :'#687189',fontSize : 20}}>Ghore Baire(2018)</Text>
                <Text style={{color: '#057DFE'}}>{`#Biography # Action Drama`}</Text>
            </View>

            <View style={styles.subdiv2}>
                <View>
                    <Text>Date</Text>
                    <Text>2 sep,2018</Text>
                </View>
                <View>
                    <Text>Time</Text>
                    <Text>10:20 PM</Text>
                </View>
                <View>
                    <Text>Format</Text>
                    <Text>Regular</Text>
                </View>
            </View>

            <View style={styles.subdiv3}>
                <View>
                    <Text>Date</Text>
                    <Text>2 sep,2018</Text>
                </View>
                <View>
                    <Text>Time</Text>
                    <Text>10:20 PM</Text>
                </View>
                <View>
                    <Text>Format</Text>
                    <Text>Regular</Text>
                </View>
            </View>

            <View style={styles.subdiv3}>
                <View>
                    <Text>Order ID</Text>
                    <Text>LOPA 543643</Text>
                </View>
                <View style={styles.completed}>
                    <Text style={{color : 'white'}}>COMPLETED</Text>   
                </View>

            </View>

            <View style={styles.subdiv3}>
                <View>
                    <FontAwesome name='cc-visa' color={'gray'} size={40}/>
                </View>
                <View >
                  <Text>**** **** **** 5434</Text>
                </View>
            </View>
            <Text style={{fontSize : 30}}>-------------------------------</Text>


            <View style={styles.subdiv5}>
                <View>
                    <Text>Booking ID</Text>
                    <Text>76286652856</Text>
                </View>
                <View>
                    <Text>Amount</Text>
                    <Text>900</Text>
                </View>
            </View>

            <View style={styles.subdiv6}>
                <AntDesign name='qrcode'size={100}/>
            </View>
            <Text>     Check your email <Text style={{color: 'red'}}>hellobuddy.com</Text></Text>

            <View style={styles.subdiv3}>
                <View>
                    <Text>Invite Your Freinds :</Text>
                </View>
                <View>
                    <TouchableOpacity>
                          <FontAwesome name='whatsapp' color={'green'} size={25}/>
                    </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity>
                <Ionicons name='logo-facebook' color={'blue'} size={25}/>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity>
                <Ionicons name='logo-twitter' color={'lightblue'} size={25}/>
                </TouchableOpacity>
                </View>
            </View>

         </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor :'blue'
      },
      Navbar: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom : 20
      },
      NavbarText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        paddingLeft: 100,
      },
      image : {
        resizeMode : 'contain',
        height :610
      },
      subdiv : {
        position : 'absolute',
        paddingLeft : 50
      },
      SubDiv1 : {
        marginTop :25,
      },
      subdiv2 : {
        width : 250,
        flexDirection : 'row',
        justifyContent : "space-between",
        paddingTop : 40
      },
      subdiv3 : {
        width : 250,
        flexDirection : 'row',
        justifyContent : "space-between",
        paddingTop : 20
      },
      completed : {
        borderWidth : 1,
        backgroundColor : '#BD3EB9',
        borderRadius : 10,
        width : 90,
        justifyContent : 'center'
      },
      subdiv5 : {
        width : 250,
        flexDirection : 'row',
        justifyContent : "space-between",
      },
      subdiv6 : {
        alignSelf :'center'
      }
})