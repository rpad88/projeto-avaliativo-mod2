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


export default function SidebarComponent({showSidebar}) {
	const navigate = useNavigate()
	const { LogOut} = useContext(AuthContext)
	const handleSair = () => {
		LogOut()
		navigate('/')
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
						<button onClick={() => navigate('/home')}>
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
						<button onClick={() => navigate('/cadpaciente')}>
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
						<button onClick={() => navigate('/cadConsulta')}>
							<i>
								<IoAddSharp />
							</i>
							<span style={{display: showSidebar? "": "none"}}>
							CADASTRAR CONSULTA
							</span>
						</button>
						<button onClick={() => navigate('/cadExame')}>
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
