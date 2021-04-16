// search handler function that contains functions related to search events

const searchHandlerContainer = (bundle) => {
  // unpack bundle
  const {
    newSearch,
    newSearchState,
    setNewSearchState,
    users,
    setNewMessageState,
  } = bundle;

  // update class state attributes
  newSearch.newSearchState = newSearchState;
  newSearch.setNewSearchState = setNewSearchState;
  newSearch.users = users;
  newSearch.setNewMessageState = setNewMessageState;
  
  const searchHandler = {
    search: (event) => {
      
      newSearch.currSearch = event.target.value;
      newSearch.search();
    },
    select: (selectedUser) => {
      newSearch.selectedUser = selectedUser;
      newSearch.select();
    },
  };
  return searchHandler;
};

export default searchHandlerContainer;
