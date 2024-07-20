import { ScrollView, StyleSheet, Text, View, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GhareBaire from '../Assests/Image/GhoreBaire.png';
import Card1 from '../Assests/Image/Card1.png';
import Card2 from '../Assests/Image/Card2.png';
import Card3 from '../Assests/Image/Card3.png';
import stagelight from '../Assests/Image/Stagelight.png';
import Charulata from '../Assests/Image/Charulata.png';
import bookticketimage from '../Assests/Image/bookticketimage.png';
import lastpic from '../Assests/Image/lastpic.png'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import nav from '../Assests/Image/Navbar.png'
const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH * 0.85;
const SPACING = SRC_WIDTH * 0.02;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;

interface itemProps {
  index: number,
  item: { id: string, title: string, details: string, image: any },
}




export default function Home({navigation}) {

  function Item({ index, item }: itemProps) {
    return (
      <TouchableOpacity style={[styles.Card, { marginRight: index === 4 ? SIDECARD_LENGTH : SPACING }]} onPress={()=>navigation.navigate('ShowClick')}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.imageDetails}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.details}>{item.details}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  const [scrollx, setScrollx] = useState(0);
  const flatListRef = useRef(null);
  const DATA = [
    {
      id: "first",
      title: "Ghore Baire",
      details: "Show is from 20.12.2024",
      image: GhareBaire
    },
    {
      id: "second",
      title: "Second Show",
      details: "Show is from 21.12.2024",
      image: GhareBaire
    },
    {
      id: "third",
      title: "Third Show",
      details: "Show is from 22.12.2024",
      image: GhareBaire
    },
    {
      id: "fourth",
      title: "Fourth Show",
      details: "Show is from 23.12.2024",
      image: GhareBaire
    },
    {
      id: "fifth",
      title: "Fifth Show",
      details: "Show is from 24.12.2024",
      image: GhareBaire
    },
  ];

  const cardData = [
    { id: "card1", image: Card1,},
    { id: "card2", image: Card2 },
    { id: "card3", image: Card1 },
  ];

  const cardData1 = [
    { id: "card1", image: Card3 },
    { id: "card2", image: Card3 },
    { id: "card3", image: Card3 },
  ];

  const cardData2 = [
    { id: "card5", title: "Black Adam", details1: "Action , Adventure , Fantasy",details: "2 hr 30 min",image: Charulata },
    { id: "card6", title: "Black Adam", details1: "Action , Adventure , Fantasy",details: "2 hr 30 min", image: Charulata },
    { id: "card7", title: "Black Adam", details1: "Action , Adventure , Fantasy",details: "2 hr 30 min", image: Charulata },
  ];

  const bookTicketData = [
    { id: "book1", title: "Abhijan", duration: "2h 28m", genre: "Action", language: "Bengali", description:"Experience Abhijan\nlive on stage! Step\ninto a world of\nenchantment.\nBook your theatre\ntickets now!" },
    { id: "book2", title: "Satyajit Ray", duration: "2h 40m", genre: "Drama", language: "Bengali",description: "Experience Abhijan\nlive on stage! Step\n into a world of\n enchantment.\n Book your theatre\n tickets now!" },
    { id: "book3", title: "Charulata", duration: "2h 15m", genre: "Romance", language: "Bengali", description:"Experience Abhijan\nlive on stage! Step\ninto a world of\nenchantment.\nBook your theatre\ntickets now!" },
  ];

  const currentIndex = Math.round(scrollx / CARD_LENGTH);
  const [activeText, setActiveText] = useState<string | null>(null);
  const slidingTexts = ["Trending", "New", "Fantasy", "Sci-Fi", "Action", "Adventure"];

  return (
    <View style={styles.container}>
      <View style={styles.Navbar}>
        <View style={{ paddingTop: -20 }}>
          <TouchableOpacity  onPress={()=>navigation.navigate('Profile')}>
          <Ionicons name="menu" size={40} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22,paddingTop : 10 }}>It all starts Here!</Text>
          <Text style={{ color: '#FB1351', fontFamily: 'Poppins', fontSize: 14, fontWeight: 'medium' }}>Kolkata</Text>
        </View>

        <View>
          <Icon name="search" size={25} color="black" />
        </View>

        <View>
          <TouchableOpacity>
          <Ionicons name="notifications" size={32} color="black"  onPress={()=>navigation.navigate('Notification')} />
          </TouchableOpacity>
         
        </View>

        <View>
          <MaterialIcons name="qr-code-scanner" size={32} color="black" />
        </View>
      </View>

      <ScrollView style={styles.SecondContainer}>
        <View style={styles.slide}>
          <FlatList
            data={DATA}
            horizontal={true}
            renderItem={({ item, index }) => {
              return (
                <Item index={index} item={item} />
              )
            }}
            onScroll={(event) => {
              setScrollx(event.nativeEvent.contentOffset.x);
            }}
            scrollEventThrottle={16}
            ref={flatListRef}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item) => item.id}
          />
          <View style={styles.indicatorContainer}>
            {DATA.map((_, index) => (
              <View key={index} style={[styles.indicator, currentIndex === index ? styles.activeIndicator : null]} />
            ))}
          </View>
        </View>
        <View>
          <Text style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 20, paddingTop: 15, marginLeft: 10 }}>Recommended Shows</Text>
        </View>

        {/* Card Sliding Section */}
        <View style={styles.cardSliding}>
        <FlatList
  data={cardData}
  horizontal
  showsHorizontalScrollIndicator={false}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={item.image} style={styles.cardImage} />
    </TouchableOpacity>
  )}
  keyExtractor={(item) => item.id}
