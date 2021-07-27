import jwt_decode from "jwt-decode";
import Utils from "./Utils";
import LocalStorage from "./LocalStorage";

interface UserToken {
  exp?: string;
  name?: string;
  unique_name?: string;
}

export default class Token {
  public static getAccessToken = () =>
    LocalStorage.getProperty("MVOE_dev_token");

  public static deSerializeToken = (): any => {
    try {
      return jwt_decode(Token.getAccessToken());
    } catch (error) {
      return { exp: "", name: "", unique_name: "" };
    }
  };

  public static setAccessToken = (token: string): void =>
    LocalStorage.setProperty("MVOE_dev_token", token);

  public static getUserName = () => Token.deSerializeToken()?.name;

  public static getEmail = () => Token.deSerializeToken()?.unique_name;

  public static getUserInitials = () =>
    Utils.getInitials(Token.getUserName(), 2).toUpperCase();

  public static cleanToken = () => LocalStorage.cleanProperty("MVOE_dev_token");

  public static isValidSession = () => {
    if (!Token.getAccessToken()) return false;
    const expirationTime = Token.deSerializeToken()?.exp * 1000;
    const currentMoment = new Date();
    return currentMoment.getTime() < expirationTime;
  };
}
