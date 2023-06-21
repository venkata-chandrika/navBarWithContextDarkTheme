// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
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
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="theme"
              />
            )}
            <h1 className={fontClassName}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
