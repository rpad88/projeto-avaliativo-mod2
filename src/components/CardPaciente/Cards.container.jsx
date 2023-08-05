import { useEffect } from "react"
import CardPacienteComponent from "./CardPaciente.component"
import * as Styled from "./CardPaciente.style"
import { CadastroService } from "../../services/Cadastro.service"
import { useState } from "react"
import LoaderComponent from "../Loader/Loader.component"

export default function CardsContainer() {
	const [arrayPacientes, setArrayPacientes] = useState([])

	useEffect(() => {

		setTimeout(() => {
			async function buscaPacientes() {
				const pacientes = await CadastroService.BuscaTodosPacientes()
				setArrayPacientes(pacientes)
			}
			buscaPacientes()
		}, 1500)
	}, [])

	return (
		<Styled.CardContainer>
			{arrayPacientes.length == 0 && <LoaderComponent />}
			{arrayPacientes.map((p) => (
				<CardPacienteComponent paciente={p} key={p.id}/>
			))}
		</Styled.CardContainer>
	)
}
