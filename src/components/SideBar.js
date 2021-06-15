import React, { Component } from 'react'
import styled from 'styled-components'
import BurgerMenu from 'react-burger-menu'
import ConnectionInfo from './ConnectionInfo'
import external from '../assets/external-link-green.svg'
import {
  Inter700,
  Inter500,
  Inter400,
  Input,
  RoundedCard,
  BigCurrency,
  GreenButton,
  WhiteGreenButtonLink
} from './Styles.js'

class MenuWrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false,
    }
  }

  componentDidUpdate(prevProps) {
    setTimeout(() => {
      this.show()
    }, 20)
  }

  show() {
    this.setState({ hidden: false })
  }

  render() {
    let style

    if (this.state.hidden) {
      style = { display: 'none' }
    }

    return (
      <div style={style} className={'right'}>
        {this.props.children}
      </div>
    )
  }
}

function Sidebar({
  address,
  ethBalance,
  network,
  wallet,
  onboard,
  isOpen,
  closeSidebar,
}) {
  const Menu = BurgerMenu['slide']
  return (
    <MenuWrap>
      <Menu
        id={'slide'}
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        right={true}
        isOpen={isOpen}
        customBurgerIcon={false}
        width={464}
        onClose={closeSidebar}
      >
        <Top>
          <ConnectionInfo
            address={address}
            ethBalance={ethBalance}
            network={network}
            wallet={wallet}
            onboard={onboard}
          />
        </Top>
        <div style={{ padding: '0 15px' }}>
          <Inter700>Your DN balance</Inter700>
          <SidebarCard>
            <div>
              <BigCurrency>
                <h1>163.20</h1>
                <h2>DN</h2>
              </BigCurrency>
              <br />
              <BalanceBox>
                <Inter500>DN in your DN wallet</Inter500>
                <Inter400>40</Inter400>
              </BalanceBox>
              <BalanceBox>
                <Inter500>DN in your ETH wallet</Inter500>
                <Inter400>40</Inter400>
              </BalanceBox>
              <BalanceBox>
                <Inter500>DN in LP</Inter500>
                <Inter400>40</Inter400>
              </BalanceBox>
              <BalanceBox>
                <Inter500>Staked balance</Inter500>
                <Inter400>103.20</Inter400>
              </BalanceBox>
              <BalanceBox>
                <Inter500>Locked in DN Network</Inter500>
                <Inter400>103.20</Inter400>
              </BalanceBox>
              <BalanceBox>
                <Inter500>Locked in ETH Network</Inter500>
                <Inter400>103.20</Inter400>
              </BalanceBox>
              <BalanceBox>
                <Inter500>Claimable in DN Network</Inter500>
                <Inter400>103.20</Inter400>
              </BalanceBox>
              <BalanceBox>
                <Inter500>Claimable in ETH Network</Inter500>
                <Inter400>103.20</Inter400>
              </BalanceBox>
              <br/>
              <WhiteGreenButtonLink>Get more DN <img alt="link" src={external}/></WhiteGreenButtonLink>
            </div>
          </SidebarCard>
          <br />
          <Inter700>Check Address for rewards</Inter700>
          <SidebarCard>
            <Input type="text" placeholder="Enter an address" />
            <GreenButton>CHECK FOR REWARDS</GreenButton>
          </SidebarCard>
          <br />
        </div>
      </Menu>
    </MenuWrap>
  )
}

const BalanceBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const SidebarCard = styled(RoundedCard)`
  padding: 24px;
`
const Top = styled.div`
  position: absolute !important;
  border-top-left-radius: 32px;
  top: 0;
  left: 0;
  display: flex !important;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 64px;
  width: 100%;
  background: white;
  &:focus-visible {
    outline: none;
  }
`

export default Sidebar
