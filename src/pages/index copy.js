import Head from 'next/head'
import styles from '../styles/Home.module.css'
import appStyles from '../styles/App.module.css'
import { BiCaretDown, BiCaretUp, BiTrash, BiPlusCircle } from 'react-icons/bi'
import { IoMdArrowDropdown, IoMdArrowDropup, IoIosTrash, IoIosAddCircle }  from 'react-icons/io'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={appStyles.header}>
          <h1 className={styles.title}><strong>My</strong>Finance</h1>
          <div className={appStyles.headerBackground}></div>
        </header>

        <div className={appStyles.balanceContainer}>

          <div className={appStyles.balance}>
            <p className={appStyles.balanceText}>Saldo</p>
            <p className={appStyles.balanceValue}>R$ 1700,00</p>  
          </div>

          <div className={appStyles.incomeExpense}>
            <div className={appStyles.income}>1700,00<IoMdArrowDropup/></div>
            <div className={appStyles.expense}>100,00<IoMdArrowDropdown/></div>
          </div>

        </div>

        <div className={appStyles.transactions}>
          <div className={appStyles.tittle}>Transações</div>
          <div className={appStyles.transaction}>
            <div>
              <IoIosTrash className={appStyles.normalIcon}/>
              <p>Internet</p>
            </div>
            <div>
              <p className={appStyles.expense}>121,00</p>
              <IoMdArrowDropdown className={appStyles.expense}/>
            </div>
          </div>
          <div className={appStyles.transaction}>
            <div>
              <IoIosTrash className={appStyles.normalIcon}/>
              <p>Internet</p>
            </div>
            <div>
              <p className={appStyles.expense}>121,00</p>
              <IoMdArrowDropdown className={appStyles.expense}/>
            </div>
          </div>
          <div className={appStyles.transaction}>
            <div>
              <IoIosTrash className={appStyles.normalIcon}/>
              <p>Internet</p>
            </div>
            <div>
              <p className={appStyles.expense}>121,00</p>
              <IoMdArrowDropdown className={appStyles.expense}/>
            </div>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
          <div className={appStyles.footerIcon}>
            <IoIosAddCircle/>
            Nova transação
          </div>
      </footer>
    </div>
  )
}
