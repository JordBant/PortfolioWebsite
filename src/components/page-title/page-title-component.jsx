import './page-title.scss'

const PageTitle = ({pageTitleName}) => {
    return (
        <div className="page-title-container">
            <h1 className="page-title"> {`<${pageTitleName}/>`}</h1>
        </div>
    )
}

export default PageTitle