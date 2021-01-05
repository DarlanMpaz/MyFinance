import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'

import styles from '../styles/Home.module.css'

  return (

    <div className={styles.container}>
      <Head>
        <title>MyFinance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Link href="/newTransaction"><a>- Nova Transação</a></Link>
      </main>
    </div>

  )
}