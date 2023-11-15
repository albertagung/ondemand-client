import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

// Styled components
import styled from 'styled-components'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

// Component
import RoundButton from '../components/buttons/RoundButton'
import RelateCourseBanner from '../components/banners/RelateCourseBanner';
import EarnCertificateBanner from '../components/banners/EarnCertificateBanner';
import CourseAccordionList from '../components/CourseAccordionList';

// Helpers
import fontSize from '../helpers/fontSize'

// React responsive
import { useMediaQuery } from 'react-responsive'

// Images
import ClockIcon from '../assets/images/clock_icon.png'
import LanguageIcon from '../assets/images/language_icon.png'
import LevelIcon from '../assets/images/level_icon.png'
import dummyImage1 from '../assets/images/dummy_image1.jpg'
import dummyImage4 from '../assets/images/dummy_image4.jpg'
import ChevronRight from '../assets/images/chevron_right_dark.png'
import AvatarInstructor from '../assets/images/dummy_avatar.jpg'

function CourseDetail () {
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

  const [tabList, setTabList] = useState([
    {
      eventKey: 'about',
      name: 'About the course'
    },
    {
      eventKey: 'outcome',
      name: 'Outcomes'
    },
    {
      eventKey: 'discussion',
      name: 'Discussions'
    },
    {
      eventKey: 'review',
      name: 'Reviews'
    }
  ])

  const [tags, setTags] = useState([
    'Marketing',
    'Digital',
    'Technology',
    'Innovation'
  ])

  const [eventKey, setEventKey] = useState('about')

  const [clicked, setClicked] = useState('0')

  const courseList = [
    {
      courseName: 'How to become a marketer',
      courseLength: '5 lessons • 01:18:25',
      lessonList: [
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        },
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        },
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        },
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        },
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        }
      ]
    },
    {
      courseName: 'Marketing essentials',
      courseLength: '5 lessons • 01:18:25',
      lessonList: [
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        },
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        },
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        },
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        },
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        }
      ]
    },
    {
      courseName: 'Tools you need to market your business',
      courseLength: '5 lessons • 01:18:25',
      lessonList: [
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        },
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        },
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        },
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        },
        {
          lessonName: 'Defining your competitor analysis',
          contentType: 'video',
          lessonLength: '00:15:39'
        }
      ]
    }
  ]

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
     }
     setClicked(index)
  }

  return (
    <MainContainer smallScreen={smallScreen}>
      <Container fluid={true}>
        <Row style={{ padding: smallScreen ? '0px 5vw' : '0px 150px 0px 150px' }} noGutters={smallScreen}>
          <Col sm={8} lg={8}>
            <ImagesCourse src={dummyImage4} />
            <TextTitle smallScreen={smallScreen} className='my-3'>
              Introduction to marketing
            </TextTitle>
            <TextDesc smallScreen={smallScreen} className='my-3'>
              Lorem ipsum dolor sit amet consectetur. Proin nulla donec orci elementum vel amet neque senectus varius. 
            </TextDesc>
            <TextCourseLength smallScreen={smallScreen} className='my-3'>
              2 COURSES, 10 LESSONS
            </TextCourseLength>
          </Col>
          <Col sm={4} lg={4} className='my-3'>
            <InstructorContainer smallScreen={smallScreen}>
              <ContentImageBorder src={AvatarInstructor}/>
              <p>INSTRUCTOR</p>
              <div className="d-flex align-items-center my-3">
                <InstructorName className="me-3" smallScreen={smallScreen}>John Doe</InstructorName>
                <ViewProfile onClick={() => history.push(`/instructor/1`)}>
                  View profile
                  <ImagesInstructor src={ChevronRight} smallScreen={smallScreen} className='ms-2'/>
                </ViewProfile>
              </div>
              <div>
                <img src={ClockIcon} width='25px' className='me-2 my-3'/>
                <span>10 hrs 30 mins</span>
              </div>
              <div>
                <img src={LanguageIcon} width='25px' className='me-2 my-3'/>
                <span>English</span>
              </div>
              <div>
                <img src={LevelIcon} width='25px' className='me-2 my-3'/>
                <span>Intermediate</span>
              </div>
              <div className='mt-3'>
                <Button className='px-5 py-2 text-white' variant='warning' style={{backgroundColor: '#F48C06', borderRadius: '25px'}}>
                  Add to my class
                </Button>
              </div>
            </InstructorContainer>
          </Col>
        </Row>
        {
          courseList.map((course, index) => {
            return (
              <CourseAccordionList
                key={index} 
                course={course}
                isActive={clicked === index}
                onToggle={() => handleToggle(index)}
              />
            )    
          })
        }
        <Row style={{ padding: smallScreen ? '0px 5vw' : '0px 150px 0px 150px', backgroundColor: '#F5F9FF' }} noGutters={smallScreen}>
          {
            smallScreen ? (
              <div className='d-flex mt-3'>
                <ScrollContainer smallScreen={smallScreen}>
                  {
                    tabList.map((item, i) => {
                      return (
                        <Nav.Item key={i} className='me-5'>
                          <Nav.Link eventKey={item.eventKey} onClick={() => { setEventKey(item.eventKey) }} style={{ color: eventKey == item.eventKey ? 'black' : '#A1A1A1', borderBottom: eventKey == item.eventKey ? '4px solid black' : '' }}>
                          {item.name}
                          </Nav.Link>
                        </Nav.Item>
                      )
                    })
                  }     
                </ScrollContainer>
              </div>
            )
            : (
              <Nav variant="underline" className='mt-3'>
                {
                  tabList.map((item, i) => {
                    return (
                      <Nav.Item key={i} className='me-5'>
                        <Nav.Link eventKey={item.eventKey} onClick={() => { setEventKey(item.eventKey) }} style={{ color: eventKey == item.eventKey ? 'black' : '#A1A1A1', borderBottom: eventKey == item.eventKey ? '4px solid black' : '' }}>
                          {item.name}
                        </Nav.Link>
                      </Nav.Item>
                    )
                  })
                }
              </Nav>
            )
          }
        </Row>
        <Row className='border-bottom border-top' style={{ padding: smallScreen ? '0px 5vw' : '0px 150px 0px 150px', backgroundColor: '#F5F9FF' }} noGutters={smallScreen}>
          <Col lg={12}>
            <Tab.Container defaultActiveKey='about'>
              <Row className=''>
                <Col lg={10}>
                  <Tab.Content>
                    {
                      eventKey == 'about' && (
                        <div className="my-3 mt-5">
                          <div className="mb-5">
                            <TextHeader smallScreen={smallScreen} className="mb-2">
                              About this course
                            </TextHeader>
                            <TextContent smallScreen={smallScreen}>
                              Lorem ipsum dolor sit amet consectetur. Magna ut viverra dictum ipsum in urna a. Leo sodales ac lacus enim laoreet vitae ut aliquam. A mus varius elit aliquet scelerisque feugiat. Commodo mauris tincidunt amet nec tincidunt mauris dictum pharetra neque. Commodo purus viverra varius nullam elementum condimentum felis. Est ultrices varius aliquam adipiscing id nisi vitae pellentesque. Diam turpis aliquam elit tempor nec. At congue non facilisi urna. Aliquam nulla sagittis non pellentesque tellus bibendum. Consectetur sed malesuada facilisi a tempor porttitor. Habitant sed duis in in donec malesuada fames a orci.
                            </TextContent>
                          </div>
                          <div className="mb-5">
                            <TextHeader smallScreen={smallScreen} className="mb-2">
                              What you will learn
                            </TextHeader>
                            <TextContent smallScreen={smallScreen}>
                              Lorem ipsum dolor sit amet consectetur. Magna ut viverra dictum ipsum in urna a. Leo sodales ac lacus enim laoreet vitae ut aliquam. A mus varius elit aliquet scelerisque feugiat. Commodo mauris tincidunt amet nec tincidunt mauris dictum pharetra neque. Commodo purus viverra varius nullam elementum condimentum felis. Est ultrices varius aliquam adipiscing id nisi vitae pellentesque. Diam turpis aliquam elit tempor nec. At congue non facilisi urna. Aliquam nulla sagittis non pellentesque tellus bibendum. Consectetur sed malesuada facilisi a tempor porttitor. Habitant sed duis in in donec malesuada fames a orci.
                            </TextContent>
                          </div>
                          <div className="mb-5">
                            <TextHeader smallScreen={smallScreen} className="mb-2">
                              Target audience
                            </TextHeader>
                            <TextContent smallScreen={smallScreen}>
                              Lorem ipsum dolor sit amet consectetur. Magna ut viverra dictum ipsum in urna a. Leo sodales ac lacus enim laoreet vitae ut aliquam. A mus varius elit aliquet scelerisque feugiat. Commodo mauris tincidunt amet nec tincidunt mauris dictum pharetra neque. Commodo purus viverra varius nullam elementum condimentum felis. Est ultrices varius aliquam adipiscing id nisi vitae pellentesque. Diam turpis aliquam elit tempor nec. At congue non facilisi urna. Aliquam nulla sagittis non pellentesque tellus bibendum. Consectetur sed malesuada facilisi a tempor porttitor. Habitant sed duis in in donec malesuada fames a orci.
                            </TextContent>
                            <br />
                            <TextContent smallScreen={smallScreen}>
                              Lorem ipsum dolor sit amet consectetur. Magna ut viverra dictum ipsum in urna a. Leo sodales ac lacus enim laoreet vitae ut aliquam. A mus varius elit aliquet scelerisque feugiat. Commodo mauris tincidunt amet nec tincidunt mauris dictum pharetra neque. Commodo purus viverra varius nullam elementum condimentum felis. Est ultrices varius aliquam adipiscing id nisi vitae pellentesque. Diam turpis aliquam elit tempor nec. At congue non facilisi urna. Aliquam nulla sagittis non pellentesque tellus bibendum. Consectetur sed malesuada facilisi a tempor porttitor. Habitant sed duis in in donec malesuada fames a orci.
                            </TextContent>
                          </div>
                        </div>
                      )
                    }
                    {
                      eventKey == 'outcome' && (
                        <div className="my-3 mt-5">
                          <TextHeader smallScreen={smallScreen} className="mb-2">
                            Outcomes
                          </TextHeader>
                          <span className='mb-5'>
                            <ul>
                              <li>
                                Lorem ipsum dolor sit amet consectetur.
                              </li>
                              <li>
                                Magna ut viverra dictum ipsum in urna a.
                              </li>
                              <li>
                                Leo sodales ac lacus enim laoreet vitae ut aliquam
                              </li>
                              <li>
                              A mus varius elit aliquet scelerisque feugiat. Commodo mauris tincidunt amet nec tincidunt mauris dictum pharetra neque. 
                              </li>
                              <li>
                              Commodo purus viverra varius nullam elementum condimentum felis. Est ultrices varius aliquam adipiscing id nisi vitae pellentesque.
                              </li>
                            </ul>
                          </span>
                          <span className='mb-5'>
                          Lorem ipsum dolor sit amet consectetur. Magna ut viverra dictum ipsum in urna a. Leo sodales ac lacus enim laoreet vitae ut aliquam. A mus varius elit aliquet scelerisque feugiat. Commodo mauris tincidunt amet nec tincidunt mauris dictum pharetra neque. Commodo purus viverra varius nullam elementum condimentum felis. Est ultrices varius aliquam adipiscing id nisi vitae pellentesque. Diam turpis aliquam elit tempor nec. At congue non facilisi urna. Aliquam nulla sagittis non pellentesque tellus bibendum. Consectetur sed malesuada facilisi a tempor porttitor. Habitant sed duis in in donec malesuada fames a orci.
                          </span>
                        </div>
                      )
                    }
                    {
                      eventKey == 'discussion' && (
                        <div className="my-3 mt-5">
                          <TextHeader smallScreen={smallScreen} className="mb-2">
                            Discussions
                          </TextHeader>
                        </div>
                      )
                    }
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
          <div className='mb-5'>
            <TextTags>Tags</TextTags>
            <div className='d-flex flex-wrap my-3'>
              {
                tags.map((item, i) => {
                  return (
                    <Stack direction='horizontal' gap={2} key={i}>
                      <Badge pill bg="light" text="dark">
                        <TextTagList>
                          {item}
                        </TextTagList>
                      </Badge>
                    </Stack>
                  )
                })
              }
            </div>
          </div>
        </Row>
        <Row style={{ padding: smallScreen ? '0px 5vw' : '0px 150px 0px 150px', backgroundColor: '#F5F9FF' }} noGutters={smallScreen}>
          <RelateCourseBanner />
        </Row>
        <Row style={{ padding: smallScreen ? '0px 5vw' : '0px 150px 0px 150px' }} >
          <EarnCertificateBanner />
        </Row>
      </Container>
    </MainContainer>
  )
}

