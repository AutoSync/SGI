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
            SKU: data[i].sku,
            Nome: LimitText(data[i].name, 15),
            Marca: LimitText(data[i].brand, 15),
            Variante: data[i].variant,
            Categoria: data[i].category,
            Frios: data[i].cold_storage ? "S" : "N",
            Imposto: (data[i].tax * 100).toString() + "%",
         }
         products_selected.push(p)
    }
    //console.log(products_selected)
    return <div className="nodes-table">
        <Table data={products_selected}  />
    </div>
}