import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';


export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Sobre</Text>

      <TouchableOpacity
        style={StyleSheet.title}
        title="Início"
        onPress={() => navigation.navigate('Início')}
      >
          <Text style={styles.title}>Início</Text>
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