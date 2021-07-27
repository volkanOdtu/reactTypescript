import BaseController from "../BaseController";
import DataMock from "./DataMock.json";

export default class RecordsController extends BaseController {
  private basePath = "/api";

  public getAdjustorByClaimId = (id: string) => {
    return this.MakeRequest({
      url: `${this.basePath}/adjustor/${id}`,
    });
  };

  public getClaimByClaimId = (id: string) => {
    return this.MakeRequest({
      url: `${this.basePath}/claim/${id}`,
    });
  };

  public getCustomerByClaimId = (id: string) => {
    return this.MakeRequest({
      url: `${this.basePath}/customer/${id}`,
    });
  };

  public getGeneralByClaimId = (id: string) => {
    return this.MakeRequest({
      url: `${this.basePath}/general/${id}`,
    });
  };

  public getRecordById = (id: string) => {
    return this.MakeRequest({
      url: `${this.basePath}/azSearchZNAClaim/${id}`,
    });
  };

  public getAllRecords = (
    text: string,
    page: string,
    total: string,
    offset: string
  ) => {
    return this.MakeRequest({
      url: `${this.basePath}/azSearchZNA?text=${text}&page=${page}&total=${total}&offset=${offset}`,
    });
  };

  public getRecordByIdMock = (claim_number: string) => {
    return new Promise<any>((resolve, reject) => {
      DataMock.data.forEach((record: any) => {
        if (record.claim_number === claim_number) {
          return resolve({
            data: record,
            status: "success",
          });
        }
      });
    });
  };

  public getAllRecordsMock = () => {
    return new Promise<any>((resolve, reject) => {
      resolve(DataMock);
    });
  };
}
