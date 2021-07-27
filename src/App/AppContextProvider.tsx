import React, { createContext, useEffect, useState } from "react";
//@ts-ignore
interface IAppContext {
  appLoading?: boolean;
  setAppLoading?: Function;
  recordsCache?: any[];
  setRecordsCache?: Function;
}

const AppContext = createContext<IAppContext>({});

const AppContextProvider = ({ children }: { children: any }) => {
  const [appLoading, setAppLoading] = useState<boolean>(false);
  const [recordsCache, setRecordsCache] = useState<any>([]);

  const initState = () => {
    setAppLoading(true);
  };

  // eslint-disable-next-line
  useEffect(() => initState(), []);

  const contextValue: IAppContext = {
    appLoading,
    setAppLoading,
    recordsCache,
    setRecordsCache,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext };
export default AppContextProvider;
