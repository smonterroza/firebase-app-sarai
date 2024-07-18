import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const SignInUser = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Usuario inició sesión:', userCredential.user);
                navigation.navigate('Home');
            })
            .catch((error) => {
                console.error('Error al iniciar sesión:', error.message);
            });
    };



    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonText}>Regístrate</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        borderRadius: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 35,
        width: 300,
        height: 50,
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
    },
});

export default SignInUser;
