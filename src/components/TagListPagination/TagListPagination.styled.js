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
    @media (max-width: 768px) {
      min-width: 16px;
    }
    &:not(.Mui-disabled):hover {
      background-color: #e0e0e0;
      color: #333;
    }
  }

  .page__button--dots {
    color: #007bff;
    min-width: 0;
  }
`;
