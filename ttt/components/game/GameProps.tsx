//Done

import StatusType from '../../enums/StatusType';
import RoomInformation from '../../types/RoomInformation';

interface GameProps
{
  onPress: (index: number) => void,
  values: Array<string>,
  statuses: Array<StatusType>,
  roomInformation: RoomInformation,
  boardSize: number
};

export default GameProps;