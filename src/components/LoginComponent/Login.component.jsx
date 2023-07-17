import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { BsPersonBadge } from 'react-icons/bs'
import * as Styled from './loginComponent.style'
import { ModalContext } from '../../contexts/ModalContext'
import ModalComponent from '../Modal/Modal.component'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import UserRegisterComponent from '../UserRegister/UserRegister.component'
import { AuthContext } from '../../contexts/Auth.context'

export default function LoginComponent() {
	const { setShow } = useContext(ModalContext)
	const navigate = useNavigate()
	const { setAuth } = useContext(AuthContext)

	const {
		register,
		handleSubmit,
		resetField,
		reset,
		formState: { errors },
	} = useForm()

	const openModal = (e) => {
		e.preventDefault()
		console.log('openMmodal')
		setShow(true)
	}

	const redirectToHome = (user) => {
		setAuth({ user, isLogged: true })
		navigate('/home')
	}

	const onSubmit = (data) => {
		const { email, password } = data
		console.log(data)

		// TODO: fazer a busca do usuário
		// const user = users.find(u => u.email === email)

		// if(!user) {
		// 	reset()
		// 	return alert('Usuário não cadastrado')
		// }

		// password === user.password ? redirectToHome(user) : alert('Usuário e/ou senha inválidos')
	}

	return (
		<>
			<Styled.Form onSubmit={handleSubmit(onSubmit)}>
				<Styled.FormHeader>
					<BsPersonBadge size={48} color="#48233C" />
					<Styled.Legend>Login</Styled.Legend>
				</Styled.FormHeader>

				<Styled.InputGroup>
					<Styled.Label htmlFor="email">E-mail</Styled.Label>
					<Styled.Input
						type="email"
						placeholder="Type your e-mail"
						{...register('email', {
							pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
							required: true,
						})}
					/>
					{errors.email && (
						<small style={{ color: 'red' }}>Invalid e-mail</small>
					)}
				</Styled.InputGroup>
				<Styled.InputGroup>
					<Styled.Label htmlFor="password">Password</Styled.Label>
					<Styled.Input
						type="password"
						placeholder="Type your password"
						{...register('password', { required: true, minLength: 8 })}
					/>
					{errors.password && (
						<small style={{ color: 'red' }}>
							Password must be at least 8 characters
						</small>
					)}
				</Styled.InputGroup>
				<Styled.Button
					type="submit"
					$active={!errors.email && !errors.password}
					disabled={errors.email || errors.password}
				>
					Entrar
				</Styled.Button>
				<Styled.EsqueciSenha
					onClick={() => alert('funcionalidade ainda não implementada')}
				>
					Esqueceu sua senha?
				</Styled.EsqueciSenha>

				<Styled.BtnCadastro
					$outlined
					onClick={openModal}
				>
					Cadastre-se
				</Styled.BtnCadastro>
			</Styled.Form>
			<ModalComponent>
				<UserRegisterComponent />
			</ModalComponent>
		</>
	)
}
