import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards'

function App() {
  const [input, changeInput] = useState('Hejsan');
  const [users, changeUsers] = useState([]);
  function search() {
    const url = 'https://api.github.com/users/';
    axios.get(url + input)
      .then(res => {
        changeUsers([...users,
          {
            name: res.data.name,
            created_at: res.data.created_at,
            followers: res.data.followers,
            public_repos: res.data.public_repos
          }
        ]);
      })
  }
  function deleteUser(name) {
    let copy = users.slice();
    const indexToDelete = users.findIndex(user => user.name === name)
    copy.splice(indexToDelete, 1);
    changeUsers(copy);
  }
  const textInput = useRef(null);
  
  useEffect(() => textInput.current.focus());

  function handleKeyPress(e) {
    if (e.charCode == 13) {
      search(input);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <input ref={textInput} onKeyPress={e => handleKeyPress(e)} onChange={(e) => changeInput(e.target.value)} type="text" />
          <button type="submit" onClick={() => search(input)}>Add</button>
        </p>
        <Cards users={users} deleteUser={deleteUser}/>
      </header>
    </div>
  );
}

export default App;
