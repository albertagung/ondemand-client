import { useEffect, useState } from 'react'

// React responsive
import { useMediaQuery } from 'react-responsive'

// Styled components
import styled from 'styled-components'

// React visibility sensor
import VisibilitySensor from 'react-visibility-sensor'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Helpers
import fontSize from '../../helpers/fontSize'

function SectionHeading ({ title, subtitle, titleColor, subtitleColor }) {

  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)'})

  const [isHeadingVisible, setHeadingVisible] = useState(false)

  useEffect(() => {
    AOS.init();
  })

  return (
    <VisibilitySensor onChange={(isVisible) => setHeadingVisible(isVisible)} partialVisibility={true} active={!isHeadingVisible}>
      <HeadingContainer 
        isHeadingVisible={isHeadingVisible}
        smallScreen={smallScreen} 
        data-aos="fade-right"
        data-aos-duration="2000">
        <Title smallScreen={smallScreen} titleColor={titleColor}>
          {title}
        </Title>
        <Subtitle smallScreen={smallScreen} subtitleColor={subtitleColor}>
          {subtitle}
        </Subtitle>
      </HeadingContainer>
    </VisibilitySensor>
  )

}

export default SectionHeading

const HeadingContainer = styled.div`
  text-align: center;
  opacity: ${({ isHeadingVisible }) => isHeadingVisible ? 1 : 0};
  // transition: opacity 2s linear;
  margin-bottom: ${({ smallScreen }) => smallScreen ? '0' : '30px'}
`

const Title = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading2Sm : fontSize.heading2Lg};
  margin-bottom: ${({ smallScreen }) => smallScreen ? '10px' : '30px'};
  color: ${({ titleColor }) => titleColor || 'black'};
  letter-spacing: 3px;
  font-weight: 700
`

const Subtitle = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading3Sm : fontSize.heading3Lg};
  color: ${({ subtitleColor }) => subtitleColor || 'black'};
  font-weight: 300
`