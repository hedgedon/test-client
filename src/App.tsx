import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useEtherBalance, useEthers } from '@usedapp/core';
import { MetamaskConnect } from './components/MetamaskConnect';

function App() {
  const { account, deactivate, chainId } = useEthers();
  const etherBalance = useEtherBalance(account);
  console.log(etherBalance);

  return (
    <div className="App">
      hi...
      <MetamaskConnect />
    </div>
  );
}

export default App;
