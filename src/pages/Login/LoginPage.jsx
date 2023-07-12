import { Col, Container, Form, Image, Row } from 'react-bootstrap'
import LoginImage from '/images/undraw_medicine.svg'
import {BsPersonVcardFill} from 'react-icons/bs'


export default function LoginPage() {
	return (
		<div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
			<Container style={{ backgroundColor: '#f2f2f2' }}>
				<Row className="justify-content-center">
					<Col>
						<Image src={LoginImage} fluid />
					</Col>
					<Col className="login-wrapper d-flex justify-content-center">
						<Form className='p-3'>
								<BsPersonVcardFill size={96} color="#40376E" />
							<div>
							</div>
							<legend>Login</legend>
							
							<div className="input-wrapper">
								<label htmlFor="email">E-mail</label>
								<input type="email" placeholder='Type your e-mail' />
							</div>
							<div className="input-wrapper">
								<label htmlFor="password">Password</label>
								<input type="password" placeholder='Type your password'/>
							</div>
							<button>Entrar</button>
						</Form>

						<a href="#">Esqueceu sua senha ?</a>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
