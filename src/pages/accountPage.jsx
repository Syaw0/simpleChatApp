/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import ChatEnv from '../components/accountPage/chatEnv';
import ChatList from '../components/accountPage/chatList';
import Nav from '../components/accountPage/nav';
import Loader from '../components/global/loader';
import mainStore from '../store/mainStore';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';
import openingSocket from '../utility/socket/openingSocket';

function AccountPage() {
  const isDataLoaded = mainStore(state=>state.isDataLoaded)
  
  useEffect(() => {
    console.log('hello im here im ready to fetch data and open socket');
    openSocketAndGetData();
  }, []);

  const openSocketAndGetData = async () => {
    const result = await openingSocket();
    console.log(result);
  };

  return (
    <Flex
      className="index2"
      css={{
        padding: '0 $23',
        '@bp0': {
          padding: '0 $10',
        },
        '@bp1': {
          padding: '0 $5',
        },
        '@bp2': {
          padding: '0 $3',
        },
      }}
      justify="center"
      align="center"
      dir="column"
    >

      {isDataLoaded && (
      <>
        <Nav />
        <Flex css={{
          padding: '$2 0',
          height: '90%',
        }}
        >
          <ChatList />
          <ChatEnv />
        </Flex>
      </>
      )}

      {!isDataLoaded && (
      <>
        <Loader />
        <Text css={{
          padding: '$2 0',
          headline6_i: '500',
          color: '$primary',
        }}
        >
          Loading Your Data...
        </Text>
      </>
      )}

    </Flex>
  );
}

export default AccountPage;
