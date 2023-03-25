//Done

import { StyleSheet } from 'react-native';

const text =
{
  fontSize:16,
};

const SignUpInFieldStyle = StyleSheet.create
(
  {
    container:
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'absolute',
      height: 152,
      top: '40%',
      alignSelf: 'center'
    },

    signUpButtonStyle: 
    {
      backgroundColor: '#5C8BE8',
    },
    
    logInButtonStyle:
    {
      backgroundColor: 'white',
      borderWidth: 2,
    },

    signUpTextStyle:
    {
      ...text,
      fontWeight:'400',
      color: 'white',
    },

    logInTextStyle:
    {
      ...text,
      fontWeight:'400',
      color: 'black',
    },
  }
);

export default SignUpInFieldStyle;