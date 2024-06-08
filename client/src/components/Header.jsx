import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../../public/Images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const handleLinks = (links) => {
    setActive(links);
  };

  useEffect(() => {
    const handleBurgerClick = () => {
      const menus = document.querySelectorAll(".navbar-menu");
      menus.forEach((menu) => {
        menu.classList.toggle("hidden");
      });
    };

    const handleCloseClick = () => {
      const menus = document.querySelectorAll(".navbar-menu");
      menus.forEach((menu) => {
        menu.classList.add("hidden");
      });
    };

    const handleBackdropClick = (e) => {
      if (e.target.classList.contains("navbar-backdrop")) {
        const menus = document.querySelectorAll(".navbar-menu");
        menus.forEach((menu) => {
          menu.classList.add("hidden");
        });
      }
    };

    document.querySelectorAll(".navbar-burger").forEach((burger) => {
      burger.addEventListener("click", handleBurgerClick);
    });

    document.querySelectorAll(".navbar-close").forEach((close) => {
      close.addEventListener("click", handleCloseClick);
    });

    document.querySelectorAll(".navbar-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", handleBackdropClick);
    });

    return () => {
      document.querySelectorAll(".navbar-burger").forEach((burger) => {
        burger.removeEventListener("click", handleBurgerClick);
      });

      document.querySelectorAll(".navbar-close").forEach((close) => {
        close.removeEventListener("click", handleCloseClick);
      });

      document.querySelectorAll(".navbar-backdrop").forEach((backdrop) => {
        backdrop.removeEventListener("click", handleBackdropClick);
      });
    };
  }, []);

  return (
    <header>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white shadow-md ">
        <NavLink className="text-3xl font-bold flex gap-2 leading-none" to="/">
          <img src={LOGO} alt="" className="h-14 " />
          <div className="flex flex-col justify-center">
            <p className="text-md text-[#0b9444]">DISEASE</p>
            <p className="text-sm text-[#89c43f]">Prediction System</p>
          </div>
        </NavLink>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-[#0b9444] p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 w-max">
          <li>
            <NavLink
              className={
                active === "Home"
                  ? "text-sm text-[#0b9444] font-bold"
                  : "text-sm text-gray-400 hover:text-[#89c43f]"
              }
              onClick={() => handleLinks("Home")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li className="w-max">
            <NavLink
              className={
                active === "Prediction"
                  ? "text-sm text-[#0b9444] font-bold"
                  : "text-sm text-gray-400 hover:text-[#89c43f]"
              }
              onClick={() => handleLinks("Prediction")}
              to="/prediction"
            >
              Disease Prediction
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              className={
                active === "Information"
                  ? "text-sm text-[#0b9444] font-bold"
                  : "text-sm text-gray-400 hover:text-[#89c43f]"
              }
              onClick={() => handleLinks("Information")}
              to="/information"
            >
              Information
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              className={
                active === "support"
                  ? "text-sm text-[#0b9444] font-bold"
                  : "text-sm text-gray-400 hover:text-[#89c43f]"
              }
              onClick={() => handleLinks("support")}
              to="/support"
            >
              Support
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink
              className={
                active === "about"
                  ? "text-sm text-[#0b9444] font-bold"
                  : "text-sm text-gray-400 hover:text-[#89c43f]"
              }
              onClick={() => handleLinks("about")}
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <NavLink className="mr-auto text-3xl font-bold leading-none" to="/">
              <svg className="h-12" alt="logo" viewBox="0 0 100 100">
                <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
              </svg>
            </NavLink>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-[#89c43f]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <NavLink
                  className={
                    active === "home"
                      ? "block p-4 text-sm font-semibold text-[#0b9444] bg-blue-50  rounded"
                      : "block p-4 text-sm font-semibold text-gray-400 rounded"
                  }
                  onClick={() => handleLinks("/home")}
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className={
                    active === "prediction"
                      ? "block p-4 text-sm font-semibold text-[#0b9444] bg-blue-50  rounded"
                      : "block p-4 text-sm font-semibold text-gray-400 rounded"
                  }
                  onClick={() => handleLinks("prediction")}
                  to="/prediction"
                >
                  DIsease Prediction
                </NavLink>
              </li>
              <li className="mb-1 md:block hidden ">
                <NavLink
                  className={
                    active === "information"
                      ? "block p-4 text-sm font-semibold text-[#0b9444] bg-blue-50  rounded"
                      : "block p-4 text-sm font-semibold text-gray-400 rounded"
                  }
                  onClick={() => handleLinks("information")}
                  to="/information"
                >
                  Information
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                className={
                  active === "support"
                    ? "block p-4 text-sm font-semibold text-[#0b9444] bg-blue-50  rounded"
                    : "block p-4 text-sm font-semibold text-gray-400 rounded"
                }
                onClick={() => handleLinks("support")}
                to="/support"
                >
                  Support
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  className={
                    active === "about"
                      ? "block p-4 text-sm font-semibold text-[#0b9444] bg-blue-50  rounded"
                      : "block p-4 text-sm font-semibold text-gray-400 rounded"
                  }
                  onClick={() => handleLinks("about")}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
