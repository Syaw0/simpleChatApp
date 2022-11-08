/* eslint-disable import/extensions */
import React, { useState } from 'react';
import gCss from './styles/globalCss.js';
import Flex from './styles/styledComponents/flex';
import AuthPage from './pages/authPage.jsx';
import AccountPage from './pages/accountPage.jsx';
import FloatPage from './pages/floatPage.jsx';

function App() {
  const [isFloatOpen, setIsFloatOpen] = useState(true);

  gCss();
  return (
    <Flex css={{
      '& .index2': {
        filter: isFloatOpen ? 'blur(10px)' : 'none',
      },
      height: '100vh',
    }}
    >
      {/* <AuthPage /> */}
      <AccountPage />
      {isFloatOpen && <FloatPage />}
    </Flex>
  );
}

export default App;
