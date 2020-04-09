import React from 'react';
import BattleField from '../BattleField';
import { ContentContainer } from '../globalStyle';

function App() {
  return (
    <ContentContainer className="App">
      <BattleField size={16} />
    </ContentContainer>
  );
}

export default App;
