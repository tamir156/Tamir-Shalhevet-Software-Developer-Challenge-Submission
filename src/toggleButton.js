import React from "react"

export default class ToggleButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
      this.baseString = props.baseString; // takes base string from props
      this.altString = props.altString; // takesalternative string from props
    }

    handleClick() { // reverses toggle mode on click
        this.setState(prevState => ({      
            isToggleOn: !prevState.isToggleOn    
        }));  
    }

    render() {
      return (
        <button onClick={this.handleClick} className= {"buttonStyle " + (this.state.isToggleOn ? "baseStyle" : "altStyle")}>        
            {this.state.isToggleOn ? this.baseString : this.altString}
        </button>
      );
    }
}
