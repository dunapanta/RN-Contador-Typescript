import React from 'react'
import { Text, TouchableOpacity, Platform, View, TouchableNativeFeedback, StyleSheet } from 'react-native';

interface Props {
    title: string,
    position?: 'br' | 'bl'
    onPress: () => void,
}
export const Fab = ( { title, onPress, position = 'br' }:Props ) => {

    const iosButton = () => {
        return (
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={ 0.7 }
        style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
        </TouchableOpacity>
        )
    }

    const androidButton = () => {
        return (<View
        style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL}>
             <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('black', false, 30)}
                onPress={onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>)
    }
    return (Platform.OS === 'android' && Platform.Version >= 21) ? androidButton() : iosButton() 
    
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    fabLocationBR:{
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    fabLocationBL:{
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})