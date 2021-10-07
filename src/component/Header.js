import React from 'react'
import { Provider } from "../Context.js"
const Header = props => {
    const { titleName } = props
    return (
        <Provider>
            <div >
                <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0  " >
                    <div className="container">
                        <a href="/" className="navbar-brand">
                            {titleName}
                        </a>
                    </div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Provider>
    )
}

export default Header
