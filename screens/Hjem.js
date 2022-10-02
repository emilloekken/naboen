//Importerer de dependencies som skal anvendes
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { auth } from '../firebase'

//Funktionen der skal 
const Hjem = () => {
    const navigation = useNavigation()

    const handleLogUd = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("LogInd")
        })
        .catch(error => alert(error))
    }

    //Laver knappen til at logge ud og komme tilbage til log ind siden
    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity
            onPress={handleLogUd}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Log Ud</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Hjem

//Definerer styling på containere, knapper mm. 
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    button: {
        backgroundColor: '#0782F9',
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
})
