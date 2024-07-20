import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import screen from '../Assests/Image/Screen.png';

export default function ChooseSeat({ navigation }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: 81 }, (_, i) => ({
    id: i + 1,
    selected: false,
  }));

  const toggleSeatSelection = (id) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(id)
        ? prevSelectedSeats.filter((seatId) => seatId !== id)
        : [...prevSelectedSeats, id]
    );
  };

  const renderSeat = (seat) => (
    <TouchableOpacity
      key={seat.id}
      style={[
        styles.seat,
        selectedSeats.includes(seat.id) ? styles.selectedSeat : styles.availableSeat,
      ]}
      onPress={() => toggleSeatSelection(seat.id)}
    >
      <Text style={selectedSeats.includes(seat.id) ? styles.selectedSeatText : styles.availableSeatText}>
        {`H${seat.id}`}
      </Text>
    </TouchableOpacity>
  );

  const renderSeatRow = (start) => (
    <View style={styles.seatRow} key={start}>
      {seats.slice(start, start + 9).map((seat) => renderSeat(seat))}
    </View>
  );

  const renderSeatBlock = (start) => (
    <View key={start} style={styles.seatBlock}>
      {renderSeatRow(start)}
      {renderSeatRow(start + 9)}
      {renderSeatRow(start + 18)}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('BookTicket')}>
          <Ionicons name='arrow-back-outline' size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.navbarTitle}>Choose Seat</Text>
        <AntDesign name='heart' size={20} color={'red'} />
      </View>
      <ScrollView>
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.movieTitle}>Ghore Baire</Text>
          <Text style={styles.movieGenre}>{`#Biography #Crime Drama`}</Text>
        </View>
        <View style={styles.availableSeatInfo}>
          <View style={styles.availableSeatContainer}>
            <Text>Available</Text>
          </View>
          <View style={[styles.availableSeatContainer, styles.takenSeatContainer]}>
            <Text style={{ color: 'gray' }}>Taken</Text>
          </View>
          <View style={[styles.availableSeatContainer, styles.selectedSeat]}>
            <Text style={{ color: 'white' }}>Selected</Text>
          </View>
        </View>
        <View style={styles.screenContainer}>
          <Image source={screen} style={styles.screenImage} />
          <View style={styles.screenLabel}>
            <Text>Screen</Text>
          </View>
        </View>
        <View style={styles.seatsContainer}>
          <View style={styles.mainContainer}>
          <Text style={styles.price}>Regular `300</Text>
            {renderSeatBlock(0)}
           
          </View>
          <View style={styles.mainContainer}>
          <Text style={styles.price}>Gold `600</Text>
            {renderSeatBlock(27)}
            
          </View>
          <View style={styles.mainContainer}>
          <Text style={styles.price}>Platinum `900</Text>
            {renderSeatBlock(54)}
            
          </View>
        </View>
        <View style={{flexDirection : 'row',justifyContent : 'space-between'}}>
          <View style={{paddingLeft : 10}}>
            <Text style={{color : 'black',fontSize : 20}}>Select 2 Gold Seats</Text>
            <Text>2 june, Sat,10:20pm</Text>
            <Text>PVR Logix,Noida</Text>
          </View>

          <View style={{paddingRight : 10}}>
            <Text>Audi#09</Text>
            <Text>H9,H10</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.SeatButton} onPress={() => navigation.navigate('CheckOut')}>
          <Text style={styles.SeatButtonText}>Pay Rs 1200</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  navbarTitle: {
    color: 'black',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 18,
  },
  movieTitle: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  movieGenre: {
    color: '#057DFE',
    marginBottom: 20,
  },
  availableSeatInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  availableSeatContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    width: 80,
    height: 35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  takenSeatContainer: {
    backgroundColor: '#CBD7E9',
  },
  seatsContainer: {
    marginBottom: 20,
  },
  mainContainer: {
    alignItems: 'center',
    marginBottom: 15,
    // backgroundColor :'#D3D3D3',
    borderRadius : 15
  },
  seatBlock: {
    alignItems: 'center',
    marginBottom: 10,
  },
  seatRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  seat: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  availableSeat: {
    backgroundColor: 'white',
  },
  selectedSeat: {
    backgroundColor: '#02A3F7',
  },
  availableSeatText: {
    color: 'black',
  },
  selectedSeatText: {
    color: 'white',
  },
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  screenImage: {
    width: '100%',
  },
  screenLabel: {
    position: 'absolute',
    paddingTop: 15,
  },
  price: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
    marginBottom: 15,
  },
  SeatButton: {
    backgroundColor: '#FB1351',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  SeatButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
