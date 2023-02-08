import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const darkThemeHomeUrl =
  'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
const lightThemeHomeUrl =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeUrl = isDarkTheme ? darkThemeHomeUrl : lightThemeHomeUrl

      const homeClassName = isDarkTheme ? 'home-dark' : 'home-light'

      return (
        <>
          <Navbar />
          <div className={`${homeClassName} home-container`}>
            <img src={homeUrl} alt="home" className="home-image" />
            <h1>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
