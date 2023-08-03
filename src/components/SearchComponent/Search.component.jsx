import { IoSearchOutline } from "react-icons/io5"
import * as Styled from "./search.style"
import { useContext, useState } from "react"
import { PatientContext } from "../../contexts/Patient.context"
import { useNavigate } from "react-router-dom"

export default function SearchComponent({ title, placeholder, setPaciente }) {
	const [input, setInput] = useState("")
	const [results, setResults] = useState([])

	const { setPatient } = useContext(PatientContext)
	const navigate = useNavigate()

	const handleSearch = (value) => {
		fetch("http://localhost:3000/pacientes")
			.then((res) => res.json())
			.then((json) => {
				const res = json.filter((paciente) => {
					return (
						(value && paciente.nome.toLowerCase().includes(value)) ||
						paciente.id == value
					)
				})
				setResults(res)
			})
	}

	const handleChange = (value) => {
		handleSearch(value)
		setInput(value) // Input é importante para mostrar a busca dinâmica
	}

	const handlePaciente = (paciente) => {
		setPatient(paciente)
		setInput("")
		const paginaAtual = window.location.href
		if (paginaAtual.includes("/home")) navigate("/cadPaciente")
		if (paginaAtual.includes("/prontuarios")) navigate("/detalhes")
	}

	const formataData = (data) => {
		return new Date(data).toLocaleDateString('pt-BR', {timeZone: 'UTC'})
	}

	return (
		<>
			<Styled.SearchContainer>
				<Styled.SearchTitle>{title}</Styled.SearchTitle>
				<Styled.Search>
					<Styled.SearchWrapper>
						<i>
							<IoSearchOutline />
						</i>
						<Styled.SearchInput
							placeholder={placeholder}
							type="search"
							value={input}
							onChange={(e) => handleChange(e.target.value)}
						/>
					</Styled.SearchWrapper>
					<Styled.SearchBtn onClick={() => handleSearch(input)}>
						Buscar
					</Styled.SearchBtn>
				</Styled.Search>
				{input && (
					<Styled.Table>
						<thead style={{color: '#525252'}}>
							<tr>
								<th>Id</th>
								<th>Nome</th>
								<th>Data Nascimento</th>
							</tr>
						</thead>
						<tbody>
							{results.map((p) => {
								return (
									<tr key={p.id} onClick={() => handlePaciente(p)}>
										<td>{p.id}</td>
										<td>{p.nome}</td>
										<td>{formataData(p.nascimento)}</td>
									</tr>
								)
							})}
						</tbody>
					</Styled.Table>
				)}
			</Styled.SearchContainer>
		</>
	)
}
