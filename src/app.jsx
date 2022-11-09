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

function App() {
  const [isFloatOpen, setIsFloatOpen] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const isLogin = mainStore((state) => state.isLogin);
  const setLoginStatus = mainStore((state) => state.setLoginStatus);

  useEffect(() => {
    checkUserSession();
  }, []);

  const checkUserSession = async () => {
    const result = await checkLoginSession();
    setIsFirst(false);
    if (result.status) {
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

      {isFirst && <Loader />}
    </Flex>
  );
}

export default App;
