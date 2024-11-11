import { CreateSKU } from "../CreateSKU"


export function RegisterProduct(ClientList, products){

    let prods = products

    prods.forEach(prod =>{
        prods.push({SKU: CreateSKU(prod.produto)})
    })

    let Clients = ClientList

    Clients.forEach(cliente => {
        cliente.produtos = prods
    })
    
    return Clients
}