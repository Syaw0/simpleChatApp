/* eslint-disable import/extensions */
import React from 'react';
import gCss from './styles/globalCss.js';
import Flex from './styles/styledComponents/flex';
import mainStore from './store/mainStore';

function App() {
  gCss();
  return (
    <Flex>
      {/* hello there */}
    </Flex>
  );
}

export default App;
