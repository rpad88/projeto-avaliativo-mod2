import { Form } from 'react-bootstrap'
import * as Styled from './CadPaciente.style'

export default function CadPacienteComponent() {
	return (
		<Styled.Form>
			<Styled.InputGroup>
				<Styled.Label htmlFor="nome" required>Nome completo</Styled.Label>
				<Styled.Input name="nome" />
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="genero">Gênero</Styled.Label>
				<Styled.Select name="genero" required>
					<option value="" hidden>
						Escolha uma opção
					</option>
					<option value="m">Masculino</option>
					<option value="f">Feminino</option>
				</Styled.Select>
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="nascimento">Data de nascimento</Styled.Label>
				<Styled.Input type="date" name="nascimento" />
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="cpf">CPF</Styled.Label>
				<Styled.Input name="cpf" />
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="nome">Estado Civil</Styled.Label>
				<Styled.Select name="estado-civil">
					<option value="" hidden>
						Escolha uma opção
					</option>
					<option value="solteiro">Solteiro(a)</option>
					<option value="casado">Casado(a)</option>
					<option value="divorciado">Divorciado(a)</option>
					<option value="viuvo">Viuvo(a)</option>
				</Styled.Select>
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="tel">Telefone</Styled.Label>
				<Styled.Input type="number" name="tel" />
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="email">E-mail</Styled.Label>
				<Styled.Input type="email" name="email" />
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="naturalidade">Naturalidade</Styled.Label>
				<Styled.Input name="naturalidade" />
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="contato-emergencia">
					Contato de emergência
				</Styled.Label>
				<Styled.Input type="number" name="contato-emergencica" />
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="alergias">Alergias</Styled.Label>
				<Styled.Input type="text" name="alergias" />
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="cuidados">Cuidados</Styled.Label>
				<Styled.Input type="text" name="cuidados" />
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="convenio">Convênio</Styled.Label>
				<Styled.Input type="text" name="convenio" />
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="n-convenio">Número do convênio</Styled.Label>
				<Styled.Input type="text" name="n-convenio" />
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="validade-convenio">
					Validade do convênio
				</Styled.Label>
				<Styled.Input type="date" name="validade-convenio" />
			</Styled.InputGroup>

			<div className="tres-itens">
				<Styled.InputGroup>
					<Styled.Label htmlFor="cep">CEP</Styled.Label>
					<Styled.Input type="number" name="cep" required />
				</Styled.InputGroup>
				<Styled.InputGroup>
					<Styled.Label htmlFor="cidade">Cidade</Styled.Label>
					<Styled.Input type="text" name="cidade" required />
				</Styled.InputGroup>
				<Styled.InputGroup style={{ flexBasis: '10%' }}>
					<Styled.Label htmlFor="estado">Estado</Styled.Label>
					<Styled.Input type="text" name="estado" required />
				</Styled.InputGroup>
			</div>
			<div className="tres-itens">
				<Styled.InputGroup>
					<Styled.Label htmlFor="rua">Logradouro</Styled.Label>
					<Styled.Input type="text" name="rua" required />
				</Styled.InputGroup>
				<Styled.InputGroup>
					<Styled.Label htmlFor="bairro">Bairro</Styled.Label>
					<Styled.Input type="text" name="bairro" required />
				</Styled.InputGroup>
				<Styled.InputGroup style={{ flexBasis: '10%' }}>
					<Styled.Label htmlFor="numero">Número</Styled.Label>
					<Styled.Input type="number" name="numero" required />
				</Styled.InputGroup>
			</div>
			<div className="dois-itens">
				<Styled.InputGroup>
					<Styled.Label htmlFor="complemento">Complemento</Styled.Label>
					<Styled.Input type="text" name="complemento" required />
				</Styled.InputGroup>
				<Styled.InputGroup>
					<Styled.Label htmlFor="referencia">
						Ponto de referencia
					</Styled.Label>
					<Styled.Input type="text" name="referencia" required />
				</Styled.InputGroup>
			</div>
		</Styled.Form>
	)
}
