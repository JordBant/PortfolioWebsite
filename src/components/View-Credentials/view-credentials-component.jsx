import './view-credentials-component.scss'

const ViewCredentials = ({viewType}) => {
    const viewing = (string) => {
        // eslint-disable-next-line default-case
        switch (string) {
            case 'download':
                return (
                <div className="view-credential dwnld">
                    <p className="title">
                        {/* Download Resume PDF */}
                        onHover play Download gif
                    </p> 
                </div>)
            case 'browser':
                return (
                <div className="view-credential browser">
                    <p className="title">
                        {/* Download Resume PDF */}
                        onHover play Download gif
                    </p> 
                </div>);
        }
    }

  return (
    <>
        {
            viewing(viewType)
        }
    </>
  )
}

export default ViewCredentials