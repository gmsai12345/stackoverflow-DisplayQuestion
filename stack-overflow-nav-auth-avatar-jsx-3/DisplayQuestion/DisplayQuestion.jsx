import React from "react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import QuestionsDetails from "../QuestionsDetails";
import RightSidebar from "../RightSidebar/RightSidebar";
import "./QuestionsDetails";
const DisplayQuestion = () => {
  return( 
    <div className = 'home-container-1' >
    <LeftSidebar/>
    <div className = 'home-container-2' >
      <QuestionsDetails/>
      <RightSidebar/> 
      </div>
      </div>
  );
}
export default DisplayQuestion;