//Done

interface AvatarProps
{
  uri: string,
  onPress:(() => Promise<void>) | null,
};

export default AvatarProps;