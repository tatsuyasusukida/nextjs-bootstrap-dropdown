import type { NextPage } from 'next'
import {MouseEvent, useState} from 'react'

const Navbar: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = (event: MouseEvent) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar navbar-expand navbar-light bg-light"
         aria-label="header">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown">
          <a href="#"
             className="nav-link dropdown-toggle"
             id="navbarDropdown"
             role="button"
             aria-expanded={isOpen}
             onClick={toggleDropdown}>
            Dropdown
          </a>
          <ul className={`dropdown-menu${isOpen ? ' show' : ''}`}
              style={{right: 0}}
              aria-labelledby="navbarDropdown">
            <li>
              <a href="#action" className="dropdown-item">
                Action
              </a>
            </li>
            <li>
              <a href="#another-action" className="dropdown-item">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a href="#something-else-here" className="dropdown-item">
                Something else here
              </a>
            </li>
          </ul>
          {isOpen && (
            <button className="modal-backdrop opacity-0"
                    style={{zIndex: 999, cursor: 'auto'}}
                    onClick={toggleDropdown}>
              Hide dropdown
            </button>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
