import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'
import { FiPlusCircle, FiTrash, FiArrowUp, FiArrowDown } from 'react-icons/fi'

export default function Home() {

  const [ transactions, setTransactions ] = useState([])

  let incomeIcon = 'FiArrowUp'

  const response = axios.get('/api/transaction').then(resp => {
    setTransactions(resp.data)
  })

  return (

    <>
      <Head>
        <title>MyFinance - Nova Transação</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="header-background"></div>

      <div className="container">

          <header>
              <h1><strong>My</strong>Finance</h1>
          </header>

          <main>

            {transactions.map( transaction => (

              <div className="transaction" key={transaction._id}>
                <div className="description">
                  <Link href="#"><a className="footer-icon"><FiTrash /></a></Link>
                  <p>{transaction.description}</p>
                </div>
                <div className="amount">
                  <p>{transaction.amount}</p>
                  {transaction.income === 'income'? incomeIcon = 'FiArrowUp' : incomeIcon = 'FiArrowDown' }
                </div>
                <p>{transaction.income}</p>
              </div>

            ) )}

            <Link href="/newTransaction"><a>- Nova Transação</a></Link>
          </main>

          <footer> 
              <Link href="/newTransaction"><a className="footer-icon"><FiPlusCircle /><p>Nova</p></a></Link>
          </footer>
      </div>
    </>

  )
}