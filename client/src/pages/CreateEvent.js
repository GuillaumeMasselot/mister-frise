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
        dateLabel: this.props.event.dateLabel || '',
        details: this.props.event.text || '',
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleBlur = () => {
        this.props.updateEvent(this.state);
    }

    render() {
        const { title, subtitle, start, end, details, dateLabel } = this.state;
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
                <TextField
                    id="dateLabel"
                    label="Label associé à la date (optionnel)"
                    className="text-field"
                    value={dateLabel}
                    onChange={this.handleChange('dateLabel')}
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
                    id="details"
                    label="Description"
                    multiline
                    rowsMax="4"
                    value={details}
                    onChange={this.handleChange('details')}
                    onBlur={this.handleBlur}
                    className="text-field"
                    margin="normal"
                />                
            </div>
        )
    }
}
