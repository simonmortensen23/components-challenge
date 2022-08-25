import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css";

export class NavBarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        }
    }

    toggleIsLoggedIn = () => {
        this.setState((prevState) => ({
          isLoggedIn: !prevState.isLoggedIn,
        }));
        console.log(this)
      };


  render() {
    return (
        <div className={css.NavBar}>
            <h1> My Gallery </h1>
        {
            this.state.isLoggedIn ? (
                <div>
                    <form>
                       <label>
                        Username:
                        <input type="text" name="name" />
                       </label>
                       <label>
                        Password:
                        <input type="text" name="password" />
                       </label>
                       <input type="submit" value="submit" onClick={this.toggleIsLoggedIn}/>
                    </form>
                </div>
            ) : (
                <div>
                    
                    <button onClick={this.toggleIsLoggedIn}>Login</button>
                </div>
            )
        }
        </div>
    )
  }
}

export default NavBarForm