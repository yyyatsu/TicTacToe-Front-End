import Statistics from "../../types/Statistics";

interface ProfilePopupProps
{
  statistics: Statistics | null,
  visible: boolean,
  onClose: () => void;
}

export default ProfilePopupProps;