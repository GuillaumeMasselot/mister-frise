import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

export default class AppHeader extends Component {
    
    render = () => {
        return (
            <AppBar position="static" style={{backgroundColor: '#202124', color: 'white'}}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                        MISTER FRISE
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Accueil</Button>
                    <Button color="inherit" component={Link} to="/events">Articles</Button>
                    <Button color="inherit">citations</Button>
                    <Button color="inherit" component={Link} to="/roadmap">Roadmap</Button>
                </Toolbar>
            </AppBar>
        )
    }
}