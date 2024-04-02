import './index.css'

import {Component} from 'react'

import {v4} from 'uuid'

import GetPasswords from '../Passwords'

class PasswordManager extends Component {
  state = {
    website: '',
    name: '',
    password: '',
    searchInput: '',
    initialList: [],
    isChecked: false,
  }

  addNewPassword = event => {
    event.preventDefault()
    const {website, name, password} = this.state

    if (website !== '' && name !== '' && password !== '') {
      const newPassword = {
        id: v4(),
        website,
        name,
        password,
        color: `color${Math.floor(Math.random() * 5)}`,
      }

      this.setState(previousState => ({
        initialList: [...previousState.initialList, newPassword],
        website: '',
        name: '',
        password: '',
      }))
    }
  }

  addWebsite = event => {
    this.setState({website: event.target.value})
  }

  addName = event => {
    this.setState({name: event.target.value})
  }

  addPassword = event => {
    this.setState({password: event.target.value})
  }

  addSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  filterList = () => {
    const {searchInput, initialList} = this.state
    const resInput = searchInput.toLowerCase()

    return initialList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(resInput),
    )
  }

  delete = id => {
    const {initialList} = this.state

    const resList = initialList.filter(eachItem => id !== eachItem.id)

    this.setState({initialList: [...resList]})
  }

  isChecked = event => {
    this.setState({isChecked: event.target.checked})
  }

  render() {
    const {website, name, password, searchInput, isChecked} = this.state
    const filteredList = this.filterList()

    return (
      <div className="main">
        <div className="content">
          <img
            className="image1"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="card1">
            <img
              className="image2"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
            <form onSubmit={this.addNewPassword} className="form">
              <h1 className="h1">Add New Password</h1>
              <div className="inputContainer1">
                <img
                  className="image3"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <input
                  onChange={this.addWebsite}
                  value={website}
                  className="input1"
                  placeholder="Enter Website"
                />
              </div>

              <div className="inputContainer1">
                <img
                  className="image3"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  onChange={this.addName}
                  value={name}
                  className="input1"
                  placeholder="Enter Username"
                />
              </div>

              <div className="inputContainer1">
                <img
                  className="image3"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  onChange={this.addPassword}
                  value={password}
                  type="password"
                  className="input1"
                  placeholder="Enter Password"
                />
              </div>
              <div className="buttonContainer1">
                <button className="button1" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="card2">
            <div className="header">
              <div className="passwordCount">
                <h1 className="h2">Your Passwords</h1>
                <p className="p1">{filteredList.length}</p>
              </div>
              <div className="searchContainer">
                <img
                  className="image4"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input
                  onChange={this.addSearchInput}
                  value={searchInput}
                  className="input2"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
            <hr className="hr" />
            <div className="showPasswordsContainer">
              <input
                onChange={this.isChecked}
                id="checkbox"
                type="checkbox"
                className="input3"
              />
              <label htmlFor="checkbox" className="label1">
                Show Passwords
              </label>
            </div>
            {filteredList.length === 0 ? (
              <div className="noPasswordContainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="image5"
                />
                <p className="p2">No Passwords</p>
              </div>
            ) : (
              <ul className="ul">
                {filteredList.map(eachItem => (
                  <GetPasswords
                    clickedDelete={this.delete}
                    content={eachItem}
                    key={eachItem.id}
                    showPassword={isChecked}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
