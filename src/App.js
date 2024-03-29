import './App.css';
import React, {Component} from 'react';
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";

class App extends Component {
    apiKey = process.env.REACT_APP_API_KEY;

    render() {
        return (
            <BrowserRouter>
                <Navbar title="News Thunder"/>
                <Routes>
                    <Route exact path="/"
                           element={<News key="general" pageSize={5} apiKey={this.apiKey} country={"in"}
                                          category={"general"}/>}/>
                    <Route exact path="/business"
                           element={<News key="business" pageSize={5} apiKey={this.apiKey} country={"in"}
                                          category={"business"}/>}/>
                    <Route exact path="/entertainment"
                           element={<News key="entertainment" pageSize={5} apiKey={this.apiKey} country={"in"}
                                          category={"entertainment"}/>}/>
                    <Route exact path="/health"
                           element={<News key="health" pageSize={5} apiKey={this.apiKey} country={"in"}
                                          category={"health"}/>}/>
                    <Route exact path="/health"
                           element={<News key="sports" pageSize={5} apiKey={this.apiKey} country={"in"}
                                          category={"sports"}/>}/>
                    <Route exact path="/science"
                           element={<News key="science" pageSize={5} apiKey={this.apiKey} country={"in"}
                                          category={"science"}/>}/>
                    <Route exact path="/sports"
                           element={<News key="sports" pageSize={5} apiKey={this.apiKey} country={"in"}
                                          category={"sports"}/>}/>
                    <Route exact path="/technology"
                           element={<News key="technology" pageSize={5} apiKey={this.apiKey} country={"in"}
                                          category={"technology"}/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
