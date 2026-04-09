import styled, { keyframes } from 'styled-components'

export const ToastContainer = styled.div`
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 9999;
    pointer-events: none;
`

export const ToastItem = styled.div`
    background: var(--bg-elevated);
    color: var(--text);
    border: 1px solid var(--gold-border);
    padding: 0.8rem 1.8rem;
    font-family: 'Jost', sans-serif;
    font-size: 0.82rem;
    letter-spacing: 0.06em;
    box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    animation: ${props => props.$isExiting ? ToastOut : ToastIn} ${props => props.$isExiting ? '0.5s' : '0.3s'} ease forwards;
    pointer-events: auto;
`

export const ToastIn = keyframes`
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(-10px); }
`

export const ToastOut = keyframes`
    from { opacity: 1; transform: translateY(-10px); }
    to   { opacity: 0; transform: translateY(20px); }
`