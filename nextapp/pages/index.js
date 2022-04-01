
import Header from '../components/header'
import Main from '../components/main'
import TransactionHistory from '../components/transactionHistory'

const style = {
  wrapper: 'h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between',
}

const Home = () => {

  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
      <TransactionHistory />
    </div>
  )
}

export default Home
