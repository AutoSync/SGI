//Convert float in currency
export const ConvertToBRL = (valor) => { 
    const formattedNumber = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(valor);
      return formattedNumber
    }