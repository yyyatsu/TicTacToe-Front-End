import { NavigationProp } from "@react-navigation/native";
import { GameStackParametersList } from "../navigation/game-tabs/GameTabs";

interface RoomsProps
{
  navigation: NavigationProp<GameStackParametersList, 'Rooms'>,
};

export default RoomsProps;