import React, { useState, useEffect } from 'react'
import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import { colors, getData } from '../../../utils'
import { Button } from '../../index'
import { Fire } from '../../../config'
import { Gap } from '../../atoms'

const ListLelang = ({ onPress, NamaIkan, HargaAwal, tes, AkanBerakhir, LelangBY, TopBidder, BeratKG, pic, nomorHP}) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        getDataUser();
    }, []);
    const getDataUser = () => {
        getData('user').then(res => {
            console.log('user login: ', res);
            setUser(res);
        })
    }
    const topBidder = (id) => {
        let hb = parseInt(HargaAwal + 50000);
        Fire.database()
        .ref('fish/'+id)
        .update({
            topBidder: user.email,
            hargaAwal: hb,
        })
        .then((data)=>{
            //success callback
            console.log('data ' , data)
            navigation.navigate('Beranda')
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }
    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.foto}/>
            <View style={styles.text}>
            <Text style={styles.size}>{NamaIkan}</Text>
            <Text style={styles.size}>{BeratKG} KG</Text>
            <Text style={styles.size}>Rp. {HargaAwal}</Text>
            <Text style={styles.size}>Berakhir {AkanBerakhir}</Text>
            <Text style={styles.size}>Lelang oleh: {LelangBY}</Text>
            <Text style={styles.size}>Bid tertinggi: {TopBidder}</Text>
            </View>
            <View style={styles.button}>
            <Button type="icon-only" icon="bit" onPress={() => topBidder(tes)}/>
            <Gap height={5} />
            <Button type="icon-only" icon="pesan" onPress={() => {Linking.openURL('https://wa.me/' + nomorHP)}}/>
            </View>
        </View>
        
    )
}

export default ListLelang

const styles = StyleSheet.create({
    foto: {
        width: 120,
        height: 100,
        borderRadius: 12,
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border.secondary,
  
    },
    text: {
        marginLeft: 5,
        justifyContent: 'center',
    },
    size: {
        fontSize: 12,
    },
    button: {
        flexDirection: 'column-reverse',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
})
