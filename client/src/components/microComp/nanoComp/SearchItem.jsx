import React from 'react';

function SearchItem(props) {
  const { item, handler } = props;
  const { givenName, familyName, id } = item;
  const fullName = givenName + ' ' + familyName;

  return (
    <div id={id} className="SearchItem" onClick={() => handler(item)}>
      {fullName}
    </div>
  );
}

export default SearchItem;
