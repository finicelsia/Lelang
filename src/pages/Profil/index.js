import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Input, Gap, Button} from '../../components'
import { colors, getData} from '../../utils'
import {Fire} from '../../config'
import { showMessage } from 'react-native-flash-message'

const Profil = ({navigation}) => {
    const [profile, setProfile]= useState ({
        namaLengkap: '',
        alamat: '',
        nomorHP: '',
        email: '',

    });
    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            setProfile(data);
        });
    }, []);
    
    const signOut = () => {
        Fire.auth().signOut().then(res => {
            console.log('success sign out');
            navigation.replace('Masuk');
        }).catch(err => {
            showMessage({
                message: err.message,
                type: 'default',
                backgroundColor: colors.error,
                color: colors.white,
            })
            
        })
    }
    return (
        <ScrollView style={styles.page} showsVerticalScrollIndicator={false}> 
        <View style={styles.content}>
        <Gap height={20} />
            <Input label="Nama Lengkap" 
            value={profile.namaLengkap} disable/>
            <Gap height={20} />
            <Input label="Alamat"  value={profile.alamat} disable/>
            <Gap height={20} />
            <Input label="Nomor HP" value={profile.nomorHP} disable/>
            <Gap height={20} />
            <Input label="Email"  value={profile.email} disable/>
            <Gap height={20} />
            <Button title="KELUAR" onPress={signOut}/>

        </View>
        </ScrollView>  
    )
}

export default Profil

const styles = StyleSheet.create({
    content: {
        padding: 40,
        paddingTop: 0,
        alignItems: 'center'
    },
    page: {
        backgroundColor: colors.white,
    }
})