import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import Register from '../Pages/registerPage';
import Welcome from '../Pages/welcomePage';

const screen = {
    Home: {
        screen: Welcome
    },
    Register: {
        screen: Register
    },
}

const Homestack = createStackNavigator(screen);

export default createAppContainer(Homestack);