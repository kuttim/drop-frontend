import React, { Fragment } from 'react';
import Header from './components/Header/Header';
import GlobalStyle from './theme/globalStyles';
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
}

export default App;
