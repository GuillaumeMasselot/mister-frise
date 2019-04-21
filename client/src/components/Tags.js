import React, { Component } from 'react'
import { Grid, Chip } from '@material-ui/core';

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
