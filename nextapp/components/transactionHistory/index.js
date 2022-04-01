

import { useEffect, useState } from 'react'
import { client } from '../../lib/sanityClient'
import { useContext } from 'react'
import { TransactionContext } from '../../context/TransactionContext'
import Image from 'next/image'
import ethLogo from '../../assets/ethCurrency.png'
import { FiArrowUpRight } from 'react-icons/fi'

const style = {
  wrapper: `h-full text-white select-none h-full w-screen flex-1 pt-14 flex items-end justify-end pb-12 overflow-scroll px-8`,
  txHistoryItem: `bg-[#191a1e] rounded-lg px-4 py-2 my-2 flex items-center justify-end`,
  txDetails: `flex items-center`,
  toAddress: `text-[#f48706] mx-2`,
  txTimestamp: `mx-2`,
  etherscanLink: `flex items-center text-[#2172e5]`,
}

const TransactionHistory = () => {
  const { isLoading, currentAccount } = useContext(TransactionContext)
  const [txHistory, setTxHistory] = useState([])

  useEffect(() => {
    ;(async () => {
      if(!isLoading && currentAccount){
        const query = `
          *[_type == "users" && _id == "${currentAccount}"] {
            "transactionList": transactions[]->{amount, toAddress, timestamp, txHash}|order(timestamp desc)[0..4]
          }
        `
        const clientRes = await client.fetch(query)

        setTxHistory(clientRes[0].transactionList)
      }
    })()
  }, [isLoading, currentAccount])

  return (
    <div className={style.wrapper}>
      <div>
        { txHistory &&
          txHistory?.map((tx, index) => (
            <div key={index} className={style.txHistoryItem}>
              <div className={style.txDetails}>
                <Image src={ethLogo} width={20} height={20} />
                {tx.amount} Ξ sent to{' '}
                <span className={style.toAddress}>
                  {tx.toAddress.substring(0, 4)}...{tx.toAddress.substring(tx.toAddress.length - 2)}
                </span>
              </div>{' '}
              on{' '}
              <div className={style.txTimestamp}>
                {new Date(tx.timestamp).toLocaleString('en-US', {
                  timeZone: 'UTC',
                  hour12: true,
                  timeStyle: 'short',
                  dateStyle: 'long',
                })}
              </div>
              <div className={style.etherscanLink}>
                <a
                  href={`https://ropsten.etherscan.io/tx/${tx.txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.etherscanLink}
                >
                  View on Etherscan
                  <FiArrowUpRight />
                </a>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TransactionHistory