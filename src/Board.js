import React, { Component } from 'react';
import Card from './Card';
import Intentos from './Intentos';

class Board extends React.Component {


    componentWillReceiveProps(){
        this.setState({
            seleccionadas: [],
        cantCorrectas: 0,
        intentos: 0,
        datosTrajetas:
            [
                {
                    "id": 0,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447135/1_ewpmnm.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 1
                },
                {
                    "id": 1,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447135/1_ewpmnm.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 1
                },
                {
                    "id": 2,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447136/2_jahfj6.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 2
                },
                {
                    "id": 3,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447136/2_jahfj6.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 2
                },
                {
                    "id": 4,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447141/Untitled-2_qokqno.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 3
                },
                {
                    "id": 5,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447141/Untitled-2_qokqno.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 3
                },
                {
                    "id": 6,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447142/6_h42si8.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 4
                },
                {
                    "id": 7,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447142/6_h42si8.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 4
                },
                {
                    "id": 8,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447142/5_tdg7c6.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 5
                },
                {
                    "id": 9,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447142/5_tdg7c6.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 5
                },
                {
                    "id": 10,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447138/4_nhkjtj.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 6
                },
                {
                    "id": 11,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447138/4_nhkjtj.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 6
                },
                {
                    "id": 12,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447145/3_tilcn7.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 7
                },
                {
                    "id": 13,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447145/3_tilcn7.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 7
                },
                {
                    "id": 14,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/c_scale,h_90/v1586448001/index_fyvvup.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 8
                },
                {
                    "id": 15,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/c_scale,h_90/v1586448001/index_fyvvup.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 8
                },
            ],
        })
    }
    state = {
        seleccionadas: [],
        cantCorrectas: 0,
        intentos: 0,
        datosTrajetas:
            [
                {
                    "id": 0,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447135/1_ewpmnm.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 1
                },
                {
                    "id": 1,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447135/1_ewpmnm.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 1
                },
                {
                    "id": 2,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447136/2_jahfj6.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 2
                },
                {
                    "id": 3,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447136/2_jahfj6.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 2
                },
                {
                    "id": 4,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447141/Untitled-2_qokqno.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 3
                },
                {
                    "id": 5,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447141/Untitled-2_qokqno.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 3
                },
                {
                    "id": 6,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447142/6_h42si8.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 4
                },
                {
                    "id": 7,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447142/6_h42si8.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 4
                },
                {
                    "id": 8,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447142/5_tdg7c6.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 5
                },
                {
                    "id": 9,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447142/5_tdg7c6.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 5
                },
                {
                    "id": 10,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447138/4_nhkjtj.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 6
                },
                {
                    "id": 11,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447138/4_nhkjtj.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 6
                },
                {
                    "id": 12,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447145/3_tilcn7.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 7
                },
                {
                    "id": 13,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447145/3_tilcn7.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 7
                },
                {
                    "id": 14,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/c_scale,h_90/v1586448001/index_fyvvup.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 8
                },
                {
                    "id": 15,
                    "front": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "back": "https://res.cloudinary.com/dyvyiepbv/image/upload/c_scale,h_90/v1586448001/index_fyvvup.jpg",
                    "foto": "https://res.cloudinary.com/dyvyiepbv/image/upload/v1586447139/7_y0gydk.jpg",
                    "pareja": 8
                },
            ],
    }

    clickTarjeta = (e) => {
        let array = this.state.seleccionadas.concat(e);
        //DOY VUELTA TARJETA
        let items = [...this.state.datosTrajetas];
        let item = { ...items[e.id] };
        item.foto = item.back;
        items[e.id] = item;
        this.setState({
            datosTrajetas: items
        })
        //TERMINO DOY VUELTA TARJETA
        this.setState({
            seleccionadas: array
        });
        if ((array.length) > 1) {


            let cantIntentos = this.state.intentos + 1;
            this.setState({
                intentos: cantIntentos
            })
            if ((array[0].pareja === array[1].pareja) === false) {
                setTimeout(() => {
                    let items = [...this.state.datosTrajetas];
                    let item1 = { ...items[array[0].id] };
                    let item2 = { ...items[array[1].id] };
                    item1.foto = item1.front;
                    item2.foto = item2.front;
                    items[array[0].id] = item1;
                    items[array[1].id] = item2;
                    array = []; // nuevo, limpio array
                    this.setState({
                        datosTrajetas: items, // dejo actualizado el json de tarjetas
                        seleccionadas: array // limpio array de seleccionadas
                    })
                }, 2000);
            } else {
                array = [];
                let cantCorrectas = this.state.cantCorrectas;
                this.setState({
                    seleccionadas: array,
                    cantCorrectas: cantCorrectas + 1
                })
            }
        }
    }


    render() {
        return (
            <>
    <div className="grid">
                <tr>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[0]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[0]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[0]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[1]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[1]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[1]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[2]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[2]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[2]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                    <td>

                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[3]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[3]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[3]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[4]].id}
                            width={100}
                            height={100}
                            foto={this.state.datosTrajetas[this.props.numbers[4]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[4]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[5]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[5]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[5]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[6]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[6]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[6]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[7]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[7]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[7]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[8]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[8]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[8]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[9]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[9]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[9]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[10]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[10]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[10]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[11]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[11]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[11]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[12]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[12]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[12]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[13]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[13]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[13]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[14]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[14]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[14]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                    <td>
                        <Card
                            id={this.state.datosTrajetas[this.props.numbers[15]].id}
                            foto={this.state.datosTrajetas[this.props.numbers[15]].foto}
                            pareja={this.state.datosTrajetas[this.props.numbers[15]].pareja}
                            cantClicks={this.state.seleccionadas.length}
                            onClick={this.clickTarjeta}>
                        </Card>
                    </td>
                </tr>
            </div>
                <Intentos cantidad={this.state.intentos}></Intentos>
            </>
        )
    }
}



export default Board;