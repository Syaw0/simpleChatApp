/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import gCss from './styles/globalCss.js';
import Flex from './styles/styledComponents/flex';
import AuthPage from './pages/authPage.jsx';
import AccountPage from './pages/accountPage.jsx';
import FloatPage from './pages/floatPage.jsx';
import mainStore from './store/mainStore.js';
import checkLoginSession from './utility/checkLoginSession.js';
import Loader from './components/global/loader.jsx';
import InfoBox from './components/global/infoBox.jsx';

function App() {
  const isFloatOpen = mainStore((state) => state.isFloatOpen);
  const [isFirst, setIsFirst] = useState(false);
  const isLogin = mainStore((state) => state.isLogin);
  const setLoginStatus = mainStore((state) => state.setLoginStatus);
  const isOnline = mainStore((state) => state.isOnline);
  const setUser = mainStore((state) => state.setUser);

  useEffect(() => {
    checkUserSession();
  }, []);

  const checkUserSession = async () => {
    const result = await checkLoginSession();
    if (result.status) {
      setUser(result.username);
      setIsFirst(false);
      setLoginStatus(true);
    }
  };

  gCss();
  return (
    <Flex
      justify="center"
      css={{
        '& .index2': {
          filter: isFloatOpen ? 'blur(10px)' : 'none',
        },
        height: '100vh',
      }}
    >
      {!isFirst && !isLogin && <AuthPage />}
      {!isFirst && isLogin && <AccountPage />}
      {!isFirst && isFloatOpen && isLogin && <FloatPage />}
      {!isOnline && !isFirst && isLogin && <InfoBox />}
      {isFirst && isOnline && <Loader />}
    </Flex>
  );
}

export default App;
