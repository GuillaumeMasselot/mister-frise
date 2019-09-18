import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import '../App.css';

class AppHeader extends Component {

    isActive = (path) => {
        const currentPath = this.props.location.pathname;
        const isHome = path === '/';
        const isCurrentPath = isHome ? currentPath === '/' : currentPath.includes(path);
        return { color: isCurrentPath ? '#ffffff' : '#cccccc' };
    }

    render = () => {
        const { routes, onOpen } = this.props;
        return (
            <div>
                <AppBar position="static" style={{backgroundColor: '#202124', color: 'white'}}>
                    <Toolbar>
                        <IconButton
                            className="desktopHide"
                            style={{marginLeft: -12, marginRight: 20}}
                            color="inherit"
                            aria-label="Menu"
                            onClick={onOpen}>
                            <MenuIcon />
                        </IconButton>
                        <div style={{display: "flex"}} className="mobileCenter">
                            <Typography variant="h6" color="inherit" style={{fontFamily: "Dancing Script", margin: 'auto 5px auto 0'}}>Mister</Typography>
                            
                            <Avatar
                                alt="logo"
                                src={window.location.origin + '/logoround.png'}
                                style={{height: 40, width: 40}} />

                            <Typography variant="h6" color="inherit" style={{fontFamily: "Dancing Script", margin: 'auto auto auto 5px'}}>Frise</Typography>

                        </div>

                        <div className="desktopHide" style={{width: 48}}></div>
                        
                        <div className="mobileHide">
                            {
                                routes.map( (route, index) => {
                                    return (
                                        <Button
                                            color="inherit"
                                            component={Link}
                                            to={route.to}
                                            style={this.isActive(route.path)}
                                            key={index}>
                                            {route.name}    
                                        </Button>
                                    )
                                })
                            }
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withRouter(AppHeader);