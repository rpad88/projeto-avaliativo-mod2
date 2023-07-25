const GetEndereco = async (cep) => {
	const url = `http://viacep.com.br/ws/${cep}/json/`
	try {
		const data = await fetch(url).then((res) => res.json())
		// console.table(data)
		return data
	} catch (error) {
		console.error(error.message)
	}
}

// JSON SERVER
const PACIENTES_URL = 'http://localhost:3000/pacientes'
const USERS_URL = 'http://localhost:3000/users'

// PUT
const CadastraPaciente = async (dadosDoForm) => {
	try {
		const paciente = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dadosDoForm),
		}

		await fetch(PACIENTES_URL, paciente)
			.then((data) => {
				if (!data.ok) throw Error(data.status)
				return data.json()
			})
			.then((update) => {
				// console.log(update)
                return true
			})
	} catch (error) {
		console.error(error.message)
	}
}

// GET | User LOGIN
const VerificaConta = async () => {
	try {
		const users = await fetch(USERS_URL).then((res) => {
			return res.json()
		})
        return users
	} catch (error) {
		console.error(error.message)
	}
}

// POST | Cadastro de usuário
const CadastraUser = async (dados) => {
	try {
		// pega o array no banco
		const arrayDeUsers = await fetch(USERS_URL).then(res => res.json())
		// verifica se o e-mail já existe
		const userJaExiste = arrayDeUsers.find((u) => u.email === dados.email )

		if(userJaExiste) return alert("Email já cadastrado.")

		const newUser = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dados),
		}
		await fetch(USERS_URL, newUser).then((data) => {
			if (!data.ok) throw Error(data.status)
			return console.info('User cadastrado')
		})
	} catch (error) {
		console.error(error.message)
	}
}

const BuscaUser = async (dados) => {

}

export const CadastroService = {
	GetEndereco,
	CadastraPaciente,
	VerificaConta,
	CadastraUser,
}
