import { MsalContext } from "@azure/msal-react";
import { AxiosInstance, AxiosRequestConfig } from "axios";
// import Token from "../../../Helpers/Token";

export default class BaseController {
  static contextType = MsalContext;
  constructor(protected httpClient: AxiosInstance) {}

  protected async MakeRequest<T = any>(config: AxiosRequestConfig): Promise<T> {
    config.headers = {
      ...config.headers,
      "Access-Control-Allow-Origin": true,
      // Authorization: `Bearer ${Token.getAccessToken()}`,
      method: "GET",
    };
    const response = await this.httpClient.request<T>(config);
    return response.data;
  }
}
