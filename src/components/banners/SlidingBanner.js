import { useState } from 'react'

// Styled components
import styled from 'styled-components'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel';

// React responsive
import { useMediaQuery } from 'react-responsive'

// Components
import SectionHeading from '../headings/SectionHeading'
import SquareButton from '../buttons/SquareButton'
import RoundButton from '../buttons/RoundButton'

// Helpers
import fontSize from '../../helpers/fontSize'

// Images
// import ForInstructorsImage from '../../assets/images/for_instructors.png'
// import ForStudentsImage from '../../assets/images/for_students.png'
import dummyImage1 from '../../assets/images/dummy_image1.jpg'
import dummyImage2 from '../../assets/images/dummy_image2.jpg'
import dummyImage3 from '../../assets/images/dummy_image3.jpg'

function SlidingBanner () {
  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)'})

  return (
    <div style={{ padding: smallScreen ? '20px 10px 20px 10px' : '50px 0 50px 0' }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img className='rounded-3' src={dummyImage1} width='100%' height='100%' />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img className='rounded-3' src={dummyImage2} width='100%' height='100%' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img className='rounded-3' src={dummyImage3} width='100%' height='100%' />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )

}

export default SlidingBanner