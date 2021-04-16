function filterConvo(messages) {
  const mesLen = messages.length;

  const filteredMessages = [];

  let i = 0;
  for (i; i < mesLen; i++) {
    let j = 0;
    // for (j; j < mesLen; j++) {
    let existing = false;

    // validation start

    let o = 0;
    for (o; o < filteredMessages.length; o++) {
      // check if the current convo is already existing in filtered messages
      // to check, the sender and receipient id will be compared

      const origRecId = messages[i].receipient.id;
      const origSenId = messages[i].sender.id;
      const filtRecId = filteredMessages[o].receipient.id;
      const filtSenId = filteredMessages[o].sender.id;

      const orig = [origRecId, origSenId];
      const filt = [filtRecId, filtSenId];
      console.log(orig);
      console.log(filt);

      if (orig[0] === orig[1] && filt[0] === filt[1]) {
        existing = true;
      } else if (orig[0] !== orig[1]) {
        if (orig[0] === filt[0] && orig[1] === filt[1]) {
          existing = true;
        } else if (orig[0] === filt[1] && orig[1] === filt[0]) {
          existing = true;
        }
      }

      if (messages[i].id === filteredMessages[o].id) {
        existing = true;
      }
    }
    // validation ends
    console.log(existing);
    if (!existing) {
      filteredMessages.push(messages[i]);
    }
    // }
  }

  return filteredMessages;
}

export default filterConvo;
