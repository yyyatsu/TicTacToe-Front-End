import * as ImagePicker from'expo-image-picker';
import FormData from 'form-data';
import { useState } from 'react';
import { View, Image, Button } from 'react-native';
import PhotoService from '../../services/photo-service/PhotoService';
import MatchupField from '../matchup-field/MatchupField';

const TestingImages = () => {
  

  return (
    <View style = {{top:'16%'}}>
      <MatchupField room = "ss" userName='Yatsula' opponentName="Andriy"/>
    </View>
  );
};

export default TestingImages;