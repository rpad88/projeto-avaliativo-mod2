import { useForm } from 'react-hook-form'
import * as Styled from '../LoginComponent/loginComponent.style'
import { ModalContext } from '../../contexts/ModalContext'
import { useContext } from 'react'

export default function UserRegisterComponent() {
  const { setShow } = useContext(ModalContext)

  // FUNÇÕES
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => {
    console.table(data)
    setShow(false)
  }

  // O QUE SERÁ RENDERIZADO
	return (
		<Styled.Form onSubmit={handleSubmit(onSubmit)}>
			<Styled.Legend>Sign-up</Styled.Legend>
			<Styled.InputGroup>
				<Styled.Label htmlFor="email">E-mail</Styled.Label>
				<Styled.Input
					name="email"
					type="email"
					placeholder="Type your e-mail"
          {...register('email', {
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            required: true,
          })}
          error={errors.email}
          />
          {errors.email && (
						<small style={{ color: 'red' }}>Invalid e-mail</small>
					)}
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="password">Password</Styled.Label>
				<Styled.Input
					name="password"
					type="password"
					placeholder="Type your password"
						{...register('password', { required: true, minLength: 8 })}
          error={errors.password}
				/>
        {errors.password && (
						<small style={{ color: 'red' }}>
							Password must be at least 8 characters
						</small>
					)}
			</Styled.InputGroup>
			<Styled.InputGroup>
				<Styled.Label htmlFor="confirm">Confirm</Styled.Label>
				<Styled.Input
					name="confirm"
					type="password"
					placeholder="Confirm your password"
						{...register('confirm', { required: true, minLength: 8 })}
          error={errors.confirm}
				/>
        {errors.confirm && (
						<small style={{ color: 'red' }}>
							Confirm and Password must be equals
						</small>
					)}
			</Styled.InputGroup>
      <Styled.Button type='submit'>Sign-up</Styled.Button>
		</Styled.Form>
	)
}
