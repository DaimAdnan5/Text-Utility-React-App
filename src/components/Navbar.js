import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <NavLink className="navbar-brand" to="/home">{props.title}</NavLink>
      <div className="navbar-tabs">
        <NavLink
          className={({ isActive }) => `navbar-tab${isActive ? ' navbar-tab-active' : ''}`}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `navbar-tab${isActive ? ' navbar-tab-active' : ''}`}
          to="/about"
        >
          {props.about}
        </NavLink>
        <NavLink
          className={({ isActive }) => `navbar-tab${isActive ? ' navbar-tab-active' : ''}`}
          to="/contact"
        >
          {props.contact}
        </NavLink>
      </div>
      <label className="theme-toggle">
        <input
          type="checkbox"
          role="switch"
          checked={props.isDarkMode}
          onChange={props.onToggleDarkMode}
        />
        <span className="theme-switch" aria-hidden="true">
          <span className="theme-switch-thumb" />
        </span>
        <span>Dark mode</span>
      </label>
    </nav>
  )
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  about: propTypes.string,
  contact: propTypes.string,
  isDarkMode: propTypes.bool,
  onToggleDarkMode: propTypes.func
}

Navbar.defaultProps = {
  about: "About",
  contact: "Contact",
  isDarkMode: false,
  onToggleDarkMode: () => {}
}