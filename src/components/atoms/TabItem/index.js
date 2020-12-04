import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconBerandaAktif, IconJualAktif, IconProfilAktif, IconJual, IconProfil, Info, Riwayat } from '../../../assets'
import { colors } from '../../../utils'


const TabItem = ({label, isFocused, onLongPress, onPress}) => {

    const Icon = () => {
        if(label=== "Beranda"){
            return isFocused ? <IconBerandaAktif/> : <IconBerandaAktif/>;
        }
        if(label=== "Jual"){
            return isFocused ? <IconJualAktif/> : <IconJual/>;
        }
        if(label=== "Info"){
            return isFocused ? <Info/> : <Info/>;
        }
        if(label=== "Riwayat"){
            return isFocused ? <Riwayat/> : <Riwayat/>;
        }
        if(label=== "Profil"){
            return isFocused ? <IconProfilAktif/> : <IconProfil/>;
        }
        
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={ isFocused ? styles.containerFocus : styles.container}
          >
            <Icon />
            {isFocused && <Text style={styles.text}>
              {label.toUpperCase()}
            </Text>}
          </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container : {
    alignContent : 'center',
    padding: 4
    },
    containerFocus : {
        alignContent : 'center',
        padding: 4,
        backgroundColor : colors.text.inactive,
        textAlign : 'center',
        flexDirection: 'row',
        borderRadius : 8,
        alignItems: 'center'
        },
    text : {
        color : colors.black,
        alignContent : 'center',
        fontSize :12,
        marginLeft : 6
    }
})