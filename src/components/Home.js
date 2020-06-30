import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Projects from './Projects.js';
import Header from './Header.js';
import { HashLink as Link } from 'react-router-hash-link';

class Home extends Component {
  render() {
    return (
      <div className="home" id="home">
        <Header className="home-header">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col">
                <div className="title">
                  <h1>KAREN SIN</h1>
                  <h4>Developer | Web Designer | Data Analyst</h4>
                  <Link to="/#projects" className="btn collab-btn"><i className=""></i> Learn more about what I do</Link>
                </div>
              </div>
            </div>
          </div>
          <section className="scrolldown"><Link to="/#projects">
            <i className="fas fa-angle-double-down"></i>
          </Link>
          </section>
        </Header>
        <div className="homeContent">
          <div className="projBGBG" >
            {/* style={{
              background: `url("${process.env.PUBLIC_URL + '/images/projects_background.jpg'}") no-repeat center / cover`
            } */}
            <div className="projBGShadow">
              <img alt="background" className="projBG" src={process.env.PUBLIC_URL + '/images/projects_background.jpg'}></img>
            </div>
          </div>
          <Projects />

          {/* <Resume /> */}
        </div>
      </div >
    );
  }
}

export default Home;
