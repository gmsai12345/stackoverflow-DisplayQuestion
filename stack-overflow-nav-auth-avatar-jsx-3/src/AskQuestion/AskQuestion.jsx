import React from "react";
import "./AskQuestion.css";
const AskQuestion = () => {
  
 return <div>
    <>
    <div className="ask-ques">
    <div className="ask-ques-container">
      <h1>Ask a public Question</h1>
      <form>
        <div className="ask-form-container">
          <label htmlFor = "ask-ques-title">
            <h4>Title</h4>
            <input type = "text" className = "questionTitle" id = "ask-ques-title" placeholder = "" />
          </label>
          </form>
         </div> 
        </div>
      
      <div className="ask-ques">
    <div className="ask-ques-container">
      <h1>Ask a public Question</h1>
      <form>
        <div className="ask-form-container">
          <label htmlFor = "ask-ques-body">
            <h4>Body</h4>
            <input type = "text" className = "questionTitle" id = "ask-ques-title" placeholder = "" />
          </label>

          </form>
          <div className="ask-ques">
    <div className="ask-ques-container">
      <h1>Ask a public Question</h1>
      <form>
        <div className="ask-form-container">
          <label htmlFor = "ask-ques-tags">
            <h4>tags</h4>
            <input type = "text" className = "questionTitle" id = "ask-ques-title" placeholder = "" />
          </label>
          </form>
          </div>
          <input type = "Submit" value = "Review your question" className = "questionTitle" id = "ask-ques-title" placeholder = "" />
    </div>
    </div>
    </>

  </div>;
};
export default AskQuestion;
