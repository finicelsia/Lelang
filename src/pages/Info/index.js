import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Logo, Fik, Uk } from '../../assets'
import { Gap } from '../../components'
import { colors } from '../../utils'

const Info = () => {
    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.teks}>Informasi Aplikasi</Text>
            <Gap height={2} />
            <View style={styles.lg}>
            <Image source={Fik} style={styles.logoFik}></Image>
            <Image source={Logo} style={styles.logo}></Image>
            <Image source={Uk} style={styles.logoUk}></Image>
            </View>
                  
            <Text style={styles.teks3}>Selamat Datang di Auction of Fish!</Text>
            <Gap height={10} />
            <Text style={styles.teks2}>Aplikasi ini dirancang untuk membantu para pengguna memasarkan hasil tangkapan ikan secara efisien. Aplikasi ini memiliki ketentuan pengguna, dimana para pengguna harus memasukan informasi yang benar agar transaksi bisa berjalan dengan lancar.</Text>
            
            <Text style={styles.teks2}>Bid harga pada aplikasi ini secara otomatis diatur menjadi Rp.50.000/Bid</Text>
            <Gap height={30} />
            <Text style={styles.teks2}>Contact Admin: </Text>
            <Text style={styles.teks2}>1. Email   : aof@gmail.com </Text>
            <Text style={styles.teks2}>2. No Tlp : 082190439624</Text>
            <Gap height={10} />

            </ScrollView>
            <Text style={styles.teks4}>Copyright AoF 2020.</Text>
        </View>
    )
}

export default Info

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        padding: 15,
        flex: 1,
    },
    lg: {
        // backgroundColor: 'red',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    teks: {
        marginTop: 5,
        fontSize: 22,
        textAlign: 'center'
    },
    teks3: {
        fontSize: 18,
        textAlign: 'center'
    },
    teks4: {
        fontSize: 12,
        textAlign: 'center'
    },
    teks2: {
        fontSize: 16,
        textAlign: 'justify'
    },
    logo: {
        alignSelf: 'center',
        height: 200,
        width: 200,
    },
    logoFik: {
        alignSelf: 'center',
        height: 80,
        width: 80,
    },
    logoUk: {
        alignSelf: 'center',
        height: 55,
        width: 55,
    },
})
