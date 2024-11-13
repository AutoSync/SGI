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
        const m = {
            id: data[i].userId,
            name: data[i].name,
            type: data[i].network,
            category: data[i].category,
            size: data[i].size,
            //products: data[i].products,
            city: data[i].city,
            //state: data[i].state,
            //payments: data[i].payments,
        }
        s_markets.push(m)
    }

    return <div className="nodes-table">
        <Table data={s_markets} />
    </div>
}