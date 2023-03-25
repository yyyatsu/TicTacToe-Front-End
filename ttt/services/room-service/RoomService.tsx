import APIRoutes from "../../api-service/ApiRoutes";
import APIService from "../../api-service/ApiService";

const route = APIRoutes.getRoomUrl();

const RoomService = 
{
  getIsRoomExisting: async (room: string) => 
  {
    return APIService.get<any>(route + "GetIsRoomExisting/" + room);
  },

  getRooms: async(page: number) =>
  {
    return APIService.get<any>(route + "GetRooms/" + page);
  }

};

export default RoomService;