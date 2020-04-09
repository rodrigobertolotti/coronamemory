import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    clickTarjeta = () => {
        if (this.props.cantClicks<2){
        this.props.onClick(this.props);
        }
    }

    render() {
        return (
            <div className="cardCont">
            <div className="card"
                style={{
                    backgroundImage: `url(${this.props.foto})`,
                    width: "90px",
                    height: "90px",
                }}
                onClick={this.clickTarjeta}>
</div>
            </div>
        )
    }
}



export default Card;