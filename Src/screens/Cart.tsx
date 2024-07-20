import { StyleSheet, Text, View,TouchableOpacity,ScrollView,Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ticket from '../Assests/Image/Ticket.png'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export default function Cart({navigation}) {
  return (
    <View style= {styles.Conatiner}>
        <View style= {styles.Navbar}>
            <View style={{flexDirection : 'row', marginTop : 10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <AntDesign name='arrowleft' size={30} color={'black'} style={{marginLeft : 10}}/>
                </TouchableOpacity>
                
                <Text style={{color :'black', fontFamily :'Poppins', fontSize :18,fontWeight :'700',paddingLeft : 125}}>Cart</Text>
            </View>

            <View style={styles.Button}>

                <View style = {styles.ButtonConatiner}>
                <TouchableOpacity>
                    <Text style={{color:'white'}}>COMPLETED</Text>
                </TouchableOpacity>
                </View>
                
                <View style = {styles.ButtonConatiner1}>
                <TouchableOpacity>
                    <Text style= {{color : 'black'}}>HISTORY</Text>
                </TouchableOpacity>
                </View> 
            </View>   
        </View>

        <ScrollView>
            <View style={styles.firstTicket}>
                <View style={styles.SubText1}>
                    <MaterialCommunityIcons name='timer-sand' size={20} style={{paddingLeft : 10}}/>
                    <Text style={{paddingLeft : 10,color : 'gray',fontSize : 15,fontFamily : 'Poppins'}}>Show on 12.03.2024</Text>
                </View>

                <View style={{flexDirection : 'row',paddingTop : 20, borderColor : 'gray',borderBottomWidth : 1,}}>
                    <View>
                        <Image source={Ticket} style={{marginLeft : 10}}/>
                    </View>
                    <View style={{paddingLeft : 15}}>
                        <Text style={{color : 'black',fontFamily : 'Poppins', fontSize : 14, fontWeight :'medium'}}>Ghare baire</Text>
                        <Text style={{color : '#FFA800'}}>x2</Text>
                    </View>
                    <Text style={{color : 'black',paddingLeft : 150,paddingTop :15}}>RS 900</Text>
                </View>
                <View style={{flexDirection :'row',justifyContent :'space-around'}}>
                    <View>
                       <Text style={{color:'#FFA800',paddingTop : 15,paddingLeft : 10}}>{`1 Item    ||   RS 900`}</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <MaterialIcons name='navigate-next' size={30} color={'#FFA800'} style={{paddingTop : 10,paddingLeft : 150}}/>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                
            </View>

            <View style={styles.firstTicket}>
                <View style={styles.SubText1}>
                    <MaterialCommunityIcons name='timer-sand' size={20} style={{paddingLeft : 10}}/>
                    <Text style={{paddingLeft : 10,color : 'gray',fontSize : 15,fontFamily : 'Poppins'}}>Show on 12.03.2024</Text>
                </View>

                <View style={{flexDirection : 'row',paddingTop : 20, borderColor : 'gray',borderBottomWidth : 1,}}>
                    <View>
                        <Image source={Ticket} style={{marginLeft : 10}}/>
                    </View>
                    <View style={{paddingLeft : 15}}>
                        <Text style={{color : 'black',fontFamily : 'Poppins', fontSize : 14, fontWeight :'medium'}}>Ghare baire</Text>
                        <Text style={{color : '#FFA800'}}>x2</Text>
                    </View>
                    <Text style={{color : 'black',paddingLeft : 150,paddingTop :15}}>RS 900</Text>
                </View>
                <View style={{flexDirection :'row',justifyContent :'space-around'}}>
                    <View>
                       <Text style={{color:'#FFA800',paddingTop : 15,paddingLeft : 10}}>{`1 Item    ||   RS 900`}</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <MaterialIcons name='navigate-next' size={30} color={'#FFA800'} style={{paddingTop : 10,paddingLeft : 150}}/>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                
            </View>

            <View style={styles.firstTicket}>
                <View style={styles.SubText1}>
                    <MaterialCommunityIcons name='timer-sand' size={20} style={{paddingLeft : 10}}/>
                    <Text style={{paddingLeft : 10,color : 'gray',fontSize : 15,fontFamily : 'Poppins'}}>Show on 12.03.2024</Text>
                </View>

                <View style={{flexDirection : 'row',paddingTop : 20, borderColor : 'gray',borderBottomWidth : 1,}}>
                    <View>
                        <Image source={Ticket} style={{marginLeft : 10}}/>
                    </View>
                    <View style={{paddingLeft : 15}}>
                        <Text style={{color : 'black',fontFamily : 'Poppins', fontSize : 14, fontWeight :'medium'}}>Ghare baire</Text>
                        <Text style={{color : '#FFA800'}}>x2</Text>
                    </View>
                    <Text style={{color : 'black',paddingLeft : 150,paddingTop :15}}>RS 900</Text>
                </View>
                <View style={{flexDirection :'row',justifyContent :'space-around'}}>
                    <View>
                       <Text style={{color:'#FFA800',paddingTop : 15,paddingLeft : 10}}>{`1 Item    ||   RS 900`}</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <MaterialIcons name='navigate-next' size={30} color={'#FFA800'} style={{paddingTop : 10,paddingLeft : 150}}/>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                
            </View>

            <View style={styles.firstTicket}>
                <View style={styles.SubText1}>
                    <MaterialCommunityIcons name='timer-sand' size={20} style={{paddingLeft : 10}}/>
                    <Text style={{paddingLeft : 10,color : 'gray',fontSize : 15,fontFamily : 'Poppins'}}>Show on 12.03.2024</Text>
                </View>

                <View style={{flexDirection : 'row',paddingTop : 20, borderColor : 'gray',borderBottomWidth : 1,}}>
                    <View>
                        <Image source={Ticket} style={{marginLeft : 10}}/>
                    </View>
                    <View style={{paddingLeft : 15}}>
                        <Text style={{color : 'black',fontFamily : 'Poppins', fontSize : 14, fontWeight :'medium'}}>Ghare baire</Text>
                        <Text style={{color : '#FFA800'}}>x2</Text>
                    </View>
                    <Text style={{color : 'black',paddingLeft : 150,paddingTop :15}}>RS 900</Text>
                </View>
                <View style={{flexDirection :'row',justifyContent :'space-around'}}>
                    <View>
                       <Text style={{color:'#FFA800',paddingTop : 15,paddingLeft : 10}}>{`1 Item    ||   RS 900`}</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <MaterialIcons name='navigate-next' size={30} color={'#FFA800'} style={{paddingTop : 10,paddingLeft : 150}}/>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                
            </View>

            <View style={styles.firstTicket}>
                <View style={styles.SubText1}>
                    <MaterialCommunityIcons name='timer-sand' size={20} style={{paddingLeft : 10}}/>
                    <Text style={{paddingLeft : 10,color : 'gray',fontSize : 15,fontFamily : 'Poppins'}}>Show on 12.03.2024</Text>
                </View>

                <View style={{flexDirection : 'row',paddingTop : 20, borderColor : 'gray',borderBottomWidth : 1,}}>
                    <View>
                        <Image source={Ticket} style={{marginLeft : 10}}/>
                    </View>
                    <View style={{paddingLeft : 15}}>
                        <Text style={{color : 'black',fontFamily : 'Poppins', fontSize : 14, fontWeight :'medium'}}>Ghare baire</Text>
                        <Text style={{color : '#FFA800'}}>x2</Text>
                    </View>
                    <Text style={{color : 'black',paddingLeft : 150,paddingTop :15}}>RS 900</Text>
                </View>
                <View style={{flexDirection :'row',justifyContent :'space-around'}}>
                    <View>
                       <Text style={{color:'#FFA800',paddingTop : 15,paddingLeft : 10}}>{`1 Item    ||   RS 900`}</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <MaterialIcons name='navigate-next' size={30} color={'#FFA800'} style={{paddingTop : 10,paddingLeft : 150}}/>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                
            </View>
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    Conatiner :{
        flex : 1,
    },
    Navbar : {
        marginTop : 30
    },
    Button : {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        marginTop : 20,
        marginBottom :40
    },
    ButtonConatiner : {
        borderWidth : 1,
        borderColor : 'white',
        borderRadius : 15,
        backgroundColor : '#FFA800',
        width : 110,
        height : 35,
        alignItems : 'center',
        justifyContent : 'center'
        

    },
    ButtonConatiner1 : {
        borderWidth : 1,
        borderColor : 'gray',
        borderRadius : 15,
        width : 110,
        height : 35,
        alignItems : 'center',
        justifyContent : 'center'

    },
    firstTicket : {
        borderColor : 'gray',
       borderWidth : 1,
        height : 150,
        margin : 5,
        borderRadius : 10,
        marginBottom : 40,
       
        
    },
    SubText1 : {
        flexDirection : 'row',
        height : 40,
        alignItems : 'center',
        borderColor : 'gray',
        borderBottomWidth : 1,
        
    }
    
})