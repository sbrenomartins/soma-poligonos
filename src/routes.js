import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/Main';
import CadastroRetangulo from './pages/CadastroRetangulo';
import CadastroTriangulo from './pages/CadastroTriangulo';
import SomaPoligonos from './pages/SomaPoligonos';

const mainNavigation = createSwitchNavigator({
    Main,
    CadastroRetangulo,
    CadastroTriangulo, 
    SomaPoligonos
});

export default createAppContainer(mainNavigation);