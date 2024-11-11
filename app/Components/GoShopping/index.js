"use client"
import { useEffect } from "react";




export const GoShopping = () =>{
    useEffect(()=>{
        const gap = setInterval(() => {
            console.log("ompra feito no supermecado")


        }, 5000)

        return () => clearInterval(gap)
    }, []) 
}