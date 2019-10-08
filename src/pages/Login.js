import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   TextInput,
   StyleSheet,
   Image,
} from 'react-native'
import Logo from '../components/Logo'
import LoginForm from '../components/LoginForm'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';

class Login extends Component {
   constructor(props) {
      super(props)
      this.state = {
         food: 'aaa',
         selected: true,
         infoSelected: 'Doktor Girişi Seçildi'
      }
   }

   login = (email, pass) => {
      //alert('email: ' + email + ' password: ' + pass)      
   }
   openSignup() {
      Actions.Signup();
   }

   changeSelected = () => {
      this.setState({
         selected: !this.state.selected,
      })
      if (this.state.selected) {
         this.setState({
            infoSelected: 'Hasta Girişi Seçildi'
         })
      } else {
         this.setState({
            infoSelected: 'Doktor Girişi Seçildi'
         })
      }
   }


   render() {
      return (

         <View style={styles.container}>
            <Logo></Logo>
            <View style={styles.viewBox} >
               <TouchableOpacity style={this.state.selected ? styles.btnSelected : styles.btnNotSelected} onPress={this.changeSelected} >
                  <Text>
                     Doktor</Text>
               </TouchableOpacity>
               <TouchableOpacity style={this.state.selected ? styles.btnNotSelected : styles.btnSelected} onPress={this.changeSelected} >
                  <Text
                  >
                     Hasta</Text>
               </TouchableOpacity>
            </View>
            <Text>{this.state.infoSelected}</Text>
            <LoginForm></LoginForm>
            <View style={styles.signupTextCont}>
               <Text style={styles.signupText}>Henüz bir hesabın yok mu?</Text>
               <TouchableOpacity onPress={this.openSignup}>
                  <Text onPress={this.login()} style={styles.signupButton}>Kaydol</Text>
               </TouchableOpacity>
            </View>
         </View>
      )
   }
}


export default (Login);

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fdfdfd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   signupTextCont: {
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 16,
      flexDirection: 'row',
   },
   signupText: {
      fontSize: 16
   },
   signupButton: {
      fontSize: 16,
      fontWeight: 'bold',
   },
   viewBox: {
      flexDirection: 'row', borderRadius: 25,
      backgroundColor: '#ecf0f1',
   },
   btnSelected: {
      flex: .2,
      paddingHorizontal: 20,
      backgroundColor: 'rgba(255,245,84,1)',
      paddingVertical: 16,
   },
   btnNotSelected: {
      flex: .2,
      paddingHorizontal: 20,
      paddingVertical: 16,

   }
})