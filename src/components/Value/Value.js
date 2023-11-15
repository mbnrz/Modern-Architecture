import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import "./Value.css";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import photo10 from "../../assets/images/12.png";
import {data} from "../../utils/accordionInfo"

const Value = () => { 
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth v-container flexCenter">
        <div className="v-left">
          <div className="image-container">
            <img src={photo10} />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>
          <Accordion
            className="Accordion"
            style={{ width: "100%", border: "none",marginTop:"15px" }}
            defaultActiveKey="1"
          >
            {data.map((data) => (
              <Card id="Card" key={data.id} style={{ marginBottom: "10px" }}>
                <Card.Header
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "none",
                  }}
                >
                  <span className="iconn">{data.icon}</span>
                  <span className="primaryText">{data.heading}</span>
                  <CustomToggle eventKey={data.id}>
                    <MdOutlineArrowDropDown  className="iconn" />
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey={data.id}>
                  <Card.Body
                    style={{ color: "rgb(140 139 139)" }}
                    className="secondaryText2"
                  >
                    {data.detail}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("click")
  );

  return (
    <span type="button" onClick={decoratedOnClick}>
      {children}
    </span>
  );
}
