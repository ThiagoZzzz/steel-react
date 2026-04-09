import styled from 'styled-components';
import { Main } from '../../components/common/styles/layout';

export const ContactUsContainer = styled(Main)`
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 120px 6vw 6rem;
  background: var(--bg-dark);
  min-height: 100vh;
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 120px 5vw 4rem;
  }
`;

export const ContactCard = styled.div`
  display: flex;
  gap: 3rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--gold-border);
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 2rem;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const InfoIcon = styled.div`
  flex-shrink: 0;
  margin-top: 2px;
`;

export const InfoTitle = styled.h4`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
`;

export const InfoText = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  color: var(--text-dim);
  letter-spacing: 0.04em;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BrandName = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--text);
  letter-spacing: 0.04em;
  margin-bottom: 0.25rem;
`;

export const ContactSubtitle = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: var(--text-dim);
  letter-spacing: 0.04em;
  margin-bottom: 1.5rem;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

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

  input, textarea {
    background: var(--bg-card);
    border: 1px solid ${({ $hasError, $isValid }) =>
      $hasError ? '#e53e3e' : $isValid ? 'var(--gold-dim)' : 'var(--border)'};
    color: var(--text);
    padding: 0.8rem 1rem;
    font-family: 'Jost', sans-serif;
    font-size: 0.88rem;
    outline: none;
    transition: border-color 0.25s ease;
    resize: vertical;

    &::placeholder { color: var(--text-muted); }

    &:focus {
      border-color: ${({ $hasError }) =>
        $hasError ? '#e53e3e' : 'var(--gold-border)'};
    }
  }

  textarea {
    min-height: 140px;
  }
`;

export const InputError = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  color: #e53e3e;
  letter-spacing: 0.04em;
  margin-top: 0.1rem;
`;

export const BtnPrimary = styled.button`
  align-self: flex-start;
  padding: 0.85rem 2.5rem;
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

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SuccessBanner = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--gold-border);

  h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--gold);
    margin-bottom: 0.4rem;
  }

  p {
    font-family: 'Jost', sans-serif;
    font-size: 0.82rem;
    color: var(--text-dim);
    letter-spacing: 0.04em;
  }
`;
