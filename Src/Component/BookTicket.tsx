import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image,ScrollView } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import RedDot from '../Assests/Image/RedDot.png';

const Date = [
    { id: '1', name: 'MON', date: '8', month: 'JUL' },
    { id: '2', name: 'TUE', date: '9', month: 'JUL' },
    { id: '3', name: 'WED', date: '10', month: 'JUL' },
    { id: '4', name: 'THU', date: '11', month: 'JUL' },
    { id: '5', name: 'FRI', date: '12', month: 'JUL' },
    { id: '6', name: 'SAT', date: '13', month: 'JUL' },
    { id: '7', name: 'SUN', date: '14', month: 'JUL' },
    { id: '8', name: 'MON', date: '15', month: 'JUL' },
    { id: '9', name: 'TUE', date: '16', month: 'JUL' },
    { id: '10', name: 'WED', date: '17', month: 'JUL' },
];

const showtimes = [
    { id: '1', time: '6:15 PM', audi: 'Audi: #009', status: 'Filling Fast', statusColor: '#FF9F00' },
    { id: '2', time: '7:00 PM', audi: 'Audi: #010', status: 'Filling Fast', statusColor: '#FF9F00' },
    { id: '3', time: '8:00 PM', audi: 'Audi: #011', status: 'Filling Fast', statusColor: '#FF9F00' },
    { id: '4', time: '9:00 PM', audi: 'Audi: #012', status: 'Available', statusColor: '#7ED321' },
    { id: '5', time: '10:00 PM', audi: 'Audi: #013', status: 'Available', statusColor: '#7ED321' },
];

const showtimes1 = [
    { id: '1', time: '6:15 PM', audi: 'Audi: #009', status: 'Filling Fast', statusColor: '#FF9F00' },
    { id: '2', time: '7:00 PM', audi: 'Audi: #010', status: 'Filling Fast', statusColor: '#FF9F00' },
    { id: '3', time: '8:00 PM', audi: 'Audi: #011', status: 'Filling Fast', statusColor: '#FF9F00' },
    { id: '4', time: '9:00 PM', audi: 'Audi: #012', status: 'Available', statusColor: '#7ED321' },
    { id: '5', time: '10:00 PM', audi: 'Audi: #013', status: 'Available', statusColor: '#7ED321' },
];

const showtimes2 = [
    { id: '1', time: '6:15 PM', audi: 'Audi: #009', status: 'Filling Fast', statusColor: '#FF9F00' },
    { id: '2', time: '7:00 PM', audi: 'Audi: #010', status: 'Filling Fast', statusColor: '#FF9F00' },
    { id: '3', time: '8:00 PM', audi: 'Audi: #011', status: 'Filling Fast', statusColor: '#FF9F00' },
    { id: '4', time: '9:00 PM', audi: 'Audi: #012', status: 'Available', statusColor: '#7ED321' },
    { id: '5', time: '10:00 PM', audi: 'Audi: #013', status: 'Available', statusColor: '#7ED321' },
];

