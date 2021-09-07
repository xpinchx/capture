import React, { useState } from "react";

// Style components
import styled from "styled-components";
import { About } from "../styles";

// Components
import Toggle from "./Toggle";

// Framer motion
import { AnimateSharedLayout, motion } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, porro!</p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, porro!</p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, porro!</p>
          </div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, porro!</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;

    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
