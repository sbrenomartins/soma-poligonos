import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Label, ErrorMessage, ButtonText, Button, Text, Logo } from './styles';

import api from '../../services/api';

export default class SomaPoligonos extends Component {

  state = {
    error: '',
    soma: ''
  }

  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleVoltar = () => {
    this.props.navigation.navigate('Main');
  };

  componentDidMount(){
    this.recebeSoma();
  }

  recebeSoma = async () => {
    try{
      const response = await api.get('/soma-areas');

      this.setState({ soma: response.data.mensagem });
    } catch (erro) {
      this.setState({ error: 'Ocorreu um erro durante a solicitação'});
    }
  }

  render() {
    return (
        <Container>
          <Logo source={require('../../images/logo.png')} resizeMode="contain" />
          {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
          <Text>Soma de todos os polígonos cadastrados:</Text>
          <Label editable={false} value={this.state.soma.toString()}></Label>
          <Button onPress={this.handleVoltar}>
            <ButtonText>Voltar</ButtonText>
          </Button>
        </Container>
    );
  }
}