/>
        </View>
        <View>
          <Text style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 20, paddingTop: 15, marginLeft: 10 }}>Upcoming Shows</Text>
        </View>

        <View style={styles.cardSliding}>
        <FlatList
  data={cardData1}
  horizontal
  showsHorizontalScrollIndicator={false}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={item.image} style={styles.cardImage} />
    </TouchableOpacity>
  )}
  keyExtractor={(item) => item.id}
/>
        </View>

        <View style={styles.popularShow}>
          <Text style={{ color: 'black', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 20, marginTop: 15, marginLeft: 5 }}>Popular Shows</Text>
          <Image source={stagelight} style={{ marginTop: 22, height: 70 }} />
        </View>

        <View>
          <Text style={{ color: '#FB1351', fontSize: 16, fontWeight: 'bold', marginLeft: 10, marginTop: 15 }}>Take a break and watch a theatre show. </Text>
        </View>

        <View style={styles.slidingTextContainer}>
          <FlatList
            data={slidingTexts}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item}
                onPressIn={() => setActiveText(item)}
                onPressOut={() => setActiveText(null)}
              >
                <Text style={[styles.slidingText, activeText === item && styles.activeText]}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
          />
        </View>

        <View style={styles.Card2}>
        <FlatList
  data={cardData2}
  horizontal
  showsHorizontalScrollIndicator={false}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.cardContainer1}>
      <View style={styles.cardDetailsBottom}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDetailsText}>{item.details}</Text>
        <Text style={styles.cardDetailsText}>{item.details1}</Text>
      </View>
      <Image source={item.image} style={styles.cardImage2} />
    </TouchableOpacity>
  )}
  keyExtractor={(item) => item.id}
