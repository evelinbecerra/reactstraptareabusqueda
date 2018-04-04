import React, {Component} from 'react';
import { Nav, NavItem } from 'reactstrap';
import { BrowserRouter, Route,Link } from 'react-router';

export default class Sidebar extends Component
{
    constructor(props)
    {
        super(props);
    }

    activeLink = (pagina) => {
        return "nav-link" +  ((this.props.pagina) == pagina ? 'active' : '');
    }

    render(){
        return(
            <div>
                <Nav vertical pills>
                    <h4><small>Sidebar</small></h4>
                    <NavItem>
                        <Link className={this.activeLink('home')} to='/home'>Inicio</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={this.activeLink('contacto')} to='/contacto'>Contacto</Link>
                    </NavItem>
                </Nav>                        
            </div>
        )
    }
}
