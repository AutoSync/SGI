import { CardBar } from "../CardBar";
import { Transactions } from "../Transactions";
import style from './layout.module.css'

const Dash = () => {
    return <div className={style.Overview}>
    <h1 className="tab-title">Painel</h1>
    <CardBar cards={[
        { title: "Vendas", description: "Ultimo Mês", values: 0, link: "/application/admin", icon: "sales" },
        { title: "Marketshare", description: "Dia", values: 0, link: "x" , icon: "coin" },
        { title: "Transacões", description: "Dia", unit: true, values: 0 , link: "x", icon: "trans" },
        { title: "Pedidos", description: "Semana", unit: true, values: 0, link: "/application/admin", icon: "orders" },
    ]} />
    <Transactions transData={[
        { from: "cliente1", to: "cliente2", type: "chamada de estoque", status: 10, value: 20520.82 },
        { from: "cliente3", to: "cliente4", type: "compra de produtos", status: 20, value: 19250.52 },
        { from: "cliente5", to: "cliente6", type: "compra de produtos", status: 30, value: 36512.27 },
        { from: "cliente7", to: "cliente8", type: "chamada de estoque", status: 40, value: 52316.31 },      
    ]} />
</div>
}

const Toolbar = () => {
    return <div className="dashboard-toolbar">
        <h1>Profile</h1>

        <div>Wish</div>
        
    </div>
}

export function Dashboard(){
    return <div className="dashboard">
        <Dash />
        <Toolbar />
    </div>
}