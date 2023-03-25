//Done

import { TouchableOpacity } from 'react-native';

import MenuItemProps from './MenuItemProps';
import MenuItemStyle from './MenuItemStyle';

const { container } = MenuItemStyle;

const MenuItem = ({onPress, style, children}: MenuItemProps): JSX.Element =>
{
  return (
    <TouchableOpacity
      style = {[container, style]}
      onPress = {onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default MenuItem;