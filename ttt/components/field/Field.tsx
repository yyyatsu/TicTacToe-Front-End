//Done

import { useEffect, useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import StatusType from '../../enums/StatusType';

import FieldProps from './FieldProps';
import FieldStyle from './FieldStyle';

const {container, image} = FieldStyle;

const Field = ({value, status, onPress}: FieldProps): JSX.Element =>
{
  const [fieldColor, setFieldColor] = useState('');
  const [imagePath, setImagePath] = useState('');
  
  const blackXPath = require('../../assets/images/BlackX.png');
  const blackOPath = require('../../assets/images/BlackO.png');

  const whiteXPath = require('../../assets/images/WhiteX.png');
  const whiteOPath = require('../../assets/images/WhiteO.png');
 
  const statusColors = 
  {
    [StatusType.Standart]: 'white',
    [StatusType.Win]: '#9EBF5D',
    [StatusType.Lose]: '#E94D32',
  };

  useEffect(() =>
  {
    setFieldColor(statusColors[status]);
    if(status !== StatusType.Standart)
    {
      setImagePath(value === 'x' ? whiteXPath : whiteOPath);
    }
  }, [status]);

  useEffect(() =>
  {
    setImagePath(value === 'x' ? blackXPath : blackOPath)
  }, [value])

  return (
    <TouchableOpacity
      style = {[container, {backgroundColor: fieldColor}]}
      onPress = {() => onPress()}
    >
      <Image 
        style = {image}
        source = {value ? imagePath as any: {}}
      />
    </TouchableOpacity>
  );
};

export default Field;