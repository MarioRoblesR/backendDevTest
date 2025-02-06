import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return <input type="text" value={query} onChange={handleSearch} placeholder="Search by brand or model" />;
};

export default Search;