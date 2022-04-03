import React from "react";
import logo from "./logo.svg";
import "./App.css";

export class App extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.state = {
            text: "Hello"
        };
    }
    render() {
        return <div> yo </div>;
    }
}

export default App;
