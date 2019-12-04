import React, { Component } from 'react'
import {
   View,
   Text,
   TouchableOpacity,
   TextInput,
   StyleSheet,
} from 'react-native'
import Logo from '../components/Logo'
import { Actions } from 'react-native-router-flux'
import Axios from 'axios'
import { constants as CONSTS } from '../constants/constants'
import { connect } from 'react-redux';

class Login extends Component {
   constructor(props) {
      super(props)
      this.state = {
         selected: true,
         infoSelected: 'Doktor Girişi Seçildi',
         email: '',
         password: '',
         loginStatus: '',
         loggedIn: false,
         token: '',
      }
   }
   login = () => {
      Axios.post(CONSTS.API_IP + '' + CONSTS.API_VERSION + '/login', {
         email: this.state.email, password: this.state.password
         , whichKind: (this.state.selected?'doctor':'patient')
      })
         .then(response => {
            console.log("response.data " + JSON.stringify(response.data));
            const {
               status,
               token
            } = response.data
            if(status===true)
               Actions.Main();

            this.setState({
               loginStatus: status ? "LOGIN_SUCCESSFUL" : "LOGIN_FAILED",
               loggedIn: status,
               token: token
            })
            this.props.degistirSinifAd(this.state)
         })
         .catch(error => {
            console.log(error);
         });
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
                  <Text>
                     Hasta</Text>
               </TouchableOpacity>
            </View>
            <Text>{this.state.infoSelected}</Text>
            <View style={styles.container_login}>
               <View style={{ flexDirection: 'row' }}>
                  <TextInput
                     style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                     placeholder='Email' placeholderTextColor='#333'
                     selectionColor="#000" keyboardType="email-address"
                     onChangeText={(email) => this.setState({ email: email })}
                  />
               </View>
               <View style={{ flexDirection: 'row' }}>
                  <TextInput
                     style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
                     placeholder='Password' placeholderTextColor='#333'
                     selectionColor="#000"
                     secureTextEntry={true}
                     onChangeText={(password) => this.setState({ password: password })}

                  />
               </View>
               <View style={{ flexDirection: 'row' }}>

                  <TouchableOpacity style={styles.button}>
                     <Text onPress={this.login} style={styles.buttonText}>
                        Login
                    </Text>
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.signupTextCont}>
               <Text style={styles.signupText}>Henüz bir hesabın yok mu?</Text>
               <TouchableOpacity onPress={this.openSignup}>
                  <Text style={styles.signupButton}>Kaydol</Text>
               </TouchableOpacity>
            </View>
         </View>
      )
   }
}


const mapStateToProps = (state, ownProps) => {
   console.log("state " + JSON.stringify(state));
   console.log("ownprops " + JSON.stringify(ownProps));
   return {
      loginStatus: state.loginReducer.loginStatus,
      token: state.loginReducer.token,
      loggedIn: state.loginReducer.loggedIn
   };
};

const mapDispatchToProps = dispatch => {
   return {
      degistirSinifAd: (e) => {
         dispatch({
            type: CONSTS.LOG_IN, payload: {
               loginStatus: e.loginStatus,
               loggedIn: e.loggedIn,
               token: e.token
            }
         });
      },
      degistirSinifOgretmen: () => {
         console.log("degistirSinifOgretmen is working");

         dispatch({
            type: CONSTS.LOG_OUT,
            payload: { token: "TOKEN" }
         });
      }
   };
};
const loginConnected = connect(mapStateToProps, mapDispatchToProps)(Login)

export default loginConnected;

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fdfdfd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   container_login: {
      flexGrow: 1,
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

   },
   inputBox: {
      flex: .8,
      backgroundColor: 'rgba(255,245,84,.8)',
      borderRadius: 25,
      paddingHorizontal: 20,
      fontSize: 18,
      color: '#333',
      margin: 8,
   },
   button: {
      flex: .2,
      paddingHorizontal: 20,
      backgroundColor: 'rgba(255,245,84,.8)',
      margin: 8,
      borderRadius: 25,
      paddingVertical: 16,
   },
   buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#000',
      textAlign: 'center',
   }
})