
import React from "react";
class Bike extends React.Component
{
    constructor(props) //initiation
    {
        super(props);
        this.state=         //print or render
        {
            brand: "Royal Enfield",
            model:"Classic",
            color:"black",
            year:"2022"
        };
    }
    ChangeColor=()=>{
        this.setState({color:"Red"})
    }

    render()
    {
        return(
            <div>
                <h1>My-{this.state.brand}</h1>
                <p>
                    It is {this.state.color} &nbsp;
                    {this.state.model} &nbsp;
                    from{this.state.year}.
                </p>
                <button type='button' onClick={this.ChangeColor}>Change Color</button>
            </div>
        );
    }
}
export default Bike;