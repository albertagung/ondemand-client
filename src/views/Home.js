// React
import { useEffect } from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container'

// Component
import SectionHeading from '../components/headings/SectionHeading'
import FeatureCard from '../components/FeatureCard'
import TopPicksCard from '../components/TopPicksCard'
import ClassesForYouCard from '../components/ClassesForYouCard'
import HomeMainBanner from '../components/banners/HomeMainBanner'
import JoinActionBanner from '../components/banners/JoinActionBanner'
import ActionBanner from '../components/banners/ActionBanner'
import SubscribeActionBanner from '../components/banners/SubscribeActionBanner'
import SlidingBanner from '../components/banners/SlidingBanner'

// React responsive
import { useMediaQuery } from 'react-responsive'

function Home () {

  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)' })

  // Scroll window to top on load
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <div style={{ overflow: 'hidden' }}>
      <HomeMainBanner />
      <Container style={{
        // padding: smallScreen ? '30px 10vw 30px 10vw' : '50px 0 50px 0'
      }}>
        <FeatureCard />
        <SlidingBanner />
        <TopPicksCard />
        <ClassesForYouCard />
        <JoinActionBanner />
      </Container>
    </div>
  )
}

export default Home 