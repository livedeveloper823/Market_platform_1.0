import { useContext, useState, useEffect, createContext, ReactNode, useMemo } from 'react';
import { ethers } from 'ethers';

interface MetamaskContextProps {
  isMetamaskInstalled: boolean;
  isMetamaskLoading: boolean;
  isMetamaskConnected: boolean;
  accounts: string[]; // Use string[] for account addresses
  provider: ethers.BrowserProvider | null; // Provider can be null initially
  connectToMetamask: () => Promise<void>;
}


const MetamaskContext = createContext<MetamaskContextProps>({} as MetamaskContextProps);

export function useMetamask() {
  return useContext(MetamaskContext);
}

export function MetamaskProvider({ children }: { children: ReactNode }) {
  const [isMetamaskLoading, setIsMetamaskLoading] = useState(false);
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);
  const [accounts, setAccounts] = useState<string[]>([]);
  const provider = useMemo(() => {
    if (window.ethereum) {
      return new ethers.BrowserProvider(window.ethereum, 'any');
    }
    return null;
  }, []);

  // Set necessary states for the MetaMask wallet on mount
  useEffect(() => {
    (async function () {
      if (window.ethereum && provider) {
        setIsMetamaskLoading(true);
        setIsMetamaskInstalled(true);
        const accounts = await provider.listAccounts();
        setAccounts(accounts.map(account => account.address)); // Use account.address
        if (accounts.length > 0) { setIsMetamaskConnected(true) }
        setIsMetamaskLoading(false);
      }
    })();
  }, [provider]);

  // Send `eth_requestAccounts` which will show a popup to users to connect their wallet
  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }) as string[];
        setAccounts(accounts);
        setIsMetamaskConnected(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('MetaMask not detected');
    }
  }

  const value = {
    isMetamaskInstalled,
    isMetamaskLoading,
    isMetamaskConnected,
    accounts,
    provider,
    connectToMetamask,
  };

  return <MetamaskContext.Provider value={value}>{children}</MetamaskContext.Provider>;
}