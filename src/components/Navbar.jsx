import React, { useState, useEffect } from "react";
import { CiCloudSun, CiCloudMoon } from "react-icons/ci";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  //   run during component load and check for user system theme and set it to website theme
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
    }
  }, []);

  // add or remove dark class according to theme state
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // toggle the state of theme between dark and light
  const handleThemeSwitch = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex justify-between items-center py-5 px-5 lg:px-40 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text">
      <div className="text-4xl">Todo App</div>
      <button className="btn" onClick={handleThemeSwitch}>
        {theme === "light" ? <CiCloudSun size={32}/> : <CiCloudMoon size={32} />}
      </button>
    </div>
  );
};

export default Navbar;
