import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(e) {
    e.preventDefault();
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    let myStyle = classnames({
      'list': true,
      'open': this.state.open
    });
    return (
      <header className='header'>
        <nav className='nav'>
          <h3 className='logo-wrapper'>
            <img className='logo-img' src=''/>
          </h3>
          <ul className={myStyle}>
            <li className='list-item'>
              <a className='list-link' href='#'>One</a>
            </li>
            <li className='list-item'>
              <a className='list-link' href='#'>Two</a>
            </li>
            <li className='list-item'>
              <a className='list-link' href='#'>Three</a>
            </li>
            <li className='list-item'>
              <a className='list-link' href='#'>Four</a>
            </li>
          </ul>
          <div className='open-menu' onClick={this.openMenu}>
            <div className='menu'>
              <span className='stripe'></span>
              <span className='stripe'></span>
              <span className='stripe'></span>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}


export default Header;