/>
          <View style={styles.indicatorContainer}>
            {/* {DATA.map((_, index) => (
              <View key={index} style={[styles.indicator, currentIndex === index ? styles.activeIndicator : null]} />
            ))} */}
          </View>
        </View>

        <View style={styles.bookTicketContainer}>
          <FlatList
            data={bookTicketData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.bookTicket}>
                <Text style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 21,paddingTop: 15  }}>{`Book your favorite show's tickets`}</Text>
                <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: 'light', fontSize: 15, paddingTop: 2,paddingBottom: 25 }}>Step Into the Spotlight: Secure Your Seats Today!</Text>

                <View style={styles.bookTicketText}>
                  <View>
                    <Image source={bookticketimage} style = {{height : 270,width : 180, borderRadius : 10}}/>
                  </View>
                  <View>
                    <Text style={{ color: 'white', paddingLeft : 25 , fontFamily : "Poppins",fontWeight : 'bold',fontSize : 23,paddingBottom : 20}}>{item.title}</Text>
                    <Text style={{ color: 'white', paddingLeft : 25,fontFamily : "Poppins",fontWeight : 'light',fontSize : 15 }}>{item.duration}</Text>
                    <Text style={{ color: 'white', paddingLeft : 25,fontFamily : "Poppins",fontWeight : 'light',fontSize : 14}}>{item.genre}</Text>
                    <Text style={{ color: 'white', paddingLeft : 25,fontFamily : "Poppins",fontWeight : 'light',fontSize : 14 ,paddingBottom : 15 }}>{item.language}</Text>
                    <Text style={{color: 'white', paddingLeft : 25,fontFamily : "Poppins",fontWeight : 'light',fontSize : 14,paddingRight : 15}}>{item.description}</Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.BookTicketButton1}>
                  <Text style={styles.bookTicketText1}>Book Ticket</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style = {styles.LastContainer}>
            <Text style = {{color : 'black', fontFamily : 'Poppins', fontSize : 22, fontWeight : 'bold',marginLeft : 10,marginTop : 20}}>Most Played Show</Text>
            <Text style = {{color : 'black', fontFamily : 'Poppins', fontSize : 14, fontWeight : 'light', paddingBottom : 20,marginLeft : 10,}}>Be Part of the Drama: Book Your Theatre Experience!</Text>

            <View style = {styles.ticketContainer}>
                <View style = {styles.innerTicket}>
                    <View>
                      <Image source = {lastpic} style = {{borderRadius : 10,height : 200,}}/>
                    </View>
                    <View style = {{paddingRight : 20,}}>
                      <Text style = {{color : 'black',fontSize : 22}}>Gaynar Basko</Text>
                      <Text style ={{color : 'black' , paddingBottom : 20}}>1 hr 53 min</Text>
                      <Text style = {{color : 'black', fontSize : 10,}}>Action,Horror,Sci-Fi</Text>
                      <Text style = {{color : 'black', fontSize : 10,}}>Director : on TurtleHub</Text>
                      <Text style = {{color : 'black', fontSize : 10,}}>7.7/10</Text>
                      <TouchableOpacity style={styles.BookTicketButton}>
                     <Text style={styles.bookTicketText1}>Book Ticket</Text>
                     </TouchableOpacity>

                    </View>
                </View>
                <View style = {styles.innerTicket1}>
                    <View>
                      <Image source = {lastpic} style = {{borderRadius : 20,height : 200}}/>
                    </View>
                    <View style = {{paddingRight : 20,}}>
                      <Text style = {{color : 'black',fontSize : 22}}>Gaynar Basko</Text>
                      <Text style ={{color : 'black' , paddingBottom : 20}}>1 hr 53 min</Text>
                      <Text style = {{color : 'black', fontSize : 10,}}>Action,Horror,Sci-Fi</Text>
                      <Text style = {{color : 'black', fontSize : 10,}}>Director : on TurtleHub</Text>
                      <Text style = {{color : 'black', fontSize : 10,}}>7.7/10</Text>
                      <TouchableOpacity style={styles.BookTicketButton}>
                      <Text style={styles.bookTicketText1}>Book Ticket</Text>
                       </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.innerTicket2}>
                    <View>
                      <Image source = {lastpic} style = {{borderRadius : 20,height : 200}}/>
                    </View>
                    <View style = {{paddingRight : 20,}}>
                      <Text style = {{color : 'black',fontSize : 22}}>Gaynar Basko</Text>
                      <Text style ={{color : 'black' , paddingBottom : 20}}>1 hr 53 min</Text>
                      <Text style = {{color : 'black', fontSize : 10,}}>Action,Horror,Sci-Fi</Text>
                      <Text style = {{color : 'black', fontSize : 10,}}>Director : on TurtleHub</Text>
                      <Text style = {{color : 'black', fontSize : 10,}}>7.7/10</Text>
                      <TouchableOpacity style={styles.BookTicketButton}>
                       <Text style={styles.bookTicketText1}>Book Ticket</Text>
                      </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </View>

        <View>
          <Image source={nav} style={styles.Navbar2}/>
            <View style={{position : 'absolute',flexDirection :'row',paddingTop : 10}}>
              <View>
                <TouchableOpacity  onPress={()=>navigation.navigate('Home')}>
                <Entypo name='home' size={40}color={ 'white'} style={{paddingLeft : 20}}/>
                </TouchableOpacity>
              </View>
              <View>
              <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
              <Ionicons name='cart-outline' size={40}color={ 'white'}style={{paddingLeft : 20}}/>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                <Ionicons name='search' size={40}color={ 'white'}style={{paddingLeft : 100}}/>
                </TouchableOpacity>
              </View>
              <View>
              <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <Ionicons name='person-circle' size={40} color={ 'white'}style={{paddingLeft : 30}}/>
                </TouchableOpacity>
              </View>
              
            </View>
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Navbar: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  SecondContainer: {
  },
  slide: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  Card: {
    width: CARD_LENGTH,
    height: 200,
    overflow: 'hidden',
    position: 'relative',
    borderRadius : 10,
    borderColor : 'black',
    borderWidth : 1
  },
  imageDetails: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 10,
    zIndex: 1,
    
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    color: 'white',
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: '85%',
    zIndex: 0,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    height: 8,
    width: 15,
    borderRadius: 5,
    backgroundColor: '#cccccc',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: 'red',
  },
  backgroundImage: {
    width: '100%',
    height: 700,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cardSliding: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  cardContainer: {
    width: SRC_WIDTH * 0.4,
    marginRight: SPACING,
  },
  cardImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  popularShow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  slidingTextContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
  },
  slidingText: {
    color: 'black',
    fontSize: 14,
    marginHorizontal: 10,
  },
  activeText: {
    color: 'red',
  },
  Card2: {
    marginLeft: 10,
    marginTop: 30,
  },
  cardContainer1: {
    width: SRC_WIDTH * 0.93,
    marginRight: SPACING,
  },
  cardImage2: {
    width: '100%',
    height: 540,
    borderRadius: 30,
  },
  cardDetailsBottom: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 23,
    right: 0,
    zIndex: 1,
    height: 150,
    width: 270,
    borderRadius: 25
  },
  cardTitle: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  cardDetailsText: {
    color: 'black',
    fontSize: 12,
  },
  bookTicketContainer: {
    marginTop: 30,
  },
  bookTicket: {
    backgroundColor: 'black',
    paddingLeft: 20,
    marginRight: 2,
  },
  bookTicketText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  BookTicketButton: {
    backgroundColor: '#FB1351',
    paddingVertical: 15,
    paddingHorizontal: 0,
    borderRadius: 10,
    width: '80%',
    marginTop : 5,
    paddingTop : 15,
    marginBottom : 20,
    paddingRight : 20
  },
  BookTicketButton1: {
    backgroundColor: '#FB1351',
    paddingVertical: 15,
    paddingHorizontal: 0,
    borderRadius: 10,
    width: '70%',
    marginTop : 5,
    paddingTop : 15,
    marginBottom : 20,
    alignSelf : 'center'
  
  },
  bookTicketText1: {
    color: 'white',
    alignSelf: 'center',
    fontSize : 15
  },
  innerTicket : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
    width : "90%",
    borderRadius : 20,
    marginBottom : 28,
    height : 200,
    borderWidth : 1
  },
  innerTicket1 : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
    width : "90%",
    borderRadius : 24,
    marginBottom : 28,
    height : 200,
    borderWidth : 1
    
  },
  innerTicket2 : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
    width : "90%",
    borderRadius : 20,
    marginBottom : 28,
    height : 200,
    borderWidth : 1
  },
  ticketContainer : {
    flex : 1,
    alignItems : 'center',
  },
  Navbar2 : {
      width: '100%',
      height: 60,
  }
});
