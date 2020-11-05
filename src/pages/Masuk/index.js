import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Button, Gap, Input, Link, Loading } from '../../components'
import { colors, storeData, useForm } from '../../utils'
import { Fire } from '../../config'
import { showMessage } from 'react-native-flash-message'
import { ILmasuk } from '../../assets'

const Masuk = ({navigation}) => {
    const [form, setForm] = useForm({email: '', kataSandi: ''});
    const [loading, setLoading] = useState(false);

    const login = () => {
        console.log('form: ', form);
        setLoading(true);
        Fire.auth().signInWithEmailAndPassword(form.email, form.kataSandi).then(res => {
            console.log('success: ', res);
            setLoading(false);
            Fire.database()
            .ref(`users/${res.user.uid}/`)
            .once('value')
            .then(resDB => {
                console.log('data user: ', resDB.val());
                if (resDB.val()) {
                    storeData('user', resDB.val());
                    navigation.replace('MainApp');
                }
            })
        })
        .catch(err => {
            console.log('error: ', err);
            setLoading(false);
            showMessage({
                message: err.message,
                type: 'default',
                backgroundColor: colors.error,
                color: colors.white,
            })
        })
    }
    return (
        <ImageBackground source={ILmasuk} style={styles.bg}>
        <View style={styles.page}>
            <View>
            <Gap height={100} />
            <Input style={colors.white} label="Email" value={form.email} 
            onChangeText={value => setForm('email', value)} />
            <Gap height={20} />
            <Input secureTextEntry={true} label="Kata Sandi" value={form.kataSandi} 
            onChangeText={value => setForm('kataSandi', value)}
            secureTextEntry
            />
            <Gap height={10} />
            </View>

            <View>
            <Button title="MASUK" onPress={login}/>
            <Gap height={10} />
            <Link title="Buat Akun" size={14} align="center" color="#7D8797" onPress={() => navigation.navigate('HalamanDaftar')}/>
            <Gap height={30} />
            </View>
            {loading && <Loading />}
        </View>
        </ImageBackground>
    )
}

export default Masuk

const styles = StyleSheet.create({
    page: {
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
    },
    bg: {
        padding: 40,
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center'
    }
});
