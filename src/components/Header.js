import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


class Header extends Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    let scroll = {
      y: window.pageYOffset ? document.documentElement.scrollTop : document.body.scrollTop
    };
    this.state = { scrollTop: scroll.y };
  }

  _onScroll(e) {
    let scroll = {
      y: window.pageYOffset ? document.documentElement.scrollTop : document.body.scrollTop
    };
    this.setState({ scrollTop: scroll.y });

  }

  componentDidMount() {
    window.addEventListener('scroll', this._onScroll.bind(this));
  }

  render() {
    return (
      <header className={this.props.className + " intro-header"} ref={this.headerRef}>
        {/* <div className="headerBG" style={{
          background: `url("${process.env.PUBLIC_URL + '/images/header.jpeg'}") no-repeat scroll center / cover`,
          // backgroundColor: 'rgba(102, 129, 147, 0.4)',
          // backgroundBlendMode: 'multiply'
          position: 'fixed',
          top: '70px'
          // backgroundPositionY: this.state.scrollTop
        }} >

        </div> */}
        <div className="headerShadow"></div>
        {this.props.children}
      </header >
    );
  }
}

export default Header;
