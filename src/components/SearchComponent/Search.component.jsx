import { IoSearchOutline } from "react-icons/io5"
import * as Styled from "./search.style"
import { useEffect, useState } from "react"
import { CadastroService } from "../../services/Cadastro.service"

export default function SearchComponent({ title, placeholder }) {
	const [arrayPacientes, setArrayPacientes] = useState("")
	const [input, setInput] = useState("")
	const [results, setResults] = useState([])

	useEffect(() => {
		async function pegaPacientes() {
			const array = await CadastroService.BuscaTodosPacientes()
			setArrayPacientes(array)
		}
		pegaPacientes()
	})

	const handleSearch = (value) => {
		fetch("http://localhost:3000/pacientes")
			.then((res) => res.json())
			.then((json) => {
				const res = json.filter((paciente) => {
					return (
						value &&
						paciente &&
						paciente.nome &&
						paciente.nome.toLowerCase().includes(value)
					)
				})
				setResults(res)
				console.log(res)
			})
	}

	const handleChange = (value) => {
		handleSearch(value)
		setInput(value)
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
							onChange={(e) => handleChange(e.target.value)}
						/>
					</Styled.SearchWrapper>
					<Styled.SearchBtn onClick={handleSearch}>
						Buscar
					</Styled.SearchBtn>
				</Styled.Search>
				{input && (
					<Styled.Ul>
						{
							results.map((paciente) => {
								return <li onClick={() =>console.log(paciente.id)} key={paciente.id}>{paciente.nome}</li>
							})
						}
					</Styled.Ul>
				)}
			</Styled.SearchContainer>
		</>
	)
}
