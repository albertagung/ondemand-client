import { useEffect, useState, useRef } from 'react'

// Bootstrap
import Col from 'react-bootstrap/Col'

// Styled components
import styled from 'styled-components'

// React responsive
import { useMediaQuery } from 'react-responsive'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Helpers
import fontSize from '../helpers/fontSize'

// Images
import dummyImage1 from '../assets/images/dummy_image1.jpg'
import dummyImage2 from '../assets/images/dummy_image2.jpg'
import dummyImage3 from '../assets/images/dummy_image3.jpg'
import ChevronRight from '../assets/images/chevron_right_dark.png'


function TopPicksCard() {
  const valuesContainerRef = useRef(null)
  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)' })

  const [picks, setPicks] = useState([
    {
      courseImageUrl: dummyImage1,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseImageUrl: dummyImage2,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseImageUrl: dummyImage3,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    }
  ])

  useEffect(() => {
    AOS.init();
  })

  const slideLeft = () => {
    if (valuesContainerRef?.current) {
      valuesContainerRef.current.scrollLeft -= smallScreen ? 150 : 250
    }
  }

  const slideRight = () => {
    if (valuesContainerRef?.current) {
      valuesContainerRef.current.scrollLeft += smallScreen ? 150 : 250
    }
  }

  return (
    <MainContainer smallScreen={smallScreen}>
      <Heading>
      Top picks
      </Heading>
      <ContentContainer smallScreen={smallScreen}>
        <SlideButton onClick={slideLeft} ><SlideButtonIcon src={ChevronRight} alt='left' style={{ transform: "rotate(180deg)" }} /></SlideButton>
        <ValuesContainer smallScreen={smallScreen} ref={valuesContainerRef}>
          {
            picks.map((item, i) => {
              return (
                <Col sm={6} md={6} key={i}>
                  <div data-aos="fade-left" data-aos-duration="2000">
                    <Images key={i} src={item?.courseImageUrl} smallScreen={smallScreen}/>
                    <TextContainer>
                      <TextFlexContainer smallScreen={smallScreen}>
                        <TextHeader smallScreen={smallScreen}>
                          {item?.courseName}
                        </TextHeader>
                        <TextSubHeader smallScreen={smallScreen}>
                          {item?.courseDuration}
                        </TextSubHeader>
                      </TextFlexContainer>
                      <TextSubHeader smallScreen={smallScreen}>
                        {item.courseLength}
                      </TextSubHeader>
                    </TextContainer>
                  </div>
                </Col>
              )
            })
          }
        </ValuesContainer>
        <SlideButton onClick={slideRight} ><SlideButtonIcon src={ChevronRight} alt='right' /></SlideButton>
      </ContentContainer>
    </MainContainer>
  )

}

export default TopPicksCard

const MainContainer = styled.div`
  padding: ${({ smallScreen }) => smallScreen ? '20px 0 20px 0' : '50px 0 50px 0'};
`
const ContentContainer = styled.div`
  display: flex;
  align-items:center;
`
const ValuesContainer = styled.div`
    display: flex;
    overflow-y: auto;
    gap: ${({ smallScreen }) => smallScreen ? '10px' : '40px'};
    scroll-behavior: smooth;
`
const Heading = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading3Sm : fontSize.heading3Lg};
  color: #4D4AD9;
  font-weight: 700;
  margin-bottom: 30px
`
const TextContainer = styled.div`
  margin-bottom: 30px;
`
const TextFlexContainer = styled.div`
  display: ${({ smallScreen }) => smallScreen ? 'block' : 'flex'};
  justify-content: space-between;
  vertical-align: middle;
`
const TextHeader = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading3Sm : fontSize.heading2Sm};
  color: black;
  font-weight: 700;
`
const TextSubHeader = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading4Sm : fontSize.heading3Sm};
  color: black;
  font-weight: 400;
  margin-bottom: ${({ smallScreen }) => smallScreen ? '10px': '0'}
`
const Images = styled.img`
  width: ${({ smallScreen }) => smallScreen ? '250px' : '100%'};
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 10px;
`
const SlideButton = styled.button`
    border: none;
    background-color: transparent;
    height: min-content;
    padding: 8px;
`
const SlideButtonIcon = styled.img`
    object-fit: cover;
    height: 18px;
`