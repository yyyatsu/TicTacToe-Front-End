//Done

import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import IndicatorProps from './IndicatorProps';
import IndicatorStyle from './IndicatorStyle';

const { container, textInButton, text, button} = IndicatorStyle;

const Indicator = ({onPress}: IndicatorProps): JSX.Element =>
{
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Waiting...'

  useEffect(() => 
  {
    let counter = 0;
    const interval = setInterval(() => 
    {
      setDisplayText(fullText.slice(0, counter + 1));
      if (counter === fullText.length) 
      {
        counter = 0;
      }
      else
      {
        counter ++;
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style = {container}>
      <Text style = {text}>
        {displayText}
      </Text>

      <TouchableOpacity 
        style = {button}
        onPress = {onPress()}
      >
        <Text style = {textInButton}>
            Відмінити
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Indicator;