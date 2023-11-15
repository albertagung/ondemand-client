import { useState, useEffect } from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// React responsive
import { useMediaQuery } from 'react-responsive'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// Helpers
import fontSize from '../../helpers/fontSize'

// Components
import SquareButton from '../buttons/SquareButton'
import RoundButton from '../buttons/RoundButton'

// Images
import PlayIcon from '../../assets/images/play_icon.png'
import styled from 'styled-components'
import DummyImg from '../../assets/images/dummy_image1.jpg'

function HomeMainBanner() {

  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)' })

  const [animateBannerTitle, setAnimateBannerTitle] = useState(false)

  // Start banner title animation on page load
  useEffect(() => {
    setAnimateBannerTitle(true)
  }, [])

  useEffect(() => {
    AOS.init();
  })

  return (
    <BannerOverlay smallScreen={smallScreen}>
      <Parallax pages={1} style={styles.parallaxContainer}>
        <ParallaxLayer>
          <HomeMainBannerContainer>
            <HomeMainBannerTextContainer>
              <HomeMainBannerTextFlexContainer>
                <Container style={{ padding: smallScreen ? '0 10vw' : 0 }}>
                  <HomeMainBannerTitle smallScreen={smallScreen} 
                  data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                    Enhance your skills {smallScreen ? null : <br />} and knowledge
                  </HomeMainBannerTitle>
                  <div
                    style={{
                      fontSize: smallScreen ? fontSize.heading3Sm : fontSize.heading3Lg,
                      fontWeight: '400px',
                      marginBottom: smallScreen ? '30px' : '40px',
                      color: '#464646'
                    }}
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    Browse your preferred classes and start learning today!
                  </div>
                  <div style={styles.homeMainBannerActionButton} 
                  data-aos="fade-up-right" data-aos-easing="linear" data-aos-duration="1000">
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col md={12} lg={4}>
                            <div className="text-center">
                              <RoundButton
                                action={() => window.open('/contact-us', '_self')}
                                textColor='#FFFFFF'
                                text='Become a member'
                                textSize={smallScreen ? fontSize.bodySm : fontSize.bodySm}
                                backgroundColor='#F48C06'
                                width={smallScreen ? '200px' : '200px'}
                                radius='80px'
                              />
                            </div>
                          </Col>
                          <Col md={12} lg={8}>
                            <img src={PlayIcon} width='50px' />
                            <span>Watch how it works</span>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </HomeMainBannerTextFlexContainer>
            </HomeMainBannerTextContainer>
            {/* <BannerOverlay smallScreen={smallScreen} /> */}
            {/* <img src={DummyImg} style={styles.homeMainBanner} alt='main-banner' /> */}
          </HomeMainBannerContainer>
        </ParallaxLayer>
      </Parallax>
    </BannerOverlay>
  )

}

export default HomeMainBanner

const HomeMainBannerContainer = styled.div`
  width: 100%;
  height: 100vh;
`
const HomeMainBannerTextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  z-index: 2;
`
const HomeMainBannerTextFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
const HomeMainBannerTitle = styled.div`
  font-weight: 800;
  color: #0058C0;
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading1Sm : fontSize.heading1Lg};
  margin-bottom: 30px;
`
const BannerOverlay = styled.div`
  background-color: #FFF3E4;
  width: 100%;
  height: ${({ smallScreen }) => smallScreen ? '100vh' : '120vh'};
  position: absolute;
  z-index: 1;
  border-radius: ${({ smallScreen }) => smallScreen ? 0 : '0px 0px 40% 40%'};
`

const styles = {
  parallaxContainer: {
    overflow: 'hidden', 
    position: 'absolute', 
    zIndex: 1,
  },
  container: {
    padding: '0 20px'
  },
  homeMainBannerContainer: {
    width: '100%',
    height: '100vh'
  },
  homeMainBanner: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  bannerOverlay: {
    backgroundColor: '#FFF3E4',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    zIndex: 1,
    borderRadius: '0 0 30% 30%',
  },
  homeMainBannerTextContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    color: 'white',
    zIndex: 2,
    transition: 'opacity 2s, margin 1s'
  },
  homeMainBannerTextFlexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  homeMainBannerTitle: {
    fontWeight: '800',
    color: '#0058C0'
  },
  homeMainBannerActionButton: {
    color: 'black',
    // display: 'flex',
    // justifyContent: 'start',
    // alignItems: 'center',
  }
}