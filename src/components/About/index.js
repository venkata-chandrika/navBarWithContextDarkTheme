// Write your code here
// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const className = isDarkTheme ? 'not-found-container' : 'bg-dark'
      const fontClassName = isDarkTheme ? 'light' : 'dark'
      return (
        <>
          <Navbar />
          <div className={className}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="theme"
              />
            )}
            <h1 className={fontClassName}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
