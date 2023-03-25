import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameTabs from '../navigation/game-tabs/GameTabs';
import ProfileTabs from '../navigation/profile-tabs/ProfileTabs';

export const Tab = createBottomTabNavigator();

const BottomBar = () =>
{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Game" component={GameTabs} options={{headerShown: false}}/>
      <Tab.Screen name="Profile" component={ProfileTabs} options={{headerShown: false}}/>
      <Tab.Screen name="Chats" component={GameTabs} options={{headerShown: false}}/>
      <Tab.Screen name="Settings" component={GameTabs} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

export default BottomBar;
