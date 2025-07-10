import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 2rem  auto;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.primary} ;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.7rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

export const Select = styled.select`
    padding: 0.5rem;
    width: 100%;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    cursor: pointer;

    option {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }
`