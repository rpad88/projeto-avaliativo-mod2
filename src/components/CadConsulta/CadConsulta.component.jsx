import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react"
import ModalComponent from "../Modal/Modal.component"
import SuccessComponent from "../Success/Success.component"
import { AuthContext } from "../../contexts/Auth.context"
import { ModalContext } from "../../contexts/ModalContext"
import * as Styled from '../../styles/Form.style'

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
				<Styled.Form onSubmit={handleSubmit(submitForm)}>
					<Styled.Legend>Cadastro de Consulta</Styled.Legend>
					<Styled.InputGroup>
						<Styled.Label htmlFor="motivo">Motivo da Consulta</Styled.Label>
						<Styled.Input
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
					</Styled.InputGroup>
					<div style={{ display: "flex", gap: ".5rem" }}>
						<Styled.InputGroup>
							<Styled.Label htmlFor="data">Data</Styled.Label>
							<Styled.Input
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
						</Styled.InputGroup>
						<Styled.InputGroup>
							<Styled.Label htmlFor="horario">Horário</Styled.Label>
							<Styled.Input
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
						</Styled.InputGroup>
					</div>
					<Styled.InputGroup>
						<Styled.Label htmlFor="sintomas">Sintomas</Styled.Label>
						<Styled.TextArea
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
					</Styled.InputGroup>
					<Styled.InputGroup>
						<Styled.Label htmlFor="medicacao">Medicação prescrita</Styled.Label>
						<Styled.Input
							name="medicacao"
							placeholder="Informe a medicação prescrita"
							maxLength={200}
							{...register("medicacao", { maxLength: 200 })}
						></Styled.Input>
						{errors.medicacao && (
							<small>Medicação deve ter até 200 caracteres</small>
						)}
					</Styled.InputGroup>
					<Styled.InputGroup>
						<Styled.Label htmlFor="dosagem">Dosagem e precauções</Styled.Label>
						<Styled.TextArea
							name="dosagem"
							placeholder="Descreva a dosagem"
							maxLength={250}
							minLength={15}
							{...register("dosagem", { maxLength: 250, minLength: 15 })}
						></Styled.TextArea>
						{errors.dosagem && (
							<small>Dosagem deve ter entre 15 e 250 caracteres</small>
						)}
					</Styled.InputGroup>
					<div className="actions">
						<Styled.BtnSalvar type="submit">Salvar</Styled.BtnSalvar>
						<Styled.BtnEditar disabled>Editar</Styled.BtnEditar>
						<Styled.BtnDeletar disabled>Deletar</Styled.BtnDeletar>
					</div>
				</Styled.Form>

			<ModalComponent>
				<SuccessComponent />
			</ModalComponent>
		</>
	)
}
