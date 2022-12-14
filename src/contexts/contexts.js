import React, {createContext, useReducer, useState} from "react";
import {OriginReducer} from '../reducers/reducers';
import * as Location from 'expo-location';


export const OriginContext = createContext()




export const OriginContextProvider = (props) => {
    const [origin, setOrigin] = useState({
        latitude:null,
        longitude:null,
        adress:"",
        name:""
})

const [dispatchOrigin, setdispatchOrigin] = useState({
    latitude:null,
    longitude:null,
    adress:"",
    name:""
})

const [latLng, setLatLng] = useState({})


const getLocation = async () => {
      const {
        coords:{latitude,longitude},
      } = await Location.getCurrentPositionAsync();
      setLatLng({latitude:latitude, longitude:longitude})
    
    }
  

    // const [userOrigin, setUserOrigin] = useState({latitude:origin.latitude, longitude:origin.longitude})
    // const [dispatchOrigin, customOrigin] = useReducer(OriginReducer,{
    //             latitude:null,
    //             longitude:null,
    //             adress:"",
    //             name:""
    // })

    return(
        <OriginContext.Provider
            value ={{origin, setOrigin, dispatchOrigin, setdispatchOrigin, latLng, setLatLng}}>
            {props.children}
        </OriginContext.Provider>
    )
}