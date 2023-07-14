import { Form } from 'react-bootstrap'
import * as Styled from './CadPaciente.style'

export default function CadPacienteComponent() {
	return (
		<Styled.Form>
			<Styled.InputGroup>
				<Styled.Label htmlFor="nome">Nome</Styled.Label>
				<Styled.Input name="nome" />
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="genero">Gênero</Styled.Label>
				<Styled.Select name="genero">
                    <option id='disabled' value="" disabled selected hidden>Escolha</option>
					<option value="m">Masculino</option>
					<option value="f">Feminino</option>
				</Styled.Select>
			</Styled.InputGroup>
            <Styled.InputGroup>
				<Styled.Label htmlFor="nascimento">Data de nascimento</Styled.Label>
				<Styled.Input type='date' name="nascimento" />
			</Styled.InputGroup>
            <Styled.InputGroup>
				<Styled.Label htmlFor="cpf">CPF</Styled.Label>
				<Styled.Input name="cpf" />
			</Styled.InputGroup>
            <Styled.InputGroup>
				<Styled.Label htmlFor="nome">Estado Civil</Styled.Label>
				<Styled.Select name="estado-civil" >
                <option id='disabled' value="" disabled selected hidden>Escolha</option>
                <option value="solteiro">Solteiro(a)</option>
                <option value="casado">Casado(a)</option>
                <option value="divorciado">Divorciado(a)</option>
                <option value="viuvo">Viuvo(a)</option>
                </Styled.Select>
			</Styled.InputGroup>
            <Styled.InputGroup>
				<Styled.Label htmlFor="tel">Telefone</Styled.Label>
				<Styled.Input type='number' name="tel" />
			</Styled.InputGroup>
            <Styled.InputGroup>
				<Styled.Label htmlFor="email">E-mail</Styled.Label>
				<Styled.Input type='email' name="email" />
			</Styled.InputGroup>
            <Styled.InputGroup>
				<Styled.Label htmlFor="naturalidade">Naturalidade</Styled.Label>
				<Styled.Input name="naturalidade" />
			</Styled.InputGroup>
            <Styled.InputGroup>
				<Styled.Label htmlFor="contato-emergencia">Contato de Emergência</Styled.Label>
				<Styled.Input type='number' name="contato-emergencica" />
			</Styled.InputGroup>
            <Styled.InputGroup>
				<Styled.Label htmlFor="alergias">Alergias</Styled.Label>
				<Styled.Input type='text' name="alergias" />
			</Styled.InputGroup>

		</Styled.Form>
	)
}
