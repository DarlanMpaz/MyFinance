import {useState} from 'react' 
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import { FiArrowLeftCircle } from 'react-icons/fi'


export default function newTransaction() {

    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [income, setIncome] = useState('')

    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = { description, amount, income }

        try {
            const response = await axios.post(`/api/transaction`, data)
        } catch (error) {
           alert(error.response.data.error) 
        }

        router.push('/')

    }

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

            <main className="card shadow">

                <form onSubmit={handleSubmit}>

                    <div className="card-header">
                        <h3>Nova transação</h3>
                    </div>
                    
                    <div className="card-main">

                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />

                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Valor"/>

                        {/* <label for="income">Tipo de operação</label> */}

                        <select id="income" onChange={(e) => setIncome(e.target.value)}>
                            <option disabled selected>Tipo</option>
                            <option value="income">Receita</option>
                            <option value="expense">Despesa</option>
                        </select>

                    </div>

                    <div className="card-footer">
                        <button className="button" type="submit">Feito</button>
                    </div>

                </form>
            </main>

            <footer> 
                <Link href="/"><a className="footer-icon"><FiArrowLeftCircle /><p>Voltar</p></a></Link>
            </footer>
        </div>

    </>

  )
}