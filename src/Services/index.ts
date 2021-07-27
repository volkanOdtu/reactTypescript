import ManagerApiClient from "./ManagerApiClient/ManagerApiClient";

let $ManagerApiClient: ManagerApiClient;

const initServices = () => {
  $ManagerApiClient = new ManagerApiClient({
    apiUrl: process.env.REACT_APP_FLASK_API || "",
  });
};

export default initServices;

export { $ManagerApiClient };
