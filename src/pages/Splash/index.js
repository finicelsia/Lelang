import React, {useEffect} from 'react'
import { StyleSheet, View, Image } from 'react-native'
import {LogoSplash} from '../../assets'
import { Fire } from '../../config'

const Splash = ({navigation}) => {
    useEffect(() => {
        const unsubscribe = Fire.auth().onAuthStateChanged(user => {
            setTimeout(() => {
                if(user){
                    //user login
                    console.log('user: ', user);
                    navigation.replace('MainApp');

                } else {
                    //user logout
                    navigation.replace('Masuk');
                }
            },3000);
        });

        return () => unsubscribe();
    }, [navigation]);
    return (
        <View style={styles.page}> 
            <Image source={LogoSplash} style={{width: '100%', height: '100%'}}></Image>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'}
});
