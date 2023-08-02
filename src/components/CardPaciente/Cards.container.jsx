import { useEffect } from "react"
import CardPacienteComponent from "./CardPaciente.component"
import * as Styled from "./CardPaciente.style"
import { CadastroService } from "../../services/Cadastro.service"
import { useState } from "react"

export default function CardsContainer() {
	const [arrayPacientes, setArrayPacientes] = useState([])

	useEffect(() => {
		async function buscaPacientes() {
			const pacientes = await CadastroService.BuscaTodosPacientes()
			setArrayPacientes(pacientes)
		}
		buscaPacientes()
	}, [])

	return (
		<Styled.CardContainer>
			{arrayPacientes.map((p) => (
				<CardPacienteComponent paciente={p} key={p.id}/>
			))}
		</Styled.CardContainer>
	)
}
