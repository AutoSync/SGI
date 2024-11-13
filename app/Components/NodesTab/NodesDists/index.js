import { LimitText } from "../../../Resources/LimitText"
import { Table } from "../../Table"

//         "userId": "idx-5os6a1v4",
//         "name": "Distribuição de Sabores",
//         "city": "São Caitano",
//         "category": "distribuidor",
//         "account": "2.0.149.0-X",
//         "payments": [],
//         "receipts": [],
//         "products": [


export const NodesDists = (distribuitors) =>{
    let dists = []

    for(var i = 0; i < distribuitors.length; i++){
        const d = distribuitors[i]
        dists.push({
            Id: d.userId,
            Nome: LimitText(d.name, 15),
            Cidade: LimitText(d.city, 15),
            //category: d.category,
            Conta: d.account,
            //payments: d.payments,
        })
    }

    return <div className="nodes-table">
            <Table data={dists} />
        </div> 
    
}