import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../../../utils'

const Input = ({label, value, onChangeText, secureTextEntry, disable}) => {
    const [border, setBorder] = useState(colors.border.secondary)
    const onFocusForm = () => {
        setBorder(colors.border.primary);
    };
    const onBlurForm = () => {
        setBorder(colors.border.secondary);
    }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput onFocus={onFocusForm} onBlur={onBlurForm} 
            style={styles.input(border)}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            editable={!disable}
            selectTextOnFocus={!disable}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: (border) => ({
        borderWidth: 1.2,
        borderColor: border,
        borderRadius: 10,
        width: 250,
        height: 45,
        padding: 10
    }),
    label: {
        fontSize: 14,
        color: colors.text.primary,
        marginBottom: 6
    }
})
