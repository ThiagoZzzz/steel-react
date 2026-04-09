import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../../schemas/authSchemas'
import { useToast } from '../../contexts/ToastContext'

import {
  LoginContainer,
  LoginCard,
  CardBody,
  BrandName,
  LoginTitle,
  LoginSubtitle,
  LoginForm,
  InputGroup,
  InputError,
  BtnPrimary,
  CardFooter,
  LinkSignup,
  SuccessBanner,
} from './style'



const Login = () => {
  const { showToast } = useToast()
  const [showSuccess, setShowSuccess] = useState(false)

  const {
    formState: { errors, touchedFields: touched },
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
    defaultValues: { email: '', password: '' }
  })

  const onValidSubmit = (data) => {
    setShowSuccess(true)
    showToast('Welcome back!')
    setTimeout(() => {
      setShowSuccess(false)
      reset()
    }, 2000)
  }

  return (
    <LoginContainer>
      <LoginCard>
        <CardBody>
          <BrandName>STEEL</BrandName>

          {showSuccess ? (
            <SuccessBanner>
              <h3>Welcome back!</h3>
              <p>You have signed in successfully.</p>
            </SuccessBanner>
          ) : (
            <>
              <LoginTitle>Sign in to your account</LoginTitle>
              <LoginSubtitle>Welcome back! Please enter your details.</LoginSubtitle>

              <LoginForm onSubmit={handleSubmit(onValidSubmit)}>
                <InputGroup $hasError={touched.email && !!errors.email} $isValid={touched.email && !errors.email}>
                  <label htmlFor="login-email">Email address</label>
                  <input
                    type="email"
                    id="login-email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    {...register('email')}
                  />
                  {touched.email && errors.email && (
                    <InputError>{errors.email.message}</InputError>
                  )}
                </InputGroup>

                <InputGroup $hasError={touched.password && !!errors.password} $isValid={touched.password && !errors.password}>
                  <label htmlFor="login-password">Password</label>
                  <input
                    type="password"
                    id="login-password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    {...register('password')}
                  />
                  {touched.password && errors.password && (
                    <InputError>{errors.password.message}</InputError>
                  )}
                </InputGroup>

                <BtnPrimary type="submit">Continue &rarr;</BtnPrimary>
              </LoginForm>
            </>
          )}
        </CardBody>

        <CardFooter>
          <p>
            Don't have an account?{' '}
            <Link to={'/sign-up'}>
              <LinkSignup>Sign up</LinkSignup>
            </Link>
          </p>
        </CardFooter>
      </LoginCard>
    </LoginContainer>
  )
}

export default Login
