import * as Styled from "./prontuarios.style"

export default function ProntuariosComponent() {
	return (
		<Styled.ProntuariosWrapper>
			<Styled.Table>
				<thead>
					<tr>
						<Styled.Th>Id</Styled.Th>
						<Styled.Th>Nome</Styled.Th>
						<Styled.Th>Data Nascimento</Styled.Th>
					</tr>
				</thead>
				<tbody>
					<Styled.Tr>
						<Styled.Td>
							<span>01</span>
						</Styled.Td>
						<Styled.Td>
							<span>Fulano</span>
						</Styled.Td>
						<Styled.Td>
							<span>01/01/2000</span>
						</Styled.Td>
						<Styled.Td style={{width: '5%', textAlign: 'end', padding: 0}}>
							<Styled.SpanIcon>&#62;</Styled.SpanIcon>
						</Styled.Td>
					</Styled.Tr>
					
				</tbody>
			</Styled.Table>
		</Styled.ProntuariosWrapper>
	)
}
