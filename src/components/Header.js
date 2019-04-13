import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Header.css';

class Header extends Component {
    
    render = () => {
        return (
            <div style={{flexGrow: 1}}>
                <AppBar position="static" style={{backgroundColor: '#202124', color: 'white'}}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" style={{flexGrow: 1, textAlign: 'center'}}>
                            Mister Frise
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;