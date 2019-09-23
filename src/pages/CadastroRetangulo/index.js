import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Label, ErrorMessage, ButtonText, Button, Text, Logo } from './styles';

import api from '../../services/api';

export default class CadastroRetangulo extends Component {

  state = {
    base: '',
    altura: '',
    error: ''
  };

  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleBaseChange = (data) => {
    this.setState({ base: data });
  };

  handleAlturaChange = (data) => {
    this.setState({ altura: data });
  };

  handleVoltar = () => {
    this.props.navigation.navigate('Main');
  };

  handleCadastro = async () => {
    if(this.state.base.length === 0 || this.state.altura.length === 0){
      this.setState({ error: 'Você deve preencher a base e a altura para cadastrar'});
    } else {
      try {
        await api.post('/retangulo', {
          base: this.state.base,
          altura: this.state.altura
        });

        this.setState({ error: 'Retângulo cadastrado com sucesso!' });
      } catch (erro){
        this.setState({ error: 'Houve um erro no processamento de sua requisição' });
      }
    }
  };  

  render() {
    return (
        <Container>
          <Logo source={require('../../images/logo.png')} resizeMode="contain" />
          {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
          <Text>Cadastro de Retângulo:</Text>
          <Label onChangeText={this.handleBaseChange} placeholder="Base" autoCapitalize="none" autoCorrect={false} value={this.state.base}></Label>
          <Label onChangeText={this.handleAlturaChange} placeholder="Altura" autoCapitalize="none" autoCorrect={false} value={this.state.altura}></Label>
          
          <Button onPress={this.handleCadastro}>
            <ButtonText>Cadastrar</ButtonText>
          </Button>

          <Button onPress={this.handleVoltar}>
            <ButtonText>Voltar</ButtonText>
          </Button>
        </Container>
    );
  }
}
