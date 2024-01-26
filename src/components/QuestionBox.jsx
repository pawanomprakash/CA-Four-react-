import React, { useEffect,useState } from 'react'
import './styles.css'
import questions from '../questions'
import Result from './Result'

 function QuestionBox(props) {
    const [qNo,setqNo]=useState(0)
    const [question, setQuestion] = useState(questions[qNo])
    const [score, setScore]=useState(0)
    const [highlight,setHighlight]=useState(false)
    const [textcolor,setTextcolor]=useState()

    //changing question number
    const next=(isCorrect)=>{
      if(isCorrect){setScore(n=>n+1)}
        setqNo(n=>n+1)
        setQuestion(questions[qNo+1])
    }

    //highlighting question text based on highlight value
    useEffect(()=>{
      let newTheme=highlight?{color:"red",scale:"1.3"}:{color:"black"}
      setTextcolor(newTheme)
    },[highlight])

  return (
    <div>
      {qNo<5?(
      <div id="quizComponent">
        <div id="container">
            <h1  id="quizComponentHeading">Question</h1>
            <p  id="questionNum">{qNo+1} of 5</p>
            <h3 style={textcolor} id="question">{question.text}</h3>
            <div id="options-container">
                <button className="options" onClick={()=>{next(question.options[0].isCorrect)}}>{question.options[0].text}</button>
                <button className="options" onClick={()=>{next(question.options[1].isCorrect)}}>{question.options[1].text}</button>
                <button className="options" onClick={()=>{next(question.options[2].isCorrect)}}>{question.options[2].text}</button>
                <button className="options" onClick={()=>{next(question.options[3].isCorrect)}}>{question.options[3].text}</button>
            </div>
            <div id="actions-container">
                <button className="actions" onClick={()=>{setHighlight(true)}} id="highlight">Highlight</button>
                <button className="actions" onClick={()=>{setHighlight(false)}} id="removehighlight">removehighlight</button>
            </div>
        </div>
      </div>):
      //rendering result page if question-number is higher than 5
      (<Result
      //sending the toggle value received from App.jsx, as prop to Result.jsx 
       toggle={props.toggle} score={score}/>)}
    </div>
  )
}
export default QuestionBox