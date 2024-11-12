import Link from "next/link"
import { TabControl } from "../TabControl/TabControl"
import { NodesProducts } from "./NodesProducts"


export function NodesTab(){

    return <div className="Nodes">
        <h1 className="tab-title">Nós</h1>

        <TabControl tabData={[
            { label: "Products", content: NodesProducts() },
            { label: "Mercados", content: "Mercados" },
            { label: "Distribuidoras", content: "Distribuidoras" },
            { label: "Fabricas", content: "Factories" },
        ]}
        />
    

    </div>
}