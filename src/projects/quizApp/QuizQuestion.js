import React, { useState } from 'react'
import './QuizApp.css'

export default function QuizQuestion({data, setAnswers }) {
    const [answer, setanswer] = useState("")
    const [selectedoption, setselectedoption] = useState(-1)
  return (
    <div className='quiz-container'>
      <h3 className='quiz-title'>QuizApp</h3>
      <div className='quizBox'>
        <div id='question'>{data.question}</div>
        {data.options.map((option,i)=>(
            <div id='option-1' className={selectedoption==i?"selectedOption option":'option'} key={i} onClick = {()=>{
              setanswer(option)
              setselectedoption(i)
            }}>{option}</div>
        ))}
        <div id='submit' onClick={
            ()=>{
                if(answer!==""){
                    setAnswers(answer);
                }
            }}> Submit</div>
      </div>
    </div>
  )
}
