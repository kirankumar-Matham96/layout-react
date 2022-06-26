import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="ConfigurationController-container">
          <h1 className="main-heading white">Layout</h1>
          <div className="input-section">
            <input
              type="checkbox"
              className="checkbox"
              id="content"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="input-section">
            <input
              type="checkbox"
              className="checkbox"
              id="l-nav"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="l-nav" className="label">
              Left Navbar
            </label>
          </div>
          <div className="input-section">
            <input
              type="checkbox"
              className="checkbox"
              id="r-nav"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="r-nav" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
