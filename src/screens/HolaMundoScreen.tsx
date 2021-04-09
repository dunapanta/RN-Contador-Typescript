import React from 'react'
import { Text, View } from 'react-native'

export default function HolaMundoScreen() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'cyan',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 50
            }}>Hola Daniel</Text>
          </View>
    )
}
