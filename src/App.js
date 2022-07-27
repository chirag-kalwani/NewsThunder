import './App.css';
import React, {Component} from 'react';
import Navbar from "./Components/Navbar";
import News from "./Components/News";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: 'sports'
        };
    }

    Setcategory = (e) => {
        this.setState({category: e.target.innerText});
    };
y
    render() {
        return (
            <>
                <Navbar title="News Thunder" Setcategory={this.Setcategory}/>
                <News pageSize={5} country={"in"} category={this.state.category}/>
            </>
        );
    }
}

export default App;
