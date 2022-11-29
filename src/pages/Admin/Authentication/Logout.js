import PropTypes from 'prop-types'
import React, { useEffect } from "react"
 
const Logout = props => {
    useEffect(() => {
        localStorage.removeItem("token")
        props.history.push(`admin/login`);
        // props.logoutUser(props.history)
    })

    return <></>
}
 

// export default withRouter(connect(null, { logoutUser })(Logout))
export default Logout
