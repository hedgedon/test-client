import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Mainnet, DAppProvider, Config, Goerli } from '@usedapp/core';
import { getDefaultProvider, providers } from 'ethers';

// const config: Config = {
//     readOnlyChainId: Mainnet.chainId,
//     readOnlyUrls: {
//         [Mainnet.chainId]: getDefaultProvider('mainnet'),
//         [Goerli.chainId]: getDefaultProvider('goerli'),
//     },
// }

// https://chainlist.org/chain/1
const rpc_url =
  'https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7';
const customHttpProvider = new providers.JsonRpcProvider(rpc_url);
customHttpProvider.getBlockNumber().then((result) => {
  console.log('Current block number: ' + result);
});

//https://usedapp-docs.netlify.app/docs/Guides/Connecting/Read-only
const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: customHttpProvider,
  },
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DAppProvider config={config}>
    <App />
  </DAppProvider>
);
