import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import React, {useRef, useContext} from 'react'
import { colors, parameters } from '../global/styles'
import { Avatar, Icon } from 'react-native-elements'
import {GOOGLE_MAPS_APIKEY} from "@env";
import { OriginContext } from '../contexts/contexts'




const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
navigator.geolocation = require("expo-location")


const DestinationScreen = ({navigation}) => {
  //const {dispatchOrigin, customOrigin} = useContext(OriginContext)
  const {origin, setOrigin} = useContext(OriginContext)
  const textInput1 = useRef(4);
  const textInput2 = useRef(5);
  return (
    <>
    <View style={styles.view2}>
    <View style = {styles.view1}>
        <View>
      <TouchableOpacity onPress={()=>{navigation.navigate("RequestScreen")}}>
        
        
        <Icon type = "material-community" name="arrow-left" color={colors.grey1} size = {32}/>

        </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
          <View style={{top:25, alignItems:"center" }}>
          <View style={styles.view3}>
            <Avatar
              rounded
              avatarStyle={{

              }}
              size={30}
              source={require('../../assets/blankProfilePic.jpg')}
            />
            <Text style={{marginLeft:5}}>Para Alguem</Text>
            <Icon 
              type='material-community'
              name='chevron-down'
              color={colors.grey1}
              size={26}
            />
          </View>
          </View>
        </TouchableOpacity>
    </View>
      

                
        <GooglePlacesAutocomplete 
          nearbyPlacesAPI='GooglePlacesSearch'
          placeholder="Indo para ..."
          listViewDisplayed="auto"
          debounce={40}
          currentLocation={true}
          currentLocationLabel='Localizaçao atual'
          ref = {textInput1}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
          query = {{key:GOOGLE_MAPS_APIKEY,
                    language:"pt-br"}}    
          onPress= {(data, details = null)=>{
            setOrigin({type:'ADD_ORIGIN', payload:{
              latitude:details.geometry.location.lat,
              longitude:details.geometry.location.lng,
              adress:details.formatted_address,
              name:details.name
            }}),
            console.log(details.geometry.location.lat, details.geometry.location.lng)
            navigation.goBack()
          }}               

        />
      
    </>
  )
}

export default DestinationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:parameters.statusBarHeight
    },
    
    view1:{
      position:"absolute",
      top:25,
      left:12,
      backgroundColor:colors.white,
      height:40,
      width:40,
      borderRadius:20,
      justifyContent:"center",
      alignItems:"center",
      marginTop:2, 
      zIndex: 10
      
    },
    
    view3:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:2,   
      marginBottom:10,
      backgroundColor: colors.white,
      height:30,
      zIndex: 10
    },
    
    view2:{backgroundColor:colors.white,
          zIndex:4,
          paddingBottom:10,
          
        },
    
        view24:{
          flexDirection:"row",
          justifyContent:"space-between",
         marginVertical:15,
          paddingHorizontal:20   
      }, 
      
      view25:{
          flexDirection:'row',
         alignItems:"baseline"
      },
      
      flatlist:{
          marginTop:20,
          zIndex:17,
          elevation:8
      },    
    
    });
    
    
    const autoComplete = {
    
        textInput:{
            backgroundColor: colors.grey6,
            height: 50,
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            fontSize: 15,
            flex: 1,
            borderWidth:1,
            marginHorizontal:15,
        },
        container: {
           paddingTop:20,
          flex: 1,
          backgroundColor:colors.white
              },
      
        textInputContainer: {
          flexDirection: 'row',
        },
  
  }