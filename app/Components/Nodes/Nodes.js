"use client"
import Link from "next/link"

import { LimitText } from "../../Resources/LimitText"
import { TabControl } from "../TabControl/TabControl"
import { DataBase } from "../../data/database"
import React, { useState } from "react"

const produtos = DataBase.products
const clientes = DataBase.clients
const distribuidoras = DataBase.dists
const produtores = DataBase.factories

const tabStyles = { tabControl: "tab-control-nodes", 
    sidebar: "tab-sidebar-nodes", 
    button: "tab-button-nodes",
}

const Client_Tab = () => {
    return <div className="node-client-tab">
        <div id="node-table">

                <div id="node-head-tr">
                    <div id="node-head-td">ID</div>
                    <div id="node-head-td-large">Nome</div>
                    <div id="node-head-td">Rede</div>
                    <div id="node-td-large">Cidade</div>
                    <div id="node-head-td">categoria</div>
                    <div id="node-head-td">Estoque</div>
                    <div id="node-head-td">Abrir</div>
                </div>
            {
            clientes.map((cliente, index) => (
                <div id={index == clientes.length -1 ? "node-tr-last" : "node-tr"}>
                    <div id="node-td"> {cliente.userId}</div>
                    <div id="node-td-large"> {LimitText(cliente.name, 10)}</div>
                    <div id="node-td"> {cliente.network ? cliente.network : "n/a"}</div>
                    <div id="node-td-large">{LimitText(cliente.city, 10)}</div>
                    <div index="node-td">{cliente.category}</div>
                    <div id="node-td">{cliente.products.length}</div>
                    <div id="node-td">
                        <Link key={index} className="node-td-link" href={`/`}> Link </Link>
                    </div>
                </div>
            ))
            }
                </div>
    </div>
}
const DistTab = () => {
    return <div className="node-dist-tab">

        <div id="node-table">
                <div id="node-head-tr">
                    <div id="node-head-td">Identicador</div>
                    <div id="node-head-td">Nome</div>
                    <div id="node-head-td">Cidade</div>
                    <div id="node-head-td">Abrir</div>
                </div>
                {
                    distribuidoras.map((dist, index) => (
                        <div id={index == distribuidoras.length - 1 ? "node-tr-last" : "node-tr"}>
                            <div id="node-td">{dist.userId}</div>
                            <div id="node-td">{LimitText(dist.name, 10)}</div>
                            <div id="node-td">{LimitText(dist.city, 10)}</div>
                            <button key={index} id="node-table-button">Abrir</button>
                        </div>
                    ))
                }
        </div>

    </div>
}
const Fabricantes = () => {
    return <div className="node-dist-tab">

    <div id="node-table">
            <div id="node-head-tr">
                <div id="node-head-td">Identicador</div>
                <div id="node-head-td">Nome</div>
                <div id="node-head-td">Cidade</div>
                <div id="node-head-td">Categoria</div>
                <div id="node-head-td">Contato</div>
                <div id="node-head-td">Abrir</div>
            </div>
            {
                produtores.map((prod, index) => (
                    <div id={index == produtores.length - 1 ? "node-tr-last" : "node-tr"}>
                        <div id="node-td">{prod.userId}</div>
                        <div id="node-td">{LimitText(prod.name, 15)}</div>
                        <div id="node-td">{LimitText(prod.city, 15)}</div>
                        <div id="node-td">{prod.category}</div>
                        <div id="node-td">{prod.contact[0]}</div>
                        <button key={index} className="node-table-button">Abrir</button>
                    </div>
                ))
            }
    </div>

</div>
}
const Produtos = () => {

    return <div className="node-products-tab">
        <div id="node-table">
            <div id="node-head-tr">
                <button id="node-head-td">SKU</button>
                <button id="node-head-td">Nome</button>
                <button id="node-head-td">Marca</button>
                <button id="node-head-td">Variante</button>
                <button id="node-head-td">Categoria</button>
                <button id="node-head-td">Tipo</button>
                <button id="node-head-td">É Frios</button>
                <button id="node-head-td">Codigo de Barras</button>
                <button id="node-head-td">Imposto</button>
                <button id="node-head-td">Preco Médio</button>
                <button id="node-head-td">Fabricante</button>
            </div>
            {
                produtos.map((produto, index) => (
                    <div id={index == produtos.length - 1 ? "node-tr-last" : "node-tr"}>
                        <div id="node-td">{produto.sku}</div>
                        <div id="node-td">{produto.name}</div>
                        <div id="node-td">{produto.brand}</div>
                        <div id="node-td">{produto.variant}</div>
                        <div id="node-td">{produto.category}</div>
                        <div id="node-td">{produto.type}</div>
                        <div id="node-td">{produto.cold_storage}</div>
                        <div id="node-td">{produto.barCode}</div>
                        <div id="node-td">{produto.tax}</div>
                        <div id="node-td">{produto.buy}</div>
                        <div id="node-td">{produto.factory.userId}</div>
                 </div>
                ))
            }
        </div>
    </div>
}
const TabData = [
    { label: "Produtos", content: Produtos()},
    { label: "Clientes", content: Client_Tab()},
    { label: "Distribuidoras", content: DistTab()},
    { label: "Fabricantes", content: Fabricantes()},
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