import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import GhareBaire from '../Assests/Image/GhoreBaire.png';
import AntDesign from 'react-native-vector-icons/AntDesign';
import star from '../Assests/Image/Star.png';
import Javier from '../Assests/Image/Javier.png';
import Javier1 from '../Assests/Image/Javier1.png';
import Javier2 from '../Assests/Image/Javier2.png';

const castData = [
  { id: '1', image: Javier, name: 'Javier Bardem', role: 'Role 1' },
  { id: '2', image: Javier1, name: 'Actor 2', role: 'Role 2' },
  { id: '3', image: Javier2, name: 'Actor 3', role: 'Role 3' },
  { id: '4', image: Javier, name: 'Actor 4', role: 'Role 4' },
];

export default function ShowClick({navigation}) {
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.ImageContainer}>
        <Image source={GhareBaire} />
        <View style={styles.Icon}>
          <TouchableOpacity>
          <AntDesign name='arrowleft' size={30} color={'white'} onPress={()=>navigation.navigate('Home')}/>
          </TouchableOpacity>
          <AntDesign name='heart' size={25} color={'white'} />
        </View>
      </View>

      <View style={styles.TextContainer}>
        <View>
          <Image source={star} />
          <Text style={styles.Title}>Ghore Baire</Text>
          <Text style={styles.Subtitle}>{`#Biography # Crime Drama`}</Text>
          <Text>3 hr 20 min</Text>
          <View style={styles.Line} />
        </View>

        <View>
          <Text style={styles.Recommended}>Recommended</Text>
        </View>
      </View>

      <View style={styles.Storyline}>
        <Text style={styles.StorylineText}>Storyline</Text>
      </View>

      <View>
        <Text style={styles.Description}>{`Lorem ipsum dolor sit amet consectetur. Mattis commodo potenti tellus amet scelerisque luctus nunc enim. A purus et venenatis amet in. Convallis ornare in sit ac. Ultrices fermentum ipsum consectetur quis lectus tellus metus. Et lorem est parturient donec elementum eu amet. Egestas faucibus sagittis donec lorem.`}</Text>
      </View>

      <View>
        <Text style={styles.DirectorWriters}>
          {`Director: xxxxxxxxxxxxxxxxxxxxxxxx\nWriters: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nStars: xxxxxxxxxxxxxxxxxxxxxxxxxxxx`}
        </Text>
      </View>
      
      <Text style={styles.CastTitle}>CAST OVERVIEW</Text>
      
      <FlatList
        data={castData}
        renderItem={({ item }) => (
          <View style={styles.CastItem}>
            <Image source={item.image} style={styles.CastImage} />
            <Text style={styles.CastName}>{item.name}</Text>
            <Text style={styles.CastRole}>{item.role}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.CastList}
      />

      <TouchableOpacity style={styles.BookTicketButton} onPress={()=>navigation.navigate('BookTicket')}>
        <Text style={styles.BookTicketButtonText}>Book Ticket</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  ImageContainer: {
    marginTop: 35,
    position: 'relative',
    paddingBottom: 10,
  },
  Icon: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Title: {
    fontFamily: 'inter',
    color: 'black',
    fontSize: 24,
    fontWeight: '900',
  },
  Subtitle: {
    color: '#057DFE',
  },
  Recommended: {
    color: 'gray',
    fontFamily: 'Poppins',
    fontSize: 13,
  },
  Line: {
    height: 0.5,
    backgroundColor: '#687189',
    marginTop: 10,
    marginBottom: 10,
    width: '200%',
  },
  Storyline: {
    backgroundColor: '#FB1351',
    width: '50%',
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  StorylineText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '400',
  },
  Description: {
    color: '#6E6E6E',
    marginTop: 10,
  },
  DirectorWriters: {
    paddingTop: 10,
    paddingLeft: 15,
  },
  CastTitle: {
    paddingTop: 10,
    fontSize: 15,
  },
  CastList: {
    marginTop: 10,
  },
  CastItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  CastImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  CastName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  CastRole: {
    fontSize: 12,
    color: 'gray',
  },
  BookTicketButton: {
    backgroundColor: '#FB1351',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  BookTicketButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

