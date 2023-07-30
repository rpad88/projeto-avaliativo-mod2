import * as Styled from "./CardPaciente.style"
import { IoPersonCircleOutline } from "react-icons/io5"

export default function CardPacienteComponent({paciente}) {

    const calculaIdade = () => {
        const dns = paciente.nascimento.replaceAll('-', ' ') //transforma yyyy-MM-dd em yyyy MM dd
        const dataNascimento = new Date(dns)
        const hoje = new Date() //default: MM-dd-yyyy

        const totalSeconds = (hoje - dataNascimento) / 1000 //converte ms em s
        const days = Math.floor(totalSeconds / 3600 / 24)
        const years = Math.floor(days / 365)
        const meses = Math.floor (days % 365 / 30)
        
        return years > 0 ? `${years} anos` : `${meses} meses`
    }

    const formataTel = () => {
        const telFormatado = paciente.tel
                            .replace(/(..)(.)(....)(....)/ //-> o ponto significa qualquer caracter | os () separam em 4 grupos
                            , '($1) $2 $3-$4') //aqui faz a formatação através dos grupos
        return telFormatado
    }


	return (
		<Styled.Card>
			<Styled.CardHeader></Styled.CardHeader>
			<Styled.CardBody>
				<IoPersonCircleOutline
					size={60}
					className="img-circle"
					style={{ backgroundColor: "#fefefe" }}
				/>

				<Styled.CardName>{paciente.nome}</Styled.CardName>
				<Styled.CardIdade>{calculaIdade()}</Styled.CardIdade>
				<Styled.CardTel>{formataTel()}</Styled.CardTel>
				<Styled.CardConvenio>{paciente.convenio || 'particular'}</Styled.CardConvenio>
				<Styled.CardBtn>ver mais</Styled.CardBtn>
			</Styled.CardBody>
		</Styled.Card>
	)
}
