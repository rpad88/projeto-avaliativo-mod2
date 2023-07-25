import { Container } from "react-bootstrap"
import { useForm } from "react-hook-form"
import {
	BtnDeletar,
	BtnEditar,
	BtnSalvar,
	Form,
	Input,
	InputGroup,
	Label,
} from "../CadPaciente/CadPaciente.style"
import { Legend } from "../LoginComponent/loginComponent.style"
import { useContext, useEffect, useState } from "react"
import { TextArea } from "./cadConsulta.style"
import ModalComponent from "../Modal/Modal.component"
import SuccessComponent from "../Success/Success.component"
import { AuthContext } from "../../contexts/Auth.context"
import { ModalContext } from "../../contexts/ModalContext"

export default function CadConsultaComponent() {
    // REACT HOOK FORM
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const [defaultDate, setDefaultDate] = useState()
	const [defaultHora, setDefaultHora] = useState()

    // CONTEXTS
    const { auth } = useContext(AuthContext)
	const { setShow } = useContext(ModalContext)

	// puxa a data atual do sistema
	const handleDate = () => {
		const year = new Date().getFullYear()
		const month =
			new Date().getMonth() + 1 >= 10
				? new Date().getMonth() + 1
				: `0${new Date().getMonth() + 1}`
		const day = new Date().getDate()
		const today = `${year}-${month}-${day}` //Padrão: yyyy-MM-dd
		setDefaultDate(today)
	}

	// puxa a data atual do sistema
	const handleTime = () => {
		const h = new Date().getHours()
		const m =
			new Date().getMinutes() < 10
				? `0${new Date().getMinutes()}`
				: new Date().getMinutes()
		const hora = `${h}:${m}`
		setDefaultHora(hora)
	}

	// aplica data e hora do sistema nos campos
	useEffect(() => {
		handleDate()
		handleTime()
	}, [])

	const submitForm = (data) => {
        console.log(auth)
        const newObject = {...data, IdPaciente: auth.user.id}
		console.log(newObject)
        setShow(true)
	}

	return (
		<>
				<Form onSubmit={handleSubmit(submitForm)}>
					<Legend>Cadastro de Consulta</Legend>
					<InputGroup>
						<Label htmlFor="motivo">Motivo da Consulta</Label>
						<Input
							name="motivo"
							placeholder="Informe o motivo da consulta"
							maxLength={60}
							minLength={6}
							{...register("motivo", {
								required:
									"Motivo obrigatório e deve ter entre 6 e 60 caracteres",
								maxLength: 60,
								minLength: 6,
							})}
							style={{ borderColor: errors.motivo ? "#dc3545" : "" }}
						/>
						{errors.motivo && <small>{errors.motivo?.message}</small>}
					</InputGroup>
					<div style={{ display: "flex", gap: ".5rem" }}>
						<InputGroup>
							<Label htmlFor="data">Data</Label>
							<Input
								name="data"
								type="date"
								id="date"
								defaultValue={defaultDate}
								{...register("data", {
									required: "data é obrigatório",
								})}
								style={{ borderColor: errors.data ? "#dc3545" : "" }}
							/>

							{errors.data && <small>{errors.data?.message}</small>}
						</InputGroup>
						<InputGroup>
							<Label htmlFor="horario">Horário</Label>
							<Input
								type="time"
								name="horario"
								defaultValue={defaultHora}
								{...register("horario", {
									required: "horário obrigatório",
								})}
								style={{ borderColor: errors.horario ? "#dc3545" : "" }}
							/>

							{errors.horario && (
								<small>{errors.horario?.message}</small>
							)}
						</InputGroup>
					</div>
					<InputGroup>
						<Label htmlFor="sintomas">Sintomas</Label>
						<TextArea
							name="sintomas"
							placeholder="Descreva os sintomas"
							maxLength={1000}
							minLength={15}
							{...register("sintomas", {
								required:
									"sintomas é obrigatório, deve ter entre 15 e 1000 caracteres",
								maxLength: 1000,
								minLength: 15,
							})}
							style={{ borderColor: errors.sintomas ? "#dc3545" : "" }}
						/>
						{errors.sintomas && <small>{errors.sintomas?.message}</small>}
					</InputGroup>
					<InputGroup>
						<Label htmlFor="medicacao">Medicação prescrita</Label>
						<Input
							name="medicacao"
							placeholder="Informe a medicação prescrita"
							maxLength={200}
							{...register("medicacao", { maxLength: 200 })}
						></Input>
						{errors.medicacao && (
							<small>Medicação deve ter até 200 caracteres</small>
						)}
					</InputGroup>
					<InputGroup>
						<Label htmlFor="dosagem">Dosagem e precauções</Label>
						<TextArea
							name="dosagem"
							placeholder="Descreva a dosagem"
							maxLength={250}
							minLength={15}
							{...register("dosagem", { maxLength: 250, minLength: 15 })}
						></TextArea>
						{errors.dosagem && (
							<small>Dosagem deve ter entre 15 e 250 caracteres</small>
						)}
					</InputGroup>
					<div className="actions">
						<BtnSalvar type="submit">Salvar</BtnSalvar>
						<BtnEditar disabled>Editar</BtnEditar>
						<BtnDeletar disabled>Deletar</BtnDeletar>
					</div>
				</Form>

			<ModalComponent>
				<SuccessComponent />
			</ModalComponent>
		</>
	)
}
