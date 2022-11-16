import PropTypes from 'prop-types'
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

 
const Logout = props => {
  useEffect(() => {
   },[])

  return <></>
}

Logout.propTypes = {
  history: PropTypes.object,
  logoutUser: PropTypes.func
}

export default  Logout
