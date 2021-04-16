import React from 'react';
import SearchItem from './nanoComp/SearchItem';

function SearchResult(props) {
  const { result, handler } = props;
  return (
    <div className="SearchResult">
      {result.map((item, index) => {
        return <SearchItem item={item} key={index} handler={handler} />;
      })}
    </div>
  );
}

export default SearchResult;
