import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './StackNavigators';
import { colors } from 'react-native-elements';
import {Icon} from 'react-native-elements';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name = "Home"
                component = {HomeStack}
                options = {{
                    title:"Tela Inicial",
                    drawerIcon: ({focussed,size})=>
                    <Icon type = "material-community" 
                          name = "home"
                          color = {focussed? '#7cc':colors.gray2}
                          size = {size}/>,
                   headerShown : false}}/>
        </Drawer.Navigator>
    )
}
