import React from 'react';

function Card({user, deleteUser}) {
  return (
    <div style={{backgroundColor: 'darkred'}}>
      {user.name}
      <button onClick={() => {
        console.log(user.name)
          deleteUser(user.name)
        }
      }></button>
        {/* <input onChange={e => changeInputText(e.target.value)}/>
        <button onClick={searchHub}>Search</button>
        <p>Name: {hub1.name}</p>
        <p>Created at: {hub1.created_at}</p>
        <p>Followers: {hub1.followers}</p>
        <p>Public repos: {hub1.public_repos}</p> */}
    </div>
  );
}

export default Card;
