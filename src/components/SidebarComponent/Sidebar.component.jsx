import { Image } from "react-bootstrap"
import "./sidebar.style.css"
import {
	IoStatsChartOutline,
	IoExitOutline,
	IoAddSharp,
	IoList,
} from "react-icons/io5"
import { Sidebar, SidebarActions, SidebarBody, TopicWrapper } from "./sidebar.style"
import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth.context"
import { useNavigate } from "react-router-dom"
import LabMedicalLogo from '/images/LABMedical_Logo.png'
import { PatientContext } from "../../contexts/Patient.context"


export default function SidebarComponent({showSidebar}) {
	const navigate = useNavigate()
	const { LogOut} = useContext(AuthContext)
	const handleSair = () => {
		LogOut()
		navigate('/')
	}

	const { setPatient } = useContext(PatientContext) 

	const handleHome = () => {
		setPatient(null)
		navigate('/home')
	}

	const handleCadPaciente = () => {
		setPatient(null)
		navigate('/cadPaciente')
	}

	const handleCadConsulta = () => {
		setPatient(null)
		navigate('/cadConsulta')
	}

	const handleCadExame = () => {
		setPatient(null)
		navigate('/cadExame')
	}

	return (
		<Sidebar show={showSidebar} $isOpened={showSidebar}>
			<SidebarBody>
				<div className="img-wrapper">
					<Image src={LabMedicalLogo} fluid></Image>
				</div>
				<SidebarActions>
					<TopicWrapper>
						<small>Geral</small>
						<button onClick={handleHome}>
							<i>
								<IoStatsChartOutline />
							</i>
							<span style={{display: showSidebar? "": "none"}}>
							INICIO
							</span>
						</button>
						<button onClick={handleSair}>
							<i>
								<IoExitOutline />
							</i>
							<span style={{display: showSidebar? "": "none"}}>
							SAIR
							</span>
							
						</button>
					</TopicWrapper>
					<TopicWrapper>
						<small>Pacientes</small>
						<button onClick={handleCadPaciente}>
							<i>
								<IoAddSharp />
							</i>
							<span style={{display: showSidebar? "": "none"}}>
							CADASTRAR
							</span>
						</button>
						<button>
							<i>
								<IoList />
							</i>
							<span style={{display: showSidebar? "": "none"}}>
							LISTAR PRONTUARIO
							</span>
						</button>
					</TopicWrapper>
					<TopicWrapper>
						<small>Exames</small>
						<button onClick={handleCadConsulta}>
							<i>
								<IoAddSharp />
							</i>
							<span style={{display: showSidebar? "": "none"}}>
							CADASTRAR CONSULTA
							</span>
						</button>
						<button onClick={handleCadExame}>
							<i>
								<IoAddSharp />
							</i>
							<span style={{display: showSidebar? "": "none"}}>
							CADASTRAR EXAME
							</span>
						</button>
					</TopicWrapper>
				</SidebarActions>
			</SidebarBody>
		</Sidebar>
	)
}
