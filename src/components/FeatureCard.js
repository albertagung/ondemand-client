import { useEffect, useState } from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// Styled components
import styled from 'styled-components'

// Components
import SectionHeading from '../components/headings/SectionHeading'

// React visibility sensor
import VisibilitySensor from 'react-visibility-sensor'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// React responsive
import { useMediaQuery } from 'react-responsive'

// Helpers
import fontSize from '../helpers/fontSize'

// Images
import CertificateLogo from '../assets/images/certificate.png'
import SaveYourTimeLogo from '../assets/images/save_your_time.png'
import CommunityLogo from '../assets/images/community.png'

function FeatureCard() {

  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)' })

  const [isContentVisible, setContentVisible] = useState(false)

  const content = [
    {
      title: 'Get certificate',
      description: "Lorem ipsum dolor sit amet consectetur. Et nisl leo magna tellus tincidunt sed maecenas. A euismod iaculis vitae elementum lacus. Auctor ut nec feugiat vel fames in semper risus.",
      imgUrl: CertificateLogo,
      transition: 'fade-right'
    },
    {
      title: 'Save your time',
      description: "Lorem ipsum dolor sit amet consectetur. Et nisl leo magna tellus tincidunt sed maecenas. A euismod iaculis vitae elementum lacus. Auctor ut nec feugiat vel fames in semper risus.",
      imgUrl: SaveYourTimeLogo,
      transition: 'fade-up'
    },
    {
      title: 'Engage with community',
      description: "Lorem ipsum dolor sit amet consectetur. Et nisl leo magna tellus tincidunt sed maecenas. A euismod iaculis vitae elementum lacus. Auctor ut nec feugiat vel fames in semper risus.",
      imgUrl: CommunityLogo,
      transition: 'fade-left'
    },
  ]

  useEffect(() => {
    AOS.init();
  })

  return (
    <FeatureContainer smallScreen={smallScreen}>
      <Container style={{ padding: smallScreen ? '0 10vw' : 0 }}>
        <SectionHeading
          title='Start learning from anywhere'
          subtitle='Lorem ipsum dolor sit amet consectetur. Proin nulla donec orci elementum vel amet neque senectus varius. '
          titleColor='#4D4AD9'
        />
        <VisibilitySensor onChange={(isVisible) => setContentVisible(isVisible)} active={!isContentVisible} partialVisibility={true}>
          <ContentContainer smallScreen={smallScreen} isContentVisible={isContentVisible}>
            <Row>
              {
                content.map((item, i) => {
                  return (
                    <Col key={i} md={12} lg={4}
                    data-aos={item.transition} data-aos-duration="2000">
                      <ContentImageContainer>
                        <ContentImageBorder>
                          <ContentImage key={i} src={item?.imgUrl} />
                        </ContentImageBorder>
                      </ContentImageContainer>
                      <ContentHeader smallScreen={smallScreen}>
                        {item.title}
                      </ContentHeader>
                      <ContentDescription smallScreen={smallScreen}>
                        {item.description}
                      </ContentDescription>
                    </Col>
                  )
                })
              }
            </Row>
          </ContentContainer>
        </VisibilitySensor>
      </Container>
    </FeatureContainer>
  )

}

export default FeatureCard

const FeatureContainer = styled.div`
  background-color: #FFFFFF;
  padding: ${({ smallScreen }) => smallScreen ? '30px 0 30px 0' : '50px 0 50px 0'};
  margin-top: ${({ smallScreen }) => smallScreen ? '100vh': '120vh'}
`
const ContentContainer = styled.div`
  opacity: ${({ isContentVisible }) => isContentVisible ? 1 : 0};
  padding-top: ${({ smallScreen }) => smallScreen ? '30px' : '50px'};
  transition: opacity 2s ease-in-out;
`
const ContentHeader = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading2Sm : fontSize.heading2Lg};
  color: #2F327D;
  font-weight: 500;
  text-align: center;
  margin-bottom: ${({ smallScreen }) => smallScreen ? '10px' : '30px'}
`
const ContentDescription = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.bodySm : fontSize.bodyLg};
  color: black;
  text-align: center;
  margin-bottom: ${({ smallScreen }) => smallScreen ? '30px' : '40px'}
`
const ContentImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ smallScreen }) => smallScreen ? '30px' : '60px'}
`
const ContentImageBorder = styled.div`
  padding: ${({ smallScreen }) => smallScreen ? '20px' : '30px'};
  width: ${({ smallScreen }) => smallScreen ? '20px' : '120px'};
  height: ${({ smallScreen }) => smallScreen ? '20px' : '120px'};
  border-radius: 50%;
  background-color: #4D4AD9;
  vertical-align: middle;
`
const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const ActionButtonContainer = styled.div`
  padding-top: ${({ smallScreen }) => smallScreen ? fontSize.bodySm : fontSize.bodyLg};
  display: flex;
  justify-content: center;
  align-items: center
`