export default function BookTicket({navigation}) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedShowtime, setSelectedShowtime] = useState(null);
    const [selectedShowtime1, setSelectedShowtime1] = useState(null);
    const [selectedShowtime2, setSelectedShowtime2] = useState(null);

    const handleDatePress = (id) => {
        setSelectedDate(id);
    };

    const handleShowtimePress = (id) => {
        setSelectedShowtime(id);
    };

    const handleShowtimePress1 = (id) => {
        setSelectedShowtime1(id);
    };

    
    const handleShowtimePress2 = (id) => {
        setSelectedShowtime2(id);
    };

    return (
        <View style={styles.Container}>
            <View style={styles.Navbar}>
                <TouchableOpacity>
                <Ionicons name='arrow-back-outline' size={30} color={'black'} onPress={()=>navigation.navigate('ShowClick')}/>
                
                </TouchableOpacity>
               
                <Text style={styles.NavbarTitle}>Book Ticket</Text>
                <AntDesign name='heart' size={20} color={'red'} />
            </View>
            <ScrollView>
            <View style={{ paddingTop: 20 }}>
                <Text style={styles.MovieTitle}>Ghore Baire</Text>
                <Text style={styles.MovieGenre}>{`#Biography #Crime Drama`}</Text>
            </View>

            <View>
                <FlatList
                    data={Date}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.Date,
                                selectedDate === item.id && styles.SelectedDate,
                            ]}
                            onPress={() => handleDatePress(item.id)}
                        >
                            <Text style={styles.DateText}>{item.name}</Text>
                            <Text style={styles.DateText}>{item.date}</Text>
                            <Text style={styles.DateText}>{item.month}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.DateList}
                />
            </View>

            <View style={styles.PVRtext}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>PVR Logix , Noida</Text>
                    <Image source={RedDot} style={{ marginLeft: 10, marginTop: 2 }} />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome6 name='location-pin' size={15} color={'#057DFE'} style={{ marginRight: 10 }} />
                    <Text style={{ color: '#057DFE' }}>7.2 km</Text>
                </View>
            </View>

            <View style={styles.TimeDetails}>
                {showtimes.map((showtime) => (
                    <TouchableOpacity
                        key={showtime.id}
                        style={[
                            styles.SubDetails,
                            selectedShowtime === showtime.id && styles.SelectedSubDetails,
                        ]}
                        onPress={() => handleShowtimePress(showtime.id)}
                    >
                        <Text style={{ fontSize: 18 }}>{showtime.time}</Text>
                        <Text>{showtime.audi}</Text>
                        <Text style={{ color: showtime.statusColor }}>{showtime.status}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.PVRtext1}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>PVR Logix , Noida</Text>
                    <Image source={RedDot} style={{ marginLeft: 10, marginTop: 2 }} />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome6 name='location-pin' size={15} color={'#057DFE'} style={{ marginRight: 10 }} />
                    <Text style={{ color: '#057DFE' }}>7.2 km</Text>
                </View>
            </View>

            <View style={styles.TimeDetails}>
                {showtimes.map((showtime1) => (
                    <TouchableOpacity
                        key={showtime1.id}
                        style={[
                            styles.SubDetails1,
                            selectedShowtime1 === showtime1.id && styles.SelectedSubDetails1,
                        ]}
                        onPress={() => handleShowtimePress1(showtime1.id)}
                    >
                        <Text style={{ fontSize: 18 }}>{showtime1.time}</Text>
                        <Text>{showtime1.audi}</Text>
                        <Text style={{ color: showtime1.statusColor }}>{showtime1.status}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.PVRtext1}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>PVR Logix , Noida</Text>
                    <Image source={RedDot} style={{ marginLeft: 10, marginTop: 2 }} />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome6 name='location-pin' size={15} color={'#057DFE'} style={{ marginRight: 10 }} />
                    <Text style={{ color: '#057DFE' }}>7.2 km</Text>
                </View>
            </View>

            <View style={styles.TimeDetails}>
                {showtimes.map((showtime2) => (
                    <TouchableOpacity
                        key={showtime2.id}
                        style={[
                            styles.SubDetails1,
                            selectedShowtime2 === showtime2.id && styles.SelectedSubDetails1,
                        ]}
                        onPress={() => handleShowtimePress2(showtime2.id)}
                    >
                        <Text style={{ fontSize: 18 }}>{showtime2.time}</Text>
                        <Text>{showtime2.audi}</Text>
                        <Text style={{ color: showtime2.statusColor }}>{showtime2.status}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.SeatButton} onPress={()=>navigation.navigate('ChooseSeat')}>
              <Text style={styles.SeatButtonText}>Choose Your Seat</Text>
           </TouchableOpacity>
            </ScrollView>
           
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    Navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18,
    },
    NavbarTitle: {
        color: 'black',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 18,
    },
    MovieTitle: {
        color: 'black',
        fontSize: 22,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    },
    MovieGenre: {
        color: '#057DFE',
    },
    DateList: {
        paddingTop: 10,
    },
    Date: {
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 10,
        width: 60,
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 15,
    },
    SelectedDate: {
        backgroundColor: '#FB1351',
    },
    DateText: {
        color: 'black',
    },
    PVRtext: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingBottom: 10,
    },
    PVRtext1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        marginTop: 25,
    },
    TimeDetails: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    SubDetails: {
        borderColor: 'black',
        borderWidth: 1,
        width: '30%',
        height: 75,
        borderRadius: 10,
        justifyContent: 'center',
        textAlign: 'center',
        paddingLeft: 10,
        marginTop: 10,
        marginRight: 11,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    SelectedSubDetails: {
        backgroundColor: 'pink',
    },
    SubDetails1: {
        borderColor: 'black',
        borderWidth: 1,
        width: '30%',
        height: 75,
        borderRadius: 10,
        justifyContent: 'center',
        textAlign: 'center',
        paddingLeft: 10,
        marginTop: 10,
        marginRight: 11,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    SelectedSubDetails1: {
        backgroundColor: 'pink',
    },
    SeatButton: {
        backgroundColor: '#FB1351',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
      },
      ButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
});
