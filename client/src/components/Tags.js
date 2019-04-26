import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

export default class Tags extends Component {
    render() {
        return (
            <Grid container style={{flexGrow: 1}} spacing={8}>
                {
                    this.props.tags.map( (tag, i) => {
                        return (
                            <Grid key={i} item>
                                <Chip label={tag}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    }
}
