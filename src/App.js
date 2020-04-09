import React, { Component } from "react";
import Board from './Board';

class App extends Component {


  constructor(props){
    super(props);
    let arrayInicial= this.generarArray();
    this.state = {
      array: arrayInicial
    }
  }

  generarArray = () => {
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15],
      ranNums = [],
      i = nums.length,
      j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }
    return ranNums;
  }


  actualizar = () => {
    let nuevoArray= this.generarArray();
    this.setState({
      array: nuevoArray
    })
  }

  render() {
    return (
      <>
      <p className="titulo">#QUEDATEENCASA</p>
      <div className="tablero">
        <Board numbers={this.state.array}></Board>
        <div className="boton" onClick={ () => this.actualizar() }>
        <i class="fas fa-redo fa-3x"></i>
        </div>
      </div>
      </>
    )

  }
}
export default App;

