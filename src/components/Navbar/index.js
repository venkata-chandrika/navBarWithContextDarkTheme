// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navItemClassName = isDarkTheme ? 'nav-link' : 'nav-link-dark'
      const bgClassName = isDarkTheme ? 'nav-container' : 'dark-nav-container'

      const onClickLogo = () => {
        toggleTheme()
      }

      const onClickTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={bgClassName}>
          <div className="nav-content">
            <div className="nav-bar-large-container">
              <Link to="/">
                <button
                  type="button"
                  className="btn"
                  onClick={onClickLogo}
                  data-testid="theme"
                >
                  {isDarkTheme ? (
                    <img
                      className="website-logo"
                      src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  ) : (
                    <img
                      className="website-logo"
                      src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                      alt="theme"
                    />
                  )}
                </button>
              </Link>
              <ul className="nav-menu">
                <li className="nav-menu-item">
                  <Link to="/" className={navItemClassName}>
                    Home
                  </Link>
                </li>

                <li className="nav-menu-item">
                  <Link to="/about" className={navItemClassName}>
                    About
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="btn"
                onClick={onClickTheme}
                data-testid="theme"
              >
                {isDarkTheme ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="website-logo"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="theme"
                  />
                )}
              </button>
            </div>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
