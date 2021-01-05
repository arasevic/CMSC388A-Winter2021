import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `Maroon`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <ul style={{listStyleType: "none", display: "inline-block"}}>
        <li style={{display: "inline-block"}}>
          <h3 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h3>
        </li>
        <li style={{display: "inline-block", paddingLeft: "10px"}}>
          <Link
            to="/schedule"
            style={{
              color: `white`,
              textDecoration: `none`,
              display: 'inline-block'
            }}
          >
            Schedule
          </Link>
        </li>  
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
