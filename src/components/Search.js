import React, { useRef, useEffect } from 'react';
import './Search.css';

function Search({ search, input, changeInput }) {
  
  const textInput = useRef(null);
  
  useEffect(() => textInput.current.focus());

  function handleKeyPress(e) {
    if (e.charCode === 13) {
      search(input);
    }
  }

  return (
    <p className="Search">
      Type a Github-username: 
      <input ref={textInput} onKeyPress={e => handleKeyPress(e)} onChange={(e) => changeInput(e.target.value)} type="text" />
      <button type="submit" onClick={() => search(input)}>Add!!!</button>
    </p>
  );
}

export default Search;
