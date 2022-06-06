import React, { useState, useEffect } from "react";
import i18next from "i18next";

const Dropdown = () => {
  const [showMenu, setShowMenu] = useState("hidden");
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [languageOption, setLanguageOption] = useState("ES");
  const openMenu = () => {
    showMenu == "hidden" ? setShowMenu("block") : setShowMenu("hidden");
  };

  const changeLang = () => {
    currentLanguage == "ES"
      ? setCurrentLanguage("EN")
      : setCurrentLanguage("ES");

    currentLanguage == "ES" ? setLanguageOption("ES") : setLanguageOption("EN");
    console.log("current", currentLanguage);
    console.log("option", languageOption);

    setShowMenu("hidden");
  };

  useEffect(() => {
    i18next.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => openMenu()}
          >
            {currentLanguage}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${showMenu} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              onClick={(event) => changeLang(event.target.innerText)}
            >
              {languageOption}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
