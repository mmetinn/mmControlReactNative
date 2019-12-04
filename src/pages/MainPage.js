import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
} from 'react-native'

import {
   LineChart,
   BarChart,
   PieChart,
   ProgressChart,
   ContributionGraph,
   StackedBarChart
 } from 'react-native-chart-kit'

class MainPage extends Component {
 
   
   render() {
      return (

         <View style={styles.container}>
            <Text>MainPage</Text>
         </View>
      )
   }
}


export default MainPage

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fdfdfd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },   
})