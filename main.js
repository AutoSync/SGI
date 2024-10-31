const copyright_node = "Foto de Vasilina Sirotina na Unsplash"

const clients = [
    {
        name: "Supermercado Bom Preço",
        category: "Supermercado",
        city: "São Paulo",
        nearbyCities: ["Campinas", "Santos", "Guarulhos"],
        products: [
            { nome: "Arroz", preco: 5.99, validade: "2024-12-01", estoque: 100, vendasMes: 20, vendasTotal: 300 },
            { nome: "Feijão", preco: 4.99, validade: "2024-11-15", estoque: 80, vendasMes: 15, vendasTotal: 250 },
            { nome: "Macarrão", preco: 3.49, validade: "2024-10-20", estoque: 70, vendasMes: 25, vendasTotal: 220 },
            { nome: "Leite", preco: 2.49, validade: "2023-05-01", estoque: 60, vendasMes: 30, vendasTotal: 350 },
            { nome: "Açúcar", preco: 1.99, validade: "2024-06-10", estoque: 90, vendasMes: 18, vendasTotal: 280 },
            { nome: "Café", preco: 3.99, validade: "2024-08-05", estoque: 75, vendasMes: 22, vendasTotal: 230 },
            { nome: "Óleo de Soja", preco: 6.99, validade: "2024-07-30", estoque: 50, vendasMes: 12, vendasTotal: 180 },
            { nome: "Farinha de Trigo", preco: 4.49, validade: "2024-09-25", estoque: 60, vendasMes: 20, vendasTotal: 200 },
            { nome: "Sal", preco: 1.49, validade: "2025-02-14", estoque: 100, vendasMes: 30, vendasTotal: 400 },
            { nome: "Papel Higiênico", preco: 9.99, validade: "2025-01-01", estoque: 40, vendasMes: 10, vendasTotal: 100 },
            { nome: "Sabonete", preco: 1.99, validade: "2024-12-20", estoque: 90, vendasMes: 28, vendasTotal: 250 },
            { nome: "Shampoo", preco: 6.99, validade: "2024-11-01", estoque: 30, vendasMes: 12, vendasTotal: 120 },
            { nome: "Detergente", preco: 2.99, validade: "2024-10-15", estoque: 60, vendasMes: 20, vendasTotal: 200 },
            { nome: "Alvejante", preco: 3.99, validade: "2024-09-10", estoque: 40, vendasMes: 10, vendasTotal: 130 },
            { nome: "Refrigerante", preco: 4.99, validade: "2024-05-15", estoque: 50, vendasMes: 18, vendasTotal: 300 },
            { nome: "Chocolate", preco: 5.49, validade: "2024-06-20", estoque: 60, vendasMes: 22, vendasTotal: 250 },
            { nome: "Chips", preco: 3.99, validade: "2024-04-25", estoque: 40, vendasMes: 15, vendasTotal: 200 },
            { nome: "Biscoito", preco: 2.99, validade: "2024-08-30", estoque: 70, vendasMes: 25, vendasTotal: 270 },
            { nome: "Sorvete", preco: 8.99, validade: "2024-03-15", estoque: 30, vendasMes: 10, vendasTotal: 100 },
            { nome: "Iogurte", preco: 2.49, validade: "2024-02-10", estoque: 50, vendasMes: 12, vendasTotal: 140 }           
        ]
    },
    {
        name: "Farmácia Vida",
        category: "Farmácia",
        city: "Rio de Janeiro",
        nearbyCities: ["Niterói", "Petrópolis", "Duque de Caxias"],
        products: [
                { nome: "Paracetamol", preco: 2.99, validade: "2024-12-01", estoque: 100, vendasMes: 30, vendasTotal: 500 },
                { nome: "Ibuprofeno", preco: 3.99, validade: "2024-11-15", estoque: 80, vendasMes: 40, vendasTotal: 600 },
                { nome: "Dipirona", preco: 1.49, validade: "2024-10-20", estoque: 120, vendasMes: 35, vendasTotal: 550 },
                { nome: "Antiácido", preco: 4.49, validade: "2024-09-30", estoque: 50, vendasMes: 25, vendasTotal: 300 },
                { nome: "Vitamina C", preco: 5.99, validade: "2024-08-15", estoque: 70, vendasMes: 20, vendasTotal: 400 },
                { nome: "Multivitamínico", preco: 6.99, validade: "2024-07-25", estoque: 60, vendasMes: 15, vendasTotal: 250 },
                { nome: "Antialérgico", preco: 7.99, validade: "2024-06-10", estoque: 90, vendasMes: 45, vendasTotal: 700 },
                { nome: "Xarope para tosse", preco: 4.99, validade: "2024-05-05", estoque: 40, vendasMes: 10, vendasTotal: 200 },
                { nome: "Pomada cicatrizante", preco: 8.99, validade: "2024-04-01", estoque: 30, vendasMes: 5, vendasTotal: 100 },
                { nome: "Creme hidratante", preco: 9.99, validade: "2024-03-20", estoque: 20, vendasMes: 15, vendasTotal: 200 },
                { nome: "Protetor solar", preco: 12.99, validade: "2024-02-10", estoque: 25, vendasMes: 20, vendasTotal: 150 },
                { nome: "Termômetro digital", preco: 15.99, validade: "2025-01-01", estoque: 15, vendasMes: 5, vendasTotal: 50 },
                { nome: "Aparelho de pressão", preco: 29.99, validade: "2025-02-15", estoque: 10, vendasMes: 2, vendasTotal: 30 },
                { nome: "Soro fisiológico", preco: 1.99, validade: "2024-12-01", estoque: 200, vendasMes: 60, vendasTotal: 900 },
                { nome: "Esparadrapo", preco: 0.99, validade: "2024-11-15", estoque: 150, vendasMes: 25, vendasTotal: 350 },
                { nome: "Algodão", preco: 2.49, validade: "2024-10-30", estoque: 130, vendasMes: 30, vendasTotal: 400 },
                { nome: "Gaze estéril", preco: 1.49, validade: "2024-09-25", estoque: 140, vendasMes: 20, vendasTotal: 300 },
                { nome: "Band-Aid", preco: 2.99, validade: "2024-08-15", estoque: 120, vendasMes: 35, vendasTotal: 450 },
                { nome: "Álcool em gel", preco: 3.99, validade: "2024-07-10", estoque: 110, vendasMes: 50, vendasTotal: 800 },
                { nome: "Máscara descartável", preco: 4.99, validade: "2024-06-05", estoque: 100, vendasMes: 40, vendasTotal: 600 }           
        ]
    },
    {
        name: "Loja de Conveniência Rápido",
        category: "Conveniência",
        city: "Belo Horizonte",
        nearbyCities: ["Contagem", "Betim", "Nova Lima"],
        products: [
                { nome: "Refrigerante", preco: 1.99, validade: "2024-05-15", estoque: 50, vendasMes: 25, vendasTotal: 400 },
                { nome: "Água Mineral", preco: 0.99, validade: "2024-04-10", estoque: 100, vendasMes: 40, vendasTotal: 600 },
                { nome: "Chocolates", preco: 2.49, validade: "2024-06-20", estoque: 60, vendasMes: 30, vendasTotal: 450 },
                { nome: "Chips", preco: 3.99, validade: "2024-07-05", estoque: 40, vendasMes: 20, vendasTotal: 300 },
                { nome: "Biscoitos", preco: 2.49, validade: "2024-08-30", estoque: 70, vendasMes: 35, vendasTotal: 500 },
                { nome: "Salgadinhos", preco: 1.99, validade: "2024-09-15", estoque: 80, vendasMes: 50, vendasTotal: 700 },
                { nome: "Balas", preco: 0.99, validade: "2024-10-10", estoque: 90, vendasMes: 40, vendasTotal: 600 },
                { nome: "Chicletes", preco: 0.49, validade: "2025-01-01", estoque: 120, vendasMes: 60, vendasTotal: 900 },
                { nome: "Sorvete", preco: 4.99, validade: "2024-03-15", estoque: 30, vendasMes: 15, vendasTotal: 250 },
                { nome: "Iogurte", preco: 2.99, validade: "2024-02-10", estoque: 50, vendasMes: 25, vendasTotal: 300 },
                { nome: "Sanduíche", preco: 5.49, validade: "2024-01-05", estoque: 25, vendasMes: 10, vendasTotal: 150 },
                { nome: "Salada de Frutas", preco: 3.99, validade: "2024-01-20", estoque: 35, vendasMes: 20, vendasTotal: 200 },
                { nome: "Energético", preco: 2.99, validade: "2024-05-25", estoque: 40, vendasMes: 25, vendasTotal: 300 },
                { nome: "Café em Lata", preco: 1.49, validade: "2024-06-30", estoque: 60, vendasMes: 30, vendasTotal: 400 },
                { nome: "Bebida Isotônica", preco: 2.99, validade: "2024-04-15", estoque: 50, vendasMes: 20, vendasTotal: 250 },
                { nome: "Água de Coco", preco: 2.49, validade: "2024-03-25", estoque: 70, vendasMes: 30, vendasTotal: 350 },
                { nome: "Bolinho", preco: 1.99, validade: "2024-02-05", estoque: 80, vendasMes: 40, vendasTotal: 450 },
                { nome: "Barra de Cereal", preco: 1.49, validade: "2025-02-10", estoque: 100, vendasMes: 35, vendasTotal: 500 },
                { nome: "Pipoca", preco: 2.99, validade: "2025-01-20", estoque: 40, vendasMes: 20, vendasTotal: 150 },
                { nome: "Amendoim", preco: 1.99, validade: "2024-12-15", estoque: 50, vendasMes: 25, vendasTotal: 300 }           
        ]
    },
    {
        name: "Farmácia Saúde Animal",
        category: "Farmácia",
        city: "Curitiba",
        nearbyCities: ["São José dos Pinhais", "Ponta Grossa", "Londrina"],
        products: [
                { nome: "Antipulgas", preco: 29.99, validade: "2024-12-01", estoque: 100, vendasMes: 25, vendasTotal: 300 },
                { nome: "Vermífugo", preco: 19.99, validade: "2024-11-15", estoque: 80, vendasMes: 20, vendasTotal: 250 },
                { nome: "Xampu Medicamentoso", preco: 25.99, validade: "2024-10-20", estoque: 50, vendasMes: 15, vendasTotal: 200 },
                { nome: "Suplemento Vitaminico", preco: 39.99, validade: "2024-09-30", estoque: 60, vendasMes: 10, vendasTotal: 150 },
                { nome: "Antibiótico", preco: 49.99, validade: "2024-08-15", estoque: 70, vendasMes: 30, vendasTotal: 400 },
                { nome: "Anti-inflamatório", preco: 35.99, validade: "2024-07-25", estoque: 40, vendasMes: 15, vendasTotal: 200 },
                { nome: "Antialérgico", preco: 22.99, validade: "2024-06-10", estoque: 90, vendasMes: 20, vendasTotal: 300 },
                { nome: "Vacina Polivalente", preco: 89.99, validade: "2024-05-05", estoque: 20, vendasMes: 5, vendasTotal: 100 },
                { nome: "Soro Oral", preco: 12.99, validade: "2024-04-01", estoque: 100, vendasMes: 40, vendasTotal: 500 },
                { nome: "Colar Elizabetano", preco: 15.99, validade: "2024-03-20", estoque: 30, vendasMes: 10, vendasTotal: 200 },
                { nome: "Corte de Unhas", preco: 9.99, validade: "2024-02-10", estoque: 120, vendasMes: 25, vendasTotal: 300 },
                { nome: "Protetor Solar", preco: 19.99, validade: "2025-01-01", estoque: 50, vendasMes: 10, vendasTotal: 150 },
                { nome: "Pasta de Dente Canina", preco: 14.99, validade: "2025-02-15", estoque: 75, vendasMes: 15, vendasTotal: 200 },
                { nome: "Gaze Estéril", preco: 1.99, validade: "2024-12-01", estoque: 200, vendasMes: 40, vendasTotal: 500 },
                { nome: "Esparadrapo", preco: 2.49, validade: "2024-11-15", estoque: 150, vendasMes: 35, vendasTotal: 400 },
                { nome: "Seringa", preco: 1.49, validade: "2024-10-30", estoque: 300, vendasMes: 50, vendasTotal: 700 },
                { nome: "Bandagem Adesiva", preco: 3.99, validade: "2024-09-25", estoque: 140, vendasMes: 20, vendasTotal: 300 },
                { nome: "Pomada Cicatrizante", preco: 8.99, validade: "2024-08-15", estoque: 120, vendasMes: 30, vendasTotal: 350 },
                { nome: "Antisséptico", preco: 5.99, validade: "2024-07-10", estoque: 110, vendasMes: 20, vendasTotal: 250 },
                { nome: "Termômetro Digital", preco: 19.99, validade: "2024-06-05", estoque: 50, vendasMes: 15, vendasTotal: 200 }
              
        ]
    },
    {
        name: "Loja de Variedades Útil",
        category: "Comércio Geral",
        city: "Salvador",
        nearbyCities: ["Lauro de Freitas", "Camaçari", "Feira de Santana"],
        products: [
                { nome: "Escova de Limpeza", preco: 9.99, validade: "2025-12-01", estoque: 150, vendasMes: 30, vendasTotal: 500 },
                { nome: "Pano de Chão", preco: 5.99, validade: "2025-11-15", estoque: 200, vendasMes: 40, vendasTotal: 600 },
                { nome: "Baldes Plásticos", preco: 12.99, validade: "2026-10-20", estoque: 80, vendasMes: 20, vendasTotal: 400 },
                { nome: "Rodo", preco: 8.99, validade: "2025-09-30", estoque: 90, vendasMes: 25, vendasTotal: 450 },
                { nome: "Vassoura", preco: 7.99, validade: "2025-08-15", estoque: 120, vendasMes: 35, vendasTotal: 700 },
                { nome: "Desinfetante", preco: 3.99, validade: "2025-07-25", estoque: 110, vendasMes: 50, vendasTotal: 800 },
                { nome: "Detergente Líquido", preco: 2.99, validade: "2025-06-10", estoque: 180, vendasMes: 60, vendasTotal: 900 },
                { nome: "Sabão em Pó", preco: 6.99, validade: "2025-05-05", estoque: 130, vendasMes: 45, vendasTotal: 750 },
                { nome: "Lustra-Móveis", preco: 4.99, validade: "2025-04-01", estoque: 70, vendasMes: 15, vendasTotal: 300 },
                { nome: "Esponja de Aço", preco: 2.49, validade: "2025-03-20", estoque: 160, vendasMes: 55, vendasTotal: 1000 },
                { nome: "Rodo Mágico", preco: 14.99, validade: "2026-02-10", estoque: 50, vendasMes: 10, vendasTotal: 200 },
                { nome: "Saco de Lixo", preco: 8.99, validade: "2025-01-01", estoque: 200, vendasMes: 70, vendasTotal: 1200 },
                { nome: "Escorredor de Louça", preco: 19.99, validade: "2026-11-15", estoque: 60, vendasMes: 20, vendasTotal: 400 },
                { nome: "Porta-Temperos", preco: 12.49, validade: "2026-10-30", estoque: 100, vendasMes: 15, vendasTotal: 300 },
                { nome: "Organizador de Gavetas", preco: 9.99, validade: "2026-09-25", estoque: 80, vendasMes: 30, vendasTotal: 400 },
                { nome: "Cabides de Plástico", preco: 4.49, validade: "2025-08-15", estoque: 150, vendasMes: 40, vendasTotal: 600 },
                { nome: "Varal de Chão", preco: 29.99, validade: "2027-07-10", estoque: 40, vendasMes: 10, vendasTotal: 150 },
                { nome: "Repelente de Insetos", preco: 7.99, validade: "2025-06-05", estoque: 90, vendasMes: 25, vendasTotal: 350 },
                { nome: "Kit de Ferramentas", preco: 49.99, validade: "2027-05-15", estoque: 30, vendasMes: 5, vendasTotal: 100 },
                { nome: "Luva de Borracha", preco: 2.99, validade: "2025-04-25", estoque: 120, vendasMes: 35, vendasTotal: 500 }           
        ]
    },
    // Adicione mais objetos de clientes aqui, se necessário
];

