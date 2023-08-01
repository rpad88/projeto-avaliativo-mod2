import { IoPeopleCircleOutline } from "react-icons/io5"
import * as Styled from "./status.style"
import { useEffect, useState } from "react"
import { CadastroService } from "../../services/Cadastro.service"

export default function StatusComponent() {
	const [totalPacientes, setTotalPacientes] = useState(0)
	const [totalConsultas, setTotalConsultas] = useState(0)
	const [totalExames, setTotalExames] = useState(0)

	useEffect(() => {
		async function pegaDados() {
			const arrayPacientes = await CadastroService.BuscaTodosPacientes()
			setTotalPacientes(arrayPacientes.length)

            const arrayConsultas = await CadastroService.BuscaTodasConsultas()
            setTotalConsultas(arrayConsultas.length)

			const arrayExames = await CadastroService.BuscaTodosExames()
			setTotalExames(arrayExames.length)
		}
		pegaDados()
	},[])

	return (
		<Styled.StatusContainer>
			<Styled.StatusTitle>Estatísticas do Sistema</Styled.StatusTitle>
			<Styled.StatusWrapper>
				<Styled.StatusCard>
					<div>
						<Styled.IconCategory>
							<IoPeopleCircleOutline />
						</Styled.IconCategory>
						<Styled.SpanQtd>{totalPacientes}</Styled.SpanQtd>
					</div>
					<p>Pacientes</p>
				</Styled.StatusCard>
				<Styled.StatusCard>
					<div>
						<Styled.IconCategory>
							<img src="/images/stethoscope.png" width={48} />
						</Styled.IconCategory>
						<Styled.SpanQtd>{totalConsultas}</Styled.SpanQtd>
					</div>
					<p>Consultas</p>
				</Styled.StatusCard>
				<Styled.StatusCard>
					<div>
						<Styled.IconCategory>
							<img src="/images/examination.png" width={48} />
						</Styled.IconCategory>
						<Styled.SpanQtd>{totalExames}</Styled.SpanQtd>
					</div>
					<p>Exames</p>
				</Styled.StatusCard>
			</Styled.StatusWrapper>
		</Styled.StatusContainer>
	)
}
