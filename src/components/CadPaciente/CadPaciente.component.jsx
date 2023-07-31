import { Container } from "react-bootstrap"
import * as Styled from "../../styles/Form.style"
import { useContext, useEffect, useRef } from "react"
import { CadastroService } from "../../services/Cadastro.service"
import { useForm } from "react-hook-form"
import ModalComponent from "../Modal/Modal.component"
import { ModalContext } from "../../contexts/ModalContext"
import SuccessComponent from "../Success/Success.component"
import { PatientContext } from "../../contexts/Patient.context"
import { useNavigate } from "react-router-dom"

export default function CadPacienteComponent() {
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm()

	const cepRef = useRef()
	const navigate = useNavigate()
	
	const { setShow } = useContext(ModalContext) // função para chamar a animação
	const { patient } = useContext(PatientContext) // recebe o paciente clicado

	useEffect(() => {
		if (!patient) return
		async function preencheCampos() {
			cepRef.current.value = patient.cep
			for (let field in patient) {
				if (field !== "estado" || "cidade" || "rua" || "bairro" || "cep") {
					setValue(field, patient[field])
				}
			}
		}
		preencheCampos()
	}, [])

	const submitForm = async (data) => {
		// console.table(data)
		if (errors.rua || errors.cidade)
			return alert("você deve inserir um CEP válido")

		//verifica se o CPF já existe no banco
		const exists = await CadastroService.PacienteExists(data.cpf)
		if (exists) return alert("Paciente já cadastrado")

		const ok = await CadastroService.CadastraPaciente(data)

		//Abre a animação confirmando o cadastro.
		if (ok) setShow(true)
		reset() //Limpa os inputs
	}

	const cepInput = async () => {
		const cep = cepRef.current.value
		try {
			const data = await CadastroService.GetEndereco(cep)

			//IMPORTANTE setar os valores puxados pela API no input antes de salvar.
			setValue("rua", data.logradouro)
			setValue("bairro", data.bairro)
			setValue("cidade", data.localidade)
			setValue("estado", data.uf)
			setValue("cep", cep)
		} catch (error) {
			console.error(error)
		}
	}

	const handleEdit = async (data) => {
		const ok = await CadastroService.EditaPaciente(data)
		if (ok) setShow(true)
		console.log(`Paciente ${data.nome} editado com sucesso`)
		reset()
	}

	const handleDelete = async (patient) => {
		const pacienteTemConsulta =
			await CadastroService.BuscaConsultasPorPaciente(patient.id)
		const pacienteTemExame = await CadastroService.BuscaExamesPorPaciente(
			patient.id
		)

		if (pacienteTemConsulta || pacienteTemExame)
			return alert(
				"Só é possível deletar paciente que não tem consulta nem exame cadastrado."
			)
		const resp = await CadastroService.DeletaPaciente(patient.id)
		return console.log(resp)
		navigate('/home')
	}

	return (
		<>
			<Container>
				<Styled.Form onSubmit={handleSubmit(submitForm)}>
					<Styled.Legend>Cadastro de paciente</Styled.Legend>
					<Styled.InputGroup>
						<Styled.Label htmlFor="nome">Nome completo</Styled.Label>
						<Styled.Input
							name="nome"
							{...register("nome", {
								required: true,
								minLength: 5,
								maxLength: 50,
							})}
							className={errors.nome && "danger"}
						/>
						{errors.nome && <small>Favor inserir o nome completo</small>}
					</Styled.InputGroup>
					<Styled.InputGroup>
						<Styled.Label htmlFor="email">E-mail</Styled.Label>
						<Styled.Input
							type="email"
							name="email"
							{...register("email", {
								pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
							})}
							className={errors.email && "danger"}
						/>
						{errors.email && (
							<small>Favor inserir um e-mail válido</small>
						)}
					</Styled.InputGroup>

					<div className="flex quatro-itens">
						<Styled.InputGroup>
							<Styled.Label htmlFor="genero">Gênero</Styled.Label>
							<Styled.Select
								name="genero"
								{...register("genero", {
									required: true,
								})}
								className={errors.genero && "danger"}
							>
								<option value="" hidden>
									Escolha uma opção
								</option>
								<option value="m">Masculino</option>
								<option value="f">Feminino</option>
							</Styled.Select>
							{errors.genero && <small>Informe seu gênero</small>}
						</Styled.InputGroup>
						<Styled.InputGroup>
							<Styled.Label htmlFor="nascimento">
								Data de nascimento
							</Styled.Label>
							<Styled.Input
								type="date"
								name="nascimento"
								maxLength={8}
								// pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
								{...register("nascimento", {
									required: true,
									pattern: /[0-9]{4}-[0-9]{2}-[0-9]{2}/, //Colocado o patter para teste
								})}
								className={errors.nascimento && "danger"}
							/>
							{errors.nascimento && (
								<small>Informe sua data de nascimento</small>
							)}
						</Styled.InputGroup>
						<Styled.InputGroup>
							<Styled.Label htmlFor="cpf">CPF</Styled.Label>
							<Styled.Input
								type="tel"
								name="cpf"
								minLength={11}
								maxLength={11}
								// pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
								{...register("cpf", { required: true })}
								className={errors.cpf && "danger"}
							/>
							{errors.cpf && <small>Informe seu CPF</small>}
						</Styled.InputGroup>
						<Styled.InputGroup>
							<Styled.Label htmlFor="nome">Estado Civil</Styled.Label>
							<Styled.Select
								name="estadoCivil"
								{...register("estadoCivil", { required: true })}
								className={errors.cpf && "danger"}
							>
								<option value="" hidden>
									Escolha uma opção
								</option>
								<option value="solteiro">Solteiro(a)</option>
								<option value="casado">Casado(a)</option>
								<option value="divorciado">Divorciado(a)</option>
								<option value="viuvo">Viuvo(a)</option>
							</Styled.Select>
							{errors.estadoCivil && (
								<small>Informe seu estado civil</small>
							)}
						</Styled.InputGroup>
					</div>
					<div className="flex tres-itens">
						<Styled.InputGroup>
							<Styled.Label htmlFor="tel">Telefone</Styled.Label>
							<Styled.Input
								type="tel"
								name="tel"
								{...register("tel", { required: true })}
								placeholder="(xx) 9 9999-9999"
								maxLength={11}
								minLength={11}
								className={errors.tel && "danger"}
							/>
							{errors.tel && <small>Informe seu telefone</small>}
						</Styled.InputGroup>

						<Styled.InputGroup>
							<Styled.Label htmlFor="naturalidade">
								Naturalidade
							</Styled.Label>
							<Styled.Input
								name="naturalidade"
								{...register("naturalidade", {
									required: true,
									minLength: 5,
									maxLength: 50,
								})}
								className={errors.naturalidade && "danger"}
							/>
							{errors.naturalidade && (
								<small>Informe sua naturalidade</small>
							)}
						</Styled.InputGroup>
						<Styled.InputGroup>
							<Styled.Label htmlFor="contatoEmergencia">
								Contato de emergência
							</Styled.Label>
							<Styled.Input
								type="tel"
								name="contatoEmergencia"
								maxLength={11}
								{...register("contatoEmergencia", {
									required: true,
									minLength: 11,
									maxLength: 11,
								})}
								className={errors.contatoEmergencia && "danger"}
							/>
							{errors.contatoEmergencia && (
								<small>Informe um contato de emergência</small>
							)}
						</Styled.InputGroup>
					</div>
					<div className="flex dois-itens">
						<Styled.InputGroup>
							<Styled.Label htmlFor="alergias">Alergias</Styled.Label>
							<Styled.Input
								type="text"
								name="alergias"
								{...register("alergias")}
							/>
						</Styled.InputGroup>
						<Styled.InputGroup>
							<Styled.Label htmlFor="cuidados">Cuidados</Styled.Label>
							<Styled.Input
								type="text"
								name="cuidados"
								{...register("cuidados")}
							/>
						</Styled.InputGroup>
					</div>
					<div className="flex tres-itens">
						<Styled.InputGroup>
							<Styled.Label htmlFor="convenio">Convênio</Styled.Label>
							<Styled.Input
								type="text"
								name="convenio"
								{...register("convenio")}
							/>
						</Styled.InputGroup>
						<Styled.InputGroup>
							<Styled.Label htmlFor="numConvenio">
								Número do convênio
							</Styled.Label>
							<Styled.Input
								type="text"
								name="numConvenio"
								{...register("numConvenio")}
							/>
						</Styled.InputGroup>
						<Styled.InputGroup>
							<Styled.Label htmlFor="valConvenio">
								Validade do convênio
							</Styled.Label>
							<Styled.Input
								type="date"
								name="valConvenio"
								{...register("valConvenio")}
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
									name="cep"
									{...register("cep")}
									onBlur={cepInput}
									maxLength={8}
									ref={cepRef}
								/>
							</Styled.InputGroup>
							<Styled.InputGroup style={{ flexBasis: "10%" }}>
								<Styled.Label htmlFor="estado">Estado</Styled.Label>
								<Styled.Input
									type="text"
									name="estado"
									readOnly
									{...register("estado")}
									className={errors.estado && "danger"}
								/>
							</Styled.InputGroup>
							<Styled.InputGroup>
								<Styled.Label htmlFor="cidade">Cidade</Styled.Label>
								<Styled.Input
									type="text"
									name="cidade"
									readOnly
									{...register("cidade")}
									className={errors.cidade && "danger"}
								/>
							</Styled.InputGroup>
						</div>
						<div className="flex tres-itens">
							<Styled.InputGroup>
								<Styled.Label htmlFor="rua">Logradouro</Styled.Label>
								<Styled.Input
									type="text"
									name="rua"
									readOnly
									{...register("rua")}
								/>
							</Styled.InputGroup>
							<Styled.InputGroup>
								<Styled.Label htmlFor="bairro">Bairro</Styled.Label>
								<Styled.Input
									type="text"
									name="bairro"
									readOnly
									{...register("bairro")}
								/>
							</Styled.InputGroup>
							<Styled.InputGroup style={{ flexBasis: "10%" }}>
								<Styled.Label htmlFor="numero">Número</Styled.Label>
								<Styled.Input
									type="number"
									name="numero"
									{...register("numero")}
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
									{...register("complemento")}
								/>
							</Styled.InputGroup>
							<Styled.InputGroup>
								<Styled.Label htmlFor="referencia">
									Ponto de referencia
								</Styled.Label>
								<Styled.Input
									type="text"
									name="referencia"
									{...register("referencia")}
								/>
							</Styled.InputGroup>
						</div>
					</Styled.Fieldset>
					<div className="actions">
						<Styled.BtnSalvar type="submit">Salvar</Styled.BtnSalvar>
						<Styled.BtnEditar
							disabled={!patient}
							onClick={handleSubmit(handleEdit)}
						>
							Editar
						</Styled.BtnEditar>
						<Styled.BtnDeletar
							disabled={!patient}
							onClick={handleSubmit(handleDelete)}
						>
							Deletar
						</Styled.BtnDeletar>
					</div>
				</Styled.Form>
			</Container>

			<ModalComponent>
				<SuccessComponent />
			</ModalComponent>
		</>
	)
}
