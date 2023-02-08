import ContextTheme from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ContextTheme.Consumer>
    {value => {
      const {isDarkTheme} = value

      const NotFoundClassName = isDarkTheme
        ? 'dark-not-found'
        : 'light-not-found'

      return (
        <>
          <Navbar />
          <div className={`${NotFoundClassName} not-found-container`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className="not-found-heading">Lost Your Way?</h1>
            <p className="not-found-description">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ContextTheme.Consumer>
)

export default NotFound
