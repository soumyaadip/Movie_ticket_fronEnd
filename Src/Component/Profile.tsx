import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import round from '../Assests/Image/round.png';
import edit from '../Assests/Image/edit.png';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.Navbar}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Ionicons name='arrow-back' size={30} color={'black'} style={{ paddingRight: 110,paddingTop: 5 }} />
        </TouchableOpacity>
        
        <Text style={styles.NavbarText}>Profile</Text>
      </View>

      <View style={styles.sub1}>
        <Image source={round} style={styles.profileImage} />
        <Text style={styles.profileName}>Soumyadip Singha</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('ProfileEdit')}>
          <Image source={edit} style={styles.editIcon} />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.divider} /> */}

      <View style={styles.infoSection}>
        <Ionicons name='person-circle' size={24} color={'black'} style={styles.icon} />
        <Text style={styles.infoText}>Personal Info</Text>
        <TouchableOpacity style={styles.arrowButton}>
          <MaterialIcons name='navigate-next' size={24} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoSection5}>
        <Entypo name='ticket' size={24} color={'lightblue'} style={styles.icon} />
        <Text style={styles.infoText}>My Tickets</Text>
        <TouchableOpacity style={styles.arrowButton} onPress={()=>navigation.navigate('Ticket')}>
        <MaterialIcons name='navigate-next' size={24} color={'black'} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Ionicons name='cart-outline' size={24} color={'green'} style={styles.icon} />
        <Text style={styles.infoText}>Cart</Text>
        <TouchableOpacity style={styles.arrowButton} onPress={()=>navigation.navigate('Cart')}>
        <MaterialIcons name='navigate-next' size={24} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoSection}>
        <Ionicons name='notifications-outline' size={24} color={'#FFAD01'} style={styles.icon} />
        <Text style={styles.infoText}>Notification</Text>
        <TouchableOpacity style={styles.arrowButton} onPress={()=>navigation.navigate('Notification')}>
        <MaterialIcons name='navigate-next' size={24} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoSection}>
        <Ionicons name='card-outline' size={24} color={'navyblue'} style={styles.icon} />
        <Text style={styles.infoText}>Payment Method</Text>
        <TouchableOpacity style={styles.arrowButton}  onPress={()=>navigation.navigate('AddCard')}>
        <MaterialIcons name='navigate-next' size={24} color={'black'} />
        </TouchableOpacity>
      </View>



      <View style={styles.infoSection3}>
        <Feather name='shopping-cart' size={24} color={'green'} style={styles.icon} />
        <Text style={styles.infoText}>Watchlist</Text>
        <TouchableOpacity style={styles.arrowButton}>
        <MaterialIcons name='navigate-next' size={24} color={'black'} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection5}>
        <FontAwesome name='history' size={24} color={'lightblue'} style={styles.icon} />
        <Text style={styles.infoText}>History</Text>
        <TouchableOpacity style={styles.arrowButton}>
        <MaterialIcons name='navigate-next' size={24} color={'black'} />
        </TouchableOpacity>
      </View>


      <View style={styles.infoSection4}>
        <Entypo name='log-out' size={24} color={'red'} style={styles.icon} />
        <Text style={styles.infoText}>Log Out</Text>
        <TouchableOpacity style={styles.arrowButton}  onPress={()=>navigation.navigate('Login')}>
        <MaterialIcons name='navigate-next' size={24} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Navbar: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
    alignItems: 'center',
  },
  NavbarText: {
    fontFamily: 'Poppins',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 8,
  },
  sub1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20,
    paddingLeft: 5,
    marginBottom : 20
  },
  profileImage: {
    height: 60,
    width: 60,
  },
  profileName: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    paddingLeft: 10,
  },
  editIcon: {
    height: 24,
    width: 24,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
     backgroundColor : '#F6F8FA',
  },
  infoSection3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop : 20,
    backgroundColor : '#F6F8FA'
  },
  infoSection4: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingTop : 20,
    backgroundColor : '#F6F8FA'
  },
  infoSection5: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom : 20,
    backgroundColor : '#F6F8FA'
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'regular',
    flex: 1,
    color : 'black'
  },
  arrowButton: {
    padding: 5,
  },
});

