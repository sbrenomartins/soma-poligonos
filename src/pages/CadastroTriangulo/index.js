import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Logo, Text, Button, ButtonText, ErrorMessage } from './styles';

import api from '../../services/api';

export default class CadastroTriangulo extends Component {
  
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

  handleBaseChange = (base) => {
    this.setState({ base: base });
  };

  handleAlturaChange = (altura) => {
    this.setState({ altura: altura });
  };

  handleVoltar = () => {
    this.props.navigation.navigate('Main');
  };

  handleCadastro = async () => {
    if(this.state.base.length === 0 || this.state.altura.length === 0){
      this.setState({ error: 'Você deve preencher a base e a altura para cadastrar'});
    } else {
      try {
        await api.post('/triangulo', {
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
          <Text>Cadastro de Triângulos:</Text>
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
