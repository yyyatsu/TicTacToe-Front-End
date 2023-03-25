const shared =
{
  winField: '#66D89F',
  loseField: '#EB6F6F',
  lightButton: '#6698FA',
  darkButton: '#3568D4',
  border: '#3E7BFA',
};
   
const light = 
{
  ...shared,
  background: 'white',
  nestedBackground: 'white',
  text: 'black',
  shadow: '#E4E4EB'
};
   
const dark = 
{
  ...shared,
  background: '#28293D',
  nestedBackground: '#32334C',
  text: 'white',
  shadow: '#12121B'
};
   
export const colors = {light, dark};