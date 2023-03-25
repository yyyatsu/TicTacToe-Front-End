import Axios from "axios";

const baseHeaders = 
{
    headers: 
    {
      "Accept": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    }
};

const APIService = 
{
  get<T> (url: string, headers = baseHeaders) 
  {
    return Axios.get<T>(url, Object.assign({}, headers));
  },

  post<T> (url: string, data?: any, headers?: any) 
  {
    return Axios.post<T>(url, data, Object.assign({}, headers ? headers : baseHeaders));
  },

  put<T> (url: string, data?: any, headers = baseHeaders) 
  {
    return Axios.put<T>(url, data, Object.assign({}, headers));
  },

  delete (url: string, headers = baseHeaders) 
  {
    return Axios.delete(url, Object.assign({}, headers));
  },
};

export default APIService;
