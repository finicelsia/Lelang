import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Header, Input, Button, Gap, Loading } from '../../components'
import { Fire } from '../../config'
import { colors, getData, storeData, useForm} from '../../utils'
import { showMessage, hideMessage } from "react-native-flash-message";

const HalamanDaftar = ({navigation}) => {
    const [form, setForm] = useForm ({
        namaLengkap: '', 
        alamat: '',
        nomorHP: '',
        email: '',
        kataSandi: '',
    });

    const [loading, setLoading] = useState(false)
    
    const onMasuk = () => {
        console.log(form);
        
        setLoading(true);
        Fire.auth().createUserWithEmailAndPassword(form.email, form.kataSandi)
        .then((success) => {
            setLoading(false);
            setForm('reset');
            // https://firebase.com/users
            const data = {
                namaLengkap: form.namaLengkap, 
                alamat: form.alamat,
                nomorHP: form.nomorHP,
                email: form.email,
                uid: success.user.uid
            }
            Fire.database()
            .ref('users/' +success.user.uid+ '/')
            .set(data);

            storeData('user', data);
            navigation.navigate('Masuk', data);
            console.log('daftar sukses: ', success);
        })
        .catch((error)=> {
            const errorMessage = error.message;
            setLoading(false);
            showMessage({
                message: errorMessage,
                type: 'default',
                backgroundColor: colors.error,
                color: colors.white
            });
            console.log('error: ', error);
          });
    }
    return (
        <>
        <ScrollView style={styles.page} showsVerticalScrollIndicator={false}> 
            <Header onPress={() => navigation.goBack()} title="Daftar Akun"/>
        <View style={styles.content}>
            <Gap height={20} />
            <Input label="Nama Lengkap" 
            value={form.namaLengkap} 
            onChangeText={(value) => setForm('namaLengkap', value)} />
            <Gap height={20} />
            <Input label="Alamat" 
            value={form.alamat} 
            onChangeText={(value) => setForm('alamat', value)} />
            <Gap height={20} />
            <Input label="Nomor HP" 
            value={form.nomorHP} 
            onChangeText={(value) => setForm('nomorHP', value)} />
            <Gap height={20} />
            <Input label="Email" 
            value={form.email} 
            onChangeText={(value) => setForm('email', value)}/>
            <Gap height={20} />
            <Input label="Kata Sandi" 
            value={form.kataSandi} 
            onChangeText={(value) => setForm('kataSandi', value)}
            secureTextEntry />
            <Gap height={15} />
            <Button title="DAFTAR" onPress={onMasuk}/>
        </View>
        </ScrollView>
        {loading && <Loading />}
        
        </>
    )
}

export default HalamanDaftar

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
