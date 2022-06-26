import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showContent, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="side-nav-container">
              <h1 className="sidenav-title">Left Navbar Menu</h1>
              <ul className="side-nav-list-container">
                <li className="side-nav-list-item">Item 1</li>
                <li className="side-nav-list-item">Item 2</li>
                <li className="side-nav-list-item">Item 3</li>
                <li className="side-nav-list-item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="content-title">Content</h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="side-nav-container right-nav">
              <h1 className="sidenav-title">Right Navbar</h1>
              <ul className="side-nav-list-container right-nav-list">
                <li className="side-nav-list-item">
                  <div className="side-nav-list-item-div">
                    <p className="side-nav-list-item-div-description">Ad 1</p>
                  </div>
                </li>
                <li className="side-nav-list-item">
                  <div className="side-nav-list-item-div">
                    <p className="side-nav-list-item-div-description">Ad 2</p>
                  </div>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
