import { useEffect, useState } from 'react'

// Styled components
import styled from 'styled-components'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';

// React responsive
import { useMediaQuery } from 'react-responsive'

// Components
import RoundButton from '../buttons/RoundButton'
import ActionBanner from './ActionBanner'

// React visibility sensor
import VisibilitySensor from 'react-visibility-sensor'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Helpers
import fontSize from '../../helpers/fontSize'

function SubscribeActionBanner () {

  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)'})

  const [isContentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    AOS.init();
  })

  return (
    <MainContainer smallScreen={smallScreen}>
      <Container style={{ padding: smallScreen ? '0 10vw' : 0 }}>
        <ActionBanner 
          action={() => window.open('https://wa.me/6281385898240')}
          text='Be the first to updates and join our newsletter'
          actionText='Consult with us'
        />
        <VisibilitySensor onChange={(isVisible) => setContentVisible(isVisible)} active={!isContentVisible} partialVisibility={true}>
          <ContentContainer smallScreen={smallScreen} isContentVisible={isContentVisible}>
            <InnerContainer smallScreen={smallScreen}>
              <Row>
                <Col md={8} lg={8}>
                  <Form style={ { marginBottom: smallScreen ? '15px': 0 } }>
                    <Form.Control type='email' placeholder='Please enter your email address'  />
                  </Form>
                </Col>
                <Col md={4} lg={4}>
                  <RoundButton
                    action={() => window.open('/contact-us', '_self')}
                    textColor='#FFFFFF'
                    text='Subscribe'
                    textSize={smallScreen ? fontSize.bodySm : fontSize.bodySm}
                    backgroundColor="black"
                    radius='12px'
                  />
                </Col>
              </Row>
            </InnerContainer>
          </ContentContainer>
        </VisibilitySensor>
      </Container>
    </MainContainer>
  )

}

export default SubscribeActionBanner

const MainContainer = styled.div`
  background-color: #FFFFFF;
  padding: ${({ smallScreen }) => smallScreen ? '10px 0 10px 0' : '50px 0 50px 0'}
`
const ContentContainer = styled.div`
  padding: ${({ smallScreen }) => smallScreen ? '0 5vw' : '0'};
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1s;
  margin-bottom: ${({ smallScreen }) => smallScreen ? '5px' : '10px'};
`
const InnerContainer = styled.div`
  width: ${({ smallScreen }) => smallScreen ? '100%' : '700px'};
  padding: ${({ smallScreen }) => smallScreen ? '30px 0' : '50px 0'};
  text-align: center;
`