import { TabControl } from "../TabControl/TabControl"
import { DataBase } from "../../data/database";
import { NodesProducts } from "./NodesProducts"
import { NodesMarket } from "./NodesMarket";

const products = DataBase.products
const markets = DataBase.clients
const dists = DataBase.dists
const factories = DataBase.factories

export function NodesTab(){

    return <div className="Nodes">
        <h1 className="tab-title">Nós</h1>

        <TabControl tabData={[
            { label: "Products", content: NodesProducts(products)},
            { label: "Mercados", content: NodesMarket(markets)},
            { label: "Distribuidoras", content: "Distribuidoras" },
            { label: "Fabricas", content: "Factories" },
        ]} indexActive={0}
        />
    

    </div>
}