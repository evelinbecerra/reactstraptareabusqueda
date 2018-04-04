import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, Button, Input, Alert } from 'reactstrap';
import Articulo from './articulo';


export default class Populares extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            criterio : ''
        };
    }

    onChangeCriterio(e){
        
        this.setState(
            {
                criterio : e.target.value
            }
        );
    }

    onKeyDown = (event) => {
        if(event.key === 'Enter'){
          this.props.buscar(event,this.state.criterio);
        }
    }
    
    render(){        
        
        if(this.props.articulos.length > 0 )
        {

            var busqueda = this.props.articulos,
            criteriob = this.props.criterio.trim().toLowerCase();

            if(criteriob.length > 0){
                busqueda = busqueda.filter(l => {
                    return l.nombre.toLowerCase().match( criteriob );
                });
            }
            
            return(
                <div>
                    <h4><small>Articulos más pupulares</small></h4>
                    <InputGroup>
                        <Input onChange={this.onChangeCriterio.bind(this)} name="criterio" id="criterio" placeholder="Criterio de búsqueda" onKeyDown={this.onKeyDown}  />
                        <InputGroupAddon addonType="append">
                            <Button color="info" onClick={ (e) => { this.props.buscar(e,this.state.criterio)} } >Buscar</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    {
                        busqueda.map((item) => {
                            return <Articulo {...item} key={item.id} /> 
                        })
                    }
                </div>
            );   
        }
        else {
            return(
                <div>
                    <h4><small>Articulos más pupulares</small></h4>
                    <InputGroup className="mb-2">
                        <Input onChange={this.onChangeCriterio.bind(this)} name="criterio" id="criterio" placeholder="Criterio de búsqueda" />
                        <InputGroupAddon addonType="append">
                            <Button color="info" onClick={ (e) => { this.props.buscar(e,this.state.criterio, this.props.articulos)} } >Buscar</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    <Alert color="success">
                        No hay resultados para su búsqueda.
                    </Alert>
                    <p className="text-center"> No hay resultados para su búsqueda</p>                    
                </div>
              );
        }

    }
}
