/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import photo1 from "../../assets/images/logo1.png";
import "./Header.css";
import hamburger from "../../assets/images/hamburger.svg";

const Header = () => {
  return (
    <div>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <a href="/">
            {" "}
            <img src={photo1} alt="logo" id="img" />
          </a>
          <div className="flexCenter h-menu ">
            <a className="max-lg:hidden" href="">
              Residencies
            </a>
            <a className="max-lg:hidden" href="">
              {" "}
              Our Value
            </a>
            <a className="max-lg:hidden" href="">
              Content Us
            </a>
            <a className="max-lg:hidden" href="">
              Get Started
            </a>
            <button className="button max-lg:hidden">
              <a href="">Contact</a>
            </button>
            <div className="max-lg:block hidden">
              <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-2 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-blue-600"
                type="button"
              >
                <span class="material-symbols-outlined text-3xl">menu</span>
              </button>
              <section>
                <div
                  style={{ textAlign: "center" }}
                  id="dropdownDots"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconButton"
                  >
                    <li>
                      <a
                        href="/"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Residencies
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Our Value
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Content Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Get Started
                      </a>
                    </li>
                  </ul>
                  <div class="py-2">
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700   dark:text-gray-200 dark:hover:text-white"
                    >
                      <button className="button">
                        <a href="/">Contact</a>
                      </button>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
