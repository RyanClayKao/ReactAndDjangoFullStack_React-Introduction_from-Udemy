import React, { Component } from 'react'

class Footer extends Component{
    createAlert(){
        alert("Hello, you clicked me!")
    }

    inputChanged(){
        console.log("changed");
    }

    render() {
        return (
            <React.Fragment>
                {/* <h3 onClick={this.createAlert}>This is footer component(class component)</h3> */}
                <h3 onClick={this.props.appAlert}>This is footer component(class component)</h3>
                <p>trademark: {this.props.trademark}</p>
                <input onChange={this.inputChanged} type="text"/>
            </React.Fragment>
        )
    }
}

export default Footer;