import { Text, StyleSheet, View, Dimensions, Image } from 'react-native'
import React, { Component } from 'react'
import { mapStyle } from '../global/mapStyle'
import MapView, {PROVIDER_GOOGLE,} from 'react-native-maps'
import { colors, parameters } from '../global/styles'
import { useEffect } from 'react'

export default class MapComponent extends Component {
  render() {
    return (
      <View>
        <MapView 
               provider ={PROVIDER_GOOGLE}
               style = {styles.map}
              customMapStyle ={mapStyle}
              /> 

              {this.props.origin.latitude != null &&
        <MapView.Marker coordinate = {this.props.origin} anchor = {{x:0.5,y:0.5}}>
            <Image 
              source = {require('../../assets/location.png')}
              styles = {styles.markerOrigin2}
              resizeMode ="cover"
            />
        </MapView.Marker>
  }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',},
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height, },
          
        markerWrapOrigin: {
         //  alignItems: "center",
          // justifyContent: "center",
            width:40,
           height:20,
          // marginTop:0
          },
          markerOrigin: {
             width: 16,
             height: 16,
             borderRadius:8
          },
    
          destination: {
             width:20,
            height:20,
            backgroundColor:colors.black,
            alignItems:"center",
            justifyContent:"center"
           },
 
           view1: {
             width:7,
            height:7,
            backgroundColor:colors.white
           },
           markerDestination: {
            width: 16,
            height: 16,
            
           },
           
           markerOrigin2: {
             width: 20,
             height:20,
             borderRadius:10
            },
 
     car:{
         paddingTop:0,
         width: 40,
         height: 20,
        },
 
        view2:{
         position:"absolute",
         top:10,
         right:12,
         backgroundColor:colors.white,
         height:40,
         width:180,
         borderRadius:20,
         justifyContent:"center",
         alignItems:"center",
         marginTop:2, 
         zIndex: 8
         
       },    
  
 view3:{ flexDirection:"row",
 alignItems:"center",
 //marginRight:15,
 //backgroundColor:"white",
 //paddingHorizontal:2,
 paddingVertical:2,
 //borderRadius:20
 },
 
 view4:{
     position:"absolute",
     top:50,
     left:12,
     backgroundColor:colors.white,
     height:40,
     width:140,
     borderRadius:20,
     justifyContent:"center",
     alignItems:"center",
     marginTop:2, 
     zIndex: 8
     
   }, 
 
   location: {
     width: 20,
     height: 20,
     borderRadius:9,
     backgroundColor:colors.black,
     alignItems:"center",
     justifyContent:"center"
     
     }, 
     
 view9:{width:6,
   height:6,
   borderRadius:4,
   backgroundColor:"white"
 }     
})  





