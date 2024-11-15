import { CardBar } from "../CardBar";
import { Transactions } from "../Transactions";
import styles from './layout.module.css'

const Dash = () => {
    return <div className={styles.DashboardOverview}>
    <h1 className={styles.DashboardTitle}>Painel</h1>
    <CardBar cards={[
        { title: "Vendas", description: "Ultimo Mês", values: 0, link: "/application/admin", icon: "sales" },
        { title: "TBM", description: "Dia", values: 0, link: "x" , icon: "coin" },
        { title: "Transacões", description: "Dia", unit: true, values: 0 , link: "x", icon: "trans" },
        { title: "Pedidos", description: "Semana", unit: true, values: 0, link: "/application/admin", icon: "orders" },
    ]} />
    <Transactions transData={[
        { client: "Client 1", code: 100, value: 2850, cot: 25412 },
        { client: "Client 2", code: 200, value: 28550, cot: 25413 },     
        { client: "Client 3", code: 300, value: 16920, cot: 25414 },     
        { client: "Client 4", code: 400, value: 41300, cot: 25415 },     

    ]} />
</div>
}

const Toolbar = () => {
    return <div className={styles.DashboardToolbar}>
        <h1>Profile</h1>

        <div>Wish</div>
        
    </div>
}

export function Dashboard(){
    return <div className={styles.Dashboard}>
        <Dash />
        <Toolbar />
    </div>
}