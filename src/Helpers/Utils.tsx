export default class Utils {
  public static getInitials = (name: string, numberOfInitials: number = 0) => {
    const matches = name.match(/\b(\w)/g);
    const initials = matches?.join("") || "";

    if (numberOfInitials) {
      const trimmedInitials = initials.substring(0, numberOfInitials);
      return trimmedInitials;
    }
    return initials;
  };
}
