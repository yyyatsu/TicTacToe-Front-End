import APIRoutes from "../../api-service/ApiRoutes";
import APIService from "../../api-service/ApiService";
import LoginModel from "../../types/LoginModel";
import RegistrationModel from "../../types/RegistrationModel";

const route = APIRoutes.getAccountUrl();

const AccountService = 
{
  register: async (registrationModel: RegistrationModel) => 
  {
    return APIService.post<any>(route + "Register", registrationModel);
  },

  login: async (loginModel: LoginModel) =>
  {
    return APIService.post<any>(route + "Login", loginModel);
  }
};

export default AccountService;