//Done

import StatusType from '../../enums/StatusType';

interface BoardProps
{
  onPress: Function,
  values: Array<string>,
  statuses: Array<StatusType>,
  size: number,
};

export default BoardProps;