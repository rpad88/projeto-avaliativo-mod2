import { useEffect } from "react"
import * as Styled from "../ListaProntuarios.style"
import { Div, Title } from "./listaConsultas.style"
import { CadastroService } from "../../../services/Cadastro.service"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { PatientContext } from "../../../contexts/Patient.context"

export default function ListaConsultasComponent({ title, tipo, id }) {
	const [arrayDados, setArrayDados] = useState([])
    const { setConsult, setExam } = useContext(PatientContext)
    const navigate = useNavigate()

	const pegaConsultas = async (idPaciente) => {
		try {
			let dados = await CadastroService.BuscaConsultasPorPaciente(idPaciente)
			setArrayDados(dados)
		} catch (error) {
			console.log(error.message)
		}
	}

	const pegaExames = async (idPaciente) => {
		try {
			let dados = await CadastroService.BuscaExamesPorPaciente(idPaciente)
			setArrayDados(dados)
		} catch (error) {
			console.log(error.message)
		}
	}

	const formataData = (data) => {
		return new Date(data).toLocaleDateString("pt-br", { timeZone: "UTC" })
	}

    const handleEdit = (data) => {
        if(tipo === 'consulta') {
            setConsult(data)
            navigate('/cadConsulta')
        }

        if(tipo === 'exame') {
            setExam(data)
            navigate('/cadExame')
        }
    }

	useEffect(() => {
		if (tipo === "consulta") pegaConsultas(id)
		if (tipo === "exame") pegaExames(id)
	}, [])

	return (
		<Div>
			<div style={{display: 'flex'}}>
				<span>{arrayDados.length || 0}</span>
				<Title>{title}</Title>
			</div>
			{arrayDados.length > 0 && (
				<Styled.Table>
					<thead>
						<tr>
							<Styled.Th>{tipo === 'consulta' ? 'Motivo' : 'Nome' }</Styled.Th>
							<Styled.Th>Data</Styled.Th>
							<Styled.Th>Horario</Styled.Th>
						</tr>
					</thead>
					<tbody>
						{arrayDados.map((data) => (
							<Styled.Tr
								key={data.id}
								onClick={() => handleEdit(data)}
							>
								<Styled.Td>
									<span>{tipo === 'consulta' ? data.motivo : data.nome}</span>
								</Styled.Td>
								<Styled.Td>
									<span>{formataData(data.data)}</span>
								</Styled.Td>
								<Styled.Td>
									<span>{tipo === 'consulta' ?  data.horario : data.hora}</span>
								</Styled.Td>
								<Styled.Td style={{ width: "5%", textAlign: "end" }}>
									<Styled.SpanIcon>&#62;</Styled.SpanIcon>
								</Styled.Td>
							</Styled.Tr>
						))}
					</tbody>
				</Styled.Table>
			)}
		</Div>
	)
}
