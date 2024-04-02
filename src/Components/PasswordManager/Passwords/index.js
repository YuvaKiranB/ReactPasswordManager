import './index.css'

const GetPasswords = props => {
  const {content, clickedDelete, showPassword} = props
  const {id, website, name, password, color} = content

  const deleteItem = () => {
    clickedDelete(id)
  }

  return (
    <li className="li">
      <div className="password1">
        <div className={`letter ${color}`}>
          <p className="p3 ">{website.slice(0, 1).toUpperCase()}</p>
        </div>
        <div className="dataContainer">
          <p className="p4">{website}</p>
          <p className="p5">{name}</p>
          {showPassword ? (
            <p className="p6">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="image6"
            />
          )}
        </div>
      </div>
      <div className="deleteContainer">
        <button
          data-testid="delete"
          type="button"
          className="button2"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            className="image7"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default GetPasswords
