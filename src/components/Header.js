import { useEffect, useState } from 'react'

// React router dom
import { Link, useLocation, useHistory } from "react-router-dom";

// Styled components
import styled, { keyframes, css } from 'styled-components'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';

// React responsive
import MediaQuery, { useMediaQuery } from 'react-responsive'

// Images
import LogoDummy from '../assets/images/Logo.png'
import LogoDummyOrange from '../assets/images/LogoOrange.png'
import NotifDarkIcon from '../assets/images/bel_icon.png'
import NotifWhiteIcon from '../assets/images/notif_icon_white.png'
import ProfileDarkIcon from '../assets/images/profile_icon.png'
import ProfileWhiteIcon from '../assets/images/profile_icon_white.png'
import SearchIcon from '../assets/images/search_icon.png'
// import CloudxierLogoDark from '../assets/images/logo/cloudxier_logo_dark.png'
// import MagnifyIcon from '../assets/images/icons/magnify_icon.png'
// import MagnifyIconDark from '../assets/images/icons/magnify_icon_dark.png'
// import SearchArrowIcon from '../assets/images/icons/search_icon_light.png'

// Components
import RoundButton from './buttons/RoundButton'
import HeaderDropdown from './dropdowns/HeaderDropdown'

// Hamburger react
import { Squash as Hamburger } from 'hamburger-react'

