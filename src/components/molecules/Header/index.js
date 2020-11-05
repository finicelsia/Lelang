import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils'
import { Button, Gap } from '../../atoms'

const Header = ({onPress, title}) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-dark" onPress={onPress}/>
            <Text style={styles.text}>{title}</Text>
            <Gap width={20} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        // backgroundColor: 'yellow',
        color: colors.white,
        flex: 1,
    },
})
