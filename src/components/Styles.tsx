import styled from 'styled-components'

export const Inter700 = styled.h1`
  font-family: 'Inter-Bold';
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #455453;
  margin: 20px 10px;
  img {
    padding-right: 5px;
  }
`

export const Inter600 = styled.p`
  font-family: 'Inter-Bold';
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #353a41;
`

export const Inter500 = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #222a29;
`

export const Inter400 = styled.p`
  font-family: 'Inter';
  font-size: 14px;
  line-height: 17px;
  color: #353a41;
`

export const RoundedCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(8, 43, 41, 0.04),
    0px 2px 16px rgba(8, 43, 41, 0.06);
  border-radius: 24px;
`

export const BigCurrency = styled.div`
  display: flex;
  align-items: flex-end;
  h1 {
    font-family: 'Inter-Bold';
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin: 0 5px 0 0 !important;
    color: #222a29;
  }
  h2 {
    font-family: 'Inter-Bold';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    align-items: flex-end;
    color: #455453;
    margin: 0;
    display: inline-flex;
  }
`

export const Input = styled.input`
  height: 48px;
  padding-left: 10px;
  background: #f4f5f6;
  border-radius: 8px;
  height: 48px;
  color: #818b98;
  font-family: 'Inter';
  border: solid 0px transparent;
  font-size: 14px;
  line-height: 16px;
  margin: 16px 0;
  width: calc(100% - 12px);
`

export const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const GreenButton = styled.button`
  background: ${props =>
    props.disabled
      ? '#DDE3E3'
      : 'linear-gradient(99.61deg, #86e4dd -0.13%, #2fbcb2 99.3%)'};

  border: solid 0px transparent;
  border-radius: 27px;
  font-family: 'Inter-Bold';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: white;
  cursor: pointer;
  padding: 8px 16px;
  box-shadow: 0px 1px 1px rgba(8, 43, 41, 0.08),
    0px 0px 8px rgba(8, 43, 41, 0.06);
  &:hover {
    background: ${props =>
      props.disabled
        ? '#DDE3E3'
        : 'linear-gradient(99.61deg, #76ccc5 -0.13%, #218c84 99.3%)'};

    transition: all 0.25s ease-in-out;
  }
  &.long {
    width: -webkit-fill-available;
  }
`

export const WhiteGreenButtonLink = styled.a`
  color: #2fbcb2;
  background: transparent;
  border: solid 1px #2fbcb2;
  font-family: 'Interstate', sans-serif;
  border-radius: 38px;
  padding: 25px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
  font-size: 16px;
  letter-spacing: 0.27px;
  line-height: 19px;
  text-align: center;
  padding: 11px;
  margin: 6px 0px;
  cursor: pointer;
  img {
    padding-left: 5px;
  }
`

export const SimpleButton = styled.button`
  font-family: 'Inter-Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #2fbcb2;
  background: transparent;
  border: solid 0px transparent;
`

export const NavbarButton = styled.div`
  background: white;
  border-radius: 8px;
  text-transform: uppercase;
  border: 0px solid transparent;
  padding: 8px 10px;
  font-family: 'Inter-Bold', sans-serif;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  color: #455453;
  margin-left: 15px;
  cursor: pointer;
  span {
    color: #455453c7;
    padding-left: 3px;
  }
`

export const LightGreenButton = styled(NavbarButton)`
  background: #c4f3ef;
  color: #144b52;
`
