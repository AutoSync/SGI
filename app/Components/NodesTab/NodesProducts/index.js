import { Table } from "../../Table";
import { LimitText } from "../../../Resources/LimitText";


// data={{
//     header: [
//         "SKU", "Nome", "Marca", "Variante", "Caregoria", "È Frios", "Imposto", "Fabrica"
//     ],
//     body: products
// }}


export const NodesProducts = (data) =>{
    let products_selected = []

    for(let i = 0; i < data.length; i++){
        let p = { 
            sku: data[i].sku,
            name: LimitText(data[i].name, 15),
            brand: LimitText(data[i].brand, 15),
            variant: data[i].variant,
            category: data[i].category,
            isCold: data[i].cold_storage ? "S" : "N",
            tax: (data[i].tax * 100).toString() + "%",
         }
         products_selected.push(p)
    }
    //console.log(products_selected)
    return <div className="nodes-table">
        <Table data={products_selected}  />
    </div>
}