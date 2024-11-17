'use client'
import { Card } from "../Card"
import style from './layout.module.css'


export const CardBar = ({data, ready}) =>{ 
    let cardData = {
        sales: 0,
        trans: 0,
        orders: 0,
        TBM: 0,
    }
    if(data != null && data != undefined){
        cardData.sales = data.sales
        cardData.trans = data.trans
        cardData.orders = data.orders
        cardData.TBM = data.TBM
    }
    const card_list = [
        { title: "Vendas", description: "Ultimo Mês", values: cardData.sales, link: "/application/admin", icon: "sales" },
        { title: "TBM", description: "Dia", values: cardData.TBM, link: "x" , icon: "coin" },
        { title: "Transacões", description: "Dia", unit: true, values: cardData.trans , link: "x", icon: "trans" },
        { title: "Pedidos", description: "Semana", unit: true, values: cardData.orders, link: "/application/admin", icon: "orders" },]

    return <div className={style.CardBar}>
        {
        card_list.map( (card, key) => (
            ready ? 
            <Card key={key} data={card} CardReady={true} /> : <Card key={key} data={card} CardReady={false} />
        ) )
        }
        
    </div>
}
