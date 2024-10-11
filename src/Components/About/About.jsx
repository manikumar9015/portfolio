import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import profile_image from '../../assets/pp1.jpg'

const App = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>A web developer builds and maintains websites using front-end and back-end technologies. They ensure websites are functional, user-friendly, and optimized for performance. Their work involves both coding and collaborating with designers and other developers.</p>
                <p>A web developer creates and manages websites using both front-end and back-end technologies. They focus on functionality, user experience, and performance optimization, collaborating with teams to deliver effective digital solutions.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>MySQL</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"40%"}}/></div>
                <div className="about-skill"><p>C</p><hr style={{width:"60%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>Fresher</h1>
            <p>STRONG BASE IN JS</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>6</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>8.2</h1>
            <p>CGPA</p>
        </div>
      </div>
    </div>
  );
};

export default App;