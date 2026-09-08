import React from 'react'
import propTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="navbar-brand" href="/home">{props.title}</a>
      <div className="navbar-tabs">
        <a className="navbar-tab navbar-tab-active" href="/home">Home</a>
        <a className="navbar-tab" href="/about">{props.about}</a>
        <a className="navbar-tab" href="/contact">{props.contact}</a>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  about: propTypes.string,
  contact: propTypes.string
}

Navbar.defaultProps = {
  about: "About",
  contact: "Contact"
}