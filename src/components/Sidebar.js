import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault()
    e.target.parentElement.classList.toggle('open')
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown'
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className={this.activeRoute("/nearby")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="fa fa-circle-o"></i>Nearby</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <NavLink to={'/nearby/venues'} className="nav-link" activeClassName="active"><i className="fa fa-map-o"></i>Venues</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/nearby/pho'} className="nav-link" activeClassName="active"><i className="fa fa-map-o"></i>Pho</NavLink>
                </li>
              </ul>
            </li>

            <li className={this.activeRoute("/about")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="fa fa-circle-o"></i>About</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <NavLink to={'/about/source'} className="nav-link" activeClassName="active"><i className="fa fa-code"></i>Source Code</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/about/licences'} className="nav-link" activeClassName="active"><i className="fa fa-creative-commons"></i>Licences</NavLink>
                </li>
              </ul>
            </li>


            <li className={this.activeRoute("/social")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="fa fa-circle-o"></i>Social</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <NavLink to={'/social/twitter'} className="nav-link" activeClassName="active"><i className="fa fa-twitter"></i>Twitter</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/about/instagram'} className="nav-link" activeClassName="active"><i className="fa fa-instagram"></i>Instagram</NavLink>
                </li>
              </ul>
            </li>

          </ul>
        </nav>
      </div>
    )
  }
}
