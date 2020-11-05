import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Bit, IconBack, IconPesan, IconTambah } from '../../../assets'

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
