import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Início</Text>

      <TouchableOpacity
        style={StyleSheet.title}
        title="Sobre"
        onPress={() => navigation.navigate('Sobre')}
      >
          <Text style={styles.title}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={StyleSheet.title}
        title="Estante"
        onPress={() => navigation.navigate('Estante')}
      >
          <Text style={styles.title}>Estante</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={StyleSheet.title}
        title="Registro"
        onPress={() => navigation.navigate('Registro')}
      >
          <Text style={styles.title}>Registro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={StyleSheet.title}
        title="Registro de livro"
        onPress={() => navigation.navigate('Registro de livro')}
      >
          <Text style={styles.title}>Registro de livro</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        backgroundColor: 'blue',
        color: 'white',
        fontSize: 20,
        borderRadius: 15,
        width: 180,
        height: 30,
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 90,
    }
})