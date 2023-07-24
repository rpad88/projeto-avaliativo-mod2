import { Form, Image } from "react-bootstrap"
import "./sidebar.style.css"
import {
	IoStatsChartOutline,
	IoExitOutline,
	IoAddSharp,
	IoList,
} from "react-icons/io5"
import { Sidebar, SidebarActions, SidebarBody, TopicWrapper } from "./sidebar.style"

export default function SidebarComponent({showSidebar}) {

	return (
		<Sidebar show={showSidebar} $isOpened={showSidebar}>
			<SidebarBody>
				<div className="img-wrapper">
					<Image src="../../public/images/LABMedical_logo.png" fluid></Image>
				</div>
				<SidebarActions>
					<TopicWrapper>
						<small>Geral</small>
						<button>
							<i>
								<IoStatsChartOutline />
							</i>
							<span style={{display: showSidebar? "": "none"}}>
							INICIO
							</span>
						</button>
						<button>
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
						<button>
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
						<button>
							<i>
								<IoAddSharp />
							</i>
							<span style={{display: showSidebar? "": "none"}}>
							CADASTRAR CONSULTA
							</span>
						</button>
						<button>
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
