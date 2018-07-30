import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {clearError} from '../actions/index'
import {logUserOff} from '../actions/auth/login'

const Nav = (props) => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'><img src='images/logo.png' alt='softwareness logo' /></Link>
      </div>
      <div className='navbarmenu'>
        {!props.loggedIn && <Link to='/login' className='button'>login</Link>}
        {props.loggedIn && <button className='button' onClick={logout}>logOut </button>}
        {!props.loggedIn && <Link to='/register' className='button'>register</Link>}
      </div>
    </nav>
  )

  function logout () {
    const {logUserOff} = props
    logUserOff()
  }
}

function mapStateToProps (state) {
  return {
    loggedIn: state.login
  }
}

function mapDispatchToProps (dispatch) {
  return {
    logUserOff: () => {
      dispatch(clearError())
      return dispatch(logUserOff())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
