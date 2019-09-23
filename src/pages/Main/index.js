import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Logo, Button, ButtonText } from './styles';

export default class Main extends Component {
  
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleRetangulo = () => {
    this.props.navigation.navigate('CadastroRetangulo');
  };

  handleTriangulo = () => {
    this.props.navigation.navigate('CadastroTriangulo');
  };

  handleSoma = () => {
    this.props.navigation.navigate('SomaPoligonos');
  };

  render() {
    return (
        <Container>
          <Logo source={require('../../images/logo.png')} resizeMode="contain" />
          <Button onPress={this.handleRetangulo}>
            <ButtonText>Cadastrar Retângulo</ButtonText>
          </Button>

          <Button onPress={this.handleTriangulo}>
            <ButtonText>Cadastrar Triângulo</ButtonText>
          </Button>

          <Button onPress={this.handleSoma}>
            <ButtonText>Soma dos Polígonos</ButtonText>
          </Button>
        </Container>
    );
  }
}
