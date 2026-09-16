import {Component} from "react";
// class Component
class ClassComponent extends Component {
    render() {
        return (
            <>
                <h1>Hello, my name is {this.props.name}</h1>
            </>
        );
    }
}
export default ClassComponent;