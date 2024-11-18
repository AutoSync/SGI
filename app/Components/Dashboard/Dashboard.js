'use client'
import { useEffect, useState } from "react";
import { CardBar } from "../CardBar";
import { Transactions } from "../Transactions";
import styles from './layout.module.css'
import { ReadAdminDb } from "../../data/database";

const Dash = ({dataCards, dataTrans, CardReady, TransReady}) => {
    return <div className={styles.DashboardOverview}>
    <h1 className={styles.DashboardTitle}>Painel</h1>
    <CardBar data={dataCards} ready={CardReady} />
    <Transactions transData={dataTrans} ready={TransReady} />
</div>
}

const Toolbar = () => {
    return <div className={styles.DashboardToolbar}>
        <h1>Profile</h1>

        <div>Wish</div>
        
    </div>
}

export function Dashboard(){

    const [CardReady, setCardReady] = useState(false)
    const [TransReady, setTransReady] = useState(false)

    const [UpdatedCards, setUpdatedCards] = useState({sales: 7, trans: 6, orders: 5, TBM: 4})
    const [UpdatedTransacations, setUpdatedTransactions] = useState(null)

    useEffect(() => {

        const timer = setTimeout(() => {

            const admin = ReadAdminDb()
            //Update Cards 
            if(admin != null){
                setUpdatedCards({
                    sales: admin.sales,
                    trans: admin.trans,
                    orders: admin.orders,
                    TBM: admin.TBM,
                })
                setCardReady(true)
            }
            //Update Transactions
            if(admin != null){
                setUpdatedTransactions(admin.pool_trans)
                setTransReady(true)
            }

        }, 1000);
        
        return  () => clearTimeout(timer);
    }, [])

    return <div className={styles.Dashboard}>
        <Dash 
            dataCards={UpdatedCards}
            dataTrans={UpdatedTransacations}
            CardReady={CardReady}
            TransReady={TransReady}
        />
        <Toolbar />
    </div>
}