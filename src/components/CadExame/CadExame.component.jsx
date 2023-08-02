import { useForm } from "react-hook-form"
import * as Styled from "../../styles/Form.style"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../contexts/Auth.context"
import { CadastroService } from "../../services/Cadastro.service"
import { ModalContext } from "../../contexts/ModalContext"
import { PatientContext } from "../../contexts/Patient.context"

export default function CadExameComponent({paciente}) {
	const {
		register,
		handleSubmit,
		reset,
    	setValue,
		formState: { errors },
	} = useForm()

	// contexts
	const { auth } = useContext(AuthContext)
	const { setShow } = useContext(ModalContext)
	const { exam, patient } = useContext(PatientContext)

	// puxa a data atual do sistema
	const handleDate = () => {
		const year = new Date().getFullYear()
		const month = new Date().toLocaleString('default', {month: '2-digit'})
		const day = new Date().toLocaleString('default', {day: '2-digit'})

		const hoje = `${year}-${month}-${day}`
		setValue('data', hoje)
	}

	// puxa a data atual do sistema
	const handleTime = () => {
    const horario = new Date().toLocaleTimeString().slice(0,5)
		setValue('hora', horario)
	}

	// aplica data e hora do sistema nos campos
	useEffect(() => {
		handleDate()
		handleTime()

		if(exam) {
			console.log(exam)
			setValue('nome', exam.nome)
			setValue('data', exam.data)
			setValue('hora', exam.hora)
			setValue('tipo', exam.tipo)
			setValue('lab', exam.lab)
			setValue('resultado', exam.resultado)
			if(exam.url) setValue('url', exam.url)
		}
	}, [])

  const submitForm = async (data) => {
    	const newObj = {...data, idMedico: auth.id, idPaciente: paciente.id || patient.id}
		const ok = await CadastroService.CadastraExame(newObj)
		if(ok) setShow(true)
		reset()
  }

  const handleEdit = async (data) => {
	const newObject = { ...data, id: exam.id, IdMedico: auth.id, idPaciente: patient.id }
	await CadastroService.EditaExame(newObject)
  }

  const handleDelete = async () => {
		const ok = await CadastroService.DeletaExame(exam.id)
		if(ok) setShow(true)
  }

	return (
		<>
			<Styled.Form onSubmit={handleSubmit(submitForm)}>
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "space-around",
						marginBottom: "1rem",
					}}
				>
					<Styled.Legend style={{ textAlign: "initial" }}>
						exame de <span style={{color: 'rgb(56, 107, 201)'}}>{paciente && paciente.nome || patient && patient.nome || '...'}</span>
					</Styled.Legend>
					<div style={{ display: "flex", gap: ".5rem" }}>
						<Styled.BtnSalvar type="submit">Salvar</Styled.BtnSalvar>
						<Styled.BtnEditar disabled={!exam} onClick={handleSubmit(handleEdit)}>Editar</Styled.BtnEditar>
						<Styled.BtnDeletar disabled={!exam} onClick={handleSubmit(handleDelete)}>Deletar</Styled.BtnDeletar>
					</div>
				</div>

				<div className="flex tres-itens">
					<Styled.InputGroup style={{ flexBasis: "70%" }}>
						<Styled.Label htmlFor="nome">Nome do exame</Styled.Label>
						<Styled.Input
							name="nome"
							{...register("nome", {
								required:
									"Nome do exame é obrigatório e deve ter entre 5 e 50 caracteres",
								minLength: 5,
								maxLength: 50,
							})}
						/>
						{errors.nome && <small>{errors.nome.message}</small>}
					</Styled.InputGroup>
					<Styled.InputGroup style={{ flexBasis: "10%" }}>
						<Styled.Label htmlFor="data">Data do exame</Styled.Label>
						<Styled.Input
							name="data"
							type="date"
							min="2000-01-01"
							{...register("data", {
								required: "Informe a data do exame",
							})}
						/>
						{errors.data && <small>{errors.data.message}</small>}
					</Styled.InputGroup>
					<Styled.InputGroup style={{ flexBasis: "10%" }}>
						<Styled.Label htmlFor="hora">Hora do exame</Styled.Label>
						<Styled.Input
							name="hora"
							type="time"
							{...register("hora", {
								required: "Informe a hora do exame",
							})}
						/>
						{errors.hora && <small>{errors.hora.message}</small>}
					</Styled.InputGroup>
				</div>

				<div className="flex dois-itens">
					<Styled.InputGroup>
						<Styled.Label htmlFor="tipo">Tipo de exame</Styled.Label>
						<Styled.Input
							name="tipo"
							minLength={5}
							maxLength={30}
							{...register("tipo", {
								minLength: 5,
								maxLength: 30,
								required: "O tipo deve ter entre 5 e 30 caracteres",
							})}
						/>
						{errors.tipo && <small>{errors.tipo.message}</small>}
					</Styled.InputGroup>
					<Styled.InputGroup>
						<Styled.Label htmlFor="lab">Laboratorio</Styled.Label>
						<Styled.Input
							name="lab"
							minLength={5}
							maxLength={30}
							{...register("lab", {
								minLength: 5,
								maxLength: 30,
								required:
									"Laboratorio deve ter entre 5 e 30 caracteres",
							})}
						/>
						{errors.lab && <small>{errors.lab.message}</small>}
					</Styled.InputGroup>
				</div>
				<Styled.InputGroup>
					<Styled.Label htmlFor="url">
						URL do documento do exame
					</Styled.Label>
					<Styled.Input
						name="url"
						type="url"
						{...register('url')}
						placeholder="http://exemplo.com"
						pattern="https://.*"
					/>
				</Styled.InputGroup>
				<Styled.InputGroup>
					<Styled.Label htmlFor="resultado">
						Resultado do exame
					</Styled.Label>
					<Styled.TextArea
						name="resultado"
						minLength={15}
						maxLength={1000}
						required
						{...register("resultado", {
							minLength: 15,
							maxLength: 1000,
							required: "Resultado deve ter entre 15 e 1000 caracteres",
						})}
					/>
					{errors.resultado && <small>{errors.resultado.message}</small>}
				</Styled.InputGroup>
			</Styled.Form>
		</>
	)
}
