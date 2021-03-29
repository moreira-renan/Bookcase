import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert, TextInput, ActivityIndicator} from 'react-native';

import firebase from '@firebase/app';
import '@firebase/auth';

export default class LoginPage extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      message: ''
    }
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCWbbFq854dPsD07jxyszD4iyLFw1ehuyk",
      authDomain: "bookcase-9630d.firebaseapp.com",
      databaseURL: "https://bookcase-9630d.firebaseio.com",
      projectId: "bookcase-9630d",
      storageBucket: "bookcase-9630d.appspot.com",
      messagingSenderId: "9846305705",
      appId: "1:9846305705:web:f600e211f6bde7b1fb8ab8"
    };

    try {
      firebase.initializeApp(firebaseConfig)
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error("erro")
      }
    }
  }

  renderButton() {
    if (this.state.isLoading)
      return <ActivityIndicator />;
    return (
      <Button title="Entrar"
      onPress={() => this.login()}
      />
    );
  }

  renderMessage() {
    const { message } = this.state;
    if (!message)
      return null;
    return (
      <View>
        <Text>
        {message}
        </Text>
      </View>
    );
  }

  changeText(campo, valor) {
    this.setState({[campo]: valor});
  }

  login() {
    this.setState({ isLoading: true });
    const {email, password} = this.state;

    const loginSucesso = user => {
      this.props.navigation.navigate('Início');
    }

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(loginSucesso)
    .catch(error => {
      if (error.code == 'auth/user-not-found') {
        Alert.alert(
          'Usuário não encontrado',
          'Criar novo usuário?',
          [{
            text: 'Não',
          }, {
            text: 'Sim',
            onPress: () => {
              firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(loginSucesso)
                .catch(error => {
                  this.setState({
                    message: this.erroLoginMessage(error.code)
                  })
                })
            }
          }],
          { cancelable: false}
        )
      } else {
        Alert.alert(
          'Erro na auntenticação',
          this.erroLoginMessage(error.code)
        )
      }
    })
    .then(() => this.setState({ isLoading: false}));
  }

  erroLoginMessage(errorCode) {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta'
      case 'auth/user-not-found':
        return 'Usuário não encontrado'
      case 'auth/invalid-email':
        return 'E-mail incorreto'
      default :
        return 'Erro não documentado, contate o administrador: Renan'
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>Seja bem vindo ao Book Case, sua estante de livros.</Text>
        <Text style={styles.welcome}>Realize a compra e venda de livros usados ou novos de maneira fácil!</Text>
        <Text style={styles.welcome}>Insira seus dados ou cadastre-se! </Text>

        <TextInput style={styles.textInput} 
          placeholder="email@email.com"
          value={this.state.email}
          onChangeText={value => this.changeText('email', value)}
        />
        <TextInput style={styles.textInput} 
          placeholder="senha" secureTextEntry
          value={this.state.password}
          onChangeText={value => this.changeText('password', value)}
        />
        { this.renderButton() }
        { this.renderMessage() }
     
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  textInput: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    elevation: 2,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  welcome: {
    fontSize: 15,
    marginTop: 2,
    marginBottom: 2,
    textAlign: 'center',
    fontWeight: "bold",
  },
});