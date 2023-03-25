//Done

import { StyleSheet } from 'react-native';

const AvatarStyle = StyleSheet.create
(
  {
    image:
    {
      width: 56,
      height: 56,
      borderRadius: 28
    },

    indicator:
    {
      width: 56,
      height: 56,
      transform:[{scale:2}]
    }
  }
);

export default AvatarStyle;