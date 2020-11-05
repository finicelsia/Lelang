import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'

const Link = ({title, size, align, color, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text(size, align, color)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    text: (size, align, color) => ({
        fontSize: 16,
        color: colors.white,
        textDecorationLine: 'underline',
        textAlign: align
    }),
})
