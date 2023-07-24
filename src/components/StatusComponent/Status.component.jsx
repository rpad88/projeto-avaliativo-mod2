import { IoPeopleCircleOutline } from "react-icons/io5";
import * as Styled from './status.style'

export default function StatusComponent() {
  return (
    <Styled.StatusContainer>
        <Styled.StatusTitle>Estatísticas do Sistema</Styled.StatusTitle>
        <Styled.StatusWrapper>
            <div>
                <Styled.IconCategory><IoPeopleCircleOutline /></Styled.IconCategory>
                <Styled.SpanQtd>$qtd</Styled.SpanQtd>
                <p>Pacientes</p>
            </div>
            <div>
                <Styled.IconCategory><img src="../../../public/images/stethoscope.png" width={48}/></Styled.IconCategory>
                <Styled.SpanQtd>$qtd</Styled.SpanQtd>
                <p>Consultas</p>
            </div>
            <div>
                <Styled.IconCategory><img src="../../../public/images/examination.png" width={48}/></Styled.IconCategory>
                <Styled.SpanQtd>$qtd</Styled.SpanQtd>
                <p>Exames</p>
            </div>
        </Styled.StatusWrapper>
    </Styled.StatusContainer>
  )
}
