//Done

import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import AuthentificationType from '../../enums/AuthentificationType';

interface SignUpInButtonProps
{
  onPress: (authentificationType: AuthentificationType) => void,
  authentificationType: AuthentificationType,
  children: ReactNode,
  style: StyleProp<ViewStyle>
};

export default SignUpInButtonProps;