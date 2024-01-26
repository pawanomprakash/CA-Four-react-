import React, { useEffect } from 'react'
import './styles.css'
import { useState } from 'react'
 function Result(props) {

  const[resultheme,setresultTheme]=useState()

  useEffect(()=>{
    //changing the theme based on toggle value received as prop.
    let newTheme=props.toggle?{background:"grey"}:{background:"#ffba21"}
    setresultTheme(newTheme)
  },[props.toggle])

  return (
      <div id="resultComponent">
        <div style={resultheme} id="result-container">
          
            <h1 id="">Final Results</h1>
            <h1 id="">Your Score is {props.score}/5 : {(props.score/5)*100}% </h1>

            <div>
            <button onClick={()=>{window.location.reload()}} id="playagain">Play Again</button>
            </div>
        </div>
      </div>
  )
}

export default Result