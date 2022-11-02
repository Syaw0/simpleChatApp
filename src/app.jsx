import React from 'react';
import mainStore from './store/mainStore';
import gCss from './styles/globalCss';
import Flex from './styles/styledComponents/flex';
import Text from './styles/styledComponents/text';

function App() {
  window.addEventListener('resize', () => {
    document.getElementById('root').style.width = window.innerWidth;
  });
  gCss();

  return (
    <Flex>
      <Text css={{
        color: 'Wheat',
      }}
      >
        hello chat
      </Text>
    </Flex>
  );
}

export default App;
