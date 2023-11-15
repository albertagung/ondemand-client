import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

// Styled components
import styled from 'styled-components'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// Helpers
import fontSize from '../helpers/fontSize'

// React responsive
import { useMediaQuery } from 'react-responsive'

// Images
import AvatarInstructor from '../assets/images/dummy_avatar.jpg'
import dummyImage1 from '../assets/images/dummy_image1.jpg'
import dummyImage2 from '../assets/images/dummy_image2.jpg'
import dummyImage3 from '../assets/images/dummy_image3.jpg'
import ChevronRight from '../assets/images/chevron_right_dark.png'
import RatingIcon from '../assets/images/rating_icon.png'
import ReviewIcon from '../assets/images/review_icon.png'
import VideoIcon from '../assets/images/video_icon.png'

function InstructorDetail () {
  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)'})
  const history = useHistory()

  // Scroll window to top on load
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  const [courses, setClassesList] = useState([
    {
      courseId: "2334bbae",
      courseImageUrl: dummyImage1,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseId: "2334bbae",
      courseImageUrl: dummyImage2,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseId: "2334bbae",
      courseImageUrl: dummyImage3,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseId: "2334bbae",
      courseImageUrl: dummyImage1,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseId: "2334bbae",
      courseImageUrl: dummyImage2,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseId: "2334bbae",
      courseImageUrl: dummyImage3,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseId: "2334bbae",
      courseImageUrl: dummyImage1,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseId: "2334bbae",
      courseImageUrl: dummyImage2,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseId: "2334bbae",
      courseImageUrl: dummyImage3,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseId: "2334bbae",
      courseImageUrl: dummyImage1,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseId: "2334bbae",
      courseImageUrl: dummyImage2,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    },
    {
      courseId: "2334bbae",
      courseImageUrl: dummyImage3,
      courseName: 'Introduction to Marketing',
      courseLength: '2 COURSES, 10 LESSONS',
      courseDuration: '5hrs 20mins'
    }
  ])

  return (
    <MainContainer smallScreen={smallScreen}>
      <Container fluid={true}>
        <Row className="mb-5" style={{ padding: smallScreen ? '0px 5vw' : '0px 150px 0px 150px' }}>
          <hr />
          <TextMainPage className='mb-5' smallScreen={smallScreen}>Instructor Profile</TextMainPage>
          <Col sm={7} lg={7}>
            <Row>
              <LeftContainer smallScreen={smallScreen}>
                <ContentImageBorder src={AvatarInstructor}/>
                <div className='ms-md-4'>
                  <div className="mb-3">
                    <TextInstructorName smallScreen={smallScreen}>John Doe</TextInstructorName>
                  </div>
                  <div className='mb-3'>
                    <span>Marketing specialist and curriculum director <br></br> at Princeton University</span>
                  </div>
                  <div>
                    <a href="www.linkedin.com/johndoe">www.linkedin.com/johndoe</a>
                  </div>
                </div>
              </LeftContainer>
            </Row>
          </Col>
          <Col sm={5} lg={5} className='mt-3'>
            <RightContainer className='my-3'>
              <img src={RatingIcon} width='25px' className='me-3' />
              <span>4.8 Instructor rating</span>
            </RightContainer>
            <RightContainer className='my-3'>
              <img src={ReviewIcon} width='25px' className='me-3' />
              <span>200 reviews</span>
            </RightContainer>
            <RightContainer className='my-3'>
              <img src={VideoIcon} width='25px' className='me-3' />
              <span>8 courses</span>
            </RightContainer>
          </Col>
        </Row>
        <Row className='mb-5' style={{ padding: smallScreen ? '0px 5vw' : '0px 150px 0px 150px' }}>
          <TextSectionPage smallScreen={smallScreen}>Biography</TextSectionPage>
          <hr />
          <Col sm={6} md={7} lg={7}>
            <span>
            Lorem ipsum dolor sit amet consectetur. Magna ut viverra dictum ipsum in urna a. Leo sodales ac lacus enim laoreet vitae ut aliquam. A mus varius elit aliquet scelerisque feugiat. Commodo mauris tincidunt amet nec tincidunt mauris dictum pharetra neque. Commodo purus viverra varius nullam elementum condimentum felis. Est ultrices varius aliquam adipiscing id nisi vitae pellentesque. Diam turpis aliquam elit tempor nec. At congue non facilisi urna. Aliquam nulla sagittis non pellentesque tellus bibendum. Consectetur sed malesuada facilisi a tempor porttitor. Habitant sed duis in in donec malesuada fames a orci.
            </span>
          </Col>
        </Row>
        <Row className='mb-5' style={{ padding: smallScreen ? '0px 5vw' : '0px 150px 0px 150px' }}>
          <TextSectionPage smallScreen={smallScreen}>Courses</TextSectionPage>
          <hr />
          {
            courses.map((item, i) => {
              return (
                <Col sm={6} md={4} lg={4} key={i} className='mt-3'>
                  <CourseContainer onClick={() => history.push(`/courses/${item.courseId}`)}>
                    <Images key={i} src={item?.courseImageUrl}/>
                    <TextContainer>
                      <TextFlexContainer smallScreen={smallScreen}>
                        <TitleHeader smallScreen={smallScreen}>
                          {item?.courseName}
                        </TitleHeader>
                        <TitleSubHeader smallScreen={smallScreen}>
                          {item?.courseDuration}
                        </TitleSubHeader>
                      </TextFlexContainer>
                      <TitleSubHeader smallScreen={smallScreen}>
                        {item.courseLength}
                      </TitleSubHeader>
                    </TextContainer>
                  </CourseContainer>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </MainContainer>
  )
}

export default InstructorDetail

const MainContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  padding: ${({ smallScreen }) => smallScreen ? '20vw 0px' : '150px 0px 0px 0px'};
`
const ContentImageBorder = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #D9D9D9;
  vertical-align: middle;
  margin-bottom: 20px;
  object-fit: cover;
`
const CourseContainer = styled.div`
  :hover {
    cursor: pointer;
  }
`
const LeftContainer  = styled.div`
  display: ${({ smallScreen }) => smallScreen ? 'block': 'flex'};
`
const RightContainer = styled.div`
  vertical-align: middle;
`
const TextInstructorName = styled.span`
  font-weight: 700;
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading1Sm : fontSize.heading4Lg};
`
const TextMainPage = styled.h3`
  color: #4D4AD9;
  font-weight: 700;
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading3Lg : fontSize.heading1Lg};
`
const TextSectionPage = styled.span`
  color: black;
  font-weight: 700;
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading2Sm : fontSize.heading4Lg};
  margin-bottom: 10px;
`
const TextContainer = styled.div`
  margin-bottom: 30px;
`
const TextFlexContainer = styled.div`
  display: ${({ smallScreen }) => smallScreen ? 'block' : 'flex'};
  justify-content: space-between;
  vertical-align: middle;
`
const TitleHeader = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading3Sm : fontSize.heading2Sm};
  color: black;
  font-weight: 700;
`
const TitleSubHeader = styled.div`
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