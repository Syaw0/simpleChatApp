import React from 'react';
import ChatEnv from '../components/accountPage/chatEnv';
import ChatList from '../components/accountPage/chatList';
import Nav from '../components/accountPage/nav';
import Flex from '../styles/styledComponents/flex';

function AccountPage() {
  return (
    <Flex
      className="index2"
      css={{
        padding: '0 $23',
      }}
      justify="center"
      align="center"
      dir="column"
    >

      <Nav />
      <Flex css={{
        padding: '$2 0',
        height: '90%',
      }}
      >
        <ChatList />
        <ChatEnv />
      </Flex>

    </Flex>
  );
}

export default AccountPage;
