const users = [
  {
    id: '1',
    givenName: 'Dexter',
    familyName: 'Ramos',
    messages: [],
    contacts: [],
  },
  {
    id: '2',
    givenName: 'Paul Steven',
    familyName: 'Ramos',
    messages: [],
    contacts: [],
  },
  {
    id: '3',
    givenName: 'John',
    familyName: 'Doe',
    messages: [],
    contacts: [],
  },
];

users.sort((a, b) => {
  const { givenName: x } = a;
  const { givenName: y } = b;


  if (x < y) {
      return -1
  }
  if (x > y) {
      return 1
  }
  return 0

});

console.log(users);

let as = ['ab', 'ac', 'ad', 'aa'];

as.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});
console.log(as);
