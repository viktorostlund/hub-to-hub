import React, {useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputText, changeInputText] = useState('Hej');
  const [hub1, changeHub1] = useState({});
  function searchHub() {
    const url = 'https://api.github.com/users/';
    axios.get(url + inputText)
      .then(res => {
        console.log(res.data)
        changeHub1({
          name: res.data.name,
          created_at: res.data.created_at,
          followers: res.data.followers,
          public_repos: res.data.public_repos
        });
      })
  }
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
        <input onChange={e => changeInputText(e.target.value)}/>
        <button onClick={searchHub}>Search</button>
        <p>Name: {hub1.name}</p>
        <p>Created at: {hub1.created_at}</p>
        <p>Followers: {hub1.followers}</p>
        <p>Public repos: {hub1.public_repos}</p>
      </header>
    </div>
  );
}

export default App;
