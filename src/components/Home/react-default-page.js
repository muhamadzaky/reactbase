import React from 'react';
import { Link } from 'react-scroll';
import { ArrowDownOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo.svg';

const ReactDefaultPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="Overview" spy={true} smooth="easeInOutQuad" duration={1000} style={{ color: 'white', marginTop: 30 }}>
          <div>Scroll to Overview Page</div>
          <div>
            <ArrowDownOutlined color="#fff" />
          </div>
        </Link>
      </header>
    </div>
  )
}

export default ReactDefaultPage;