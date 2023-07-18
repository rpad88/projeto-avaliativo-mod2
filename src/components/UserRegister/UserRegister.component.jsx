import { useForm } from 'react-hook-form'
import * as Styled from '../LoginComponent/loginComponent.style'
import { ModalContext } from '../../contexts/ModalContext'
import { useContext } from 'react'
import { CadastroService } from '../../services/Cadastro.service'

export default function UserRegisterComponent() {
  const { setShow } = useContext(ModalContext)

  // FUNÇÕES
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = async (data) => {
	await CadastroService.CadastraUser(data)

	setShow(false)
  }

  // O QUE SERÁ RENDERIZADO
	return (
		<Styled.Form onSubmit={handleSubmit(onSubmit)}>
			<Styled.Legend>Login</Styled.Legend>
			<Styled.InputGroup>
				<Styled.Label htmlFor="email">E-mail</Styled.Label>
				<Styled.Input
					name="email"
					type="email"
					placeholder="Digite seu e-mail"
          {...register('email', {
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            required: true,
          })}
          error={errors.email}
          />
          {errors.email && (
						<small style={{ color: 'red' }}>E-mail inválido</small>
					)}
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="password">Senha</Styled.Label>
				<Styled.Input
					name="password"
					type="password"
					placeholder="Digite sua senha"
						{...register('password', { required: true, minLength: 9 })}
          error={errors.password}
				/>
        {errors.password && (
						<small style={{ color: 'red' }}>
							Senha deve ter no mínimo 9 characters
						</small>
					)}
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="confirm">Confirma</Styled.Label>
				<Styled.Input
					name="confirm"
					type="password"
					placeholder="Confirme sua senha"
						{...register('confirm', { required: true, minLength: 9 })}
          error={errors.confirm}
				/>
        {errors.confirm && (
						<small style={{ color: 'red' }}>
							Confirmação de senha deve ser igual a senha
						</small>
					)}
			</Styled.InputGroup>
      <Styled.Button type='submit'>Log in</Styled.Button>
		</Styled.Form>
	)
}
