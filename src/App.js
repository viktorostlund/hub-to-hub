import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards';
import Stats from './components/Stats';
import Search from './components/Search';

function App() {
  const [input, changeInput] = useState('Hejsan');
  const [users, changeUsers] = useState([]);
  function search() {
    if (users.length < 5) {
      const url = 'https://api.github.com/users/';
      axios.get(url + input)
        .then(res => {
          changeUsers([...users,
            {
              name: res.data.name,
              created_at: res.data.created_at,
              Followers: res.data.followers,
              Repos: res.data.public_repos
            }
          ]);
        })
    }
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
        <div className="container">
          <Search input={input} changeInput={changeInput} search={search}/>
        {/* </div> */}
        
          {users.length ?
            // <div className="container2">
              <Stats users={users} />
            
          :
          null
          }
          <Cards users={users} deleteUser={deleteUser}/>
          </div>
      </header>
    </div>
  );
}

export default App;
