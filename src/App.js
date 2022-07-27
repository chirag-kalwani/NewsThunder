import './App.css';
import React, {Component} from 'react';
import Navbar from "./Components/Navbar";
import News from "./Components/News";

class App extends Component {
    render() {
        return (
            <>
                <Navbar title="News Thunder"/>
                <News pageSize={5}/>
            </>
        );
    }
}

export default App;
