import React from 'react';
import {Container, Content, Text, StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import custom from '../native-base-theme/variables/custom';

const App = () => {
  return (
    <StyleProvider style={getTheme(custom)}>
      <Container>
        <Content>
          <Text>I have changed the text color.</Text>
        </Content>
      </Container>
    </StyleProvider>
  );
};

export default App;
