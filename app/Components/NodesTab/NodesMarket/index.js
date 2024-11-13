import { LimitText } from "../../../Resources/LimitText"
import { ConvertToBRL } from "../../ConvertToBRL"
import { Table } from "../../Table"

//      "userId": "idx-20ktjfc8",
// 		"name": "Mercado do Bairro",
// 		"network": null,
// 		"category": "mercado",
// 		"size": "médio",
// 		"products": [ ],
// 		"city": "Dormentes",
// 		"state": "pernambuco",
// 		"payments": [],
// 		"receipts": [],
// 		"balance": "51203.95",
// 		"account": "1.0.56.13-X",
// 		"contact": [],
// 		"dists": []

export function NodesMarket(data){

    let s_markets = [] //Filtered Markets Keys

    for(let i = 0; i < data.length; i++){
        const m = data[i]
        s_markets.push({
            Id: m.userId,
            Nome: LimitText(m.name),
            Categoria: m.category,
            Tamanho: m.size,
            Saldo: ConvertToBRL(m.balance),
            Conta: m.account,
            Contato: m.contact[0],
            Distribuidora: (m.dists[0].distance / 1000).toFixed(0) + " km",
        })
    }

    return <div className="nodes-table">
        <Table data={s_markets} />
    </div>
}