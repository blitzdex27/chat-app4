import _ from 'lodash';

class Search {
  constructor() {
    this.currSearch = '';
    this.newSearchState = {};
    this.setNewSearchState = {};
    this.users = {};
    this.setNewMessageState = {};
    this.selectedUser = {};
  }

  search() {
    // const query = event.target.input;
    console.log(this.setNewSearchState);
    const query = this.currSearch;
    console.log('Search bar: Querying...');
    const makeAsnyc = async () => {
      await this.setNewSearchState({
        query: query,
        result: [...this.getResult()],
        selected: {},
        isDone: false,
      });
    };
    makeAsnyc();
  }

  getResult() {
    const users = this.users;

    const result = users.filter((user) => {
      const { givenName, familyName } = user;
      const fullName = _.lowerCase(givenName + ' ' + familyName);

      return fullName.includes(_.lowerCase(this.currSearch));
    });

    result.sort((a, b) => {
      const { givenName: x } = a;
      const { givenName: y } = b;

      return x < y ? -1 : x > y ? 1 : 0;

      //   if (x < y) { return -1 }
      //   if (x > y) { return 1 }
      //   return 0;
    });
    return result;
  }

  select() {
    const selected = this.selectedUser;
    const { givenName, familyName } = selected;
    const fullName = givenName + ' ' + familyName;
    this.setNewSearchState((prevValue) => {
      return {
        ...prevValue,
        query: fullName,
        result: [],
        selected: selected,
      };
    });
    console.log('Search bar: User selected: ');
    console.log(selected);
    this.submit(selected);
  }

  submit(selected) {
    console.log('Search bar: Selection finalized.');

    if (selected) {
      console.log('Search bar: -> Updating search state to done.');

      this.setNewSearchState((prevValue) => {
        return {
          ...prevValue,
          result: [],
          selected: {},
          isDone: true,
        };
      });

      // destructure only accessible information
      const { id, givenName, familyName } = selected;
      const selectedReceipient = {
        id: id,
        givenName: givenName,
        familyName: familyName,
      };

      console.log('Search bar: -> Updating message receipient.');

      this.setNewMessageState((prevValue) => {
        return {
          ...prevValue,
          data: {
            ...prevValue.data,
            receipient: selectedReceipient,
          },

          isToBeSent: false,
          isSent: false,
        };
      });
    }
  }
}

export default Search;
