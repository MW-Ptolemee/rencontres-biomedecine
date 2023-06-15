import React from "react";
import Speech from "react-text-to-speech";
import { text as cnt } from "../Data";
import Speaker from "../Speaker";

const TtsButton = ({ text }) => {
  return (
    <Speech
      text={
        cnt.h1 +
        ". " +
        cnt.p1 +
        ". " +
        cnt.p2 +
        ". " +
        cnt.p3 +
        ". " +
        cnt.h2 +
        ". " +
        cnt.l1 +
        ". " +
        cnt.l2 +
        ". " +
        cnt.l3 +
        ". " +
        cnt.l4 +
        ". " +
        cnt.l5 +
        ". " +
        cnt.p4 +
        ". " +
        cnt.p5
      }
      startBtn={<Speaker />}
      stopBtn={<Speaker />}
      lang="Fr"
      rate="4.5"
    />
  );
};

export default TtsButton;
