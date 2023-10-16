import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    const [open, setOpen] = useState(false);
    return (
        <div>  <nav className="navbar navbar-expand-lg bg-body-tertiary dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://example.com">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://example.com">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://example.com">{props.addlink}</a>
                        </li>


                    </ul>

                </div>
            </div>
        </nav></div>
    )
}

Navbar.prototype = {
    addlink: PropTypes.string
}
Navbar.defaultProps = {
    addlink: 'Add link'
}
