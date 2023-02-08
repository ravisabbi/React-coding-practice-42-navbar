import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const aboutDarkThemeUrl =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
const aboutLightThemeUrl =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutUrl = isDarkTheme ? aboutDarkThemeUrl : aboutLightThemeUrl

      const aboutClassName = isDarkTheme ? 'dark-about' : 'light-about'

      return (
        <>
          <Navbar />
          <div className={`${aboutClassName} about-container`}>
            <img src={aboutUrl} alt="about" className="about-image" />
            <h1 className="about">About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
