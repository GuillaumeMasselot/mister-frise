import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class Quote extends Component {
    render() {
        
        const { author, text, img } = this.props;

        return (
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} sm={2}>
                            <Grid item xs={12}>
                                <Avatar
                                    alt={author}
                                    src={img}
                                    style={{height: 100, width: 100, margin: '10px auto auto auto'}} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5"  style={{textAlign: 'center'}}>
                                    {author}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={10} style={{margin: 'auto'}}>
                            <br/>
                            <Typography variant="h4" component="em" style={{textAlign: 'center'}}>
                                {text}
                            </Typography>
                        </Grid>
                    </Grid>
                
                </CardContent>
            </Card>
        )
    }
}
