import React from "react";
import "./WhatGPT3.css";
import { Feature } from "../components";

const WhatGPT3 = () => {
  return (
    <div id="wgpt3" className=" container">
      <div className="whatGPT3">
        <Feature
          layout="horizontal"
          title={"What is GPT-3"}
          text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          }
        />
        <div className="whatGPT3-heading">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <div className="whatGPT3-heading-link">
            <a href="library">Explore The Library</a>
          </div>
        </div>
        <div className="whatGPT3-list">
          <Feature
            title={"Chatbots"}
            text={
              "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
            }
          />
          <Feature
            title={"Knowledgebase"}
            text={
              "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            }
          />
          <Feature
            title={"Education"}
            text={
              "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