const Header = ({ toggleCollapsableMenu, isOpenMenu }) => {

  const smallScreen = useMediaQuery({ query: '(max-width: 1023px)' })

  const [windowScrollPercentage, setWindowScrollPercentage] = useState(0)

  const [isScrollDown, setIsScrollDown] = useState(false)

  const [animateHeader, setAnimateHeader] = useState(false)

  const [animateSearchBar, setAnimateSearchBar] = useState(false)

  const [searchInput, setSearchInput] = useState('')

  const [expertiseMenuSelected, setExpertiseMenuSelected] = useState(false)

  const screenLocation = useLocation()

  const history = useHistory()

  // Play header transition on page load
  useEffect(() => {
    setAnimateHeader(true)
  }, [])

  // Listen on keydown effect on load
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    return function cleanUp() {
      window.removeEventListener('keydown', handleKeydown)
    }
  })

  // Listen on window scroll on load
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return function cleanUp() {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  // Handle keydown function
  function handleKeydown({ keyCode }) {
    switch (keyCode) {
      case 27:
        setSearchInput('')
        setAnimateSearchBar(false)
      default:
        return
    }
  }

  // Change header background color on scroll
  function handleScroll() {
    let scrollPercentage = window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    setWindowScrollPercentage(scrollPercentage)

    let scrollDownValue = window.scrollY
    scrollDownValue > 0 ? setIsScrollDown(true) : setIsScrollDown(false)
  }

  function handlePathname(pathname) {
    if (pathname.includes('/courses')) {
      return '/courses'
    }
    if (pathname.includes('/instructor')) {
      return '/instructor'
    }
    if (pathname.includes('/about')) {
      return '/about'
    }
    if (pathname.includes('/blog')) {
      return '/blog'
    }
    if (pathname.includes('/contact-us')) {
      return '/contact-us'
    }
    return '/'
  }

  // Change dropdown text color on specific location
  function changeDropdownTxtColor() {
    switch (screenLocation.pathname) {
      case '/about':
        return 'white'
      case '/expertise':
        return 'white'
      case '/projects':
        return 'white'
      case '/projects/details':
        return 'white'
      case '/contact-us':
        return 'white'
      case '/blog':
        return 'white'
      case '/privacy-policy':
        return 'black'
      case '/':
        return 'black'
      default:
        return 'black'
    }
  }

  // Change text color on specific location
  function changeTextColor() {
    const pathname = handlePathname(screenLocation.pathname)
    switch (pathname) {
      case '/courses':
        if (isScrollDown) {
          return 'white'
        } else {
          return 'black'
        }
      case '/instructor':
        if (isScrollDown) {
          return 'white'
        } else {
          return 'black'
        }
      case '/about':
        return 'white'
      case '/blog':
        return 'white'
      case '/expertise':
        return 'black'
      case '/projects':
        return 'black'
      case '/projects/details':
        return 'black'
      case '/contact-us':
        return 'black'
      case '/privacy-policy':
        return 'black'
      case '/':
        if (isScrollDown) {
          return 'white'
        } else {
          return 'black'
        }
      default:
        return 'white'
    }
  }

  // Change text logo color on specific location
  function changeTextLogoColor() {
    const pathname = handlePathname(screenLocation.pathname)
    switch (pathname) {
      case '/courses':
        if (isScrollDown) {
          return '#F48C06'
        } else {
          return '#2F327D'
        }
      case '/instructor':
        if (isScrollDown) {
          return '#F48C06'
        } else {
          return '#2F327D'
        }
      case '/about':
        return '#F48C06'
      case '/blog':
        return '#F48C06'
      case '/expertise':
        return '#F48C06'
      case '/projects':
        return '#F48C06'
      case '/projects/details':
        return '#F48C06'
      case '/contact-us':
        return '#F48C06'
      case '/privacy-policy':
        return '#F48C06'
      case '/':
        if (isScrollDown) {
          return '#F48C06'
        } else {
          return '#2F327D'
        }
      default:
        return '#2F327D'
    }
  }

  // Change header logo on specific location
  function changeHeaderLogo() {
    switch (screenLocation.pathname) {
      case '/courses':
        if (isOpenMenu) {
          return LogoDummyOrange
        } else {
          return LogoDummyOrange
        }
      case '/about':
        if (isOpenMenu) {
          return LogoDummy
        } else {
          return LogoDummy
        }
      case '/expertise':
        if (isOpenMenu) {
          return LogoDummy
        } else {
          return LogoDummy
        }
      case '/projects':
        if (isOpenMenu) {
          return LogoDummy
        } else {
          return LogoDummy
        }
      case '/projects/details':
        if (isOpenMenu) {
          return LogoDummy
        } else {
          return LogoDummy
        }
      case '/contact-us':
        if (isOpenMenu) {
          return LogoDummy
        } else {
          return LogoDummy
        }
      case '/blog':
        if (isOpenMenu) {
          return LogoDummy
        } else {
          return LogoDummy
        }
      case '/privacy-policy':
        if (isOpenMenu) {
          return LogoDummy
        } else {
          return LogoDummy
        }
      case '/':
        if (isScrollDown) {
          return LogoDummyOrange
        } else {
          return LogoDummy
        }
      default:
        return LogoDummy
    }
  }

  // Change notif logo on spesific location
  function changeNotifLogo() {
    const pathname = handlePathname(screenLocation.pathname)
    switch (pathname) {
      case '/courses':
        if (isScrollDown) {
          return NotifWhiteIcon
        } else {
          return NotifDarkIcon
        }
      case '/instructor':
        if (isScrollDown) {
          return NotifWhiteIcon
        } else {
          return NotifDarkIcon
        }
      case '/about':
        if (isOpenMenu) {
          return NotifDarkIcon
        } else {
          return NotifDarkIcon
        }
      case '/expertise':
        if (isOpenMenu) {
          return NotifDarkIcon
        } else {
          return NotifDarkIcon
        }
      case '/projects':
        if (isOpenMenu) {
          return NotifDarkIcon
        } else {
          return NotifDarkIcon
        }
      case '/projects/details':
        if (isOpenMenu) {
          return NotifDarkIcon
        } else {
          return NotifDarkIcon
        }
      case '/contact-us':
        if (isOpenMenu) {
          return NotifDarkIcon
        } else {
          return NotifDarkIcon
        }
      case '/blog':
        if (isOpenMenu) {
          return NotifDarkIcon
        } else {
          return NotifDarkIcon
        }
      case '/privacy-policy':
        if (isOpenMenu) {
          return NotifDarkIcon
        } else {
          return NotifDarkIcon
        }
      case '/':
        if (isScrollDown) {
          return NotifWhiteIcon
        } else {
          return NotifDarkIcon
        }
      default:
        return NotifDarkIcon
    }
  }

  // Change profile logo on spesific location
  function changeProfileIcon() {
    const pathname = handlePathname(screenLocation.pathname)
    switch (pathname) {
      case '/courses':
        if (isScrollDown) {
          return ProfileWhiteIcon
        } else {
          return ProfileDarkIcon
        }
      case '/instructor':
        if (isScrollDown) {
          return ProfileWhiteIcon
        } else {
          return ProfileDarkIcon
        }
      case '/about':
        if (isOpenMenu) {
          return ProfileDarkIcon
        } else {
          return ProfileDarkIcon
        }
      case '/expertise':
        if (isOpenMenu) {
          return ProfileDarkIcon
        } else {
          return ProfileDarkIcon
        }
      case '/projects':
        if (isOpenMenu) {
          return ProfileDarkIcon
        } else {
          return ProfileDarkIcon
        }
      case '/projects/details':
        if (isOpenMenu) {
          return ProfileDarkIcon
        } else {
          return ProfileDarkIcon
        }
      case '/contact-us':
        if (isOpenMenu) {
          return ProfileDarkIcon
        } else {
          return ProfileDarkIcon
        }
      case '/blog':
        if (isOpenMenu) {
          return ProfileDarkIcon
        } else {
          return ProfileDarkIcon
        }
      case '/privacy-policy':
        if (isOpenMenu) {
          return ProfileDarkIcon
        } else {
          return ProfileDarkIcon
        }
      case '/':
        if (isScrollDown) {
          return ProfileWhiteIcon
        } else {
          return ProfileDarkIcon
        }
      default:
        return ProfileDarkIcon
    }
  }

  // Change magnifier icon on specific location
  // function changeMagnifierIcon() {
  //   switch (screenLocation.pathname) {
  //     case '/about':
  //       return MagnifyIconDark
  //     case '/expertise':
  //       return MagnifyIconDark
  //     case '/projects':
  //       return MagnifyIconDark
  //     case '/projects/details':
  //       return MagnifyIconDark
  //     case '/contact-us':
  //       return MagnifyIconDark
  //     case '/':
  //       return MagnifyIcon
  //     default:
  //       return MagnifyIcon
  //   }
  // }

  // Change dropdown background color on specific location
  function changeDropdownBgColor() {
    switch (screenLocation.pathname) {
      case '/about':
        return '#4C39FF'
      case '/expertise':
        return '#4C39FF'
      case '/projects':
        return '#4C39FF'
      case '/projects/details':
        return '#4C39FF'
      case '/contact-us':
        return '#4C39FF'
      case '/blog':
        return '#4C39FF'
      case '/privacy-policy':
        return '#4C39FF'
      case '/':
        return 'white'
      default:
        return 'white'
    }
  }

  // Change header button background color on specific location
  function changeHeaderBtnBgColor() {
    switch (screenLocation.pathname) {
      case '/about':
        return '#4C39FF'
      case '/expertise':
        return '#4C39FF'
      case '/projects':
        return '#4C39FF'
      case '/projects/details':
        return '#4C39FF'
      case '/contact-us':
        return '#4C39FF'
      case '/blog':
        return '#4C39FF'
      case '/privacy-policy':
        return '#4C39FF'
      case '/':
        return 'transparent'
      default:
        return 'transparent'
    }
  }

  // Change background color based on specific location
  function changeBackgroundColor() {
    switch (screenLocation.pathname) {
      case '/courses':
        return 'transparent'
      case '/about':
        return 'white'
      case '/expertise':
        return 'white'
      case '/projects':
        return 'white'
      case '/projects/details':
        return 'white'
      case '/contact-us':
        return 'white'
      case '/blog':
        return 'white'
      case '/privacy-policy':
        return 'white'
      case '/':
        return 'transparent'
      default:
        return 'transparent'
    }
  }

  // Stop header scroll animation on specific location
  function stopScrollAnimation() {
    switch (screenLocation.pathname) {
      case '/courses':
        return css`${changeHeaderColor} 1s linear`
      case '/about':
        return 'none'
      case '/expertise':
        return 'none'
      case '/projects':
        return 'none'
      case '/projects/details':
        return 'none'
      case '/contact-us':
        return 'none'
      case '/blog':
        return 'none'
      case '/privacy-policy':
        return 'none'
      case '/':
        return css`${changeHeaderColor} 1s linear`
      default:
        return css`${changeHeaderColor} 1s linear`
    }
  }

  // Change hamburger icon color on specific location
  function changeHamburgerColor() {
    const pathname = handlePathname(screenLocation.pathname)
    switch (pathname) {
      case '/courses':
        if (isScrollDown) {
          return 'white'
        } else {
          return 'black'
        }
      case '/instructor':
        if (isScrollDown) {
          return 'white'
        } else {
          return 'black'
        }
      case '/projects':
        if (isOpenMenu) {
          return 'white'
        } else {
          return 'black'
        }
      case '/projects/details':
        if (isOpenMenu) {
          return 'white'
        } else {
          return 'black'
        }
      case '/contact-us':
        if (isOpenMenu) {
          return 'white'
        } else {
          return 'black'
        }
      case '/blog':
        if (isOpenMenu) {
          return 'white'
        } else {
          return 'black'
        }
      case '/privacy-policy':
        if (isOpenMenu) {
          return 'white'
        } else {
          return 'black'
        }
      case '/':
        if (isScrollDown) {
          return 'white'
        } else {
          return 'black'
        }
      default:
        return 'white'
    }
  }

  return (
    <HeaderContainer
      animateHeader={animateHeader}
      windowScrollPercentage={windowScrollPercentage}
      stopScrollAnimation={stopScrollAnimation}
      changeBackgroundColor={changeBackgroundColor}
      isOpenMenu={isOpenMenu}>
      <Container fluid={true}>
        <FlexContainer smallScreen={smallScreen}>
          <Link to="/" onClick={() => toggleCollapsableMenu(false)} style={{ textDecoration: 'none' }}>
            <LogoContainer smallScreen={smallScreen}>
              {/* <Logo src={changeHeaderLogo()} /> */}
              <LogoText changeTextLogoColor={changeTextLogoColor}>GROWAcademy</LogoText>
            </LogoContainer>
          </Link>
          <NavbarContainer>
            {/* Render full width navigations on large screen */}
            <MediaQuery minWidth={1024}>
              <LinkContainer linkTo='courses'>
                <NavItem animateSearchBar={animateSearchBar} changeTextColor={changeTextColor}>
                  <Link to="/courses" style={{ color: changeTextColor(), textDecoration: 'none' }}>
                    Courses
                  </Link>
                </NavItem>
              </LinkContainer>
              <NavItem animateSearchBar={animateSearchBar} changeTextColor={changeTextColor}>
                <LinkContainer linkTo='about'>
                  <Link to="/about" style={{ color: changeTextColor(), textDecoration: 'none' }}>
                    About
                  </Link>
                </LinkContainer>
              </NavItem>
              <NavItem animateSearchBar={animateSearchBar} changeTextColor={changeTextColor}>
                <LinkContainer linkTo='blog'>
                  <Link to="/blog" style={{ color: changeTextColor(), textDecoration: 'none' }}>
                    Blog
                  </Link>
                </LinkContainer>
              </NavItem>
              <NavItem animateSearchBar={animateSearchBar} changeTextColor={changeTextColor}>
                <SearchInputContainer animateSearchBar={animateSearchBar}>
                  <SearchInput
                    placeholder='Search here...'
                    type='text' 
                    value={searchInput} 
                    onChange={({ target: { value }}) => setSearchInput(value)}
                    changeTextColor={changeTextColor} />
                </SearchInputContainer>
              </NavItem>
              <NavItem animateSearchBar={animateSearchBar} changeTextColor={changeTextColor}>
                <LinkContainer linkTo='notif'>
                  <Link to="/notification" style={{ color: changeTextColor() }}>
                    {/* <img src={NotifDarkIcon} width='20px' /> */}
                    <img src={changeNotifLogo()} width='20px' />
                  </Link>
                </LinkContainer>
              </NavItem>
              <NavItem animateSearchBar={animateSearchBar} changeTextColor={changeTextColor}>
                <LinkContainer linkTo='profile'>
                  <Link to="/profile" style={{ color: changeTextColor() }}>
                    {/* <img src={ProfileDarkIcon} width='20px' /> */}
                    <img src={changeProfileIcon()} width='20px' />
                  </Link>
                </LinkContainer>
              </NavItem>

                {/* <MagnifyContainer animateSearchBar={animateSearchBar} onClick={() => setAnimateSearchBar(true)} changeTextColor={changeTextColor}>
                  <Magnifier src={changeMagnifierIcon()} />
                  <SearchInputContainer animateSearchBar={animateSearchBar}>
                    <SearchInput
                      placeholder='Search...' 
                      type='text' 
                      value={searchInput} 
                      onChange={({ target: { value }}) => setSearchInput(value)}
                      changeTextColor={changeTextColor} />
                  </SearchInputContainer>
                  <ArrowRightIcon src={SearchArrowIcon} animateSearchBar={animateSearchBar} />
                </MagnifyContainer> */}
             
            </MediaQuery>
            {/* Render burger menu on small screen */}
            <MediaQuery maxWidth={1023}>
              <HamburgerContainer>
                <Hamburger
                  toggled={isOpenMenu}
                  toggle={toggleCollapsableMenu}
                  size={25}
                  distance='lg'
                  rounded
                  color={changeHamburgerColor()} />
              </HamburgerContainer>
            </MediaQuery>
          </NavbarContainer>
        </FlexContainer>
      </Container>
    </HeaderContainer>
  )

}

