import {createStackNavigator, createAppContainer} from 'react-navigation';
import AppHome from './AppHome.js'
import SearchButtonNavigate from './SearchButtonNavigate.js'

const MainNavigator = createStackNavigator({
  Home: {screen: AppHome},
  ButtonNavigate: {screen: SearchButtonNavigate},
});

const App = createAppContainer(MainNavigator);

export default App;