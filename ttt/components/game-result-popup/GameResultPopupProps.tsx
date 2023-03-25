import GameResultType from "../../enums/GameResultType";

interface GameResultPopupProps
 {
    visible: boolean;
    onClose: () => void;
    gameResult: GameResultType
  }

  export default GameResultPopupProps;