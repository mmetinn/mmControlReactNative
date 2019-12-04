import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
} from 'react-native'

class demopage extends Component {
 
   
   render() {
      return (

         <View style={styles.container}>
            <Text>DemoPAGE</Text>
         </View>
      )
   }
}


export default demopage

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fdfdfd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },   
})