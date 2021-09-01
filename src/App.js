import React, {useEffect, useState} from 'react';
import Particles from './components/Particles'
import NavBar from './components/Navbar'
import Blob from './components/Blob'
import './App.css';

var count = 0;

function App() {


  const [nameStyle, setNameStyle] = useState({
    color: "#000"
  })

  const [captionStyle, setCaptionStyle] = useState({
    display: 'none'
  })

  const [subtitleStyle, setSubtitleStyle] = useState({
    color: "#000"
  })

  useEffect(() => {
    if(nameStyle.color !== '#000') {
        setSubtitleStyle(
          {
            color: '#797575'
          }
        )

        setCaptionStyle({
          color: '#fff'
        })
    }
  }, [nameStyle])

  useEffect(()=>{
    if(++count===1 || nameStyle.color==="#000")
    setTimeout(()=>{setNameStyle({
      color: "#fff"
    })}, 10000);
})

const reBound = ()=>{
  setNameStyle({
    color: "#000"
  })
  setCaptionStyle({
    display: "none"
  })
  setSubtitleStyle({
    color: "#000"
  })

}


  return (
    <div className="App">
     <div style={{display: (()=>{
       if(nameStyle.color !== '#000')
        return "block";
        else return "none";
     })() }}>
     <NavBar />
     </div>
      
       <Particles />

      <section className="landing">
        <Blob />
        <div className='Main'>
          <div className='caption' style={captionStyle}>Hi there {"\u{1F44B}"}, I'm</div>
          <h1 className='introName' style={nameStyle} onClick={reBound}>Suhan</h1>
          <h3 className="subtitle" style={subtitleStyle}>Just another guy who loves {
            (()=>{
             if(nameStyle.color!=='#000') 
              return (<span>coding</span>)
            else return "coding"
            })()
          }.</h3>
        </div>
      </section>
      <section className="aboutMe">
        <h1 className="Heading">About Me</h1>
        <div className='mainArea'>
          <div className='image'>
            <img alt='Suhan' src="https://lh3.googleusercontent.com/7Z3CvT0ZAjn71P5ANE0IE8ci-G2Ih_Uw0qJu9iUjw-vos9xvSrSRNn4t4JA2xeyCbWPGzjEmGBoFXu3PQ-d2RzjWmZiVpAqRHodoKDWOw806ovPUYpECbJqB2VaFwGTc1O-Hnsaoog"></img>
          </div>
          <div className="handsome_guy">
            Hi there,  I am Suhan Bangera. Currently pursuing B.E degree in Information Science and Engineering from Ramaiah Institute of Technology. I aspire to mark my name in community of Programming and Software development. Apart from coding, I am interested in writing stories and practicing martial arts. I have authored in number of anthologies while being an active member of Ramaiah Combat Club.
            <br/>
            To know more about me, visit:

            <div class="contact">
              <div className='icons'>
             <a href="https://github.com/Spyder01"><span class="fab fa-github"></span></a>
             <a href="https://www.instagram.com/__suhan004/"><span class="fab fa-instagram"></span></a>
             <a href="https://www.linkedin.com/in/suhan-bangera-b75230194/"><span class="fab fa-linkedin"></span></a>
              </div>
            </div>   
          </div>
        </div>
      </section>
      <section className="ContactMe">
          <h3>Contact-</h3>
          <div className="contact">
          <div className='email'>Email: suhan01.bangera@gmail.com</div>
          <div className='PhoneNo'>Phone: (+91)-762-483-4366</div>
          </div>

      </section>
    </div>
  );
}

export default App;
