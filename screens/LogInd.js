//Importerer de dependencies som skal anvendes
import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'


const LogInd = () => {
    const [email, setEmail] = useState('')
    const [kodeord, setKodeord] = useState('')

    const navigation = useNavigation()

//Gør brug af useeffects og handlers, definerer hvad funktionerne skal gøre med input f.eks.
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Hjem")
            }
        })
        return unsubscribe
    }, [])

    //funktion til at oprette bruger, anvender funktionen "createuserwithemailandpassword", som er en indbygget firebase funktion
    const handleOpretBruger = () => {
        auth
        .createUserWithEmailAndPassword(email, kodeord)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Oprettet bruger med:', user.email);
        })
        .catch(error => alert(error.message))
    }

//funktion til at logge ind, bruger igen signInWithEmailAndPassword, som er en indbygget firebase funktion
    const handleLogInd = () => {
        auth
        .signInWithEmailAndPassword(email, kodeord)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logget ind med:', user.email);
        })
        .catch(error => alert(error.message))
    }

    //Her opsættes vores forskellige containers, med input, såsom knappen til at logge ind eller oprette bruger
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        >
           
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                
                />
                <TextInput
                    placeholder="Kodeord"
                    value={kodeord}
                    onChangeText={text => setKodeord(text)}
                    style={styles.input}
                    secureTextEntry
                />

                
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogInd}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Log Ind</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleOpretBruger}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Opret bruger</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LogInd

//Definerer styling til containere, knapper mm. 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
      },
      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      },
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
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
      buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
      },
})
