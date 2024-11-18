import { Table } from "../Table"
import { useState, useEffect } from "react"
import styles from './Markets.module.css'
import { LimitText } from "../../Resources/LimitText"
import { ConvertToBRL } from "../ConvertToBRL"
import { ReadClientsDb } from "../../data/database"



export const Markets = () => {
    
    const [markets, setMarkets] = useState([])
    const [marketReady, setMarketReady] = useState(false)

    useEffect(() => {

        const markets_carregado = ReadClientsDb()

        /// DUPLICADE DE DADOS

        let novos_markets = []
        setMarketReady(false)

       if(markets_carregado != null){
            for(let i = 0; i < markets_carregado.length; i++) {
                novos_markets.push({
                    Id: markets_carregado[i].userId,
                    Nome: LimitText(markets_carregado[i].name, 15),
                    Cidade: LimitText(markets_carregado[i].city, 15),
                    Contato: markets_carregado[i].contact[0],
                    Saldo: ConvertToBRL(markets_carregado[i].balance),
                    Conta: markets_carregado[i].account,
                    //payments: markets_carregado[i].payments,
                })
            }
        }
        setMarkets(novos_markets)
        setMarketReady(true)

    }, [])

    return <div className={styles.Markets}>
        <h1 className={styles.MarketsTitle}>Mercados</h1>
        <Table data={markets} header={["Id", "Nome", "Cidade", "Contato","Saldo", "Conta"]} ready={marketReady} />
    </div>
}