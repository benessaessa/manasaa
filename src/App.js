import PropTypes from 'prop-types'
import React from "react"
import { ToastContainer } from "react-toastify";
import { Switch, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"
import { userRoutes, authRoutes } from "./routes/allRoutes"
import AOS from 'aos'
import 'aos/dist/aos.css'
 import Authmiddleware from "./routes/middleware/Authmiddleware" 
import VerticalLayout from "./components/VerticalLayout/"
import NonAuthLayout from "./components/NonAuthLayout" 
import "./assets/scss/theme.scss"
import 'react-toastify/dist/ReactToastify.css';

 

const App = props => {
  AOS.init()
  function getLayout() {
    let layoutCls = VerticalLayout
    switch (props.layout.layoutType) {
      default:
        layoutCls = VerticalLayout
        break
    }
    return layoutCls
  }
  const Layout = getLayout()
  return (
    <React.Fragment>
         <ToastContainer />
      <Router>
        <Switch>
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={route.path === ("/home") ? NonAuthLayout : Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)
