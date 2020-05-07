import React, {useState} from 'react';
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
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={(e) => changeInput(e.target.value)} type="text" />
        <input type="submit" onClick={() => search(input)} value="Submit" />
        <Cards users={users} deleteUser={deleteUser}/>
      </header>
    </div>
  );
}

export default App;
