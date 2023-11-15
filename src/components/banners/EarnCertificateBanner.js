import { useEffect, useState, useRef } from 'react'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Styled components
import styled from 'styled-components'

// React responsive
import { useMediaQuery } from 'react-responsive'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Helpers
import fontSize from '../../helpers/fontSize'

// Images
import EarnCertificateLogo from '../../assets/images/certificate_icon.png'

function EarnCertificateBanner() {

  const smallScreen = useMediaQuery({ query: '(max-width: 575px)' })

  return (
    <MainContainer smallScreen={smallScreen}>
      <FlexContainer smallScreen={smallScreen}>
        <Row className='justify-content-center'>
          <Col sm={3} md={2} lg={2}>
            <Images src={EarnCertificateLogo} smallScreen={smallScreen} />
          </Col>
          <Col sm={6} md={6} lg={6} className='mt-md-2'>
            <ContentContainer className='text-start' smallScreen={smallScreen}>
              <TextHeader smallScreen={smallScreen}>
                Earn certificate by the end of this course
              </TextHeader>
              <TextSubHeader smallScreen={smallScreen}>
                Lorem ipsum dolor sit amet consectetur. Et nisl leo magna tellus tincidunt sed maecenas. A euismod iaculis vitae elementum lacus. Auctor ut nec feugiat vel fames in semper risus.
              </TextSubHeader>
            </ContentContainer>
          </Col>
        </Row>
      </FlexContainer>
    </MainContainer>
  )
}

export default EarnCertificateBanner

const MainContainer = styled.div`
  background-color: #FFFFFF;
  padding: ${({ smallScreen }) => smallScreen ? '30px 0 5px 0' : '50px 0 50px 0'}
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: ${({ smallScreen }) => smallScreen ? '0px' : '10px'};
`
const ContentContainer = styled.div`
  margin-top: ${({ smallScreen }) => smallScreen ? '30px' : '0px'}
`
const TextHeader = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading3Sm : fontSize.heading4Lg};
  color: #2F327D;
  font-weight: 700;
  margin-bottom: 30px
`
const TextSubHeader = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading3Sm : fontSize.heading2Sm};
  color: black;
  font-weight: 400;
  margin-bottom: 30px
`
const Images = styled.img`
  width: ${({ smallScreen }) => smallScreen ? '100px' : '100%'};
  // height: 100%;
  object-fit: contain
`