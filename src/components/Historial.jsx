import { Component } from "react";

class Historial extends Component{
    render(){
        return(
            <div className="recordatorio">
                <h4>Selección anterior: {this.props.letra}</h4>
                <h4>historial de opciones elegidas: </h4>
                <ul>{this.props.historial}</ul>
            </div>
        );
    }
}

export default Historial;