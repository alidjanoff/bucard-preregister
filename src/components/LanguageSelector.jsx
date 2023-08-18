import { useState } from "react";

// Icons
import azFlag from "../assets/images/icons/az_flag.svg";
import enFlag from "../assets/images/icons/en_flag.svg";
import ruFlag from "../assets/images/icons/ru_flag.svg";

// i18next translation
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  // States
  const [langBoxOpen, setLangBoxOpen] = useState(false);

  // Change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="selectLang" onClick={() => setLangBoxOpen(!langBoxOpen)}>
      <div className={`outside ${langBoxOpen && "active"}`}></div>
      <img
        src={
          i18n.language === "az" ||
          i18n.language === "tr" ||
          i18n.language === "tr-TR"
            ? azFlag
            : i18n.language === "en"
            ? enFlag
            : i18n.language === "ru"
            ? ruFlag
            : null
        }
        alt={i18n.language}
      />
      <ul className={langBoxOpen ? "langBox active" : "langBox"}>
        <li className="lang" id="az-AZ" onClick={() => changeLanguage("az")}>
          <img src={azFlag} alt="az" />
          Azərbaycanca
        </li>
        <li className="lang" id="en-US" onClick={() => changeLanguage("en")}>
          <img src={enFlag} alt="en" />
          English
        </li>
        <li className="lang" id="ru-RU" onClick={() => changeLanguage("ru")}>
          <img src={ruFlag} alt="ru" />
          Русский
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;

// TODO Update this code after. Important !
