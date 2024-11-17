import ClientJSON from "../JSON/clients.json"
import productsJSON from "../JSON/products.json"
import distsJSON  from "../JSON/dists.json"
import factoryJSON from "../JSON/factories.json"
import { Transactions } from "../../Components/Transactions"

const ad_key = "sgi_admin"
const cd_key = "sgi_clients"
const pd_key = "sgi_products"
const dt_key = "sgi_dists"
const fc_key = "sgi_factories"

const AdminDb = {
    sales: 100,
    trans: 0,
    orders: 0,
    TBM: 0.10,
    pool_trans: [],
    pool_orders: []
}
export const DataBase = {
    admin: JSON.stringify(AdminDb, null, '\t'),
    products: JSON.stringify(productsJSON, null, '\t'),
    dists: JSON.stringify(distsJSON, null, '\t'),
    factories: JSON.stringify(factoryJSON, null, '\t'),
    clients: JSON.stringify(ClientJSON, null, '\t'),
}
//Read Admin Data Base
export function ReadAdminDb(){
    return JSON.parse(localStorage.getItem(ad_key))
}
//Read Clients
export function ReadClientsDb(){
    return JSON.parse(localStorage.getItem(cd_key))
}
//Read Products
export function ReadProductsDb(){
    return JSON.parse(localStorage.getItem(pd_key))
}
//Read Dists
export function ReadDistsDb(){
    return JSON.parse(localStorage.getItem(dt_key))
}
//Read Factories
export function ReadFactoriesDb(){
    return JSON.parse(localStorage.getItem(fc_key))
}
//Write Admin Data Base
export function WriteAdminDb(data){
    localStorage.setItem(ad_key, data)
}
//Write Clients
export function WriteClientsDb(data){
    localStorage.setItem(cd_key, data)
}
//Write Products
export function WriteProductsDb(data){
    localStorage.setItem(pd_key, data)
}
//Write Dists
export function WriteDistsDb(data){
    localStorage.setItem(dt_key, data)
}
//Write Factories
export function WriteFactoriesDb(data){
    localStorage.setItem(fc_key, data)
}