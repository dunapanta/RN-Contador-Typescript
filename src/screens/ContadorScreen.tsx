import React, { useState } from 'react'
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(0)
    return (
        
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>Contador: {contador}</Text>
        <Fab 
            title="-1"
            onPress = {() => setContador(prevState => prevState - 1 )}
        />
        <Fab 
            title="+1"
            position='bl'
            onPress = {() => setContador(prevState => prevState + 1 )}
        />
            {/* <TouchableOpacity
                style={styles.fabLocationBR}
                onPress={() => setContador(prevState => prevState + 1 )}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}> +1 </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
    },
})