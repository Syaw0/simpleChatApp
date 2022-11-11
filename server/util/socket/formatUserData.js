/* eslint-disable no-param-reassign */
const formatUserData = (data, dbController) => {
  const contacts = data.contacts.map((cts) => {
    const user = dbController.findUser(cts).data;
    const formatedData = {
      id: user.id,
      name: user.name,
      bio: user.bio,
      avatarImg: user.avatarImg,
      lastSeen: user.lastSeen,
    };
    return formatedData;
  });

  const chatFormed = data.chats.map((chat) => {
    const user = dbController.findUser(chat.targetId.id).data;
    const formedData = {
      id: user.id,
      name: user.name,
      bio: user.bio,
      avatarImg: user.avatarImg,
      lastSeen: user.lastSeen,
    };
    chat.targetId = { ...formedData };
    return chat;
  });

  const userData = {
    mySelf: {
      avatarImg: data.avatarImg,
      name: data.name,
      id: data.id,
      bio: data.bio,
    },
    contacts: [
      ...contacts,
    ],
    chats: [
      ...chatFormed,
    ],
  };

  return userData;
};

module.exports = formatUserData;
