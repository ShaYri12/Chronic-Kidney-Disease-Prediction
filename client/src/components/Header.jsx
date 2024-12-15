import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../../public/Images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("home");

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
        <NavLink
          className="text-3xl font-bold flex md:gap-2 gap-1 leading-none"
          to="/"
        >
          <img src={LOGO} alt="" className="md:h-14 h-9" />
          <div className="flex flex-col justify-center">
            <p className="md:text-base text-base text-[#0b9444]">DISEASE</p>
            <p className="md:text-sm text-[14px] text-[#89c43f]">
              Prediction System
            </p>
          </div>
        </NavLink>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-[#0b9444] p-3">
            <svg
              className="block h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 xl:left-1/2 xl:right-auto right-10 transform -translate-y-1/2 xl:-translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 w-max">
          <li>
            <NavLink
              className={
                active === "home"
                  ? "xl:text-lg md:text-base text-sm text-[#0b9444] font-bold"
                  : "xl:text-lg md:text-base text-sm text-gray-400 hover:text-[#89c43f]"
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
                active === "prediction"
                  ? "xl:text-lg md:text-base text-sm text-[#0b9444] font-bold"
                  : "xl:text-lg md:text-base text-sm text-gray-400 hover:text-[#89c43f]"
              }
              onClick={() => handleLinks("prediction")}
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
                active === "information"
                  ? "xl:text-lg md:text-base text-sm text-[#0b9444] font-bold"
                  : "xl:text-lg md:text-base text-sm text-gray-400 hover:text-[#89c43f]"
              }
              onClick={() => handleLinks("information")}
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
                  ? "xl:text-lg md:text-base text-sm text-[#0b9444] font-bold"
                  : "xl:text-lg md:text-base text-sm text-gray-400 hover:text-[#89c43f]"
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
                  ? "xl:text-lg md:text-base text-sm text-[#0b9444] font-bold"
                  : "xl:text-lg md:text-base text-sm text-gray-400 hover:text-[#89c43f]"
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
            <NavLink
              className="mr-auto text-3xl font-bold flex gap-2 leading-none"
              to="/"
            >
              <img src={LOGO} alt="" className="h-8 " />
              <div className="flex flex-col justify-center">
                <p className="text-[16px] text-[#0b9444]">DISEASE</p>
                <p className="text-[12px] text-[#89c43f]">Prediction System</p>
              </div>
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
                      ? "block p-4 md:text-base font-semibold text-[#0b9444] bg-blue-50  rounded"
                      : "block p-4 md:text-base font-semibold text-gray-400 rounded"
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
                      ? "block p-4 md:text-base font-semibold text-[#0b9444] bg-blue-50  rounded"
                      : "block p-4 md:text-base font-semibold text-gray-400 rounded"
                  }
                  onClick={() => handleLinks("prediction")}
                  to="/prediction"
                >
                  DIsease Prediction
                </NavLink>
              </li>
              <li className="mb-1 ">
                <NavLink
                  className={
                    active === "information"
                      ? "block p-4 md:text-base font-semibold text-[#0b9444] bg-blue-50  rounded"
                      : "block p-4 md:text-base font-semibold text-gray-400 rounded"
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
                      ? "block p-4 md:text-base font-semibold text-[#0b9444] bg-blue-50  rounded"
                      : "block p-4 md:text-base font-semibold text-gray-400 rounded"
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
                      ? "block p-4 md:text-base font-semibold text-[#0b9444] bg-blue-50  rounded"
                      : "block p-4 md:text-base font-semibold text-gray-400 rounded"
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
