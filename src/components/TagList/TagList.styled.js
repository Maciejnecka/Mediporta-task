import styled from 'styled-components';

export const StyledTagListContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 1rem auto;
  .MuiTableContainer-root {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .MuiTableHead-root {
    background-color: #1976d2;
    .MuiTableCell-head {
      color: white;
      font-weight: bold;
    }
  }
  .MuiTableRow-root:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  .MuiTableCell-root {
    padding: 16px;
    font-size: 0.925rem;
  }
  .MuiTableBody-root .MuiTableRow-root:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;
