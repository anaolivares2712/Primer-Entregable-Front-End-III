import React, { Component } from "react";
import data from "./data.json";
import Opciones from "./Opciones";
import Historial from "./Historial";

const historialLetras = [];

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            contador: 0,
            letra: "",
        }
    }

    handleClick = (event) => {
        if(this.state.contador >= 7){
            alert("Fin!");
        }
        else if(event.target.id === "A" && this.state.letra !== "A"){
            this.setState({
                contador: this.state.contador + 1,
                letra: "A",
            });
        }
        else if(event.target.id === "A" && this.state.letra === "A"){
            this.setState({
                contador: this.state.contador + 2,
                letra: "A"
            });
        }
        else if(event.target.id === "B" && this.state.letra !== "A"){
            this.setState({
                contador: this.state.contador + 2,
                letra: "B"
            });
        }
        else if(event.target.id === "B" && this.state.letra === "A"){
            this.setState({
                contador: this.state.contador + 3,
                letra: "B"
            });
        }
    }

    componentDidUpdate(){
        historialLetras.push(this.state.letra);
    }

    render(){
        return(
            <div className = "layout">
                <h1 className = "historia">{data[this.state.contador].historia}</h1>
                <Opciones
                    handleClick={this.handleClick}
                    opcionA={data[this.state.contador].opciones.a}
                    opcionB={data[this.state.contador].opciones.b}
                />
                <Historial
                    letra={this.state.letra}
                    historial={historialLetras.map((e, index) => (<li key={index}>{e}</li>),data[this.state.contador].id)}/>
            </div>
        );
    }
}
export default Main;