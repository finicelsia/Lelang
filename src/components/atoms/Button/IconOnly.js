import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Bit, IconBack, IconPesan, IconTambah, Selesai } from '../../../assets'

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if (icon === 'back-dark'){
            return <IconBack />
        }
        if (icon === 'bit'){
            return <Bit />
        }
        if (icon === 'tambahFoto'){
            return <IconTambah />
        }
        if (icon === 'pesan'){
            return <IconPesan />
        }
        if (icon === 'selesai'){
            return <Selesai />
        }
        return <IconBack />;
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly

const styles = StyleSheet.create({})
