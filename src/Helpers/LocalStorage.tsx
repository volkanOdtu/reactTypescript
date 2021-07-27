export default class LocalStorage {
  public static getProperty = (property: string) =>
    localStorage.getItem(property) || "";

  public static setProperty = (property: string, value: string) =>
    localStorage.setItem(property, value);

  public static cleanProperty = (property: string) =>
    localStorage.removeItem(property);

  public static clear = () => localStorage.clear();
}
