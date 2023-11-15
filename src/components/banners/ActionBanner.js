// Styled components
import styled from 'styled-components'

// Bootstrap
import Container from 'react-bootstrap/Container'

// React responsive
import { useMediaQuery } from 'react-responsive'

// Components
import SquareButton from '../buttons/SquareButton'

// Helpers
import fontSize from '../../helpers/fontSize'

function ActionBanner ({ text, action, actionText }) {

  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)'})

  return (
    <MainContainer smallScreen={smallScreen}>
      <InnerContainer smallScreen={smallScreen}>
        <Container style={{ padding: smallScreen ? '0 10vw' : '0'}}>
          <Text smallScreen={smallScreen}>
            {text}
          </Text>
        </Container>
      </InnerContainer>
    </MainContainer>
  )

}

export default ActionBanner

const MainContainer = styled.div`
  padding: ${({ smallScreen }) => smallScreen ? '0 5vw' : '0'};
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`
const InnerContainer = styled.div`
  width: ${({ smallScreen }) => smallScreen ? '100%' : '700px'};
  padding: ${({ smallScreen }) => smallScreen ? '5px 0' : '20px 0'};
`
const Text = styled.div`
  font-size: ${({ smallScreen }) => smallScreen ? fontSize.heading2Sm : fontSize.heading2Lg};
  color: #0058C0;
  font-weight: 500;
  text-align: center;
`
const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
`