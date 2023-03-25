//Done

import { NavigationProp } from '@react-navigation/native';
import { GameStackParametersList } from '../navigation/game-tabs/GameTabs';

interface MenuProps
{
  navigation: NavigationProp<GameStackParametersList, 'Menu'>,
}

export default MenuProps;