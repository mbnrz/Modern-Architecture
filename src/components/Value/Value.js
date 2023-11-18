import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import "./Value.css";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdAnalytics, MdCancel, MdOutlineArrowDropDown } from "react-icons/md";
import photo10 from "../../assets/images/12.png";
import { data } from "../../utils/accordionInfo";
import { HiShieldCheck } from "react-icons/hi";

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src={photo10} alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>

          <span className="primaryText">Value We Give to You</span>

          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <div
            id="accordion-collapse"
            data-accordion="collapse"
            style={{ boxShadow: "0px 8px 21px -8px rgba(136, 160, 255, 1.25)",marginTop:"19px" }}
          >
            <h2 id="accordion-collapse-heading-1">
              <button
                style={{ backgroundColor: "white", color: "#1f3e72" }}
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right  border border-b-0  rounded-t-xl   dark:text-gray-400 hover:bg-gray-100  gap-3"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span className="iconn">
                  <HiShieldCheck size={25} />
                </span>
                <h1 style={{ fontSize: "20px", padding: "0 20px" }}>
                  Best interest rates on the market
                </h1>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div class="p-5 border border-b-0 border-gray-200  ">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                style={{ backgroundColor: "white", color: "#1f3e72" }}
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right  border border-b-0  rounded-t-xl   dark:text-gray-400 hover:bg-gray-100  gap-3"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span className="iconn">
                  <MdCancel size={25} />
                </span>
                <h1 style={{ fontSize: "20px", padding: "0 20px" }}>
                  Prevent unstable prices
                </h1>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div class="p-5 border border-b-0 border-gray-200 ">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button
                style={{ backgroundColor: "white", color: "#1f3e72" }}
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right  border border-b-0  rounded-t-xl   dark:text-gray-400 hover:bg-gray-100  gap-3"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span className="iconn">
                  <MdAnalytics size={25} />
                </span>
                <h1 style={{ fontSize: "20px", padding: "0 20px" }}>
                  Best price on the market
                </h1>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              class="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div class="p-5 border border-b-0 border-gray-200 ">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
