import styled from 'styled-components';

export const ThemeButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    font-size: 0.7rem;
  }
`;