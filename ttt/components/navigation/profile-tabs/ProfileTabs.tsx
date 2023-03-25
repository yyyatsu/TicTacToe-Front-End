import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FullProfile from '../../full-profile/FullProfile';

export const Stack = createNativeStackNavigator();

const ProfileTabs = () =>
{
  return (
    <Stack.Navigator>
      <Stack.Screen name="FullProfile" component={FullProfile} options ={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default ProfileTabs;
