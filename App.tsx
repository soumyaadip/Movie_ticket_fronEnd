import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FirstPage from './src/screens/FirstPage'
import SecondPage from './src/screens/SecondPage'
import ThirdPage from './src/screens/ThirdPage'
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'
import Profile from './src/screens/Profile'
import Splash from './src/screens/Splash'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from './src/screens/Notification'
import ShowClick from './src/screens/ShowClick'
import BookTicket from './src/screens/BookTicket'
import ForgotPass1 from './src/screens/ForgotPass1'
import ForgotPass2 from './src/screens/ForgotPass2'
import ForgotPass3 from './src/screens/ForgotPass3'
import ForgotPass4 from './src/screens/ForgotPass4'
import ChooseSeat from './src/screens/ChooseSeat'
import Cart from './src/screens/Cart'
import AddCard from './src/screens/AddCard'
import PaymentMethod from './src/screens/PaymentMethod'
import ProfileEdit from './src/screens/ProfileEdit'
import Ticket from './src/screens/Ticket'
import Checkout from './src/screens/Checkout'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      // <Splash></Splash>
      // <FirstPage></FirstPage>
      // <SecondPage></SecondPage>
      //  <ThirdPage></ThirdPage> 
      // <Login></Login>
      // <SignUp></SignUp>
      // <Profile></Profile>
      // <Home></Home>
      // <Notification></Notification>
      // <ShowClick></ShowClick>
      // <BookTicket></BookTicket>
      // <ForgotPass1></ForgotPass1>
      //  <ForgotPass2></ForgotPass2>
      // <ForgotPass3></ForgotPass3>
      // <ForgotPass4></ForgotPass4>
      // <ChooseSeat></ChooseSeat>
      // <Checkout></Checkout>
      // <Ticket></Ticket>
      // <ProfileEdit></ProfileEdit>
      // <PaymentMethod></PaymentMethod>
      // <AddCard></AddCard>
      // <Cart></Cart>



    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={Splash} options={{
         headerShown:false
       }} />
     <Stack.Screen name="FirstPage" component={FirstPage} options={{
         headerShown:false
       }} />
       <Stack.Screen name="SecondPage" component={SecondPage} options={{
         headerShown:false
       }} />
     <Stack.Screen name="ThirdPage" component={ThirdPage} options={{
         headerShown:false
       }} />
     <Stack.Screen name="Login" component={Login}  options={{
         headerShown:false
       }}/>
     <Stack.Screen name="SignUp" component={SignUp} options={{
         headerShown:false
       }} />
     <Stack.Screen name="Home" component={Home}  options={{
         headerShown:false
       }}/>
            <Stack.Screen name="ForgotPass1" component={ForgotPass1}  options={{
         headerShown:false
       }}/>
            <Stack.Screen name="ForgotPass2" component={ForgotPass2}  options={{
         headerShown:false
       }}/>
            <Stack.Screen name="ForgotPass3" component={ForgotPass3}  options={{
         headerShown:false
       }}/>
            <Stack.Screen name="ForgotPass4" component={ForgotPass4}  options={{
         headerShown:false
       }}/>
            <Stack.Screen name="Notification" component={Notification}  options={{
         headerShown:false
       }}/>
            <Stack.Screen name="Ticket" component={Ticket}  options={{
         headerShown:false
       }}/>
            <Stack.Screen name="ShowClick" component={ShowClick}  options={{
         headerShown:false
       }}/>
            <Stack.Screen name="ProfileEdit" component={ProfileEdit}  options={{
         headerShown:false
       }}/>
            <Stack.Screen name="Profile" component={Profile}  options={{
         headerShown:false
       }}/>
            <Stack.Screen name="PaymentMethod" component={PaymentMethod}  options={{
         headerShown:false
       }}/>
          <Stack.Screen name="ChooseSeat" component={ChooseSeat}  options={{
         headerShown:false
       }}/>
          <Stack.Screen name="CheckOut" component={Checkout}  options={{
         headerShown:false
       }}/>
          <Stack.Screen name="Cart" component={Cart}  options={{
         headerShown:false
       }}/>

<Stack.Screen name="BookTicket" component={BookTicket}  options={{
         headerShown:false
       }}/>
                 <Stack.Screen name="AddCard" component={AddCard}  options={{
         headerShown:false
       }}/>
   </Stack.Navigator>
 </NavigationContainer>
   
    
 
    
  )
};

const styles = StyleSheet.create({})