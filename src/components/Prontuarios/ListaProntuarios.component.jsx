import { useContext, useEffect, useState } from "react"
import * as Styled from "./ListaProntuarios.style"
import { CadastroService } from "../../services/Cadastro.service"
import { PatientContext } from "../../contexts/Patient.context"

export default function ListaProntuariosComponent() {
	const { patient, setPatient } = useContext(PatientContext)
	const [arrayPacientes, setArrayPacientes] = useState([])

	useEffect(() => {
		async function buscaPacientes() {
			const resp = await CadastroService.BuscaTodosPacientes()

			if (!resp) alert("erro ao carregar os pacientes")
            setArrayPacientes(resp)
		}
        buscaPacientes()
	},[])

	return (
		<Styled.ProntuariosWrapper>
			<Styled.Table>
				<thead>
					<tr>
						<Styled.Th>Id</Styled.Th>
						<Styled.Th>Nome</Styled.Th>
						<Styled.Th>Data Nascimento</Styled.Th>
						<Styled.Th>Convênio</Styled.Th>
					</tr>
				</thead>
				<tbody>
					{arrayPacientes.map((p) => (
						<Styled.Tr key={p.id} onClick={() => console.log(p.id)}>
							<Styled.Td>
								<span>{p.id}</span>
							</Styled.Td>
							<Styled.Td>
								<span>{p.nome}</span>
							</Styled.Td>
							<Styled.Td>
								<span>{p.nascimento}</span>
							</Styled.Td>
							<Styled.Td>
								<span>{p.convenio || 'Particular'}</span>
							</Styled.Td>
							<Styled.Td style={{ width: "5%", textAlign: "end" }}>
								<Styled.SpanIcon>&#62;</Styled.SpanIcon>
							</Styled.Td>
						</Styled.Tr>
					))}
				</tbody>
			</Styled.Table>
		</Styled.ProntuariosWrapper>
	)
}
