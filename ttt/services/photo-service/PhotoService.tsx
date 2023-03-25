import APIRoutes from "../../api-service/ApiRoutes";
import APIService from "../../api-service/ApiService";
import FormData from "form-data";

const route = APIRoutes.getPhotoUrl();

const headers = 
{
    headers: 
    {
      "Accept": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "multipart/form-data"
    }
};

const PhotoService = 
{
  addImage: async (formData : FormData) => 
  {
    return APIService.post<any>(route + "PutImage", formData, headers);
  },

  getImage: async (userName: string) =>
  {
    return APIService.get<any>(route + "GetImage/" + userName);
  }
};

export default PhotoService;