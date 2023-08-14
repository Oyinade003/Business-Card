import React from 'react'
import reactLogo from './assets/react.svg'
import portrait from './assets/my-image.jpg'
import csslogo from './assets/css.png'
import htmlogo from './assets/html.png'
import javascriptlogo from './assets/javascript.png'
import nodelogo from './assets/node.png'
import figmalogo from './assets/figma.png'
import gitlogo from './assets/git.png'
import emaillogo from './assets/envelope.png'
import './App.css'

function App() {

  return (
    <div className='container'>
      <div className='head'>
        <p className='head-text'> HELLO THERE </p>
      </div>
      <img src={portrait} className='portrait' alt='portrait'/>
      <div className='descript'>
      <h2> Oyindamola Adewole </h2>
      <h4> Junior Software Developer </h4>
      <p className='email'> Opedamola003@gmail.com </p>
      </div>
      <div className='btns'>
        <button className='whatsapp' type='submit'><a href="https://wa.me/message/X4QQA4DVQQ6N1"> Whatsapp </a></button>
        <button className='linkedIn' type='submit'><a href="https://www.linkedin.com/in/oyindamola-adewole-12bb13219"> LinkedIn </a></button>
      </div>
      <div className='MainContent'>
      <h3> About </h3>
      <p> I am a creative and result-driven junior software developer currently studying engineering and new frameworks in technology.</p>
      <h3> Interests </h3>
      <p> My major interests are healthcare, entrepreneurship, self-development and commuity development.</p>
      <h3> Skills </h3>
      <div className="skills">
      <img src={htmlogo} className='htmllogo' alt='html logo' />
      <img src={csslogo} className='csslogo' alt='css logo' />
      <img src={javascriptlogo} className='javalogo' alt='javascript logo' />
      <img src={reactLogo} className='reactlogo' alt='react logo' />
      </div>
      <div className='skills'>
      <img src={figmalogo} className='figmalogo' alt='figma logo' />
      <img src={gitlogo} className='gitlogo' alt='git logo' />
      <img src={nodelogo} className='nodelogo' alt='node logo' />
      </div>
      </div>
      <footer>
      <i className="fa fa-twitter-square" aria-hidden="true"></i>
      <i className="fa fa-facebook-square" aria-hidden="true"></i>
      <i className="fa fa-linkedin-square" aria-hidden="true"></i>
      <i className="fa fa-github-square" aria-hidden="true"></i>
      </footer>
    </div>
  )
}

export default App
