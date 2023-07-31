import React, { Component } from 'react'

class Footer extends Component{
    render() {
        return (
            <React.Fragment>
                <h3>This is footer component(class component)</h3>
                <p>trademark: {this.props.trademark}</p>
            </React.Fragment>
        )
    }
}

export default Footer;