import { useEffect, useState } from 'react'

// Bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// Styled components
import styled from 'styled-components'

// React responsive
import { useMediaQuery } from 'react-responsive'

// Helpers
import fontSize from '../helpers/fontSize'

// Images
import ChevronRight from '../assets/images/chevron_right_dark.png'
import VideoIcon from '../assets/images/video_icon.png'

function CourseAccordionList({ course, isActive, onToggle }) {
  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)' })

  return (
    <div className='mb-3'>
      <Row style={{backgroundColor: '#E3EDFF'}}>
        <CourseTitleContainer smallScreen={smallScreen}>
          <Row className='p-3'>
            <Col xs={{ cols: 12 }} md={{ cols: 4 }}>
              <FlexCourseTitleContainer>
                <ImageArrow src={ChevronRight} onClick={onToggle} isActive={isActive} smallScreen={smallScreen}/>
                <TextTitleCourse smallScreen={smallScreen}>{course.courseName}</TextTitleCourse>
              </FlexCourseTitleContainer>
            </Col>
            <Col xs={{ cols: 12 }} md={{ cols: 8 }}>
              <FlexCourseLengthContainer className="me-md-3">
                <TextCourseLength smallScreen={smallScreen}>{course.courseLength}</TextCourseLength>
              </FlexCourseLengthContainer>
            </Col>
          </Row>
        </CourseTitleContainer>
      </Row>
      {
        isActive && (
          <Row className="mb-3" style={{backgroundColor: '#F5F9FF'}}>
            {
              course.lessonList && Array.isArray(course.lessonList) && course.lessonList.length > 0 && course.lessonList.map((lesson, index) => {
                return (
                  <ActiveLessonContainer key={index} smallScreen={smallScreen}>
                    <Row className='w-100 d-flex p-3'>
                      <Col xs={{ cols: 12 }} md={{ cols: 4 }}>
                        <TextLesson smallScreen={smallScreen}>Lesson {index + 1}: </TextLesson>
                        <span>{lesson.lessonName}</span>
                      </Col>
                      <Col xs={{ cols: 12 }} md={{ cols: 8 }}>
                        {
                          lesson.contentType == 'video' && (
                            <FlexLessonContainer>
                              <Image src={VideoIcon} smallScreen={smallScreen}/>
                              <span>/ {lesson.lessonLength}</span>
                            </FlexLessonContainer>
                          )
                        }
                        {
                          lesson.contentType == 'article' && (
                            <FlexLessonContainer>
                              <span>Article</span>
                            </FlexLessonContainer>
                          )
                        }
                      </Col>
                    </Row>
                  </ActiveLessonContainer>
                )
              })
            }
          </Row>
        )
      }
    </div>
  )
}

export default CourseAccordionList

const TextTitleCourse = styled.span`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading2Sm : fontSize.heading4Lg};
  font-weight: 700;
`
const TextCourseLength = styled.span`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.bodySm : fontSize.heading3Sm};
  font-weight: 400;
`
const TextLesson = styled.span`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.bodySm : fontSize.heading3Sm};
  font-weight: 700;
`
const ImageArrow = styled.img`
  height: ${({ smallScreen }) => smallScreen ? '15px' : '18px'};
  transform: ${({ isActive }) => {
    let rotate = 'rotate(90deg);'
    if (isActive) {
      rotate = 'rotate(270deg);'
    }
    return rotate
  }}
  margin-right: 20px;
  cursor: pointer;
  vertical-align: middle;
`
const Image = styled.img`
  height: ${({ smallScreen }) => smallScreen ? '100%' : '18px'};
  margin-right: 10px;
`
const CourseTitleContainer = styled.div`
  padding: ${({ smallScreen }) => smallScreen ? '0px 10vw' : '0px 150px 0px 150px'};
`
const FlexCourseTitleContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  vertical-align: middle;
`
const FlexCourseLengthContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`
const ActiveLessonContainer = styled.div`
  padding: ${({ smallScreen }) => smallScreen ? '0px 10vw' : '0px 150px 0px 150px'};
`
const FlexLessonContainer = styled.div`
  display: flex;
  justify-content: end;
  vertical-align: middle;
`