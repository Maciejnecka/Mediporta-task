import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;

  .MuiButton-root {
    margin-right: 10px;
    margin-top: 20px;
  }

  .MuiButton-root:last-child {
    margin-right: 0;
  }
  .page__button {
    min-width: 34px;
    &.Mui-disabled {
      background-color: #007bff;
      color: white;
    }
    &:not(.Mui-disabled):hover {
      background-color: #e0e0e0;
      color: #333;
    }
  }
`;
