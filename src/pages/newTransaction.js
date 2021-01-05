import {useState} from 'react' 
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'

import styles from '../styles/Home.module.css'

export default function newTransaction() {

    const [description, setDescription] = useState(null)
    const [amount, setAmount] = useState(null)
    const [income, setIncome] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = { description, amount, income }

        try {
            const response = await axios.post(`/api/transaction`, data)
        } catch (error) {
           alert(error.response.data.error) 
        }

    }

  return (

    <div className={styles.container}>
        <Head>
            <title>MyFinance - Nova Transação</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1>Nova transação</h1>
            <Link href="/"><a>- Voltar para a Home</a></Link>
        </main>

        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição"
            />

            <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Valor"
            />

            <h2>Tipo da despesa</h2>
            <div onClick={() => setIncome(true)}>Receita</div>
            <div onClick={() => setIncome(false)}>Despesa</div>

            <button type="submit">Feito</button>
        </form>

    </div>

  )
}