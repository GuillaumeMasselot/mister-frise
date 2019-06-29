import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import SectionTitle from '../components/SectionTitle';
// import fs from 'fs';
import './CreateContent.css'
import CreateEvent from './CreateEvent';

const contentType = [{
    label: 'Article'
}, {
    label: 'Citation'
}]

export default class CreateContent extends Component {
    state = {
        contentType: 'Article',
        title: '',
        imgUrl: '',
        intro: '',
        notes: '',
        sources: [],
        links: [],
        events: []
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleArrayChange = (arrayName, index) => event => {
        let updatedArray = this.state[arrayName];
        updatedArray[index] = event.target.value;
        this.setState({
            [arrayName]: updatedArray
        });
    }

    handleEvent = (newEvent, index) => {
        let eventsList = this.state.events;
        eventsList[index] = newEvent;
        this.setState({
            events: eventsList
        });
    }

    addEvent = () => {
        let updatedEvents = this.state.events;
        updatedEvents.push({});
        this.setState({
            events: updatedEvents
        });
    }

    addLink = () => {
        let updatedLinks = this.state.links;
        updatedLinks.push("");
        this.setState({
            links: updatedLinks
        });
    }

    addSource = () => {
        let updatedSources = this.state.sources;
        updatedSources.push("");
        this.setState({
            sources: updatedSources
        });
    }

    submit = () => {
        this.lala()
            .then(res => {
                console.log("submit res", res)
            })
            .catch(err => console.log("err", err))
    }

    lala = async () => {
        console.log("lala", this.state);
        const rawResponse = await fetch('/addarticle', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        });
        const content = await rawResponse.json();
      
        console.log("content", content);
    }

    render() {
        return (
            <div>
                <SectionTitle>Création de contenu</SectionTitle>
                <Card>
                    <CardContent>
                        <TextField
                            id="select-type"
                            select
                            label="Type de contenu"
                            className="text-field"
                            value={this.state.contentType}
                            onChange={this.handleChange('contentType')}
                            margin="normal"
                        >
                            {
                                contentType.map(option => (
                                    <MenuItem key={option.label} value={option.label}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <br/>
                        <TextField
                            id="title"
                            label="Titre"
                            className="text-field"
                            value={this.state.title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="img"
                            label="URL de l'image"
                            className="text-field"
                            value={this.state.imgUrl}
                            onChange={this.handleChange('imgUrl')}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="intro"
                            label="Introduction"
                            multiline
                            rowsMax="4"
                            value={this.state.intro}
                            onChange={this.handleChange('intro')}
                            className="text-field"
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="notes"
                            label="Notes"
                            multiline
                            rowsMax="4"
                            value={this.state.notes}
                            onChange={this.handleChange('notes')}
                            className="text-field"
                            margin="normal"
                        />
                    </CardContent>
                </Card>
                <SectionTitle>événements</SectionTitle>
                {
                    this.state.events.map( (e, i) => (
                        <div key={i}>
                            <Card>
                                <CardContent>
                                    <CreateEvent
                                        event={e}
                                        updateEvent={(newEvent) => this.handleEvent(newEvent, i)}
                                    />
                                </CardContent>
                            </Card>
                            <br/>
                        </div>
                    )) 
                }
                <Button
                    variant="contained"
                    onClick={this.addEvent}
                    style={{width: '100%'}}
                >
                    Ajouter un événement
                </Button>
                <br/>
                <br/>
                <SectionTitle>liens</SectionTitle>
                <Card>
                {
                    this.state.links.map( (e, i) => (
                        <CardContent key={i}>
                            <TextField
                                id={"link" + i}
                                label="Lien"
                                value={this.state.links[i]}
                                onChange={this.handleArrayChange('links', i)}
                                className="text-field"
                                margin="normal"
                            />
                        </CardContent>
                    )) 
                }
                </Card>
                <br/>
                <Button
                    variant="contained"
                    onClick={this.addLink}
                    style={{width: '100%'}}
                >
                    Ajouter un lien
                </Button>
                <br/>
                <br/>
                <SectionTitle>sources</SectionTitle>
                <Card>
                {
                    this.state.sources.map( (e, i) => (
                        <CardContent key={i}>
                            <TextField
                                id={"source" + i}
                                label="Source"
                                value={this.state.sources[i]}
                                onChange={this.handleArrayChange('sources', i)}
                                className="text-field"
                                margin="normal"
                            />
                        </CardContent>
                    )) 
                }
                </Card>
                <br/>
                <Button
                    variant="contained"
                    onClick={this.addSource}
                    style={{width: '100%'}}
                >
                    Ajouter une source
                </Button>
                <br/>
                <br/>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.submit}
                    style={{width: '100%'}}
                >
                    Soumettre l'article
                </Button>
            </div>
        )
    }
}
