import APIRoutes from "../../api-service/ApiRoutes";
import APIService from "../../api-service/ApiService";

const route = APIRoutes.getStatisticsUrl();

const StatisticsService = 
{
  getStatistics: async (name: string) => 
  {
    return APIService.get<any>(route + "GetStatistics/" + name);
  },

};

export default StatisticsService;