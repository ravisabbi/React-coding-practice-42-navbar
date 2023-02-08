import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const darkThemeLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const lightThemeLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const darkThemeUrl =
  'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
const lightThemeUrl =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const logoUrl = isDarkTheme ? lightThemeLogoUrl : darkThemeLogoUrl

      const themeUrl = isDarkTheme ? lightThemeUrl : darkThemeUrl

      const navClass = isDarkTheme ? 'dark-theme-navbar' : 'light-theme-navbar'

      const fontColorClass = isDarkTheme ? 'dark' : 'light'

      const onToggleTheme = () => {
        toggleTheme()
      }

      console.log(isDarkTheme)
      return (
        <nav className={`${navClass} nav-bar`}>
          <Link to="/">
            <img src={logoUrl} alt="website logo" className="logo" />
          </Link>

          <ul className="nav-list">
            <li className="list-item">
              <Link to="/" className={`${fontColorClass} nav-link`}>
                Home
              </Link>
            </li>

            <li className="list-item">
              <Link to="/about" className={`${fontColorClass} nav-link`}>
                About
              </Link>
            </li>
          </ul>
          <button
            className="theme-btn"
            type="button"
            onClick={onToggleTheme}
            data-testid="theme"
          >
            <img src={themeUrl} alt="theme" className="logo" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
