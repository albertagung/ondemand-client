// React
import { useState } from 'react'

// React router dom
import { Link } from "react-router-dom";

// React responsive
import { useMediaQuery } from 'react-responsive'

// Styled components
import styled from 'styled-components'

function CollapsableMenu ({ isOpen, toggleCollapsableMenu, list }) {

  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)'})

  const [isExpertiseClicked, setIsExpertiseClicked] = useState(false)

  function handleClick () {
    // Close collapsable menu
    toggleCollapsableMenu(false)
    // Scroll loaded window to top
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <MainContainer isOpen={isOpen} smallScreen={smallScreen}>
      <MenuItemContainer isOpen={isOpen} smallScreen={smallScreen}>
        <MenuItem>
          <Link to="/courses" style={{color: 'white'}} onClick={() => handleClick()}>
            Courses
          </Link>
        </MenuItem>
        {/* <MenuItem onClick={() => setIsExpertiseClicked(!isExpertiseClicked)}>
          Expertise
          <MenuSubitemContainer isExpertiseClicked={isExpertiseClicked}>
            {
              list.map((item, index) => {
                return (
                  <MenuSubitem key={index}>
                    <Link to={item.path} style={{color: 'white'}} onClick={() => handleClick()}>
                      {item.title}
                    </Link>
                  </MenuSubitem>
                )
              })
            }
          </MenuSubitemContainer>
        </MenuItem> */}
        <MenuItem>
          <Link to="/about" style={{color: 'white'}} onClick={() => handleClick()}>
            About
          </Link>
        </MenuItem>
        {/* <MenuItem>
          <Link to="/projects" style={{color: 'white'}} onClick={() => handleClick()}>
            Projects
          </Link>
        </MenuItem> */}
        <MenuItem>
          <Link to="/blog" style={{color: 'white'}} onClick={() => handleClick()}>
            Blog
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact-us" style={{color: 'white'}} onClick={() => handleClick()}>
            Contact
          </Link>
        </MenuItem>
      </MenuItemContainer>
    </MainContainer>
  )

}

export default CollapsableMenu

const MainContainer = styled.div`
  position: fixed;
  z-index: 4;
  height: 100vh;
  width: 100vw;
  background-color: #4C39FF;
  padding: 18vh 8vw 8vw 8vw;
  transition: margin .5s;
  margin-top: ${({ isOpen, smallScreen }) => isOpen && smallScreen ? 0 : '-100vh'};
  overflow: scroll
`
const MenuItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  transition: opacity 2s;
  opacity: ${({ isOpen, smallScreen }) => isOpen && smallScreen ? 1 : 0}
`
const MenuItem = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 5vh;
  font-weight: 500;
`
const MenuSubitemContainer = styled.div`
  display: ${({ isExpertiseClicked }) => isExpertiseClicked ? 'block' : 'none'};
  padding: 15px
`
const MenuSubitem = styled.div`
  padding-bottom: 2vh;
  font-size: 15px
`