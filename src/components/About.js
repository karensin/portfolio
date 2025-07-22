import React from 'react';
import '../App.css';

function About() {
  return (
    <div className='aboutmeWrapper homePageSection aboutmeBg' id="about" style={{
      background: `url("${process.env.PUBLIC_URL + "/images//whale1.png"}") no-repeat fixed center top `,
      backgroundSize: '1000px 900px',
      backgroundAttachment: ' local, scroll'
    }}>
      <section className='aboutmeSection'>
        <h2 className="pageTitle">About Me</h2>
        <div className="aboutProfilePicWrapper">
          <img className="aboutProfilePic" alt="profile" src={process.env.PUBLIC_URL + "/images/karen.jpeg"} />
        </div>
        <h3 className='titleName'>Experience... </h3>
        <div className="textbackground">
          <p className='aboutme'>
            I’m a web designer and frontend developer based in San Francisco, with a background in data analysis. I’m passionate about creating clean, intuitive, and user-friendly interfaces. At Apple, I collaborated closely with designers and cross-functional teams to shape new map features, focusing on maximizing discoverability and interface behavior. I also built analytics dashboards using PostgreSQL, ArcGIS, and QGIS to visualize large-scale traffic and road data.

            After pivoting into software engineering, I worked at 777 Partners as a Frontend Developer, where I helped modernize internal tools and contributed to performance-focused redesigns. At Productiv, I’ve focused on building robust, enterprise-scale user experiences for procurement workflows using React, TypeScript, and GraphQL. I collaborate regularly with designers and PMs to deliver features that are both technically sound and user-centric.
          </p>
          <p className='aboutme' >
            When I’m not coding, you can usually find me exploring new cafes and hidden gem bars around San Francisco—I love discovering cozy spots with great coffee or cocktails. I’m also passionate about animal welfare and regularly volunteer at local shelters, where I help care for rescue animals and support adoption events. Outside of work, I enjoy learning from other creatives and engineers, and I’m always open to connecting, collaborating, or just chatting about cool side projects. Feel free to reach out!
          </p>
        </div>
        <h3 className='titleName'>Values... </h3>
        <p className='aboutme '>
          I was raised with strong values of responsibility, empathy, and respect for others. These principles have shaped me into a collaborative team member and a dependable leader. As president of an animal welfare club, I led a group of 35 students in educating others about animal rights and organizing efforts to rehabilitate stray and abandoned companion animals. I continue to stay actively involved in this work as a lead volunteer at both the Solano Animal Shelter and the San Francisco SPCA, helping animals transition into safe, loving homes.
        </p>
      </section>
    </div>
  );
}

export default About;
