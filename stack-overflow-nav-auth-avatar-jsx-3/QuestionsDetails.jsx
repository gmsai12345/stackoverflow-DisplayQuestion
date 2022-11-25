import React from "react";
import {useParams} from "react-router-dom";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import "./Question.css";
const QuestionsDetails = () => {
  const id = useParams()
 var questionsList = [{ 
         _id: '1',
         upVotes: 3,
         downVotes: 2,
         noOfAnswers: 2,
         questionTitle: "What is a function?",
         questionBody: "It meant to be",
         questionTags: ["java", "node js", "react js", "mongo db", "express js"],
         userPosted: "mano",
         userId: 1,
         askedOn: "jan 1",
       answer: [{
             answerBody: "Answer",
           userAnswered: 'kumar',
             answeredOn: "jan 2",
             userId: 2,
         }]
     },{ 
         _id: '2',
         upVotes: 3,
         downVotes: 2,
      noOfAnswers: 0,
         questionTitle: "What is a function?",
         questionBody: "It meant to be",
         questionTags: ["javascript", "R", "python"],
         userPosted: "mano",
         askedOn: "jan 1",
         userId: 1,
         answer: [{
             answerBody: "Answer",
             userAnswered: 'kumar',
          answeredOn: "jan 2",
             userId: 2,
         }]
     },{ 
         _id: '3',
         upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
         questionTitle: "What is a function?",
        questionBody: "It meant to be",
         questionTags: ["javascript", "R", "python"],
         userPosted: "mano",
         askedOn: "jan 1",
        userId: 1,
         answer: [{
             answerBody: "Answer",
             userAnswered: 'kumar',
            answeredOn: "jan 2",
             userId: 2,
         }]
     }]
     return (
       <div className = "question-details-page">
         {
           
           questionsList === null ? 
           <h1> Loading...</h1>
           {
             questionsList.filter(question => question._id === id ).map(question => (
               <div key = {question._id}>
                 <section className = "question-details-container">
                   <h1>{question.questionTitle}</h1>
                   <div className = "question-details-container-2">
                     <img src = "ThumbUpIcon" alt = "" width = "18"/>
                     <p>{question.upVotes - question.downVotes}</p>
                     <img src = "ThumbDownAltIcon" alt = "" width = "18"/>
                   
                   <p className = "question-body">{question.questionBody()}</p>
                   <div className = "question-detail-tags">
                     {
                   question.questionTags.map((tags) => (
                     <p key = "tag">{tag}</p>
                   
                   ))
                   
                     }
                     <div className = "questin-actions-user">
                       <div>
                         {
                         <button type = "button" onclick = {handleShare}>Share</button>
                         }
                         user?.result?.id === question?.userId && (0
                           <button type = "button" onClick = {handleDelete}>Delete</button>
                         )
                         </div>
                         </div>
                        
                   </div>
                   </section>

               </div>
             ))

           }
        
          }


       </div>
            
     );
};
export default QuestionsDetails;
