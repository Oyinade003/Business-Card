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
import scissors from './assets/page1.png'
import scissors2 from './assets/page2.png'
import scissors3 from './assets/page3.png'
import adoyimg from './assets/adoypage.jpg'
import './App.css'

function App() {

  return (
    <div className='container'>
      <div className='head'>
        <p className='head-text'> HELLO THERE &#128075;</p>
      </div>
      <img src={portrait} className='portrait' alt='portrait'/>
      <div className='descript'>
      <h2> Oyindamola Adewole </h2>
      <h4> Junior Software Developer </h4>
      <p className='email'> Opedamola003@gmail.com </p>
      </div>
      <div className='btns'>
        <button className='whatsapp' type='submit'><a href="https://wa.me/c/2347080580497"> Whatsapp </a></button>
        <button className='linkedIn' type='submit'><a href="https://www.linkedin.com/in/oyindamola-adewole-12bb13219"> LinkedIn </a></button>
      </div>
      <div className='MainContent'>
      <h3> About </h3>
      <p> I am a creative and result-driven junior software developer currently studying engineering and new frameworks in technology. I believe the best way to develop my community is to be the best of myself and that has always kept me on the journey of developing myself aand my skills. </p>
      <h3> Interests </h3>
      <p> My major interests are healthcare, entrepreneurship, self-development and commuity development. I love to explore new fields and have some experience accross various fields such as Healthcare, Engineering, Photography, Instrumentals, Sports (such as Table tennis, handball and Basketball). I love humanity and giving back to my community in scalable and consistent ways. </p>
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

      <div className='projects'>
        <h2> Projects I've Worked on </h2>
        <a href='adoybalm.vercel.app'><img src={adoyimg} className='page' alt='adoy page' /></a>
        <img src={scissors} className='page2' alt='scissors page' />
        <img src={scissors2} className='page2' alt='scissors page' />
        <img src={scissors3} className='page2' alt='scissors page' />
      </div>
      </div>
      <footer>
      <a href='https://twitter.com/AdoySBC'><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
      <a href='https://www.facebook.com/oyinda.adewole.7'><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/oyindamola-adewole-12bb13219"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
      <a href='https://github.com/Oyinade003'><i className="fa fa-github-square" aria-hidden="true"></i></a>
      </footer>
    </div>
  )
}

export default App
