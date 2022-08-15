import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button, Image, TouchableOpacity, Animated, ImageBackground, Alert, PanResponder} from 'react-native';
import { Camera } from 'expo-camera';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

export default function CameraScreen2(){


  const [hasPermission, setHasPermission] = useState();
  const [photo, setPhoto] = useState();
  const ref= useRef()
  const [line, setLine] = useState();
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);
  const [locationX1, setLocationX1] = useState(0);
  const [locationY1, setLocationY1] = useState(0);
  const [panState, setPanState] = useState();

 
  const pan1 = useRef(new Animated.ValueXY()).current;
     const panResponder1 = useRef(
     PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture:(event, gestureState) => true,
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture:
      (event, gestureState) => false,
    onPanResponderGrant: (event, gestureState) => true,
    onPanResponderMove: (event, gestureState) => {
        //console.log(event);
        console.log(gestureState);
     
        console.log(locationY)
        return Animated.event([
            null,
            { dx: pan1.x, dy: pan1.y }
          ])(event,gestureState);
          
      },
    onPanResponderRelease: () => {
        Animated.spring(pan1, { toValue: { x: pan1.x, y: pan1.y }, useNativeDriver:true }).start();
      }
    })
  ).current;

  //console.log(pan1)

  const pan2 = useRef(new Animated.ValueXY()).current;
    const panResponder2 = useRef(
     PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture:
      (event, gestureState) => true,
    onMoveShouldSetPanResponder: (event, gestureState) => true,
    onMoveShouldSetPanResponderCapture:
      (event, gestureState) => false,
    onPanResponderGrant: (event, gestureState) => true,
    onPanResponderMove: (event, gestureState) => {
        console.log(event);
        console.log(gestureState);
        return Animated.event([
            null,
            { dx: pan2.x, dy: pan2.y }
          ])(event,gestureState);
      },
    onPanResponderRelease: (event, gestureState) => {
        Animated.spring(pan2, { toValue: { x: pan2.x, y: pan2.y }, useNativeDriver:true }).start();
      }
    })
  ).current;
   

   

    const takePic = async () => {

      const options = {

        quality:1,
        base64:true,
        exif:false,
      
      };

      const newPhoto= await ref.current.takePictureAsync(options);
      setPhoto(newPhoto)
    }

    if(photo) {

      return(


      <SafeAreaView style={styles.imageContainer}>

     
      <ImageBackground style={styles.preview} source={{uri:"data:image/jpg;base64,"+ photo.base64}}>

 

     <View {...panResponder1.panHandlers}>
      <Animated.View
    style={[
      styles.lineStyle,
      {
        transform: [{ translateX: pan1.x }, { translateY: pan1.y }]
        },
        ]}>
       </Animated.View>    
       </View>

       <View {...panResponder2.panHandlers}>
       <Animated.View
        style={[
      styles.lineStyle2,
      {
        transform: [{ translateX: pan2.x }, { translateY: pan2.y }]
        },
        ]}>
    
       </Animated.View>  


</View>



         
<Button title = "DISCARD" style={styles.discardButton} onPress={()=>{setPhoto(undefined)}}/>
</ImageBackground>



      </SafeAreaView>
      ) }


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (

    <View style={styles.container}>
  
    
      <Camera style={styles.camera} ratio= {'9:16'} ref={ref}> 
     
       <View style={styles.buttonContainer}>
        
        <TouchableOpacity title="Take Picture" style={styles.pictureButton} onPress={takePic}>

        </TouchableOpacity>
     
        </View>  
      </Camera>
       
    </View>
  
  )
}

const styles = StyleSheet.create({

  container:{

  alignContent:'center', 
  alignItems:'center', 
  justifyContent:'center', 
  alignSelf:'center'
  },

  camera:{

    flex:1,
    backgroundColor:'black',
    aspectRatio:135/76,
    width:'200%',  
    resizeMode:'cover'
  
  },

  pictureButton:{

    borderWidth: 8, 
    borderColor: '#ff404087', 
    backgroundColor:'#ff4040', 
    borderRadius:100, 
    height:80, 
    width:80,
    alignSelf: 'center', 
    position:'absolute',
    right:10,
    top:150,
  
    
  },

  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative'
  },


  discardButton:{

    backgroundColor:"white", 
    alignContent:'center', 
    alignSelf:'center'
  },

  preview: {
    alignSelf: 'stretch',
    flex: 1,
    
  },

  lineStyle: {
    height: 20,
    width: 500,
    backgroundColor: "black",
    borderRadius: 5,
    marginTop:'5%'
  },

   lineStyle2: {
    height: 20,
    width: 500,
    backgroundColor: "black",
    borderRadius: 5,
    marginTop:'5%',
    
  
  },

  textStyle:{

    position:'absolute', 
    alignSelf:'center', 
    color:"black", 
    fontSize:25, 
    backgroundColor:"lightBlue"
  }



})
