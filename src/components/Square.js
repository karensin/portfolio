import React, { Component } from 'react';
import './Projects.css';


// TODO: Add todolist, add tictactoe, add super potato
class Square extends Component {
  render() {
    const squareSize = '20rem';
    return (
      <div className="squareContainer">
        <div className="square flip-card">
          <a href={this.props.linkSrc} className={this.props.className + ' projectBox'}
            style={{
              width: squareSize,
              height: squareSize
            }}>
            <div className="flip-card-inner">
              <div className="flip-card-front flip-card-face">
                <div className="projectImg" style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: "url(" + this.props.imgSrc + ")"
                }} />
              </div>
              <div className="flip-card-back flip-card-face">
                <h4>{this.props.projName}</h4>
                {this.props.children}
              </div>
            </div>
          </a>
        </div>
        <div className="projectName">
          {this.props.projName}
        </div>
        <a href={this.props.gitLink}>  <i className="fab fa-2x fa-github githubIcon"></i>  </a>
      </div >
    );
  }
}

export default Square

