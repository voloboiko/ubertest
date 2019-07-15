import React, {useState} from 'react';
import './SearchInput.css';

function SearchInput({onChangeCallback}) {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="SearchInputContainer">
      <input placeholder="Search for..." className="SearchInput" name="search" value={searchText} onChange={(e) => {
        setSearchText(e.target.value);
        if(onChangeCallback) {
          onChangeCallback(e.target.value);
        }
      }} />
    </div>
  );
}

export default SearchInput;
