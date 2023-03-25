//Done

import { useState } from 'react';
import { View,  Text } from 'react-native';

import { useAsyncEffect } from 'use-async-effect';

import MiniProfileProps from './MiniProfileProps';
import MiniProfileStyle from './MiniProfileStyle';

import PhotoService from '../../services/photo-service/PhotoService';
import StatisticsService from '../../services/statistics-service/StatisticsService';
import Statistics from '../../types/Statistics';
import Avatar from '../avatar/Avatar';
import ProfilePopup from '../profile/ProfilePopup';

const {container, text} = MiniProfileStyle;

const MiniProfile = ({name}: MiniProfileProps): JSX.Element =>
{
  const [avatar, setAvatar] = useState('');
  const [statistics, setStatistics] = useState<Statistics>();
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  useAsyncEffect(async (): Promise<void> =>
  {
    if(!avatar)
    { 
      await getImage();
    }
  });

  const getImage = async (): Promise<void> =>
  {
    if(name)
    {
      setAvatar((await PhotoService.getImage(name)).data);
    }
  };

  const onPressOnAvatar = async (): Promise<void> =>
  {
    setStatistics((await StatisticsService.getStatistics(name)).data);
    setIsProfileVisible(true);
  };

  const onPopupClose = (): void =>
  {
    setIsProfileVisible(false);
  };
  
  return (
    <View style = {container}>
      <Avatar 
        onPress = {onPressOnAvatar} 
        uri = {avatar}
      />

      <Text style = {text}>
        {name}
      </Text>
          
      <ProfilePopup 
        onClose={onPopupClose} 
        visible ={isProfileVisible} 
        statistics={statistics!}
      />
    </View>
  );
};

export default MiniProfile;