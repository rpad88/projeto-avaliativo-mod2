import * as Styled from "../../styles/Form.style"

export default function CadExameComponent() {
	return (
		<>
			<Styled.Form>
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "space-around",
            marginBottom: '1rem',
					}}
				>
					<Styled.Legend style={{ textAlign: "initial" }}>
						exame de $paciente.nome
					</Styled.Legend>
					<div style={{ display: "flex", gap: ".5rem" }}>
						<Styled.BtnEditar disabled>Editar</Styled.BtnEditar>
						<Styled.BtnDeletar disabled>Deletar</Styled.BtnDeletar>
						<Styled.BtnSalvar type="submit">Salvar</Styled.BtnSalvar>
					</div>
				</div>

				<div className="flex tres-itens">
					<Styled.InputGroup style={{ flexBasis: "70%" }}>
						<Styled.Label htmlFor="nome">Nome do exame</Styled.Label>
						<Styled.Input name="nome" />
					</Styled.InputGroup>
					<Styled.InputGroup style={{ flexBasis: "10%" }}>
						<Styled.Label htmlFor="data">Data do exame</Styled.Label>
						<Styled.Input name="data" type="date" min='2000-01-01' />
					</Styled.InputGroup>
					<Styled.InputGroup style={{ flexBasis: "10%" }}>
						<Styled.Label htmlFor="hora">Hora do exame</Styled.Label>
						<Styled.Input name="hora" type="time" />
					</Styled.InputGroup>
				</div>

				<div className="flex dois-itens">
					<Styled.InputGroup>
						<Styled.Label htmlFor="tipo">Tipo de exame</Styled.Label>
						<Styled.Input name="tipo" />
					</Styled.InputGroup>
					<Styled.InputGroup>
						<Styled.Label htmlFor="lab">Laboratorio</Styled.Label>
						<Styled.Input name="lab" />
					</Styled.InputGroup>
				</div>
				<Styled.InputGroup>
					<Styled.Label htmlFor="url">URL do documento do exame</Styled.Label>
					<Styled.Input name="url" type="url" placeholder="http://exemplo.com" pattern="https://.*"/>
				</Styled.InputGroup>
				<Styled.InputGroup>
					<Styled.Label htmlFor="resultado">Resultado do exame</Styled.Label>
					<Styled.TextArea name="resultado"/>
				</Styled.InputGroup>
			</Styled.Form>
		</>
	)
}
