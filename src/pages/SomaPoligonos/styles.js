import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #E85C00;
`;

const Button = styled.TouchableHighlight`
    padding: 20px;
    borderRadius: 5px;
    backgroundColor: #2D2D2D;
    width: 70%;
    margin: 8px;
    marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
    color: #FFF;
    fontWeight: bold;
    fontSize: 18px;
    textAlign: center;
`;

const Logo = styled.Image`
    height: 15%;
    marginBottom: 20px;
`;

const Text = styled.Text`
    color: #FFF;
    fontWeight: bold;
    fontSize: 24px;
    textAlign: center;
    marginBottom: 20px;
`; 

const Label = styled.TextInput`
    padding: 20px;
    borderRadius: 5px;
    backgroundColor: #FFF;
    border: 1px solid black;
    width: 70%;
    margin: 8px;
    marginHorizontal: 20px;
    fontSize: 18px;
    textAlign: center;
    color: #2d2d2d;
`;

const ErrorMessage = styled.Text`
    padding: 20px;
    borderRadius: 5px;
    backgroundColor: red;
    width: 70%;
    margin: 8px;
    marginHorizontal: 20px;
`;

export { Container, Button, ButtonText, Text, ErrorMessage, Label, Logo };