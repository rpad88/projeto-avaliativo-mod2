import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react"
import ModalComponent from "../Modal/Modal.component"
import SuccessComponent from "../Success/Success.component"
import { AuthContext } from "../../contexts/Auth.context"
import { ModalContext } from "../../contexts/ModalContext"
import * as Styled from "../../styles/Form.style"
import { CadastroService } from "../../services/Cadastro.service"

export default function CadConsultaComponent({ paciente }) {
	// REACT HOOK FORM
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm()

	// CONTEXTS
	const { auth } = useContext(AuthContext)
	const { setShow } = useContext(ModalContext)

	// puxa a data atual do sistema
	const handleDate = () => {
		const year = new Date().getFullYear()
		const month = new Date().toLocaleString("default", { month: "2-digit" })
		const day = new Date().toLocaleString("default", { day: "2-digit" })

		const hoje = `${year}-${month}-${day}`
		setValue("data", hoje)
	}

	// puxa a data atual do sistema
	const handleTime = () => {
		const horario = new Date().toLocaleTimeString().slice(0, 5)
		setValue("horario", horario)
	}

	// aplica data e hora do sistema nos campos
	useEffect(() => {
		handleDate()
		handleTime()
	}, [])

	const submitForm = async (data) => {
		const newObject = { ...data, IdMedico: auth.id, idPaciente: paciente.id }
		const ok = await CadastroService.CadastraConsulta(newObject)
		if (ok) setShow(true)
		reset()
	}

	return (
		<>
			<Styled.Form onSubmit={handleSubmit(submitForm)}>
				<Styled.Legend>
					Consulta de{" "}
					<span style={{ color: "rgb(56, 107, 201)" }}>
						{paciente.nome || "..."}
					</span>
				</Styled.Legend>
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
							{...register("horario", {
								required: "horário obrigatório",
							})}
							style={{ borderColor: errors.horario ? "#dc3545" : "" }}
						/>

						{errors.horario && <small>{errors.horario?.message}</small>}
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
					<Styled.Label htmlFor="medicacao">
						Medicação prescrita
					</Styled.Label>
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
					<Styled.Label htmlFor="dosagem">
						Dosagem e precauções
					</Styled.Label>
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
