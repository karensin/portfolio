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

        <div className="headerShadow" style={{
          backgroundColor: this.state.scrollTop > 100 ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
        }}></div>
        {this.props.children}
      </header >
    );
  }
}

export default Header;
