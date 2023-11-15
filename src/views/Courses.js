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
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

// Component
import RoundButton from '../components/buttons/RoundButton'

// Helpers
import fontSize from '../helpers/fontSize'

// React responsive
import { useMediaQuery } from 'react-responsive'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Images
import dummyImage1 from '../assets/images/dummy_image1.jpg'
import dummyImage2 from '../assets/images/dummy_image2.jpg'
import dummyImage3 from '../assets/images/dummy_image3.jpg'
import FilterIcon from '../assets/images/filter_icon.png'
import SortIcon from '../assets/images/sort_icon.png'
import SavedIcon from '../assets/images/saved_icon.png'

function Courses () {

  const smallScreen = useMediaQuery({ query: '(max-width: 576px)'})
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

  const [showFilter, setShowFilter] = useState(false)
  const [showFilterMobile, setShowFilterMobile] = useState(false)

  useEffect(() => {
    AOS.init();
  })

  return (
    <MainContainer smallScreen={smallScreen}>
      <Container fluid={true}>
        <TextHeader smallScreen={smallScreen}>
          Explore Courses
        </TextHeader>
        <TextSubHeader smallScreen={smallScreen}>
          Enhance your knowledge and watch your preferred classes
        </TextSubHeader>
        {
          smallScreen ? (
            <FilterButtonContainer smallScreen={smallScreen}>
              <p className='text-end' style={{ fontSize: smallScreen ? fontSize.heading4Sm : fontSize.heading3Sm }}>SHOWING ALL COURSES</p>
              <div className="d-flex">
                <Button className='me-3 px-md-5 px-4' style={{ backgroundColor: 'white', color: 'black', marginBottom: smallScreen ? '10px' : 0, border: '1px solid black' }} onClick={() => setShowFilterMobile(!showFilterMobile)}>
                  <img src={FilterIcon} width={smallScreen ? '15px' : '20px'} className='me-2'/>
                  Filter
                </Button>

                <Offcanvas show={showFilterMobile} responsive='sm' onHide={() => setShowFilterMobile(false)}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Refine results</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <span className='fw-bold'>Course Type</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            {['Hybrid', 'Online', 'Offline'].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type='checkbox'
                                  id={`default-${type}`}
                                  label={`${type}`}
                                />
                              </div>
                            ))}
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <span className='fw-bold'>Course Category</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            {Array.from({ length: 6 }).map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type='checkbox'
                                  id={`default-${type}`}
                                  label="Lorem ipsum"
                                />
                              </div>
                            ))}
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <span className='fw-bold'>Course Sub-Category</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            {Array.from({ length: 6 }).map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type='checkbox'
                                  id={`default-${type}`}
                                  label="Lorem ipsum"
                                />
                              </div>
                            ))}
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <span className='fw-bold'>Course Length</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            {['5 hours', 'One full day', 'Two full days'].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type='checkbox'
                                  id={`default-${type}`}
                                  label={`${type}`}
                                />
                              </div>
                            ))}
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          <span className='fw-bold'>Language</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            {['English', 'Indonesia', 'French', 'Mandarin', 'Danish', 'Dutch'].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type='checkbox'
                                  id={`default-${type}`}
                                  label={`${type}`}
                                />
                              </div>
                            ))}
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          <span className='fw-bold'>Course Level</span>
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            {['Beginner', 'Intermediate', 'Advanced'].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                  type='checkbox'
                                  id={`default-${type}`}
                                  label={`${type}`}
                                />
                              </div>
                            ))}
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <div className='my-3 d-flex'>
                      <div className='me-2'>
                        <Button className="px-md-5 px-4" style={{ backgroundColor: 'white', color: 'black', marginBottom: smallScreen ? '10px' : 0, border: '1px solid black' }}>
                          Clear All
                        </Button>
                      </div>
                      <div>
                        <Button className="px-md-5 px-4" style={{ backgroundColor: 'white', color: 'black', marginBottom: smallScreen ? '10px' : 0, border: '1px solid black' }}>
                          Apply Filter
                        </Button>
                      </div>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>

                <Dropdown className="d-inline">
                  <Dropdown.Toggle className='px-md-5 px-4' style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}>
                    <img src={SortIcon} width='20px' className='me-2'/>
                    Sort
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Highest rated</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Newest</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Most popular</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              
            </FilterButtonContainer>
          )
          : (
            <FilterButtonContainer smallScreen={smallScreen}>
              <div>
              <Button className='me-3 px-5' style={{ backgroundColor: 'white', color: 'black', marginBottom: smallScreen ? '10px' : 0, border: '1px solid black' }} onClick={() => setShowFilter(!showFilter)}>
                <img src={FilterIcon} width={smallScreen ? '15px' : '20px'} className='me-2'/>
                Filter
              </Button>
                <Dropdown className="d-inline">
                  <Dropdown.Toggle className='px-5' style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}>
                    <img src={SortIcon} width='20px' className='me-2'/>
                    Sort
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Highest rated</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Newest</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Most popular</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <span style={{ fontSize: smallScreen ? fontSize.heading4Sm : fontSize.heading3Sm }}>SHOWING ALL COURSES</span>
            </FilterButtonContainer>
          )
        }
        <Row noGutters={smallScreen}>
          <Col lg={4} hidden={!showFilter}>
            <FilterContainer className="mb-3">
              <TextFilterHeader smallScreen={smallScreen} className="my-2">
                Filter
              </TextFilterHeader>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <TextFilterList>Course Type</TextFilterList>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      {['Hybrid', 'Online', 'Offline'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type='checkbox'
                            id={`default-${type}`}
                            label={`${type}`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <TextFilterList>Course Category</TextFilterList>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      {Array.from({ length: 6 }).map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type='checkbox'
                            id={`default-${type}`}
                            label="Lorem ipsum"
                          />
                        </div>
                      ))}
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <TextFilterList>Course Sub-Category</TextFilterList>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      {Array.from({ length: 6 }).map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type='checkbox'
                            id={`default-${type}`}
                            label="Lorem ipsum"
                          />
                        </div>
                      ))}
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <TextFilterList>Course Length</TextFilterList>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      {['5 hours', 'One full day', 'Two full days'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type='checkbox'
                            id={`default-${type}`}
                            label={`${type}`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <TextFilterList>Language</TextFilterList>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      {['English', 'Indonesia', 'French', 'Mandarin', 'Danish', 'Dutch'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type='checkbox'
                            id={`default-${type}`}
                            label={`${type}`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <TextFilterList>Course Level</TextFilterList>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      {['Beginner', 'Intermediate', 'Advanced'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check
                            type='checkbox'
                            id={`default-${type}`}
                            label={`${type}`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className='my-3 d-flex'>
                <div className='me-2'>
                  <Button className="px-5" style={{ backgroundColor: 'white', color: 'black', marginBottom: smallScreen ? '10px' : 0, border: '1px solid black' }}>
                    Clear All
                  </Button>
                </div>
                <div>
                  <Button className="px-5" style={{ backgroundColor: 'white', color: 'black', marginBottom: smallScreen ? '10px' : 0, border: '1px solid black' }}>
                    Apply Filter
                  </Button>
                </div>
              </div>
            </FilterContainer>
          </Col>
          <Col>
            <Row>
              {
                courses.map((item, i) => {
                  return (
                    <Col sm={6} md={6} lg={showFilter ? 6 : 4} key={i}>
                      <CourseContainer 
                      data-aos="fade-up" data-aos-duration="2000">
                        <Images key={i} src={item?.courseImageUrl} onClick={() => history.push(`/courses/${item.courseId}`)}/>
                        {/* <SavedIconContainer smallScreen={smallScreen}>
                          <img src={SavedIcon} />
                        </SavedIconContainer> */}
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
          </Col>
        </Row>
      </Container>
    </MainContainer>
  )
}

export default Courses

const MainContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  padding: ${({ smallScreen }) => smallScreen ? '20vw 5vw 2vw 5vw' : '10vw 150px 0px 150px'};
  flex-wrap: wrap;
  display: flex;
`
const TextHeader = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading2Sm : fontSize.heading1Lg};
  color: #0058C0;
  font-weight: 800;
`
const TextSubHeader = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading3Sm : fontSize.heading4Lg};
  color: black;
  font-weight: 400;
  margin-bottom: ${({ smallScreen }) => smallScreen ? '30px' : '70px'};
`
const TextFilterHeader = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading3Sm : fontSize.heading4Lg};
  color: black;
  font-weight: 700;
`
const CourseContainer = styled.div`
  :hover {
    cursor: pointer;
  }
`
// const SavedIconContainer = styled.div`
//   position: absolute;
//   bottom: ${({ smallScreen }) => smallScreen ? '35%' : '28%'};
//   right: 15px;
//   z-index: 2;
// `
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
const FilterContainer = styled.div`
  position: sticky;
  top: 150px;
`
const FilterButtonContainer = styled.div`
  display: ${({ smallScreen }) => smallScreen ? 'block' : 'flex'};
  justify-content: space-between;
  margin-top: ${({ smallScreen }) => smallScreen ? '10px' : '20px'};
  margin-bottom: 20px;
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading4Sm : fontSize.heading4Lg};
`
const TextFilterList = styled.span`
  font-weight: 700;
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading4Sm : fontSize.heading2Sm};
`