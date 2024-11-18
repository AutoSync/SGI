'use client'
import { useState } from "react"
import styles from './Table.module.css'
import { useEffect } from "react"



export const Table = ({data, header, ready}) => {

    
    let isEmpty = data === null || data === undefined || data.length === 0;
    let emptyData = Array(15).fill({a1: "Carregando...", a2: "Carregando...", a3: "Carregando...", a4: "Carregando...", a5: "Carregando..."})
    const [dataToRender, setData] = useState(isEmpty ? emptyData : data)

    useEffect(() => {
        setData(isEmpty ? emptyData : data)
    }, [data])
    
    return <div className={styles.Table}>
                <div className={styles.TableHeader}>
                {
                    ready ? isEmpty ? <h1>Sem resultados</h1> :  
                    header.map((item, index) => (
                        <div key={index} className={styles.TableHeaderTd}>
                            <button onClick={() => setData([...dataToRender].sort((a, b) => a[item] > b[item] ? 1 : -1))} className={styles.TableHeaderButton}>
                                {item}
                            </button>
                        </div>
                    ))
                        
                 : <></>
                }
            </div>
            <div className={styles.TableMain}>
                {
                     ready ? isEmpty ? <div className={styles.TableMainEmpty}>Nenhum item na lista</div> : 
                    dataToRender.map((item, index) => (
                        <div key={index} className={styles.TableMainTr}>
                            {
                                header.map((key, subIndex) => (
                                    <div key={subIndex} className={styles.TableMainTd}>{item[key]}</div>
                                ))
                            }
                        </div>
                    )) 
                    : <div className={styles.TableMainLoading}>
                        {
                            emptyData.map((key) => (
                                <div key={key} className={styles.TableLoadingTr}>
                                    <div key={key} className={styles.TableLoadingTd}/>
                                    <div key={key} className={styles.TableLoadingTd}/>
                                    <div key={key} className={styles.TableLoadingTd}/>
                                    <div key={key} className={styles.TableLoadingTd}/>
                                    <div key={key} className={styles.TableLoadingTd}/>
                                </div>
                            ))
                        }
                    </div>   
                }
            </div>
    </div>
}