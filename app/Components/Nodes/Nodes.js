import { clientes } from "../../data/clientes/clientes"
import { distribuidoras } from "../../data/distribuidoras/distribuidoras"
import { produtores } from "../../data/produtores/produtores"
import { LimitText } from "../../Resources/LimitText"
import { TabControl } from "../TabControl/TabControl"

const client_list = clientes

const tabStyles = { tabControl: "tab-control-nodes", 
    sidebar: "tab-sidebar-nodes", 
    button: "tab-button-nodes",
}

const Client_Tab = () => {
    return <div className="node-client-tab">
        <div className="node-table">

                <div className="node-head-tr">
                    <div className="node-head-td">ID</div>
                    <div className="node-head-td-large">Nome</div>
                    <div className="node-head-td">Rede</div>
                    <div className="node-td-large">Cidade</div>
                    <div className="node-head-td">categoria</div>
                    <div className="node-head-td">Abrir</div>
                </div>
            {
            client_list.map((cliente, index) => (
                <div className={index == client_list.length -1 ? "node-tr-last" : "node-tr"}>
                    <div className="node-td">
                        {cliente.identificacao}
                    </div>
                    <div className="node-td-large">
                        {LimitText(cliente.nome, 10)}
                    </div>
                    <div className="node-td">
                        {cliente.rede ? cliente.rede : "n/a"}
                    </div>
                    <div className="node-td-large">
                        {LimitText(cliente.cidade, 10)}
                    </div>
                    <div className="node-td">
                        {cliente.categoria}
                    </div>
                    <div className="node-td">
                        <a key={index} className="node-td-link" href="/ClientesApp"> Link </a>
                    </div>
                </div>
            ))
            }
                </div>
    </div>
}

const DistTab = () => {
    return <div className="node-dist-tab">

        <div className="node-table">
                <div className="node-head-tr">
                    <div className="node-head-td">Identicador</div>
                    <div className="node-head-td">Nome</div>
                    <div className="node-head-td">Cidade</div>
                    <div className="node-head-td">Abrir</div>
                </div>
                {
                    distribuidoras.map((dist, index) => (
                        <div className={index == distribuidoras.length - 1 ? "node-tr-last" : "node-tr"}>
                            <div className="node-td">{dist.identificador}</div>
                            <div className="node-td">{LimitText(dist.nome, 10)}</div>
                            <div className="node-td">{LimitText(dist.cidade, 10)}</div>
                            <button key={index} className="node-table-button">Abrir</button>
                        </div>
                    ))
                }
        </div>

    </div>
}

const Produtores = () => {
    return <div className="node-dist-tab">

    <div className="node-table">
            <div className="node-head-tr">
                <div className="node-head-td">Identicador</div>
                <div className="node-head-td">Nome</div>
                <div className="node-head-td">Cidade</div>
                <div className="node-head-td">Endereço</div>
                <div className="node-head-td">Categoria</div>
                <div className="node-head-td">Contato</div>
                <div className="node-head-td">Abrir</div>
            </div>
            {
                produtores.map((prod, index) => (
                    <div className={index == prod.length - 1 ? "node-tr-last" : "node-tr"}>
                        <div className="node-td">{prod.identificador}</div>
                        <div className="node-td">{LimitText(prod.nome, 15)}</div>
                        <div className="node-td">{LimitText(prod.cidade, 15)}</div>
                        <div className="node-td">{prod.endereco}</div>
                        <div className="node-td">{prod.categoria}</div>
                        <div className="node-td">{prod.contato}</div>
                        <button key={index} className="node-table-button">Abrir</button>
                    </div>
                ))
            }
    </div>

</div>
}

const TabData = [
    { label: "Clientes", content: Client_Tab()},
    { label: "Distribuidoras", content: DistTab()},
    { label: "Produtores", content: Produtores()},
]

export const Nodes = () =>{
    return <div className="Nodes">
        <h1 className="tab-title">Nós</h1>

    <TabControl 
    tabData={TabData}
    tabStyles={tabStyles}
    />
    </div>
}