const GetEndereco = async (cep) => {
    const url = `http://viacep.com.br/ws/${cep}/json/`
    try {
        const data = await fetch(url)
        .then(res => res.json())
        console.log(data)
        return data
    } catch (error) {
        console.error( error.message)
    }
}

export const CadastroService = {
    GetEndereco,
}