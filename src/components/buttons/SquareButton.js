import { useState } from 'react'

// Styled components
import styled from 'styled-components'

function SquareButton (props) {

  const [isHovered, setHovered] = useState(false)

  return (
    <Button
      onClick={props.action}
      props={props}
      isHovered={isHovered} 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)} >
        {props.text}
    </Button>
  )

}

export default SquareButton

const Button = styled.div`
  color: ${({ props, isHovered }) => {
    let textColor = 'black'
    if (props.textColor) {
      textColor = props.textColor
    } 
    if (isHovered) {
      textColor = props.hoverTextColor
    }
    return textColor
  }};
  padding: 10px 20px 10px 20px;
  width: ${({ props }) => props.width ? props.width : '100%'};
  background-color: ${({ props, isHovered }) => {
    let backgroundColor = 'transparent'
    if (props.backgroundColor) {
      backgroundColor = props.backgroundColor
    }
    if (isHovered) {
      backgroundColor = props.hoverBgColor
    }
    return backgroundColor
  }};
  cursor: pointer;
  user-select: none;
  font-size: ${({ props }) => props.textSize ? props.textSize : '15px'};
  border: ${({ props }) => props.border ? props.border : 'none'};
  text-align: center;
  font-weight: 500;
  transition: background-color .3s, color .3s
`