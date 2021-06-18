import React from 'react'
import Image from 'next/image'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import 'reactjs-popup/dist/index.css'
import closeModal from '../assets/closeModal.svg'
import external from '../assets/external-link-green.svg'
import {
  WhiteGreenButtonLink,
  Inter400,
  Inter500,
  SimpleButton,
  SpaceBetween,
} from './Styles'

function APRDetails() {
  return (
    <StyledPopup trigger={<SimpleButton>See details</SimpleButton>} modal>
      {close => (
        <div className="modal">
          <Spaced>
            <h2>APR Details</h2>
            <Image alt="close" src={closeModal} onClick={close} />
          </Spaced>
          <div className="apr-table">
            <div>
              <Inter500>Timeframe</Inter500>
              <Text>1 Day</Text>
              <Text>7 Days</Text>
              <Text>30 Days</Text>
              <Text>365 Days (APY)</Text>
            </div>
            <div>
              <Inter500>ROI</Inter500>
              <Text>1.05%</Text>
              <Text>10.23%</Text>
              <Text>53.14%</Text>
              <Text>17723.11%</Text>
            </div>
            <div>
              <Inter500>DN per $1000</Inter500>
              <Text>1.24</Text>
              <Text>9.62</Text>
              <Text>47.88</Text>
              <Text>15952.77</Text>
            </div>
          </div>
          <div className="actions">
            <WhiteGreenButtonLink>
              Get more DN <Image alt="link" src={external} />
            </WhiteGreenButtonLink>
          </div>
        </div>
      )}
    </StyledPopup>
  )
}

const StyledPopup = styled(Popup)`
  &-content {
    border-radius: 24px;
    padding: 32px;
    width: auto;

    .apr-table {
      display: flex;
      margin: 0 -32px;
      div {
        margin: 0 32px;
      }
    }
  }
`

const Text = styled(Inter400)`
  color: #222a29;
  margin-bottom: 16px;
`

const Spaced = styled(SpaceBetween)`
  position: absolute;
  width: calc(100% - 15px);
  top: -57px;
  left: 15px;
  img {
    cursor: pointer;
  }
  h2 {
    font-family: 'Inter-Bold';
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`

export default APRDetails
