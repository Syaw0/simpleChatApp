const fs = require('fs');

const x = {

  users: {
    syaw: {
      id: 'syaw',
      password: '123',
      name: 'syaw',
      avatarImg: '',
      bio: '',
      lastSeen: '19 min ago',
      contacts: ['mary'],
      chats: [
        {
          targetId: {
            id: 'mary', name: 'mary', bio: 'helllo', avatarImg: 'https://cdn.britannica.com/94/494-004-BAA096C7/Fallow-deer.jpg', lastSeen: '19 min ago',
          },
          chatList: [
            {
              transfer: 'syaw', reciver: 'mary', value: 'hello marry', date: '19:00', status: '3', index: 1, seen: true,
            },
            {
              transfer: 'mary', reciver: 'syaw', value: 'hello syaw', date: '19:22', status: '3', index: 2, seen: true,
            },
            {
              transfer: 'mary', reciver: 'syaw', value: 'dow do you my love', date: '19:25', status: '3', index: 3, seen: true,
            },
          ],
        },
      ],
    },

    mary: {
      id: 'mary',
      password: '123',
      name: 'mary',
      avatarImg: '',
      bio: '',
      lastSeen: '19 min ago',
      contacts: ['syaw'],
      chats: [
        {
          targetId: {
            id: 'syaw', name: 'syaw', bio: 'helllo', avatarImg: 'https://cdn.britannica.com/94/494-004-BAA096C7/Fallow-deer.jpg', lastSeen: '19 min ago',
          },
          chatList: [
            {
              transfer: 'syaw', reciver: 'mary', value: 'hello marry', date: '19:00', status: '3', index: 1, seen: true,
            },
            {
              transfer: 'mary', reciver: 'syaw', value: 'hello syaw', date: '19:22', status: '3', index: 2, seen: true,
            },
            {
              transfer: 'mary', reciver: 'syaw', value: 'dow do you my love', date: '19:25', status: '3', index: 3, seen: true,
            },
          ],
        },
      ],
    },
  },
};

const data = JSON.stringify(x, null, 4);

fs.writeFileSync(`${__dirname}/db.json`, data);
