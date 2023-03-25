//Done

import StatusType from '../../enums/StatusType';

interface FieldProps
{
  value: string,
  onPress : () => void,
  status: StatusType,
};

export default FieldProps;