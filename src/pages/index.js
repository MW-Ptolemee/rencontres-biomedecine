import React from "react";
import Content from "../components/Content";
import TtsButton from "../components/Button/TtsButton";

const Index = ({ textSize, darkMode }) => {
  return (
    <div className="">
      <div className="px-2 md:container py-8">
        <TtsButton />
        <Content textSize={textSize} darkMode={darkMode}/>
      </div>
    </div>
  );
};

export default Index;
