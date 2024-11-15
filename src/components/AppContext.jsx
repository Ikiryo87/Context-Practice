import { useState } from "react";
import { GlobalContext } from "../context";

const AppContext = ({ children }) => {
  const [language, setLanguage] = useState(null);

  return (
    <GlobalContext.Provider value={{ language, setLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;
