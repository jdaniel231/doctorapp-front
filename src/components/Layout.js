import React from 'react'
import './../styles/LayoutStyles.css'
import { SidebarMenu } from '../Data/data.js'
import { Link, useLocation } from 'react-router-dom'

const Layout = ({children}) => {

  const location = useLocation()
  return (
    <>
      <div className='main'>
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>
                Doc Applications
              </h6>
              <hr/>
            </div>
            <div className="menu">
              {SidebarMenu.map(menu => {
                const isActive = location.pathname === menu.path; // Definição da variável isActive
                return (
                  <div
                    className={`menu-item ${isActive ? 'active' : ''}`}
                    key={menu.path}
                  >
                    <i className={menu.icon}></i>
                    <Link to={menu.path}>{menu.name}</Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="content">
            <div className="header">
              Header
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout