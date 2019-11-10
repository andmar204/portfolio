import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        if(this.props.text === "Y"){
            console.log("Showing information")
        } else if(this.props.text === "N"){
            console.log("Contact me");
        } else {
            console.log("What did you do?!");
        }
    }    
    
    render() {
        return (
            <div className="Button" onClick={this.handleClick}>
                {this.props.text}
            </div>
	    );
    }
}

export default Button;
