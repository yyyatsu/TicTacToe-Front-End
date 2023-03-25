//Done

import { NavigationProp } from "@react-navigation/native";
import AuthentificationType from "../../enums/AuthentificationType";
import { GameStackParametersList } from "../navigation/game-tabs/GameTabs";

interface AuthentificationFieldProps 
{
  route: {
    params: {
        authentificationType: AuthentificationType
    }
  }
  navigation: NavigationProp<GameStackParametersList, 'AuthentificationField'>,
}

export default AuthentificationFieldProps;