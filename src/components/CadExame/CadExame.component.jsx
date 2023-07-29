import { useForm } from "react-hook-form"
import * as Styled from "../../styles/Form.style"
import { useEffect } from "react"

export default function CadExameComponent() {
	const {
		register,
		handleSubmit,
		reset,
    	setValue,
		formState: { errors },
	} = useForm()

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
	}, [])

  const submitForm = (data) => {
    console.log(data)
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
						exame de $paciente.nome
					</Styled.Legend>
					<div style={{ display: "flex", gap: ".5rem" }}>
						<Styled.BtnEditar disabled>Editar</Styled.BtnEditar>
						<Styled.BtnDeletar disabled>Deletar</Styled.BtnDeletar>
						<Styled.BtnSalvar type="submit">Salvar</Styled.BtnSalvar>
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
