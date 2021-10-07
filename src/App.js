
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from "./component/Header"
import Contacts from './component/Contacts'
import { Provider } from './Context'
// import Contacts from "./component/Contacts"
export class App extends Component {

  render() {
    return (
      <Provider>
        <div>
          <Header titleName="Contact list" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
