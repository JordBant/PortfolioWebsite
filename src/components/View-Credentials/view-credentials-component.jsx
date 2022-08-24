import OptionsList from '../Options-List/options-list-component'
import './view-credentials-component.scss'

const ViewCredentials = () => {
  return (
    <div className="view-credential">
      <div className="options-wrapper">
          <OptionsList/>
          <p className="title">
              {/* Download Resume PDF */}
              View This Resume
          </p>
      </div>
    </div>
  )
}

export default ViewCredentials