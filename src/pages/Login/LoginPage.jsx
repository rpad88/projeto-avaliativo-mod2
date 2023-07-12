import { Col, Container, Image } from 'react-bootstrap'
import LoginImage from '/images/undraw_medicine.svg'
import * as Style  from './LoginPage.style'
import LoginComponent from '../../components/LoginComponent/Login.component'

export default function LoginPage() {
	return (
		<Style.LoginContainer>
			<Style.Container >
					<Col>
						<Image src={LoginImage} fluid style={{height: '100%'}} />
					</Col>
					<Col>
						<LoginComponent />
					</Col>
			</Style.Container>
		</Style.LoginContainer>
	)
}
