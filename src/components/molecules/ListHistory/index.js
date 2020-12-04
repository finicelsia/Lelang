import React, { useState, useEffect } from 'react'
import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import { colors, getData } from '../../../utils'
import { Gap } from '../../atoms'
import { Button } from '../../index'

const ListHistory = ({ onPress, NamaIkan, hargaAkhir, nomorHP, TopBidder, BeratKG, pic}) => {
    return (
        <View style={styles.container}>
            {/* <Image source={pic} style={styles.foto}/> */}
            <View style={styles.text}>
            {/* <Text style={styles.size}>{NamaIkan}</Text>
            <Text style={styles.size}>{BeratKG} KG</Text> */}
            <Text style={styles.size}>Rp. {hargaAkhir}</Text>
            <Text style={styles.size}>Bid tertinggi: {TopBidder}</Text>
            <Text style={styles.size}>No HP: {nomorHP}</Text>
            </View>
            <View style={styles.button}>
            <Gap height={5} />
            <Button type="icon-only" icon="pesan" onPress={() => {Linking.openURL('https://wa.me/' + nomorHP)}}/>
            </View>
        </View>
        
    )
}

export default ListHistory

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
        alignItems: 'flex-end',
        justifyContent: 'center',
        // backgroundColor: 'red'

    },
})
