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
      ...data.chats,
    ],
  };

  return userData;
};

module.exports = formatUserData;
