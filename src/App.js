import React, { Component } from 'react';

import Frise from './components/Frise';
import Header from './components/Header';
import Footer from './components/Footer';

import data from './data';

import './App.css';

class App extends Component {
    state = {
        timeline: []
    }

    componentWillMount() {
        this.setState({
            timeline: data
        });
    }

    render() {
        return (
            <div className="root">
                <Header />
                <div name="content" style={{margin:20}}>
                    <Frise timelineSteps={this.state.timeline} />
                </div>
            </div>
        );
    }
}

export default App;
