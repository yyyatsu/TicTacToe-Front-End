//Done

import { View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import AvatarProps from './AvatarProps';
import AvatarStyle from './AvatarStyle';

const {image, indicator} = AvatarStyle;

const Avatar = ({onPress, uri}: AvatarProps) =>
{
  return(
    <View>
      {uri ?
        <TouchableOpacity onPress={() => onPress()}>
          <Image 
            source = {{uri : `data:imag/png;base64,${uri}`}} 
            style = {image}
          />
        </TouchableOpacity>
        :
        <ActivityIndicator 
          style = {indicator} 
          color = '#6994EA'
        />
      }
    </View>
  )
};

export default Avatar;