import './page-title.scss'

const PageTitle = ({pageTitleName}) => {
    return (
    <h1 className="page-title"> {`<${pageTitleName}/>`}</h1>
    )
}

export default PageTitle