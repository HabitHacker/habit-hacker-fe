import { useEffect, useMemo, useState } from "react";
import MetaMaskSDK from '@metamask/sdk';

export function useMetaMask() {
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connect = (callback?: () => void) => {
    if (typeof window === 'undefined') return;
    const MMSDK = new MetaMaskSDK();
    const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum
    ethereum.request({ 
      method: 'eth_requestAccounts', 
      params: [],
    }).then(() => {
      callback && callback();
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let currentAccount = null;
    const MMSDK = new MetaMaskSDK();
    const ethereum = MMSDK.getProvider(); 

    ethereum.request({ method: 'eth_accounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      console.error(err);
    });
    ethereum.on('accountsChanged', handleAccountsChanged);

    function handleAccountsChanged(accounts) {
      let val = null;
      if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
      } else if (accounts[0] !== currentAccount) {
        setIsConnected(true);
        setAccount(accounts[0]);
      }
      return val;
    }
  }, []);

  return useMemo(() => ({
    isConnected,
    connect,
    account,
  }), [
    isConnected,
    connect,
    account,
  ]);
};
