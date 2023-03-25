import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthentificationManager = 
{
  signInAsync: async (name: string) =>
  {
    await AsyncStorage.setItem("name", name);
  },

  signOutAsync: async () => 
  {
    await AsyncStorage.removeItem("name");
  },

  getUserName: async () => 
  {
    return AsyncStorage.getItem("name");
  },
};

export default AuthentificationManager;
