import { useForm } from "react-hook-form"
import * as Styled from "../LoginComponent/loginComponent.style"
import { ModalContext } from "../../contexts/ModalContext"
import { useContext } from "react"
import { CadastroService } from "../../services/Cadastro.service"
import PropTypes from 'prop-types'


export default function UserRegisterComponent() {
	const { setShow } = useContext(ModalContext)

	// FUNÇÕES
	const {
		register,
		unregister,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = async (data) => {
		try {
			await CadastroService.CadastraUser(data)
			setShow(false)
		} catch (error) {
			console.log(error.message)
		}
	}

	// O QUE SERÁ RENDERIZADO
	return (
		<Styled.Form onSubmit={handleSubmit(onSubmit)}>
			<Styled.Legend>Cadastro de usuário</Styled.Legend>
			<Styled.InputGroup>
				<Styled.Label htmlFor="email">E-mail</Styled.Label>
				<Styled.Input
					name="email"
					type="email"
					placeholder="Digite seu e-mail"
					{...register("email", {
						pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
						required: true,
					})}
				/>
				{errors.email && (
					<small style={{ color: "red" }}>E-mail inválido</small>
				)}
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="password">Senha</Styled.Label>
				<Styled.Input
					name="password"
					type="password"
					placeholder="Digite sua senha"
					{...register("password", { required: true, minLength: 9 })}
				/>
				{errors.password && (
					<small style={{ color: "red" }}>
						Senha deve ter no mínimo 9 characters
					</small>
				)}
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="confirm">Confirma</Styled.Label>
				<Styled.Input
					name="confirm"
					type="password"
					placeholder="Confirme sua senha"
					{...register("confirm", { required: true, minLength: 9 ,validate: (value) => {
						const pwd = watch('password')
						if(value != pwd) return "A confirmação de senha deve ser igual a senha"
					}})}
				/>
				{errors.confirm && (
					<small style={{ color: "red" }}>
						{errors.confirm.message}
					</small>
				)}
			</Styled.InputGroup>
			<Styled.Button
				$active={
					errors.email || errors.password || errors.confirm ? false : true
				}
				type="submit"
				onClick={() => unregister('confirm')}
			>
				Registre-se
			</Styled.Button>
		</Styled.Form>
	)
}

UserRegisterComponent.propTypes = {
	email: PropTypes.string.isRequired,
	senha: PropTypes.string.isRequired,
	confirm: PropTypes.string.isRequired
}