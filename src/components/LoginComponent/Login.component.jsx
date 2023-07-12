import React from 'react'
import { Form, Row } from 'react-bootstrap'
import { BsPersonBadge } from 'react-icons/bs'
import * as Styled from './loginComponent.style'

export default function LoginComponent() {
	return (
		<>
			<Styled.Form>
				<Styled.FormHeader>
					<BsPersonBadge size={48} color="#48233C" />
					<Styled.Legend>Login</Styled.Legend>
				</Styled.FormHeader>

				<Styled.InputGroup>
					<Styled.Label htmlFor="email">E-mail</Styled.Label>
					<Styled.Input type="email" placeholder="Type your e-mail" />
				</Styled.InputGroup>
				<Styled.InputGroup>
					<Styled.Label htmlFor="password">Password</Styled.Label>
					<Styled.Input type="password" placeholder="Type your password" />
				</Styled.InputGroup>
				<Styled.Button>Entrar</Styled.Button>
				<Row>
					<a
						href="#"
						onClick={() => alert('funcionalidade ainda não implementada')}
					>
						Esqueceu sua senha?
					</a>
					<a href="#">Cadastre-se</a>
				</Row>
			</Styled.Form>
		</>
	)
}
