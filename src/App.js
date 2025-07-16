// import logo from './logo.svg';
import './App.css';
import React from 'react';

class Home extends React.Component {
    render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWkzcmhwenlwOTRiaWx5bnZlZTA4dGJ1ajhoaHJjNGhhYmEwMGRiMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H03PuVdwREB21ANkLX/giphy.gif" className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}
}

export default Home;
