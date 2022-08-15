import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, TouchableHighlight, Image, ScrollView, Button} from 'react-native';
import { Header } from 'react-native-elements';
//import { NavigationContainer } from '@react-navigation/native';
import StraightBack from './StraightBack';


 export default class Postures extends React.Component{

   constructor(props){

     super(props)

   }
  render(){
  return(

  <View style={styles.container}>
    <SafeAreaView style={styles.areaView}/>
    <View style={styles.introTextContainer}>
      <Text style={styles.introText}>It is estimated that about 80% of the population will face health problems such as back pain at some point of their lives just because of having an incorrect body posture. </Text>
    </View>

     <View style={styles.introLineContainer}>
      <Text style={styles.introText}>The following are some recommended sitting postures, in order to prevent such threatening health issues.</Text>
    </View>

    <View>
      <Text style={styles.posture_1Text}>1. Having a Straight Back</Text>
      <Image source={require('../Images/posture_1.jpg')} style={styles.posture_1}/>
    </View>

    <View>
      <Text style={styles.posture_1Text}>2. Keeping your Feet Flat on the Floor </Text>
      <Image source={require('../Images/posture_2.jpg')} style={styles.posture_1}/>
    </View>

    <View>
      <Text style={styles.posture_1Text}>3. Top of the Monitor Screen should be at Eye Level. </Text>
      <Image source={require('../Images/posture_3.jpg')} style={styles.posture_1}/>
    </View>

    <View>
      <Text style={styles.posture_1Text}>4. Monitor should be an Arm’s Length Away. </Text>
      <Image source={require('../Images/posture_4.jpg')} style={styles.posture_1}/>
    </View>
 
    
  </View>
  )
   }
}

const styles = StyleSheet.create({

  container:{

    flex:1
  }, 

  areaView:{


  }, 

  introTextContainer:{

    margin:'5%', 
    backgroundColor:'lightblue', 
    borderRadius:5,
    padding:'3%',

  },

  introText:{

    alignSelf:'center', 
    alignContent:'center', 
    justifyContent:'center', 
    alignItems:'center'
  },

  introLineContainer:{

    margin:'5%', 
    backgroundColor:'orange', 
    borderRadius:5,
    padding:'3%',

  }, 

  posture_1Text:{

   margin:'5%', 
   alignSelf:'center', 

  },

  posture_1:{

    alignSelf:'center', 
    resizeMode:'contain', 
    width:200, 
    height:200, 
    borderColor:'black', 
    borderWidth: 5, 
    marginBottom:'5%',

  }


})