import React, { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const FunctionContext = createContext();

function FunctionProvider({children}) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language dynamically
  };
  const [lang, setLang] = useState("en");
  useEffect(() => {
    changeLanguage(lang);
  }, [lang]);

  return (
    <FunctionContext.Provider value={{ t: t, changeLanguage: changeLanguage, setLang: setLang, lang }}>
      {children}
    </FunctionContext.Provider>
  );
}

export default FunctionProvider;
