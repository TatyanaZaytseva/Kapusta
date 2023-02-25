import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: fit-content;
  margin: 0 auto;
  flex-direction: row;
  align-self: center;
  @include mobile {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    }
`
export const Title = styled.p`
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    color: rgba(82, 85, 95, 0.7);
    margin-right: 31px;
    @media screen and (min-width: $tablet) and (max-width: $desktop) {
      margin-right: 21px;
    }
    @include mobile {
      margin-right: 0px;
      margin-bottom: 12px;
      text-align: center;
    }
`
export const Section = styled.div`
    @include mobile {
      display: flex;
      justify-content: center;
      width: 100%;
    }
`
export const Input = styled.input`
    border: 2px solid #ffffff;
    border-radius: 16px;
    background-color: transparent;
    font-weight: 700;
    padding: 12px;
    text-align: center;
    color: black;
    margin-right: 15px;
    width: 125px;
    height: 44px;
    @include tablet {
      margin-right: 15px;
    }
    @include mobile {
      border-radius: 22px 0px 0px 22px;
      margin-right: 0;
      border-right: 1px solid #ffffff;
    }
`
export const Button = styled.button`
        :hover {
      color: #ffffff;
    }
    @include mobile {
      border-radius: 0px 22px 22px 0px;
      border-left: 1px solid #ffffff;
    };
    
  ::placeholder {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
  }
`
export const Wrapper2 = styled.div`
    position: absolute;
    bottom: 0;
    transform: translateY(calc(100% + 18px)) translateX(16%);
    width: 292px;
    background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    padding: 30px;
    border-radius: 30px;
    z-index: 10;
    @include tablet {
      transform: translateY(calc(100% + 15px)) translateX(10%);
    }
    @include mobile {
      width: 282px;

      transform: translateY(calc(100% + 15px)) translateX(12%);
    }
    @include sm {
      transform: translateY(calc(100% + 15px)) translateX(0%);
      max-width: 282px;
    };

    ::before {
      content: '';
      position: absolute;
      left: 16%;
      top: -11px;
      width: 0;
      height: 0;
      border-left: 11px solid transparent;
      border-right: 11px solid transparent;
      border-bottom: 11px solid #172d5d;
      @include mobile() {
        left: 11%;
      }
      @include sm() {
        left: 24%;
      }
    }
`

export const Text = styled.p`
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
      margin: 0px 0px 20px 0px;
`
export const Styled = styled.p`
      font-size: 12px;
      line-height: 16px;
      color: #ffffff;
      margin: 0;
`