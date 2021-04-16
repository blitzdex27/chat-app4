import React from 'react';
import Button from './microComp/Button';
import Input from './microComp/Input';
import SearchResult from './microComp/SearchResult';

function SearchBar(props) {
  const { newSearchState, handler } = props;
  const { query, result } = newSearchState;
  const { search, select, submit } = handler;
  console.log();

  return (
    <div className="SearchBar">
      <Input state={query} handler={search} placeholder="Search users" />
      {/* <Button name="Message" handler={submit} /> */}
      {result.length !== 0 && <SearchResult result={result} handler={select} />}
    </div>
  );
}

export default SearchBar;
