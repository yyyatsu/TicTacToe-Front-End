import { View } from 'react-native';
import AppStyle from './AppStyle';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpInField from './components/sign-up-in-field/SignUpInField';
import AuthentificationField from './components/authentification-field/AuthentificationField';
import BottomBar from './components/testing-images/BottomBar';
import { useEffect, useState } from 'react';
import AuthentificationManager from './management/authentification-manager/AuthentificationManager';

const Stack = createNativeStackNavigator();

const App = () =>
{
  const [auth, setAuth] = useState(false);

  useEffect(() =>
  {
    AuthentificationManager.getUserName().then(r => setAuth(r !== null))
  }, []);

  return (
    <View style = { AppStyle.container }>   

      <NavigationContainer>
        <BottomBar/>
      </NavigationContainer>   
    </View>
  )
 };

export default App;