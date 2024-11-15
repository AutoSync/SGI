

// Code Transactions
// 100 COMPRA 200 VENDAS 300 PAGAMENTOS 400 INVESTIMENTOS


export const CodeTrans = (code) =>{
    switch(code){
        case 100:
            return "COMPRA"
        case 101:
            return "AQUISICAO"
        case 102:
            return "ESTOQUE"
        case 103:
            return "ALMOX"
        case 200:
            return "CLIENTE"
        case 300:
            return "ENERGIA"
        case 301:
            return "AGUA"
        case 302:
            return "FUNCIONARIOS"
        case 303:
            return "OUTROS"
        case 400:
            return "GERAL"
        default:
            return "Undefined code"
    }
}