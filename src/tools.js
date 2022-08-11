import axios from 'axios';

export const getCep = async (cep) => {
    const ceps = new Array()

    for (let value of cep) {
        const url = `https://viacep.com.br/ws/${value}/json/`;
        const response = await axios.get(url)
        
        ceps.push(response.data)
    }

    return ceps
}