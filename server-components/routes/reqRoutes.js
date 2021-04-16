const mongoose = require('mongoose');
const Message = mongoose.model('Message');

const User = mongoose.model('User');

module.exports = (app) => {
  app.route('/users').get((req, res) => {
    User.find({}, (err, docs) => {
      res.json(docs);
    });

    // res.json(users);
  });

  app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      res.json({
        data: {
          ...req.user,
        },
        isAuthenticated: true,
      });
    }
  });

  app.route('/messages').get((req, res) => {
    console.log('Sending messages data...');

    const messagesToUser = async () => {
      const messages = await Message.find({
        $or: [{ 'sender.id': '1' }, { 'receipient.id': '1' }],
      });
      const response = {
        data: messages,
      };

      res.json(response);
    };

    messagesToUser();
  });

  app.route('/send-message').post((req, res) => {
    console.log('sending message');

    const makeAsy = async () => {
      const newMessage = new Message({
        ...req.body,
      });

      const result = await newMessage.save();
      console.log(result);
    };
    makeAsy();

    res.json({ isSent: true });
  });
};
