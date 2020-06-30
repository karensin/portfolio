import React, { Component } from 'react';
import '../App.css';

class About extends Component {
  render() {
    return (
      <div className='aboutmeWrapper homePageSection aboutmeBg' id="about"       >

        <section className='aboutmeSection' >
          <h2 className="pageTitle">About Me</h2>
          <div className="aboutProfilePicWrapper" >
            <img className="aboutProfilePic" alt="profile" src={process.env.PUBLIC_URL + "/images/karen.jpeg"} />
          </div>
          <h3 className='titleName'>Experience... </h3>
          <p className='aboutme'>
            I am a <strong> web designer / developer / former data analyst</strong> based in <strong>San Francisco, California</strong>.
            I am passionate in <strong>frontend development</strong> and technology.
            My goals are to focus creating simple and user friendly UI/UX experiences.
            My experience at Apple allowed me to work and improve as a team player. I worked closely with designers on new map features which included planning out workflows on the delivery of the features to maximize discoverability, interface behaviors, and how information is being navigated and displayed. I built analytics dashboards with <strong>PostgreSQL, ArcGIS, and QGIS</strong> to report on
            traffic and road alterations via large datasets.
          </p>
          <h3 className='titleName'>Values... </h3>
          <p className='aboutme '>
            Growing up in a traditional Chinese family, my parents taught me to be responsible, empathic and respectful towards others. With the morals and values they taught me, I've grown to be a great team player and a responsible leader.
            I was the <strong>president of an animal welfare club</strong> and led a group 35 students to learn and educate others on <strong>animal rights and welfare</strong>, rehabilitating strays / abandoned companion animals back to the society.
            I am also an active lead in both Solano animal shelter and San Francisco SPCA in rehabilitating companion animals.
          </p>
        </section>

      </div >
    );
  }
}

export default About;
