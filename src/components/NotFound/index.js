// Write your code here{
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const className = isDarkTheme ? 'not-found-container' : 'bg-dark'
      const fontClassName = isDarkTheme ? 'light' : 'dark'
      return (
        <>
          <Navbar />
          <div className={className}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
              className="not-found-img"
            />
            <h1 className={fontClassName}>Lost Your Way?</h1>
            <p className="sub-warning">We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
