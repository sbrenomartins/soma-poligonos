import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #E85C00;
`;

const Logo = styled.Image`
    height: 15%;
    marginBottom: 20px;
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

export { Container, Logo, Button, ButtonText };