export default Header

const changeHeaderColor = keyframes`
  to {
    background-color: #4D4AD9;
  },
`
const HeaderContainer = styled.div`
  opacity: ${({ animateHeader }) => animateHeader ? 1 : 0};
  position: fixed;
  right: 0;
  left: 0;
  background-color: ${({ isOpenMenu, changeBackgroundColor }) => {
    if (isOpenMenu) {
      return '#4C39FF'
    } else {
      return changeBackgroundColor()
    }
  }};
  z-index: 5;
  transition: opacity 1s;
  transition-delay: .5s;
  animation: ${({ stopScrollAnimation }) => stopScrollAnimation()};
  animation-play-state: paused;
  animation-delay: ${({ windowScrollPercentage }) => `calc(${windowScrollPercentage} * -30s)`};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`
const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ smallScreen }) => smallScreen ? '0px 10px' : '0px 100px 0px 100px'};
`
const LogoContainer = styled.div`
  height: auto;
  width: ${({ smallScreen }) => smallScreen ? '160px' : '200px'};
  vertical-align: middle;
`
const LogoText = styled.h1`
  color: ${({ changeTextLogoColor }) => changeTextLogoColor()};
  font-weight: 800;
  text-decoration: none;
`
const Logo = styled.img`  
  width: 100%;
  height: auto;
  object-fit: contain
`
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavItem = styled.div`
  opacity: ${({ animateSearchBar }) => animateSearchBar ? 0 : 1};
  color: ${({ changeTextColor }) => changeTextColor()};
  padding: 10px;
  font-size: 18px;
  transition: opacity .2s;
  text-decoration: none;
`
const LinkContainer = styled.div`
  margin: ${({ linkTo }) => linkTo == 'notif' || linkTo == 'profile' ? '40px 0px' : '40px 20px'}
`
const SearchInputContainer = styled.div`
  // opacity: ${({ animateSearchBar }) => animateSearchBar ? 1 : 0};
  transition: 0;
  transition-delay: .3s;
  padding-bottom: 2px;
`
const SearchInput = styled.input`
  background-color: #E8E8E8;
  border: none;
  outline: none;
  color: ${({ changeTextColor }) => changeTextColor()};
  border-radius: 20px;
  padding: 5px 20px;
  background-image: url(${SearchIcon});
  background-size: 20px;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  text-indent: 20px;
`
const HamburgerContainer = styled.div`
  padding: 5px 0px;
`