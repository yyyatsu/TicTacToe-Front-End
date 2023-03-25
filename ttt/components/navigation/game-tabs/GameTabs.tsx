import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthentificationField from '../../authentification-field/AuthentificationField';
import Lobby from '../../lobby/Lobby';
import Menu from '../../menu/Menu';
import Rooms from '../../rooms/Rooms';
import SignUpInField from '../../sign-up-in-field/SignUpInField';
import StartGameField from '../../start-game-field/StartGameField';

export const Stack = createNativeStackNavigator();

export type GameStackParametersList =
{
  Menu: undefined;
  StartGameField: undefined;
  Lobby: any,
  Rooms: undefined;
  AuthentificationField: any,
  SignUpInField: any
};

const GameTabs = () =>
{
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUpInFieldField" component={SignUpInField} options ={{headerShown:false}}/>
      <Stack.Screen name="AuthentificationField" component={AuthentificationField as any} options ={{headerShown:false}}/>
      <Stack.Screen name="Menu" component={Menu} options ={{headerShown:false}}/>
      <Stack.Screen name="StartGameField" component={StartGameField} options = {{headerShown: false}}/>
      <Stack.Screen name="Lobby" component={Lobby as any} options = {{headerShown: false}}/>
      <Stack.Screen name="Rooms" component={Rooms as any} options = {{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default GameTabs;
