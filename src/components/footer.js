import React, { Component } from 'react'

class Footer extends Component {
    state = {
        name: "Ryan"
    }

    createAlert() {
        alert("Hello, you clicked me!")
    }

    inputChanged = (event) => {
        console.log("changed");
        // console.log(this.state.name);
        this.setState({ name: event.target.value });
        // 這裡的狀態並不會即時更新，仍會是先前的狀態
        console.log(this.state.name);
    }

    render() {
        return (
            <React.Fragment>
                {/* <h3 onClick={this.createAlert}>This is footer component(class component)</h3> */}
                <h3 onClick={this.props.appAlert}>This is footer component(class component)</h3>
                <p>trademark: {this.props.trademark}</p>
                <input
                    value={this.state.name}
                    onChange={this.inputChanged} type="text" />
            </React.Fragment>
        )
    }
}

export default Footer;