// React
import { useState } from 'react'

// Styled components
import styled from 'styled-components'

// React bootstrap
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// React router dom
import { useHistory } from 'react-router-dom'

function HeaderDropdown ({ isOpen, list, backgroundColor, textColor, closeDropdown }) {

  const history = useHistory()

  const [selectedItem, setSelectedItem] = useState('')

  function triggerClick (item) {
    // Change to new route
    history.push(item.path)
    // Close the dropdown once route loaded
    closeDropdown()
    // Scroll loaded window to top
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  if (isOpen) {
    return (
      <MainContainer backgroundColor={backgroundColor}>
        <Row>
          {
            list.map((item, index) => {
              return (
                <Col key={index} md={6}>
                  <Item
                    isSelected={selectedItem === item.title ? true : false} 
                    onMouseEnter={() => setSelectedItem(item.title)} 
                    onClick={() => triggerClick(item)} 
                    textColor={textColor}>
                      {item.title}
                  </Item>
                </Col>
              )
            })
          }
        </Row>
      </MainContainer>
    )
  } else {
    return null
  }

}

export default HeaderDropdown

const MainContainer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'white'};
  position: absolute;
  padding: 20px;
  max-width: 500px;
  z-index: 2
`
const Item = styled.div`
  color: ${({ textColor }) => textColor ? textColor : 'black'};
  font-weight: ${({ isSelected }) => isSelected ? 'bold' : 'normal'};
  padding: 5px 0;
  font-size: 15px;
  cursor: pointer
`