export default CourseDetail

const MainContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  padding: ${({ smallScreen }) => smallScreen ? '20vw 0px' : '150px 0px 0px 0px'};
`
const InstructorContainer = styled.div`
  padding-left: ${({ smallScreen }) => smallScreen ? '0px' : '50px'};
`
const TextTitle = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading2Sm : fontSize.heading2Lg};
  color: #4D4AD9;
  font-weight: 700;
`
const TextDesc = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading4Sm : fontSize.heading2Sm};
  color: black;
  font-weight: 400;
`
const TextCourseLength = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading3Sm : fontSize.heading2Sm};
  color: #034AB5;
  font-weight: 400;
`
const TextHeader = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading1Sm : fontSize.heading4Lg};
  color: black;
  font-weight: 700;
`
const TextContent = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading4Sm : fontSize.heading2Sm};
  color: black;
  font-weight: 400;
`
const TextTags = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading3Sm : fontSize.heading1Sm};
  color: black;
  font-weight: 400;
`
const TextTagList = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading4Sm : fontSize.heading4Sm};
  color: black;
  font-weight: 500;
  padding: 5px;
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
const ImagesCourse = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
`
const ImagesInstructor = styled.img`
  width: ${({ smallScreen }) => smallScreen ? '10px' : '8px'};
  object-fit: cover;
`
const InstructorName = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading1Sm : fontSize.heading4Lg};
  color: black;
  font-weight: 700;
`
const ViewProfile = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading4Sm : fontSize.heading4Sm};
  color: black;
  font-weight: 400;
  cursor: pointer;
`
const ScrollContainer = styled.div`
  display: -webkit-box;
  overflow-y: auto;
  gap: 40px;
  scroll-behavior: smooth;
  padding: 20px;
`