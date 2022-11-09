const db = {
  mySelf: {
    avatarImg: 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png',
    name: 'siaw',
    id: 'siaw',
    bio: '',
  },
  contacts: [
    {
      id: 'mary', name: 'mary', bio: 'helllo', avatarImg: 'https://cdn.britannica.com/94/494-004-BAA096C7/Fallow-deer.jpg', lastSeen: '19 min ago',
    },

  ],
  chats: [
    {
      targetId: {
        id: 'mary', name: 'mary', bio: 'helllo', avatarImg: 'https://cdn.britannica.com/94/494-004-BAA096C7/Fallow-deer.jpg', lastSeen: '19 min ago',
      },
      chatList: [
        {
          transferId: 'syaw', receiverId: 'mary', value: 'hellllo mary', date: '', status: '3', index: 1, seen: true,
        },
        {
          transferId: 'mary', receiverId: 'siaw', value: 'hellllo siaw', date: '', status: '3', index: 2, seen: true,
        },

      ],
    },
  ],
};

module.exports = db;
