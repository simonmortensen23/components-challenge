import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";


class NavBarSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            logonButton: "log in",
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Prev State:', prevState)
            console.log('Prev Props:', prevProps)
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                logonButton: prevState.logonButton === "log in" ? "log out" : "log in",
            }
        })
    }

    render () {
        return(
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>
                    {this.state.message}
                </span>
                <button onClick={() => this.handleClick()}>{this.state.logonButton}</button>
            </div>
        )
    }
}

export default NavBarSimple