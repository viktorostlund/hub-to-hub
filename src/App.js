import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards'

function App() {
  const [input, changeInput] = useState('Hejsan');
  const [hub1, changeHub1] = useState({name: 'Viktor'});
  const [hub2, changeHub2] = useState({});
  const [hub3, changeHub3] = useState({});
  function search() {
    const url = 'https://api.github.com/users/';
    axios.get(url + input)
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
        <Cards users={[hub1,hub2,hub3]} input={input} changeInput={changeInput} search={search}/>
      </header>
    </div>
  );
}

export default App;
