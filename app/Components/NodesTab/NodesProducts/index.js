import { Table } from "../../Table";
import { DataBase } from "../../../data/database";

const products = DataBase.products





export function NodesProducts(){

    return <Table data={{
        header: [
            "SKU", "Nome", "Marca", "Variante", "Caregoria", "È Frios", "Imposto", "Fabrica"
        ],
        body: products
    }} />
}