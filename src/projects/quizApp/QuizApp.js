import React, { useState } from 'react'
import './QuizApp.css'
import QuizQuestion from './QuizQuestion'
import quizData from './data/Questions.json'

export default function QuizApp() {
  const dataLength = quizData.data.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setanswer] = useState(new Array(dataLength).fill(""));
  const [correct, setcorrect] = useState(0);
  const [completed, setcompleted] = useState(false);
  const setAnswers = (value)=>{
    if(currentQuestion<dataLength-1 && currentQuestion>=0){
      var answers = [...answer];
      answers[currentQuestion] = value;
      setanswer(answers);
      setCurrentQuestion(currentQuestion+1);
    }
  };
  const checkAnswer =()=>{
    var correct = 0;
    quizData.data.forEach((question,i)=>{
      console.log("Checking for "+question.answer+ " " +answer[i]);
      if(question.answer === answer[i]){
        correct++;
      }
    })
    console.log(correct);
    setcorrect(correct);
    setcompleted(true);
  };

  return (
    <div>
      {!completed && 
        <div>
          <QuizQuestion data ={quizData.data[currentQuestion]} setAnswers = {setAnswers}/>
          <div className='navigation'>
            <div className="back" onClick={()=>{
              if(currentQuestion>0){
                setCurrentQuestion(currentQuestion-1);
              }
            }}>Back</div>
            <div className="next" onClick={()=>{
              if(currentQuestion<dataLength-1){
                setCurrentQuestion(currentQuestion+1);
              }
            }}>Next</div>
          </div>
        </div>
      }
      {currentQuestion===dataLength-1 && !completed &&<div onClick={()=>checkAnswer()}>Complete</div>}
      {completed && 
        <div className='thank-you'>
          <p>Thank You for Playing!!</p>
          <p> The correct answers are {correct} {correct<=(dataLength-1)/2?"😔":"😁"}</p>
        </div>
      }
    </div>
  )
}
