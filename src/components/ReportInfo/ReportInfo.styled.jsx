import COLORS from 'variables/colors/colors.js';
import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 85px;
  border-radius: 20px;
  margin-bottom: 32px;
  background: ${COLORS.whiteColor};
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);

  @media screen and (min-width: 772px) {
    height: 50px;
    border-radius: 30px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    margin-left: auto;
    margin-right: auto;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% / 2);
    height: 100%;
    padding: 10px;

    :first-child {
      padding-right: 20px;
      border-right: 1px solid #e0e5eb;
    }

    @media screen and (min-width: 772px) {
      flex-direction: row;
      justify-content: flex-start;
      padding-left: 20px;

      :first-child {
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
  }
`;

export const ItemText = styled.p`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 4px;

  color: ${COLORS.textColor};

  @media screen and (min-width: 772px) {
    margin-right: 15px;
    margin-bottom: 0;
  }
`;

export const Sum = styled.p`
  display: block;
  font-weight: 700;
  font-size: 14px;
  color: ${({ type }) =>
    type === 'expenses' ? COLORS.redColorExpenses : COLORS.greenColorIncoms};
`;
