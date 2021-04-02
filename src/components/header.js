import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#014af9`,
      paddingLeft: `8em`,
      paddingRight: `8em`,
      paddingTop: `0.5em`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1600,
        height: `100vh`,
        display: `inline-block`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          fontFamily: `aldrich`,
          fontWeight: `bold`,
        }}
      >
        {siteTitle}
      </Link>

      <ul
        style={{
          display: `inline`,
        }}
      >
        {["home", "projects", "articles"].map(item => (
          <li
            style={{
              display: `inline-block`,
              padding: `1em`,
              fontWeight: `lighter`,
            }}
          >
            <Link
              to={item}
              style={{
                color: `white`,
                textDecoration: `none`,
                fontFamily: `aldrich`,
              }}
            >
              {item}
            </Link>
          </li>
        ))}
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
