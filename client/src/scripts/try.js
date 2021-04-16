const messages = [
  {
    id: '1',
    content:
      '1 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    date: '4/13/2021',
    receipient: { id: '1', givenName: 'Dexter', familyName: 'Ramos' },
    sender: { id: '1', givenName: 'Dexter', familyName: 'Ramos' },
    sortInput: 1618253022317,
    time: '2:43:42 AM',
  },
  {
    id: '2',
    content:
      '2 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    date: '4/13/2021',
    receipient: { id: '1', givenName: 'Dexter', familyName: 'Ramos' },
    sender: { id: '2', givenName: 'Paul Steven', familyName: 'Ramos' },
    sortInput: 1618253022318,
    time: '2:43:42 AM',
  },
  {
    id: '3',
    content:
      '3 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    date: '4/13/2021',
    receipient: { id: '1', givenName: 'Dexter', familyName: 'Ramos' },
    sender: { id: '2', givenName: 'Paul Steven', familyName: 'Ramos' },
    sortInput: 1618253022316,
    time: '2:43:42 AM',
  },
  {
    id: '6',
    content:
      '3 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    date: '4/13/2021',
    receipient: { id: '2', givenName: 'Paul Steven', familyName: 'Ramos' },
    sender: { id: '1', givenName: 'Dexter', familyName: 'Ramos' },

    sortInput: 1618253022319,
    time: '2:43:42 AM',
  },
  {
    id: '4',
    content:
      '4 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    date: '4/13/2021',
    receipient: { id: '3', givenName: 'John', familyName: 'Doe' },
    sender: { id: '2', givenName: 'Paul Steven', familyName: 'Ramos' },
    sortInput: 1618253022323,
    time: '2:43:42 AM',
  },
  {
    id: '5',
    content:
      '5 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    date: '4/13/2021',
    receipient: { id: '2', givenName: 'Paul Steven', familyName: 'Ramos' },
    sender: { id: '3', givenName: 'John', familyName: 'Doe' },
    sortInput: 1618253022346,
    time: '2:43:42 AM',
  },
];

// filter by names

console.log(filtering(messages));
