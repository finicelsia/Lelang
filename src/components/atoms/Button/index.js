import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils'
import IconOnly from './IconOnly'

const Button = ({type, title, onPress, icon}) => {
    if(type === 'icon-only'){
        return(
           <IconOnly icon={icon} onPress={onPress}/>
        )
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor : type === 'secondary' ? colors.white :  colors.button.primary.background,
        paddingVertical: 10,
        width: 100,
        borderRadius: 15,
    }),
    text: (type) => ({
        fontSize: 14,
        fontWeight: '300',
        textAlign:'center',
        color: type === 'secondary' ? colors.text.primary : colors.black,
    })
});
