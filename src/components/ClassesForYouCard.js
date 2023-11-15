import { useEffect, useState } from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container'
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
import fontSize from '../helpers/fontSize'

// Images
import dummyImage1 from '../assets/images/dummy_image1.jpg'
import dummyImage2 from '../assets/images/dummy_image2.jpg'
import dummyImage3 from '../assets/images/dummy_image3.jpg'


function ClassesForYouCard() {

  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)' })

  const [classesList, setClassesList] = useState([
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
    },
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
    },
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
    },
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

  return (
    <MainContainer smallScreen={smallScreen}>
      <Heading>
      Classes for you
      </Heading>
      <Container fluid={true}>
        <Row noGutters={smallScreen}>
          {
            classesList.map((item, i) => {
              return (
                <Col sm={6} md={6} lg={4} key={i}>
                  <div data-aos="fade-up" data-aos-duration="2000">
                    <Images key={i} src={item?.courseImageUrl}/>
                    <TextContainer smallScreen={smallScreen}>
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
        </Row>
      </Container>
    </MainContainer>
  )

}

export default ClassesForYouCard

const MainContainer = styled.div`
  padding: ${({ smallScreen }) => smallScreen ? '20px 0 20px 0' : '50px 0 50px 0'};
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
`
const Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 10px;
`