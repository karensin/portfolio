import React, { Component } from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';



class Contacts extends Component {
  render() {
    return (
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by Karen Sin
            </p>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li> <a target="_blank" rel="noopener noreferrer" href="mailto: kkwsin@gmail.com"> <i className="fas  fa-envelope"></i>
                </a></li>
                <li><a class="linkedin" href='https://www.linkedin.com/in/karensin94/'><i className="fa fa-linkedin"></i></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='https://github.com/karensin'>
                  <i className="fab fa-github"></i> </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href='https://angel.co/karen-kaweng-sin'>
                    <i className="fa fa-angellist"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default Contacts;





