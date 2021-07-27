import Axios, { AxiosInstance } from "axios";

import LoginController from "./Controllers/Login/LoginController";
import RecordsController from "./Controllers/Records/RecordsController";

export default class ManagerApiClient {
  private httpClient: AxiosInstance;
  constructor({ apiUrl }: { apiUrl: any }) {
    this.httpClient = Axios.create({
      baseURL: apiUrl,
    });
  }

  public get Records() {
    return new RecordsController(this.httpClient);
  }

  public get Login() {
    return new LoginController(this.httpClient);
  }
}
