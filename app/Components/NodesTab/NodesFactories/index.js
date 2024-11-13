import { LimitText } from "../../../Resources/LimitText"
import { Table } from "../../Table"

//      "userId": "idx-9uxamb0a",
// 		"name": "Produtos de Limpeza Praticidade Máxima",
// 		"category": "produtos de limpeza",
// 		"type": "multiuso",
// 		"city": "São Joaquim do Monte",
// 		"contact": [
// 			"(81) 36831-2926",
// 			"(81) 91586-2582"
// 		],
// 		"account": "3.0.151.6-X",
// 		"dists": [{
// 	                "userId": "idx-39sfzc3q",
// 	                "distance": 10369
//              },





export const NodesFactories = (factories) =>{

    let facts = []
    for(let i = 0; i < factories.length; i++){
        const f = factories[i]

        facts.push({
            Id: f.id,
            Nome: LimitText(f.name, 15),
            Tipo: f.type,
            Categoria: f.category,
            Tipo: f.type,
            //products: f.products,
            city: LimitText(f.city, 15),
            Contato: f.contact[0],
            Conta: f.account,
            Distribuidora: (f.dists[0].distance / 1000).toFixed(0) + " km",
            //dist: f.dists.length > 0? f.dists[0].distance : 0,
            //dist_unit: "km",
            //state: f.state,
            //payments: f.payments,
        })

    }

    return <div className="nodes-table">

        <Table data={facts} />

    </div>
}