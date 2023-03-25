//Done

import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

interface MenuItemProps
{
  onPress: () => void,
  style?: ViewStyle,
  children: ReactNode,
};

export default MenuItemProps;