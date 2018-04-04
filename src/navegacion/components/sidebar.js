
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Nav,NavItem} from 'reactstrap';

class Sidebar extends Component{

    constructor(props){
        super(props);
        //this.props.pagina
    }

    activeLink = (pagina) =>{
        return "nav-link " +((this.props.pagina) === pagina ? 'active ' : '');
    }
    
    render(){
        return(
            <div>   
                <Nav vertical pills> 
                    <h4>Tu Blog</h4>
                    <NavItem> 
                        <Link  className={this.activeLink('home')} to='/' >Home</Link>
                    </NavItem>
                    <NavItem> 
                        <Link className={this.activeLink('contacto')}  to='/contacto' >Contacto</Link>
                    </NavItem>
                </Nav>
            </div>
        );
    }

}

export default Sidebar;


