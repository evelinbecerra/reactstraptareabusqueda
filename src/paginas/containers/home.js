
import React , {Component} from 'react';
import TemplateLayout from '../components/template-layout';
import LateralContent from '../components/lateral-content';
import MainContent from '../components/main-content';
import Populares from '../../articulos/components/populares-search';
import Sidebar from '../../navegacion/components/sidebar';


class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            data : {                
                articulos : []
            },
            criterio : ""
        }; 
    }

    componentWillMount()
    {
        fetch('http://programacion.xyz/mtw/204/react/index.php/api/sitio/populares')
        .then(result => {
            return result.json();
        })
        .then( (json) =>{
            //console.log(json.articulos[0].descripcion);
            //json.articulos[0].nombre = "Nuevo nombre de prueba";
            this.setState({
                data : json,
                criterio : ""
            });
            console.log(json);
        });
    }

    componentDidMount()
    {
        /*fetch('http://programacion.xyz/mtw/204/react/index.php/api/sitio/populares')
        .then(result => {
            return result.json();
        })
        .then( (json) =>{
            this.setState({data : json});
        });*/
    }

    
    buscar = (e,criterio) =>{
        this.setState({
            criterio : criterio
        });
    }


    render(){
        return(
            <TemplateLayout>
                
                <LateralContent>
                   <Sidebar pagina={'home'} />
                </LateralContent>

                <MainContent>
                    <Populares articulos={this.state.data.articulos} criterio={this.state.criterio} buscar={this.buscar} />
                </MainContent>
        
            </TemplateLayout>
        );
    }

}


export default Home;