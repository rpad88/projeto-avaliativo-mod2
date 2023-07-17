import { Container } from 'react-bootstrap'
import * as Styled from './CadPaciente.style'
import { useRef } from 'react'
import { CadastroService } from '../../services/Cadastro.service'
import { useForm } from 'react-hook-form'

export default function CadPacienteComponent() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()
	const cidadeRef = useRef()
	const estadoRef = useRef()
	const ruaRef = useRef()
	const bairroRef = useRef()
	const cepRef = useRef()

	const submitForm = (data) => {
		console.log('submitForm')
		console.table(data)
	}

	const cepInput = async () => {
		const cep = cepRef.current.value
		const data = await CadastroService.GetEndereco(cep)

		ruaRef.current.value = data.logradouro
		bairroRef.current.value = data.bairro
		cidadeRef.current.value = data.localidade
		estadoRef.current.value = data.uf
	}

	return (
		<Container>
			<h4 style={{ textAlign: 'center', marginTop: '1.5rem' }}>Cadastro</h4>
			<Styled.Form onSubmit={handleSubmit(submitForm)}>
				<Styled.InputGroup>
					<Styled.Label htmlFor="nome">Nome completo</Styled.Label>
					<Styled.Input
						name="nome"
						{...register('nome', {
							required: true
						})}
					/>
				</Styled.InputGroup>
				<Styled.InputGroup>
					<Styled.Label htmlFor="email">E-mail</Styled.Label>
					<Styled.Input
						type="email"
						name="email"
						{...register('email', {
							required: true,
							pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
						})}
					/>
				</Styled.InputGroup>

				<div className="flex quatro-itens">
					<Styled.InputGroup>
						<Styled.Label htmlFor="genero">Gênero</Styled.Label>
						<Styled.Select
							name="genero"
							{...register('genero', {
								required: true,
							})}
						>
							<option value="" hidden>
								Escolha uma opção
							</option>
							<option value="m">Masculino</option>
							<option value="f">Feminino</option>
						</Styled.Select>
					</Styled.InputGroup>
					<Styled.InputGroup>
						<Styled.Label htmlFor="nascimento">
							Data de nascimento
						</Styled.Label>
						<Styled.Input
							type="date"
							name="nascimento"
							// pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
							{...register('nascimento', {
								required: true,
								pattern: /[0-9]{4}-[0-9]{2}-[0-9]{2}/ //Colocado o patter para teste
							})}
						/>
					</Styled.InputGroup>
					<Styled.InputGroup>
						<Styled.Label htmlFor="cpf">CPF</Styled.Label>
						<Styled.Input
							type="tel"
							name="cpf"
							maxLength={11}
							// pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
							{...register('cpf', { required: true })}
						/>
					</Styled.InputGroup>
					<Styled.InputGroup>
						<Styled.Label htmlFor="nome">Estado Civil</Styled.Label>
						<Styled.Select
							name="estado-civil"
							{...register('estado-civil')}
						>
							<option value="" hidden>
								Escolha uma opção
							</option>
							<option value="solteiro">Solteiro(a)</option>
							<option value="casado">Casado(a)</option>
							<option value="divorciado">Divorciado(a)</option>
							<option value="viuvo">Viuvo(a)</option>
						</Styled.Select>
					</Styled.InputGroup>
				</div>
				<div className="flex tres-itens">
					<Styled.InputGroup>
						<Styled.Label htmlFor="tel">Telefone</Styled.Label>
						<Styled.Input type="tel" name="tel" {...register('tel')} />
					</Styled.InputGroup>

					<Styled.InputGroup>
						<Styled.Label htmlFor="naturalidade">
							Naturalidade
						</Styled.Label>
						<Styled.Input
							name="naturalidade"
							{...register('naturalidade')}
						/>
					</Styled.InputGroup>
					<Styled.InputGroup>
						<Styled.Label htmlFor="contato-emergencia">
							Contato de emergência
						</Styled.Label>
						<Styled.Input
							type="tel"
							name="contato-emergencia"
							{...register('contato-emergencia')}
						/>
					</Styled.InputGroup>
				</div>
				<div className="flex dois-itens">
					<Styled.InputGroup>
						<Styled.Label htmlFor="alergias">Alergias</Styled.Label>
						<Styled.Input
							type="text"
							name="alergias"
							{...register('alergias')}
						/>
					</Styled.InputGroup>
					<Styled.InputGroup>
						<Styled.Label htmlFor="cuidados">Cuidados</Styled.Label>
						<Styled.Input
							type="text"
							name="cuidados"
							{...register('cuidados')}
						/>
					</Styled.InputGroup>
				</div>
				<div className="flex tres-itens">
					<Styled.InputGroup>
						<Styled.Label htmlFor="convenio">Convênio</Styled.Label>
						<Styled.Input
							type="text"
							name="convenio"
							{...register('convenio')}
						/>
					</Styled.InputGroup>
					<Styled.InputGroup>
						<Styled.Label htmlFor="n-convenio">
							Número do convênio
						</Styled.Label>
						<Styled.Input
							type="text"
							name="n-convenio"
							{...register('n-convenio')}
						/>
					</Styled.InputGroup>
					<Styled.InputGroup>
						<Styled.Label htmlFor="validade-convenio">
							Validade do convênio
						</Styled.Label>
						<Styled.Input
							type="date"
							name="validade-convenio"
							{...register('validade-convenio')}
						/>
					</Styled.InputGroup>
				</div>

				<Styled.Fieldset>
					<legend>Endereço</legend>
					<div className="flex tres-itens">
						<Styled.InputGroup>
							<Styled.Label htmlFor="cep">CEP</Styled.Label>
							<Styled.Input
								type="tel"
								id='cep'
								name="cep"
								ref={cepRef}
								onBlur={cepInput}
								maxLength={8}
								{...register('cep')}
							/>
						</Styled.InputGroup>
						<Styled.InputGroup style={{ flexBasis: '10%' }}>
							<Styled.Label htmlFor="estado">Estado</Styled.Label>
							<Styled.Input
								type="text"
								name="estado"
								id='estado'
								ref={estadoRef}
								disabled
								{...register('estado')}
							/>
						</Styled.InputGroup>
						<Styled.InputGroup>
							<Styled.Label htmlFor="cidade">Cidade</Styled.Label>
							<Styled.Input
								type="text"
								name="cidade"
								id='cidade'
								ref={cidadeRef}
								disabled
								{...register('cidade')}
							/>
						</Styled.InputGroup>
					</div>
					<div className="flex tres-itens">
						<Styled.InputGroup>
							<Styled.Label htmlFor="rua">Logradouro</Styled.Label>
							<Styled.Input
								type="text"
								name="rua"
								id='rua'
								ref={ruaRef}
								disabled
								{...register('rua')}
							/>
						</Styled.InputGroup>
						<Styled.InputGroup>
							<Styled.Label htmlFor="bairro">Bairro</Styled.Label>
							<Styled.Input
								type="text"
								name="bairro"
								id='bairro'
								ref={bairroRef}
								disabled
								{...register('bairro')}
							/>
						</Styled.InputGroup>
						<Styled.InputGroup style={{ flexBasis: '10%' }}>
							<Styled.Label htmlFor="numero">Número</Styled.Label>
							<Styled.Input
								type="number"
								name="numero"
								{...register('numero')}
							/>
						</Styled.InputGroup>
					</div>
					<div className="flex dois-itens">
						<Styled.InputGroup>
							<Styled.Label htmlFor="complemento">
								Complemento
							</Styled.Label>
							<Styled.Input
								type="text"
								name="complemento"
								{...register('complemento')}
							/>
						</Styled.InputGroup>
						<Styled.InputGroup>
							<Styled.Label htmlFor="referencia">
								Ponto de referencia
							</Styled.Label>
							<Styled.Input
								type="text"
								name="referencia"
								{...register('referencia')}
							/>
						</Styled.InputGroup>
					</div>
				</Styled.Fieldset>
				<div className="actions">
					<Styled.BtnSalvar type="submit">Salvar</Styled.BtnSalvar>
					<Styled.BtnEditar disabled>Editar</Styled.BtnEditar>
					<Styled.BtnDeletar disabled>Deletar</Styled.BtnDeletar>
				</div>
			</Styled.Form>
		</Container>
	)
}
