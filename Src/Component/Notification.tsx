import { StyleSheet, Text, View ,ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

    export default function Notification({navigation}) {
      return (
        <View style = {styles.container}>
            <View style = {styles.Navbar}>
                <View>
                  <TouchableOpacity  onPress={()=>navigation.navigate('Profile')}>
                  <Ionicons name ='arrow-back' size={35} color={'black'} style ={{paddingRight : 90}}/>
                 
                  </TouchableOpacity>
                  
                </View>
                <View>
                    <Text style = {{fontFamily :'Poppins', fontSize : 18,color :'black',fontWeight :'regular',paddingTop : 9}}>Notifications</Text>
                </View>
            </View>
            <View>
              <TouchableOpacity>
              <Text style = {{ color:'red',alignSelf :'center',paddingTop : 20,borderBottomWidth : 2,borderBottomColor : 'red'}}>{`Notification`}</Text>
              </TouchableOpacity>
             
            </View>


            <ScrollView style ={styles.secondContainer}>
                  <View style = {styles.notificationContainer}>
                      <View>
                          <FontAwesome6 name='user-large' size={42} color={'black'}  style= {{paddingTop : 3}} />
                      </View>
                      <View style = {{}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize : 13,color:'black' , fontFamily :'Poppins'}}>{`you booked a ticket on 22.03.2024 Time:\n16:00 pm.`}</Text>
                        <Text  style = {{fontSize : 13,color:'gray' , fontFamily :'Poppins'}}>20 min ago</Text>
                        </TouchableOpacity>
                      </View>
                  </View> 

                  <View style = {styles.notificationContainer}>
                      <View>
                          <FontAwesome6 name='user-graduate' size={42} color={'black'} style= {{paddingTop : 3}} />
                      </View>
                      <View style = {{}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize : 13,color:'black' , fontFamily :'Poppins'}}>{`you booked a ticket on 22.03.2024 Time:\n16:00 pm.`}</Text>
                        <Text  style = {{fontSize : 13,color:'gray' , fontFamily :'Poppins'}}>20 min ago</Text>
                        </TouchableOpacity>
                      </View>
                  </View>

                  <View style = {styles.notificationContainer}>
                      <View>
                          <FontAwesome6 name='user-graduate' size={42} color={'black'} style= {{paddingTop : 3}} />
                      </View>
                      <View style = {{}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize : 13,color:'black' , fontFamily :'Poppins'}}>{`you booked a ticket on 22.03.2024 Time:\n16:00 pm.`}</Text>
                        <Text  style = {{fontSize : 13,color:'gray' , fontFamily :'Poppins'}}>20 min ago</Text>
                        </TouchableOpacity>
                      </View>
                  </View>

                  <View style = {styles.notificationContainer}>
                      <View>
                          <FontAwesome6 name='user-graduate' size={42} color={'black'} style= {{paddingTop : 3}} />
                      </View>
                      <View style = {{}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize : 13,color:'black' , fontFamily :'Poppins'}}>{`you booked a ticket on 22.03.2024 Time:\n16:00 pm.`}</Text>
                        <Text  style = {{fontSize : 13,color:'gray' , fontFamily :'Poppins'}}>20 min ago</Text>
                        </TouchableOpacity>
                      </View>
                  </View>

                  <View style = {styles.notificationContainer}>
                      <View>
                          <FontAwesome6 name='user-graduate' size={42} color={'black'} style= {{paddingTop : 3}} />
                      </View>
                      <View style = {{}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize : 13,color:'black' , fontFamily :'Poppins'}}>{`you booked a ticket on 22.03.2024 Time:\n16:00 pm.`}</Text>
                        <Text  style = {{fontSize : 13,color:'gray' , fontFamily :'Poppins'}}>20 min ago</Text>
                        </TouchableOpacity>
                      </View>
                  </View>


                  <View style = {styles.notificationContainer}>
                      <View>
                          <FontAwesome6 name='user-graduate' size={42} color={'black'} style= {{paddingTop : 3}} />
                      </View>
                      <View style = {{}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize : 13,color:'black' , fontFamily :'Poppins'}}>{`you booked a ticket on 22.03.2024 Time:\n16:00 pm.`}</Text>
                        <Text  style = {{fontSize : 13,color:'gray' , fontFamily :'Poppins'}}>20 min ago</Text>
                        </TouchableOpacity>
                      </View>
                  </View>


                  <View style = {styles.notificationContainer}>
                      <View>
                          <FontAwesome6 name='user-graduate' size={42} color={'black'} style= {{paddingTop : 3}} />
                      </View>
                      <View style = {{}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize : 13,color:'black' , fontFamily :'Poppins'}}>{`you booked a ticket on 22.03.2024 Time:\n16:00 pm.`}</Text>
                        <Text  style = {{fontSize : 13,color:'gray' , fontFamily :'Poppins'}}>20 min ago</Text>
                        </TouchableOpacity>
                      </View>
                  </View>


                  <View style = {styles.notificationContainer}>
                      <View>
                          <FontAwesome6 name='user-graduate' size={42} color={'black'} style= {{paddingTop : 3}} />
                      </View>
                      <View style = {{}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize : 13,color:'black' , fontFamily :'Poppins'}}>{`you booked a ticket on 22.03.2024 Time:\n16:00 pm.`}</Text>
                        <Text  style = {{fontSize : 13,color:'gray' , fontFamily :'Poppins'}}>20 min ago</Text>
                        </TouchableOpacity>
                      </View>
                  </View>


                  <View style = {styles.notificationContainer}>
                      <View>
                          <FontAwesome6 name='user-graduate' size={42} color={'black'} style= {{paddingTop : 3}} />
                      </View>
                      <View style = {{}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize : 13,color:'black' , fontFamily :'Poppins'}}>{`you booked a ticket on 22.03.2024 Time:\n16:00 pm.`}</Text>
                        <Text  style = {{fontSize : 13,color:'gray' , fontFamily :'Poppins'}}>20 min ago</Text>
                        </TouchableOpacity>
                      </View>
                  </View>


                  <View style = {styles.notificationContainer}>
                      <View>
                          <FontAwesome6 name='user-graduate' size={42} color={'black'} style= {{paddingTop : 3}} />
                      </View>
                      <View style = {{}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize : 13,color:'black' , fontFamily :'Poppins'}}>{`you booked a ticket on 22.03.2024 Time:\n16:00 pm.`}</Text>
                        <Text  style = {{fontSize : 13,color:'gray' , fontFamily :'Poppins'}}>20 min ago</Text>
                        </TouchableOpacity>
                      </View>
                  </View>


                  <View style = {styles.notificationContainer}>
                      <View>
                          <FontAwesome6 name='user-graduate' size={42} color={'black'} style= {{paddingTop : 3}} />
                      </View>
                      <View style = {{}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize : 13,color:'black' , fontFamily :'Poppins'}}>{`you booked a ticket on 22.03.2024 Time:\n16:00 pm.`}</Text>
                        <Text  style = {{fontSize : 13,color:'gray' , fontFamily :'Poppins'}}>20 min ago</Text>
                        </TouchableOpacity>
                      </View>
                  </View>

                  <View style = {styles.notificationContainer}>
                      <View>
                          <FontAwesome6 name='user-graduate' size={42} color={'black'} style= {{paddingTop : 3}} />
                      </View>
                      <View style = {{}}>
                        <TouchableOpacity>
                        <Text style = {{fontSize : 13,color:'black' , fontFamily :'Poppins'}}>{`you booked a ticket on 22.03.2024 Time:\n16:00 pm.`}</Text>
                        <Text  style = {{fontSize : 13,color:'gray' , fontFamily :'Poppins'}}>20 min ago</Text>
                        </TouchableOpacity>
                      </View>
                  </View>

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
        marginTop : 20,
        marginLeft : 10,
      },
      secondContainer :{
        paddingTop : 20,
        flex : 1,
       alignSelf :'center',
      //  backgroundColor : '#d0edf7',
       borderRadius : 15,
      },
      notificationContainer : {
          flexDirection : 'row',
          justifyContent :'space-around',
          borderWidth : 0.2,
          borderRadius : 10,
          width : "100%",
          marginBottom : 30,
          height : 60

      }
    })