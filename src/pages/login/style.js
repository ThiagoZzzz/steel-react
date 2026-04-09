import styled from 'styled-components'
import { Main } from '../../components/common/styles/layout'

export const LoginContainer = styled(Main)`
  background: var(--bg-dark);
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 1rem;
`

export const LoginCard = styled.div`
  width: 100%;
  max-width: 500px;
  background: var(--bg-card);
  border: 1px solid var(--gold-border);
  padding: 3rem 2.5rem 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem 1.5rem;
    margin: 6rem 0 1rem 0;
  }
`

export const CardBodyWrapper = styled.div``

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`

export const BrandName = styled.div`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  color: var(--gold);
  text-align: center;
  margin-bottom: 2rem;
`

export const LoginTitle = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 0.4rem;
  letter-spacing: 0.02em;
`

export const LoginSubtitle = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: var(--text-dim);
  letter-spacing: 0.04em;
  margin-bottom: 2rem;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-family: 'Jost', sans-serif;
    font-size: 0.7rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-dim);
  }

  input {
    background: var(--bg-surface);
    border: 1px solid ${({ $hasError, $isValid }) =>
    $hasError ? '#e53e3e' : $isValid ? 'var(--gold-dim)' : 'var(--border)'};
    color: var(--text);
    padding: 0.8rem 1rem;
    font-family: 'Jost', sans-serif;
    font-size: 0.88rem;
    outline: none;
    transition: border-color 0.25s ease;

    &::placeholder { color: var(--text-muted); }

    &:focus {
      border-color: ${({ $hasError }) =>
    $hasError ? '#e53e3e' : 'var(--gold-border)'};
    }
  }
`

export const InputRow = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const InputError = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  color: #e53e3e;
  letter-spacing: 0.04em;
  margin-top: 0.1rem;
`

export const BtnPrimary = styled.button`
  width: 100%;
  padding: 0.9rem;
  margin-top: 0.5rem;
  background: var(--gold);
  border: none;
  color: var(--bg-dark);
  font-family: 'Jost', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    background: var(--gold-bright);
    box-shadow: 0 0 24px rgba(201, 168, 76, 0.28);
  }
`

export const CardFooter = styled.div`
  margin-top: 1.75rem;
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);

  p {
    font-family: 'Jost', sans-serif;
    font-size: 0.8rem;
    color: var(--text-dim);
    letter-spacing: 0.04em;
  }
`

export const LinkSignup = styled.span`
  font-family: 'Jost', sans-serif;
  color: var(--gold);
  border-bottom: 1px solid var(--gold-border);
  padding-bottom: 1px;
  transition: border-color 0.2s ease;

  &:hover { border-color: var(--gold); }
`

export const SuccessBanner = styled.div`
  text-align: center;
  padding: 2rem 1rem;

  h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--gold);
    margin-bottom: 0.5rem;
  }

  p {
    font-family: 'Jost', sans-serif;
    font-size: 0.85rem;
    color: var(--text-dim);
    letter-spacing: 0.04em;
  }
`
