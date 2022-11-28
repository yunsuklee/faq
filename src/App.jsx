import React from 'react'
import Questions from './Questions.jsx'
import { questionsList } from './questionsList.js'
import './styles/main.css'

import womanMobile from './assets/illustration-woman-online-mobile.svg'
import shadowMobile from './assets/bg-pattern-mobile.svg'

function App() {
  return (
    <div className="App">
      <div className="background">
        <div id="picture-box-container">
          <img id="picture-box" src="" alt=""></img>
        </div>
        <figure className="background-picture">
          <img id="picture" src={womanMobile} alt=""></img>
          <img id="picture-shadow" src={shadowMobile} alt=""></img>
        </figure>
        <Questions 
          currentQuestions={questionsList}
        />    
      </div>

      {/*
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div> 
      */}
    </div>
  )
}

export default App
