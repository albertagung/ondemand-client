// Styled components
import styled from 'styled-components'

// Bootstrap
import Container from 'react-bootstrap/Container'

// React responsive
import { useMediaQuery } from 'react-responsive'

// Images
import LogoDummy from '../assets/images/Logo.png'
// import CloudxierLogo from '../assets/images/logo/cloudxier_logo_dark.png'
// import Facebook from '../assets/images/icons/facebook_dark.png'
// import Instagram from '../assets/images/icons/instagram_dark.png'
// import Linkedin from '../assets/images/icons/linkedin_dark.png'

// Helpers
// import CurrentYear from "../helpers/CurrentYear"

function Footer() {

  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)' })

  return (
    <MainContainer smallScreen={smallScreen}>
      <Container style={{
        padding: smallScreen ? '0 10vw' : '0'
      }}>
        <FlexContainer smallScreen={smallScreen}>
          <LeftContainer>
            {/* <BrandLogo src={CloudxierLogo} smallScreen={smallScreen} /> */}
            <LinkContainer smallScreen={smallScreen}>
              <LinkGroup smallScreen={smallScreen}>
                <NavItem href="/about" smallScreen={smallScreen}>
                  About
                </NavItem>
                <NavItem href="/courses" smallScreen={smallScreen}>
                  Courses
                </NavItem>
                <NavItem href="/blog" smallScreen={smallScreen}>
                  Blog
                </NavItem>
                <NavItem target='_blank' href="https://www.sustainability.co.id/" smallScreen={smallScreen}>
                  Contact us
                </NavItem>
                <NavItem href="/faq" smallScreen={smallScreen}>
                  FAQ
                </NavItem>
                <NavItem href="/my-account" smallScreen={smallScreen}>
                  My Account
                </NavItem>
              </LinkGroup>
              <LinkGroup smallScreen={smallScreen}>
                <NavItem href="become-a-member" smallScreen={smallScreen}>
                  Become a member
                </NavItem>
                <NavItem href="privacy-policy" smallScreen={smallScreen}>
                  Privacy Policy
                </NavItem>
                <NavItem href="terms-and-conditions" smallScreen={smallScreen}>
                  Terms and conditions
                </NavItem>
              </LinkGroup>
            </LinkContainer>
          </LeftContainer>
        </FlexContainer>
        {/* <Seperator /> */}
        <SmallBottomContainer smallScreen={smallScreen}>
          {/* <SmallBottomText smallScreen={smallScreen}>
            © Cloudxier. All Rights Reserved.
          </SmallBottomText> */}
          {/* <BrandLogo src={LogoDummy} /> */}
          <LogoContainer smallScreen={smallScreen}>
            {/* <Logo src={changeHeaderLogo()} /> */}
            <LogoText>GROWAcademy</LogoText>
          </LogoContainer>
          <SmallBottomTextSecondary smallScreen={smallScreen}>
            © 2023 GROWAcademy. All Rights Reserved
          </SmallBottomTextSecondary>
        </SmallBottomContainer>
      </Container>
    </MainContainer>
  )

}

export default Footer

const MainContainer = styled.div`
  background-color: #525252;
  padding: ${({ smallScreen }) => smallScreen ? '30px 0' : '50px 0'}
`
const FlexContainer = styled.div`
  display: ${({ smallScreen }) => smallScreen ? 'block' : 'flex'};
  justify-content: space-between;
  align-items: top;
  padding: ${({ smallScreen }) => smallScreen ? 'unset' : '0 30px;'}; 
`
const LeftContainer = styled.div`
  width: auto;
`
const BrandLogo = styled.img`
  width: 50%;
  max-width: 200px;
  height: auto;
  margin-bottom: ${({ smallScreen }) => smallScreen ? '20px' : '40px'}
`
const LogoContainer = styled.div`
  height: auto;
  width: ${({ smallScreen }) => smallScreen ? '160px' : '200px'}
`
const LogoText = styled.h1`
  color: #2F327D;
  font-weight: 800;
  text-decoration: none;
`
const DescriptionText = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? '8px' : '18px'};
  font-weight: 700;
  line-height: 30px;
`
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const LinkContainer = styled.div`
  display: flex;
  flex-direction: ${({ smallScreen }) => smallScreen ? 'column' : 'row'};
  gap: ${({ smallScreen }) => smallScreen ? 'unset' : '72px'};
`

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: ${({ smallScreen }) => smallScreen ? 'unset' : 'auto'};
  margin-bottom: 12px;
`

const NavItem = styled.a`
  margin-bottom: ${({ smallScreen }) => smallScreen ? '6px' : '12px'};
  font-size: ${({ smallScreen }) => smallScreen ? '12px' : '16px'};
  line-height: ${({ smallScreen }) => smallScreen ? '16px' : '20px'};
  color: white;
  cursor: pointer;
  text-decoration: none;
`
const SocialMediaContainer = styled.div`
  margin-bottom: ${({ smallScreen }) => smallScreen ? '20px' : '40px'}
`
const SocmedText = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? '12px' : '16px'};
  font-weight: bold;
  margin-bottom: ${({ smallScreen }) => smallScreen ? '8px' : '16px'};
  line-height: ${({ smallScreen }) => smallScreen ? '16px' : '20px'};
`
const SocmedLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const SocmedIcon = styled.img`
  width: ${({ smallScreen }) => smallScreen ? '12px' : '15px'};
  height: ${({ smallScreen }) => smallScreen ? '12px' : '20px'};
  margin-right: ${({ smallScreen }) => smallScreen ? '10px' : '30px'};
  object-fit: contain;
  cursor: pointer;
`
const Seperator = styled.div`
  height: 1px;
  width: 100%;
  background-color: black;
  margin-bottom: 20px;
`

const SmallBottomContainer = styled.div`
  display: ${({ smallScreen }) => smallScreen ? 'block' : 'flex'};
  justify-content: space-between;
  align-items: top;
  padding: ${({ smallScreen }) => smallScreen ? 'unset' : '0 30px;'};
  margin-top: ${({ smallScreen }) => smallScreen ? '20px' : '50px'};
`
const SmallBottomText = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? '10px' : '20px'};
  line-height: 40px;
`

const SmallBottomTextSecondary = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? '9px' : '18px'};
  line-height: 40px;
  color: white;
`

const AcknowledgementContainer = styled.div`
  padding-bottom: ${({ smallScreen }) => smallScreen ? '0' : '50px'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%
`