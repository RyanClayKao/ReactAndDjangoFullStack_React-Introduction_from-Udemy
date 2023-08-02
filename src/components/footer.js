import React, { Component } from 'react';
import { CtxConsumer } from "../index";

class Footer extends Component {
    state = {
        // name: "Ryan"
        name: "",
        age: 18,
        isLogin: false
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

    componentDidMount() {
        this.setState({ name: "Ryan" });
    }

    render() {
        // const animals = [
        //     {
        //         id: 1,
        //         kind: "cat",
        //     },
        //     {
        //         id: 2,
        //         kind: "dog",
        //     },
        //     {
        //         id: 3,
        //         kind: "horse",
        //     },
        // ]

        return (
            // <React.Fragment>
            //     <div style={{ "backgroundColor": "lightblue" }}>
            //         {/* <h3 onClick={this.createAlert}>This is footer component(class component)</h3> */}
            //         <h3 onClick={this.props.appAlert}>This is footer component(class component)</h3>
            //         <p>trademark: {this.props.trademark}</p>
            //         <input
            //             value={this.state.name}
            //             onChange={this.inputChanged} type="text" />

            //         <div>
            //             狀態:&ensp;
            //             {this.state.isLogin ? (
            //                 <span>已登入</span>
            //             ) : (
            //                 <span>未登入</span>
            //             )}
            //         </div>

            //         {
            //             animals.map(item => {
            //                 return (
            //                     <div key={item.id}>
            //                         <h3>id: {item.id}</h3>
            //                         <h3>type: {item.kind}</h3>
            //                     </div>
            //                 )
            //             })
            //         }
            //     </div>
            // </React.Fragment>


            <CtxConsumer>
                {
                    (context) => {
                        <div>
                            {
                                context.animals.map(animal => {
                                    return (
                                        <div key={animal}>
                                            <h1>{animal}</h1>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    }
                }
            </CtxConsumer>
        )
    }
}

export default Footer;