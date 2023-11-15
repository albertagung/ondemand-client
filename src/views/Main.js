import { useState } from 'react'

// React router dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Screens
import Home from './Home'
import Courses from './Courses';
import CourseDetail from './CourseDetail';
import InstructorDetail from './InstructorDetail';

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import CollapsableMenu from '../components/CollapsableMenu'
import SubscribeActionBanner from '../components/banners/SubscribeActionBanner'

// Route change tracker from google analytics
import RouteChangeTracker from '../components/RouteChangeTracker'

const Main = () => {

  const [isOpenMenu, setOpenMenu] = useState(false)

  const toggleCollapsableMenu = (isOpen) => {
    setOpenMenu(isOpen)
  }

  return (
    <Router>
      {/* <RouteChangeTracker /> */}
      <Header
        toggleCollapsableMenu={toggleCollapsableMenu}
        isOpenMenu={isOpenMenu} />
      <CollapsableMenu
        list={
          [
            {
              title: "Mobile Application Development",
              path: "/expertise?id=mobile-application"
            },
            {
              title: "Website Development",
              path: "/expertise?id=website-development"
            },
            {
              title: "Digital Product Experience and Design",
              path: "/expertise?id=digital-product"
            },
            {
              title: "Enterprise Software Development",
              path: "/expertise?id=enterprise-software"
            },
            {
              title: "API Creation and Management",
              path: "/expertise?id=api-management"
            },
            {
              title: "Tech Resource Support",
              path: "/expertise?id=tech-resource-support"
            }
          ]
        }
        isOpen={isOpenMenu}
        toggleCollapsableMenu={toggleCollapsableMenu} />
      <Switch>
        <Route path='/instructor/:instructorId' exact>
          <InstructorDetail />
        </Route>
        <Route path='/courses/:courseId' exact>
          <CourseDetail />
        </Route>
        <Route path='/courses' exact>
          <Courses />
          <SubscribeActionBanner />
        </Route>
        <Route path='/' exact>
          <Home />
          <SubscribeActionBanner />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default Main