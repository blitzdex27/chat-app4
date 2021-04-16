export const users = [
  {
    id: '1',
    givenName: 'Dexter',
    familyName: 'Ramos',
    messages: [],
    contacts: [],
    email: 'blitzdex27@gmail.com',
  },
  {
    id: '2',
    givenName: 'Paul Steven',
    familyName: 'Ramos',
    messages: [],
    contacts: [],
    email: 'paul_ramos07@gmail.com',
  },
  {
    id: '3',
    givenName: 'John',
    familyName: 'Doe',
    messages: [],
    contacts: [],
    email: 'john_doe01@gmail.com',
  },
];

export const messages = [
  {
    content:
      '1 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    date: '4/13/2021',
    receipient: { id: '1', givenName: 'Dexter', familyName: 'Ramos' },
    sender: { id: '1', givenName: 'Dexter', familyName: 'Ramos' },
    sortInput: 1618253022317,
    time: '2:43:42 AM',
  },
  {
    content:
      '2 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    date: '4/13/2021',
    receipient: { id: '1', givenName: 'Dexter', familyName: 'Ramos' },
    sender: { id: '2', givenName: 'Paul Steven', familyName: 'Ramos' },
    sortInput: 1618253022318,
    time: '2:43:42 AM',
  },
  {
    content:
      '3 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
    date: '4/13/2021',
    receipient: { id: '2', givenName: 'Paul Steven', familyName: 'Ramos' },
    sender: { id: '1', givenName: 'Dexter', familyName: 'Ramos' },

    sortInput: 1618253022316,
    time: '2:43:42 AM',
  },
  // {
  //   content:
  //     '4 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
  //   date: '4/13/2021',
  //   receipient: { id: '3', givenName: 'John', familyName: 'Doe' },
  //   sender: { id: '2', givenName: 'Paul Steven', familyName: 'Ramos' },
  //   sortInput: 1618253022323,
  //   time: '2:43:42 AM',
  // },
  // {
  //   content:
  //     '5 Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
  //   date: '4/13/2021',
  //   receipient: { id: '2', givenName: 'Paul Steven', familyName: 'Ramos' },
  //   sender: { id: '3', givenName: 'John', familyName: 'Doe' },
  //   sortInput: 1618253022346,
  //   time: '2:43:42 AM',
  // },
];

// givenName: 'Dexter';
// familyName: 'Ramos';
// date: '4/13/2021';
// time: '2:33:04 AM';
// content: " "
// receipient: {},
// sender:

//  // object, message receipient
// content: '', // string, message content
//  {}, // object, message sender
// date: '', // string, date sent
// time: '', // string, time sent
// sortInput: 0, // number, milliseconds since January 1, 1970
// isToBeSent: false, // boolean, specifies if the message is ready to be sent
// isSent: false, // boolean, specifies if the message is sent
