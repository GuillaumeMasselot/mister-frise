import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

import './CreateContent.css'
import { Grid } from '@material-ui/core';

export default class CreateEvent extends Component {
    state = {
        title: this.props.event.title || '',
        subtitle: this.props.event.subtitle || '',
        start: this.props.event.start || '',
        end: this.props.event.end || '',
        text: this.props.event.text || '',
    }

    toDate = (str) => {
        const dmy = str.split("/");
        return str && new Date(dmy[2], dmy[1] - 1, dmy[0]).getTime();
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleBlur = () => {
        console.log("start", this.toDate(this.state.start));
        let parsedState = {
            title: this.state.title,
            subtitle: this.state.subtitle,
            start: this.toDate(this.state.start),
            end: this.toDate(this.state.end),
            text: this.state.text
        }
        this.props.updateEvent(parsedState);
    }

    render() {
        const { title, subtitle, start, end, text } = this.state;
        return (
            <div>
                <TextField
                    id="title"
                    label="Titre"
                    className="text-field"
                    value={title}
                    onChange={this.handleChange('title')}
                    onBlur={this.handleBlur}
                    margin="normal"
                />
                <br/>
                <TextField
                    id="subtitle"
                    label="Sous-titre"
                    className="text-field"
                    value={subtitle}
                    onChange={this.handleChange('subtitle')}
                    onBlur={this.handleBlur}
                    margin="normal"
                />
                <br/>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            id="debut"
                            label="Début"
                            className="text-field"
                            placeholder="DD/MM/YYYY"
                            value={start}
                            onChange={this.handleChange('start')}
                            onBlur={this.handleBlur}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="fin"
                            label="Fin"
                            className="text-field"
                            placeholder="DD/MM/YYYY"
                            value={end}
                            onChange={this.handleChange('end')}
                            onBlur={this.handleBlur}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <br/>
                <TextField
                    id="text"
                    label="Description"
                    multiline
                    rowsMax="4"
                    value={text}
                    onChange={this.handleChange('text')}
                    onBlur={this.handleBlur}
                    className="text-field"
                    margin="normal"
                />                
            </div>
        )
    }
}
