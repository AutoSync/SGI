'use client'
import styles from './Products.module.css'
import { useEffect, useState } from "react";
import { Table } from "../Table";
import { ReadProductsDb } from '../../data/database';
import { LimitText } from '../../Resources/LimitText';
import { ConvertToBRL } from '../ConvertToBRL';





export const Products = () => {
    
    const [products, setProducts] = useState([])
    const [productsReady, setProductsReady] = useState(false)

    useEffect(() => {

        const produtos_carregado = ReadProductsDb()

        setProductsReady(false)
        let novos_produtos = []
        if(produtos_carregado != null){
            for(let i = 0; i < produtos_carregado.length; i++){
                novos_produtos.push({
                    SKU: produtos_carregado[i].sku,
                    Nome: LimitText(produtos_carregado[i].name, 15),
                    Marca: LimitText(produtos_carregado[i].brand, 15),
                    Variante: produtos_carregado[i].variant,
                    Categoria: produtos_carregado[i].category,
                    Frios: produtos_carregado[i].cold_storage ? "SIM" : "NÃO",
                    Imposto: (produtos_carregado[i].tax * 100).toString() + "%",
                    Preço: ConvertToBRL(produtos_carregado[i].buy),
                })
            }
        }
        
        
        setProducts(novos_produtos)
        setProductsReady(true)

        return () => clearTimeout(timer)
    }, [])

    return <div className={styles.Products}>
        <h1 className={styles.ProductsTitle}>Produtos</h1>
        <Table data={products} header={["SKU", "Nome", "Marca", "Variante", "Categoria", "Frios", "Imposto", "Preço"]} ready={productsReady}/>
    </div>
}