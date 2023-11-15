import { useEffect, useState } from 'react'

// Styled components
import styled from 'styled-components'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// React responsive
import { useMediaQuery } from 'react-responsive'

// Components
import SectionHeading from '../headings/SectionHeading'
import RoundButton from '../buttons/RoundButton'

// React visibility sensor
import VisibilitySensor from 'react-visibility-sensor'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Helpers
import fontSize from '../../helpers/fontSize'

// Images
import ForInstructorsImage from '../../assets/images/for_instructors.png'
import ForStudentsImage from '../../assets/images/for_students.png'

function JoinActionBanner ({ text, action, actionText }) {

  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)'})

  const [isContentVisible, setContentVisible] = useState(false)

  const content = [
    {
      title: 'For Instructors',
      imgUrl: ForInstructorsImage,
      transition: 'fade-right'
    },
    {
      title: 'For students',
      imgUrl: ForStudentsImage,
      transition: 'fade-left'
    }
  ]

  useEffect(() => {
    AOS.init();
  })

  return (
    <MainContainer smallScreen={smallScreen}>
      <Container fluid={true}>
        <SectionHeading
          title='Join GROWAcademy'
          subtitle='Lorem ipsum dolor sit amet consectetur. Odio diam cras sapien leo quisque sagittis feugiat id. Proin risus ultricies libero justo. Tellus tincidunt sit nibh donec amet nam in. Leo laoreet nunc tristique egestas. '
          titleColor='#4D4AD9'
        />
        <VisibilitySensor onChange={(isVisible) => setContentVisible(isVisible)} active={!isContentVisible} partialVisibility={true}>
          <ContentContainer smallScreen={smallScreen} isContentVisible={isContentVisible}>
            <Row>
              {
                content.map((item, i) => {
                  return (
                    <Col key={i} sm={12} md={12} lg={6}>
                      <FlexContainer data-aos={item.transition} data-aos-duration="2000" smallScreen={smallScreen}>
                        <Images key={i} src={item?.imgUrl}/>
                        <TitleContainer>
                          <TitleHeader smallScreen={smallScreen}>
                            {item.title}
                          </TitleHeader>
                          <RoundButton
                            action={() => window.open('/contact-us', '_self')}
                            textColor='#FFFFFF'
                            text='Learn more'
                            textSize={smallScreen ? fontSize.bodySm : fontSize.bodySm}
                            backgroundColor='transparant'
                            hoverBgColor='#0053CF'
                            hoverTextColor='#FFFFFF'
                            radius='80px'
                          />
                        </TitleContainer>
                      </FlexContainer>
                    </Col>
                  )
                })
              }
            </Row>
          </ContentContainer>
        </VisibilitySensor>
      </Container>
    </MainContainer>
  )

}

export default JoinActionBanner

const MainContainer = styled.div`
  background-color: #FFFFFF;
  padding: ${({ smallScreen }) => smallScreen ? '30px 0 30px 0' : '50px 0 50px 0'}
`
const FlexContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: ${({ smallScreen }) => smallScreen ? '5px' : '10px'};
`
const ContentContainer = styled.div`
  padding-top: ${({ smallScreen }) => smallScreen ? '30px' : '50px'};
`
const TitleContainer = styled.div`
  position: absolute;
  z-index: 2;
`
const TitleHeader = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading2Sm : fontSize.heading2Lg};
  color: #FFFFFF;
  font-weight: 500;
  text-align: center;
  margin-bottom: ${({ smallScreen }) => smallScreen ? '10px' : '30px'};
`
const Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain
`