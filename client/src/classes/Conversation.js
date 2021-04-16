class Conversation {
  constructor(messages, userId, receipientId, setMessageState) {
    this.messages = messages;
    this.userId = userId; //currentUserState.data.id
    this.receipientId = receipientId; //newMessageState.data.receipient.id
    this.setMessageState = setMessageState;
  }

  displayConvo() {
    return this.messages.filter((message) => {
      const userId = this.userId;
      const senderId = message.sender.id;
      const receipientId = message.receipient.id;
      const selectedReceipientId = this.receipientId;

      if (userId === senderId && selectedReceipientId === receipientId) {
        return true;
      } else if (userId === receipientId && selectedReceipientId === senderId) {
        return true;
      } else {
        return false;
      }
    });
  }

  convoHistory() {
    const messages = this.messages;
    // sort from oldest to lates
    messages.sort((a, b) => {
      const x = a.sortInput;
      const y = b.sortInput;

      return x > y ? 1 : x < y ? -1 : 0;
    });

    // separate into conversations

    let convos = [];
    let i = 0;
    for (i; i < messages.length; i++) {
      const compare = messages[messages.length - 1 - i];
      let j = 0;

      let isSameConvo = false;

      const isSameConvoChecker = (compare, convos, j) => {
        const compSI = compare.sender.id;
        const compRI = compare.receipient.id;
        const convSI = convos[j].sender.id;
        const convRI = convos[j].receipient.id;

        if (compSI === convRI && compRI === convSI) {
          return true;
        } else if (compSI === convSI && compRI === convRI) {
          return true;
        } else {
          return false;
        }
      };

      for (j; j < convos.length; j++) {
        isSameConvo = isSameConvoChecker(compare, convos, j);
        if (isSameConvo) {
          break;
        }
      }

      if (!isSameConvo) {
        convos.push(compare);
      }
    }
    return convos;
  }
  selectConvo(receipient) {
    this.setMessageState((prevValue) => {
      return {
        ...prevValue,
        data: {
          ...prevValue.data,
          receipient: receipient,
        },

        isToBeSent: false,
        isSent: false,
      };
    });
  }
}

export default Conversation;
