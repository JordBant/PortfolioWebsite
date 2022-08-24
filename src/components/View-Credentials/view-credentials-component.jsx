import OptionsList from '../Options-List/options-list-component'
import './view-credentials-component.scss'

const ViewCredentials = () => {
  return (
    <div className="view-credential">
        <p className="title">
            {/* Download Resume PDF */}
            View This Resume
        </p>
        <OptionsList/>
    </div>
  )
}

export default ViewCredentials