import { useContext } from "react"
import { PatientContext } from "../../../contexts/Patient.context"
import * as Styled from './details.style'
import ListaConsultasComponent from "../ListaConsultas/ListaConsultas.component"

export default function ProntuarioDetailsComponent() {
	const { patient } = useContext(PatientContext)

    const formataTel = (tel) => {
        const telFormatado = tel
                            .replace(/(..)(.)(....)(....)/ //-> o ponto significa qualquer caracter | os () separam em 4 grupos
                            , '($1) $2 $3-$4') //aqui faz a formatação através dos grupos
        return telFormatado
    }    

  return (
    <Styled.Details>
        <Styled.PatientWrapper>
        <Styled.Span>Paciente: <span className="nome">{patient.nome}</span></Styled.Span>
        <Styled.Span>Convênio: {patient.convenio.toUpperCase() || 'Particular'}</Styled.Span>
        <Styled.Span>Contato Emergência: {formataTel(patient.contatoEmergencia)}</Styled.Span>
        <Styled.Span>Alergias: {patient.convenio || 'nada declarado'}</Styled.Span>
        <Styled.Span onClick={() => console.log(patient.id)}>Cuidados: {patient.cuidados || 'nada declarado'}</Styled.Span>
        </Styled.PatientWrapper>

        <ListaConsultasComponent title="Consultas" tipo='consulta' id={patient.id} />
        <ListaConsultasComponent title="Exames" tipo='exame' id={patient.id} />
    </Styled.Details>
  )
}
