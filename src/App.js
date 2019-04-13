import React, { Component } from 'react';
import { Timeline, Event } from "react-timeline-scribble";

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Timeline>
                    <Event interval={"2016 – 2018"} title={"Lorem"} subtitle={"Ipsum"}>
                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </Event>
                    <Event interval={"2015 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </Event>
                </Timeline>
            </div>
        );
    }
}

export default App;