function selectTab(tabname){
    var i, tabcontent, childs;
    tabcontent = document.getElementById("tabs")
    childs = tabcontent.children

    for(i = 0; i < childs.length; i++){

        const id = childs[i].id
        if(id == tabname){
            document.getElementById(id).style.display = "block"
        }
        else{
            document.getElementById(id).style.display = "none"
        }
    }


}

function generateTab(){
    const body = document.getElementById("table");

    let index = 0;

    clients.forEach(node => {
        
        const row = document.createElement("div");
        if(index == clients.length - 1){
            row.setAttribute("id", "table-row-last");
        }else{
            row.setAttribute("id", "table-row");
        }

        const client = document.createElement("div");
        client.textContent = limitarTexto(node.name, 15);
        client.setAttribute("id", "table-cell");
        row.appendChild(client);
        
        const city = document.createElement("div");
        city.textContent = limitarTexto(node.city, 15);
        city.setAttribute("id", "table-cell");
        row.appendChild(city);

        const category = document.createElement("div");
        category.textContent = node.category
        const color = colorCategory(node.category);
        category.setAttribute("id", "table-cell-category");
        category.style = `background-color: ${color.fill} ; color: ${color.text};`

        row.appendChild(category);

        const receita = document.createElement("div");
        let receita_text = 0;
        let preco = 0;
        let trans = 0;
        node.products.forEach(prod => {
            preco += prod.preco;
            trans += prod.vendasMes;
            receita_text += preco * trans
        })
        receita.textContent = convertToBRL(receita_text);
        receita.setAttribute("id", "table-cell")
        receita.style.fontFamily = "Rubik, serif";
        row.appendChild(receita);

        const transacoes = document.createElement("div");
        transacoes.textContent = trans;
        transacoes.setAttribute("id", "table-cell");
        transacoes.style.fontFamily = "Rubik, serif";
        row.appendChild(transacoes);

        const marketshare = document.createElement("div")
        let ms = preco * trans * 0.02; // Market Share TAX
        marketshare.textContent = convertToBRL(ms)
        marketshare.setAttribute("id", "table-cell");
        marketshare.style.fontFamily = "Rubik, serif";
        row.appendChild(marketshare);

        const button = document.createElement("button")
        button.textContent = "Overview";
        button.setAttribute("id", "button-table-cell");
        button.setAttribute("onclick", `showNodeProperties(${index})`);

        row.appendChild(button);

        body.appendChild(row)

        index++;

    })
   
}

