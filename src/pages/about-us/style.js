import styled from 'styled-components';
import { Main } from '../../components/common/styles/layout';

export const AboutSection = styled(Main)`
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 130px 6vw 6rem;
  background: var(--bg-dark);
  min-height: 100vh;
  gap: 0;
`;

export const AboutEyebrow = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  display: block;
  margin-bottom: 0.75rem;
`;

export const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 2.5rem 2rem;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: var(--gold-border);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardTitle = styled.h3`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text);
  letter-spacing: 0.05em;

  &::before {
    content: '—';
    color: var(--gold);
    margin-right: 0.5rem;
    font-weight: 300;
  }
`;

export const CardDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  color: var(--text-dim);
  line-height: 1.8;
  letter-spacing: 0.02em;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--gold-border);
  margin: 3rem 0;
`;
