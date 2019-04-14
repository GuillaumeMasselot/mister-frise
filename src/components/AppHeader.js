import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

export default class AppHeader extends Component {
    
    render = () => {
        return (
            <Router>
                <AppBar position="static" style={{backgroundColor: '#202124', color: 'white'}}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                            Mister Frise
                        </Typography>
                        <Button color="inherit">accueil</Button>
                        <Button color="inherit">période & évenements</Button>
                        <Button color="inherit">personnages</Button>
                        <Button color="inherit">citations</Button>
                        <Button color="inherit">à propos</Button>
                    </Toolbar>
                </AppBar>
            </Router>
        )
    }
}