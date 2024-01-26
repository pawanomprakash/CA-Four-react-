import { useState,useEffect } from 'react'
import QuestionBox from './components/QuestionBox'
import './App.css'

function App() {

  const [toggleTheme,setToggleTheme]=useState(false)
  const [theme,setTheme]=useState()

  useEffect(()=>{
    //changing the text and background in theme-toggle button
    let newtheme=toggleTheme?{color:"black",background:"white"}:{color:"white",background:"black"}
    setTheme(newtheme)

    //declaring the style of body, questionsBox, options-buttons based on toggle value
    let newBodyTheme=toggleTheme?{background:"black",color:"white",containercolor:"grey",optionsBg:"black",}:
    {background:"#0047ab",color:"black",containercolor:"#ffba21",optionsBg:"#0047ab",}

    document.body.style.background=newBodyTheme.background
    document.body.style.color=newBodyTheme.color

    //setting the style of question-box and options only if they are being rendered on the page.
    if(document.getElementById("container")){
    document.getElementById("container").style.background=newBodyTheme.containercolor}
    if(document.body.querySelectorAll(".options")){
    Array.from(document.body.querySelectorAll(".options")).forEach(element => 
      { element.style.background=newBodyTheme.optionsBg });
      }
  },[toggleTheme])

  return (
    <div>
    <div id="themeContainer">
      <h1>QuizWhiz</h1>
      <button style={theme} onClick={()=>{setToggleTheme((prev)=>!prev)}} id="theme">{toggleTheme?"light":"dark"}</button>
    </div>
    {/* sending toggle value as prop */}
    <QuestionBox toggle={toggleTheme}/>
    </div>
  )
}

export default App
