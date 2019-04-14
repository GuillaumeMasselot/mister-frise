import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import './Header.css';

class Header extends Component {
    
    render = () => {
        return (
            <div>
                <AppBar position="static" style={{backgroundColor: '#202124', color: 'white'}}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                            Mister Frise
                        </Typography>
                        <Button color="inherit">articles</Button>
                        <Button color="inherit">évenements</Button>
                        <Button color="inherit">personnages</Button>
                        <Button color="inherit">citations</Button>
                        <Button color="inherit">à propos</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;