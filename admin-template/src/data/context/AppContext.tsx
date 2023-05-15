import { createContext } from "react";

type Tema = "dark" | "";

interface AppContextProps {
  tema?: Tema;
  alternarTema?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: AppContextProps) {
  return (
    <AppContext.Provider value={{ tema: "dark" }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
