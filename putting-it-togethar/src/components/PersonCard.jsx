import React from "react";


class PersonCard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {counter: 45}
    
        this.incrementBirthday=this.incrementBirthday.bind(this)
    }

    incrementBirthday(){
  
        this.setState({counter: this.state.counter+1})
   
    }


    render() {
        return (
            <>
            <h1>{ this.props.firstName } { this.props.lastName }  </h1>
            <div></div>
            <div>Age:  {this.state.counter}</div>
            <div> {this.props.colorhir}</div>
            <button onClick={this.incrementBirthday}>Birthday Button { this.props.firstName } { this.props.lastName }</button>

  

            
            </>
            
        )
    }
}

export default PersonCard;