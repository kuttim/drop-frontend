import React, { Fragment, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Input from './components/Input/Input';

import './theme/global.scss';
import 'react-toggle/style.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Input />
    </Fragment>
  );
}

export default App;
