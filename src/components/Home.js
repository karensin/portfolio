import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Projects from './Projects.js';
import Header from './Header.js';
import { HashLink as Link } from 'react-router-hash-link';


class Home extends Component {


  render() {
    return (
      <div className="home" id="home" >
        <Header className="home-header" >
          {/* <div className="container   h-100" style={{
            background: `url("${process.env.PUBLIC_URL + '/images/header.png'}")  repeat center `,
            backgroundSize: '1300px 950px'

          }}  > */}
          <div className="row h-100 align-items-center p-5">
            <div className="col">
              <div className="title">
                <h1>KAREN SIN</h1>
                <h4>Frontend Engineer · UI Developer · Data Analyst</h4>
              </div>
            </div>
          </div>
          {/* </div> */}
          <section className="scrolldown"><Link to="/#projects">
            <i className="fas fa-angle-double-down"></i>
          </Link>
          </section>
        </Header>

        <Projects />

        {/* <Resume /> */}

      </div >
    );
  }
}

export default Home;
