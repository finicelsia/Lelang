import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HalamanDaftar, Masuk, Splash, Jual, Beranda, Profil, Info } from '../pages';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <TopNavigator {...props} />}>
            <Tab.Screen name="Beranda" component={Beranda}/>
            <Tab.Screen name="Jual" component={Jual}/>
            <Tab.Screen name="Info" component={Info}/>
            <Tab.Screen name="Profil" component={Profil}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return(
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="Masuk" component={Masuk} options={{headerShown: false}}/>
            <Stack.Screen name="HalamanDaftar" component={HalamanDaftar} options={{headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Router;