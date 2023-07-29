// LOCAL STORAGE
const localStorageKey = "lab365:users"
const GetOnLocalStorage = () => {
	return JSON.parse(localStorage.getItem(localStorageKey)) || []
}
const SaveOnLocalStorage = (user) => {
	const storage = GetOnLocalStorage()
	storage.push(user)
	localStorage.setItem(localStorageKey, JSON.stringify(storage))
}

// ----- END OF LOCAL STORAGE -----

// API VIACEP
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
// ----- END OF API VIACEP -----

// JSON SERVER
const PACIENTES_URL = "http://localhost:3000/pacientes"
const USERS_URL = "http://localhost:3000/users"
const CONSULTAS_URL = "http://localhost:3000/consultas"
const EXAMES_URL = "http://localhost:3000/exames"

// ***** PACIENTES *****

// GET
const BuscaTodosPacientes = async () => {
	try {
		const arrayDePacientes = await fetch(PACIENTES_URL).then((res) => {
			return res.json()
		})
		return arrayDePacientes
	} catch (error) {
		console.error(error.message)
	}
}

// PUT
const CadastraPaciente = async (dadosDoForm) => {
	try {
		const paciente = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(dadosDoForm),
		}

		const ok = await fetch(PACIENTES_URL, paciente)
			.then((data) => {
				if (!data.ok) throw Error(data.status)
				return data.json()
			})
			.then((update) => {
				console.log(`${update.nome} cadastrado`)
				return true
			})
		return ok
	} catch (error) {
		console.error(error.message)
	}
}

// VERIFICA SE O PACIENTE JÁ EXISTE
const PacienteExists = async (cpf) => {
	try {
		const arrayDePacientes = await fetch(PACIENTES_URL).then((res) => {
			return res.json()
		})
		// some = alternativa ao find, retorna true assim que encontrar 1 opção correspondente.
		return arrayDePacientes.some((p) => p.cpf === cpf)
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
// -------------------------------------

// POST | Cadastro de usuário
const CadastraUser = async (dados) => {
	try {
		// pega o array no banco
		const arrayDeUsers = await fetch(USERS_URL).then((res) => res.json())
		// verifica se o e-mail já existe
		const userJaExiste = arrayDeUsers.find((u) => u.email === dados.email)

		if (userJaExiste) return alert("Email já cadastrado.")

		const newUser = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(dados),
		}
		await fetch(USERS_URL, newUser).then((data) => {
			if (!data.ok) throw Error(data.status)
			return console.info("User cadastrado")
		})
	} catch (error) {
		console.error(error.message)
	}
}

const BuscaUser = async (dados) => {}

// ***** CONSULTAS *****
const CadastraConsulta = async (dados) => {
	try {
		const novaConsulta = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(dados),
		}

		const status = await fetch(CONSULTAS_URL, novaConsulta).then((data) => {
			if (!data.ok) throw Error(data.status)
			console.info("Consulta cadastrada")
			return true
		})
		return status
	} catch (error) {
		console.error(error.message)
	}
}

const BuscaTodasConsultas = async (dados) => {
	try {
		const arrayConsultas = await fetch(CONSULTAS_URL).then((res) =>
			res.json()
		)
		return arrayConsultas
	} catch (error) {
		console.error(error.message)
	}
}

// ***** EXAMES *****
const CadastraExame = async (dados) => {
	try {
		const novoExame = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(dados),
		}

		const status = await fetch(EXAMES_URL, novoExame).then((data) => {
			if (!data.ok) throw Error(data.status)
			// console.info("Exame cadastrado")
			return true
		})
		return status
	} catch (error) {
		console.error(error.message)
	}
}

export const CadastroService = {
	GetEndereco,
	CadastraPaciente,
	VerificaConta,
	CadastraUser,
	PacienteExists,
	BuscaTodosPacientes,
	CadastraConsulta,
	BuscaTodasConsultas,
	CadastraExame,
}
