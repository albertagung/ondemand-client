import { useState } from "react"
import styled from "styled-components"

function RoundButton (props) {

  const [isHovered, setHovered] = useState(false)

  return (
    <Button
      onClick={props.action}
      props={props}
      isHovered={isHovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      >
        {props.text}
    </Button>
  )

}

const Button = styled.div`
  color: ${({ props, isHovered }) => {
    let textColor = 'white'
    if (props.textColor) {
      textColor = props.textColor
    }
    if (isHovered) {
      textColor = props.hoverTextColor
    }
    return textColor
  }};
  padding: 5px 20px 5px 20px;
  width: ${({ props }) => props.width ? props.width : '100%' };
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
  margin-right: ${({props}) => props.marginRight};
  cursor: pointer;
  user-select: none;
  font-size: ${({ props }) => props.textSize ? props.textSize : '15px'};
  border-width: 1px;
  border-style: solid;
  border-color: ${({props}) => props.borderColor};
  border-radius: ${({props}) => props.radius};
  text-align: center;
  transition: background-color .3s, color .3s;
  `

export default RoundButton