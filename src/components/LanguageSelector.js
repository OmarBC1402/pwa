import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
        <option value="en">En</option>
        <option value="es">Es</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
};

export default LanguageSelector;