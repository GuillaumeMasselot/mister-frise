import React, { Component } from 'react';
import SimpleTextBlock from '../components/SimpleTextBlock';

import '../App.css';

export default class Roadmap extends Component {
    render() {
        return (
            <div>
                <SimpleTextBlock title="Lot 1 : Les bases">
                    <ul>
                        <li className="crossed">Page d'accueil <em>hub</em> qui regroupe tous les articles (sans la timeline globale)</li>
                        <li className="crossed">Section <strong>articles</strong> qui liste tous les articles.</li>
                        <li className="crossed">Section <strong>citations</strong></li>
                        <li className="crossed">Visualisation d'articles</li>
                    </ul>
                </SimpleTextBlock>
                <SimpleTextBlock title="Lot 2 : Fonctionnalités avancées">
                    <ul>
                        <li>Timeline globale sur page d'accueil</li>
                        <li>Tri/Filtre des articles par type (personnage, bataille, event, etc...)</li>
                        <li>Recherche</li>
                        <li>Intégration de Chronas.org</li>
                    </ul>
                </SimpleTextBlock>
                <SimpleTextBlock title="Lot 3 : Mode création de contenu">
                    <ul>
                        <li>Page d'ajout d'article (local)</li>
                        <li>Export as PDF</li>
                    </ul>
                </SimpleTextBlock>
                <SimpleTextBlock title="Lot 4 (idéal / facultatif) : Mode communautaire">
                    <ul>
                        <li>Compte / Authentification</li>
                        <li>Partager ses articles</li>
                    </ul>
                </SimpleTextBlock>
            </div>
        )
    }
}
