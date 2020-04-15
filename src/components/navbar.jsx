import React, { Component } from 'react';

//Stateless functional component 

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Items</a>
            <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
          </nav>
      );
    }
}
 
export default NavBar;