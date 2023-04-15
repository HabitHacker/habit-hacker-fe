import { useEffect, useMemo, useState } from "react";
import MetaMaskSDK from '@metamask/sdk';

export function useMetaMask() {
  const [account, setAccount] = useState(null);
  const isConnected = useMemo(() => {
    const MMSDK = new MetaMaskSDK();
    const ethereum = MMSDK.getProvider(); 

    return ethereum.isConnected();
  }, []);

  const connect = (callback?: () => void) => {
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
    let currentAccount = null;
    const MMSDK = new MetaMaskSDK();
    const ethereum = MMSDK.getProvider(); 

    ethereum.request({ method: 'eth_accounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      console.error(err);
    });
    ethereum.on('accountsChanged', handleAccountsChanged)

    function handleAccountsChanged(accounts) {
      let val = null;
      if (accounts.length === 0) {
        alert('Please connect to MetaMask.');
      } else if (accounts[0] !== currentAccount) {
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
