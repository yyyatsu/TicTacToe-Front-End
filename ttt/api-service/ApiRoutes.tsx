import APIConfig from "./ApiConfig";

const APIRoutes = 
{
  getLobbyUrl: (): string => APIConfig.URL + "Lobby/",
  getAccountUrl: (): string => APIConfig.URL + "Account/",
  getRoomUrl: (): string => APIConfig.URL + "Room/",
  getPhotoUrl: (): string => APIConfig.URL + "Photo/",
  getStatisticsUrl: (): string => APIConfig.URL + "Statistics/",
};

//[dg;dsksgsdgkljdsgkjsdglskdglsdghlskgkfgs]
export default APIRoutes;
