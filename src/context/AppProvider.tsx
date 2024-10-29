import { Context } from "./AppContext";
import { AppState, PropsProvider } from "../interfaces/interface";

const state: AppState = {
  name: "Black Widow",
  url: "http://marvel.io/bw",
  time: "2 horas",
};

const AppProvider = ({ children }: PropsProvider) => {
  return (
    <Context.Provider value={{ state }}>{children}</Context.Provider>
  );
};

export default AppProvider;