//Abrir Janela de propriedades do no
function showNodeProperties(index){
    const node = clients[index]

    const props = document.getElementById("client-properties");
    props.style.display = "block"

    const client = document.getElementById("client-name")
    client.textContent = node.name

    const city = document.getElementById("client-city")
    city.textContent = node.city
}

//Fechar Tela de Propriedades do no
function closeShowWindow(){
    const props = document.getElementById("client-properties")
    props.style.display = "none";

    
}

//Clear childrens
function clearContainer(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

//Place ... in big texts
function limitarTexto(texto, limite) {
    if (texto.length > limite) {
        return texto.substring(0, limite) + '...';
    } else {
        return texto;
    }
}

//Convert float in currency
function convertToBRL(valor) { return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); }

//Change colors
function colorCategory(category){

    switch(category){
        case "Supermercado":
            return {fill: "#ff9393", text: "#ab0000"}
        case "Farmácia":
            return {fill: "#93ff95", text: "#005e02"}
        case "Conveniência":
            return {fill: "#fffd93", text: "#6a3b02"}
        case "Comércio Geral":
            return {fill: "#b8b8ff", text: "#393979"}
        default:
            return {fill: "#b4b4b4", text: "#5f5f5f"}
    }
}

selectTab("Nodes");
generateTab();
