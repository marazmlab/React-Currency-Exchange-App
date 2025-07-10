import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin: 1rem 0;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin: 1rem 0;
  font-size: 1rem;
  text-align: left;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;

  border-spacing: 0;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const TableHead = styled.thead`
  font-weight: bold;
`;

export const TableRow = styled.tr`
    // just in case
`;

export const TableCell = styled.td`
  padding: 0.75rem;
  border: 2px solid ${({ theme }) => theme.primary};

    @media (max-width: 768px) {
        padding: 0.5rem;

    @media (max-width: 480px) {
        padding: 0.25rem; 
    }
  }
`;

export const TableBody = styled.tbody`
  // just in case
`;

export const PortfolioSummary = styled.div`
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  text-align: center;

  h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.text};
  }

  .total-value {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .profit-loss {
    font-size: 1.1rem;
    font-weight: bold;

    &.positive {
      color: #4CAF50; /* Zielony dla zysku */
    }

    &.negative {
      color: #F44336; /* Czerwony dla straty */
    }
  }
`;