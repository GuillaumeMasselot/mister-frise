# Mister Frise

Bienvenue sur le site Mister Frise qui se propose de présenter l'Histoire à travers des articles très "visuels".

## Avancement du projet

Le suivi de l'avancement du projet est dispo [ici](https://trello.com/b/kqVTfmsU/mister-frise)

## Rédiger un article

Les articles du site sont rédigés au format [Yaml](https://yaml.org/).

Les bases du Yaml : [https://learnxinyminutes.com/docs/fr-fr/yaml-fr/]

Exemple d'article :

```yaml
title: Mon titre
intro: >
  Une intro
  sur plusieurs
  lignes
imgUrl: https://ak7.picdn.net/shutterstock/videos/13856177/thumb/1.jpg
notes:
  - Une note
  - Une autre note
events:
  - event: 
      title: Un evenement particulier
      subtitle: Un sous titre #optionnel
      start: -2000 #formats supportés : DD/MM/YYYY, MM/YYYY, YYYY
      end: -1000 #optionnel
      dateLabel: Tout le deuxième millénaire avant notre ère #optionnel
      group: Un label pour lier des evenements sur la timeline interactive #optionnel
      details: Des détails croustillants sur mon evenement #optionnel
  - event: 
      title: Un autre evenement
      subtitle: 
      start: 30/04/1856
      end: 31/04/1856
      dateLabel: 
      details: 
      group:
  #...
```

Pour se faciliter la vie dans la rédaction d'articles sous Visual Studio Code, voici un snippet de création d'évènement :

Ctrl+MAJ+P > Configure user snippets > new global snippet file :
```json
{
    "YamlFriseEvent":{
        "prefix":"fe",
        "scope": "yaml",
        "body":[
            "- event : ",
            "  title : ${1}",
            "  subtitle : ${2}",
            "  start : ${3:01/01/100}",
            "  end : ${4:31/12/199}",
            "  dateLabel : ${5}",
            "  group : ${6}",
            "  details : ${7}"
        ]
    }
}
```

## Proposer son article

Faire une pull-request de l'article dans le dossier `articles` à la racine du projet.