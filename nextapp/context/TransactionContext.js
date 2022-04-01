
import React, {useState, useEffect} from 'react';

export const TransactionContext = React.createContext();

let eth 

if (typeof window !== 'undefined') {
  eth = window.ethereum
}

export const TransactionProvider = ({children}) => {
  const [currentAccount, setCurrentAccount] = useState()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])
  
  const connectWallet = async (metamask = eth) => {
    try {
      if(!metamask) return alert('Please install MetaMask')
      const accounts = await metamask.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum provider found')
    }
  }

  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if(!metamask) return alert('Please install MetaMask')
      const accounts = await metamask.request({ method: 'eth_accounts' })

      if(accounts.length){
        setCurrentAccount(accounts[0])
        console.log('Wallet is already connected')
      }
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum provider found')
    }
  }

  return (
    <TransactionContext.Provider 
      value={{
        currentAccount,
        connectWallet
      }}
      >
      {children}
      </TransactionContext.Provider>
  )
}
