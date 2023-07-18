const GetEndereco = async (cep) => {
    const url = `http://viacep.com.br/ws/${cep}/json/`
    try {
        const data = await fetch(url)
        .then(res => res.json())
        // console.table(data)
        return data
    } catch (error) {
        console.error( error.message)
    }
}

// JSON SERVER
const JSON_URL = 'http://localhost:3000/pacientes'
// PUT
const CadastraPaciente = async (dadosDoForm) => {
    try {
        const paciente = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosDoForm),
            };

            await fetch(JSON_URL, paciente)
                .then(data => {
                    if(!data.ok) throw Error(data.status)
                    return data.json()
                }).then(update => {console.log(update)})
    } catch (error) {
        error.message
    }
}

export const CadastroService = {
    GetEndereco,
    CadastraPaciente,
}