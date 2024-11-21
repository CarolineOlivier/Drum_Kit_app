# Drum Kit App

## Description

Le **Drum Kit App** est une application web développée avec **Ruby on Rails** et **JavaScript**. Ce projet permet de jouer différents sons de batterie à l'aide des touches du clavier ou en cliquant sur des boutons affichés sur la page. L'objectif est d'apprendre à manipuler le DOM avec JavaScript et d'intégrer du JavaScript avec une application Rails.


## Technologies Utilisées

- **Ruby** : version 3.2.2
- **Rails** : version 7.2.2
- **Puma** : Serveur HTTP pour les environnements de développement et de production
- **PostgreSQL** : Base de données utilisée pour la gestion des données
- **Importmap** : pour la gestion des fichiers JavaScript sans avoir besoin de Webpack
- **Stimulus** : Utilisé pour gérer les comportements JavaScript
- **CSS** : Pour le style de la page, avec un jeu de couleurs pastel


## Fonctionnalités

- Utilisation des touches du clavier pour jouer des sons.
- Utilisation des boutons sur la page pour jouer des sons.
- Affichage interactif et dynamique avec l'ajout de classes CSS pour chaque interaction.
- Design coloré utilisant des couleurs pastel avec des boutons représentant chaque son.

## Installation

Pour lancer postgresql : 
```bash
sudo service postgresql start 
 ```

Pour exécuter ce projet sur votre machine locale :

1. Clonez le dépôt Git :
    ```bash
    git clone <URL_DU_DEPOT_GIT>
    ```
2. Accédez au répertoire du projet :
    ```bash
    cd drum_kit_app
    ```
3. Installez les dépendances nécessaires :
    ```bash
    bundle install
    ```
4. Lancer le serveur Rails :
    ```bash
    rails server
    ```
5. Ouvrez votre navigateur et accédez à l'adresse suivante :
    ```
    http://localhost:3000/drums

    ```

## Utilisation

- **Touches du clavier** : Utilisez les touches `A`, `S`, `D`, `F`, `G`, `H`, `J`, `K`, `L` pour jouer les sons correspondants (Clap, HiHat, Kick, OpenHat, Boom, Ride, Snare, Tom, Tink).
- **Clic sur les boutons** : Vous pouvez également cliquer directement sur les boutons présents sur la page pour jouer chaque son.

## Fichiers importants

- **app/views/drums/index.html.erb** : Ce fichier contient la structure HTML de la page, y compris les boutons et les balises `<audio>` associées à chaque son.
- **app/javascript/drum.js** : Fichier JavaScript principal pour gérer les interactions avec le clavier et les clics.
- **app/assets/stylesheets/drum.css** : Feuille de style CSS pour styliser les boutons de manière colorée et rendre l'application visuellement agréable.

## Améliorations visuelles

Le style a été amélioré pour donner un aspect visuel plus coloré et interactif aux boutons :
- Chaque bouton de la page a une couleur pastel différente, variant du jaune, orange, rouge, violet, bleu, jusqu'au vert, créant un dégradé progressif.
- Le design vise à être à la fois attrayant et intuitif pour permettre une expérience de jeu plaisante.

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez apporter des modifications, veuillez :

1. Forker le projet.
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/ma-nouvelle-fonctionnalite`).
3. Committer vos modifications (`git commit -m "Ajout de ma nouvelle fonctionnalité"`).
4. Pousser la branche (`git push origin feature/ma-nouvelle-fonctionnalite`).
5. Ouvrir une Pull Request.

## Auteurs

- **Dolly** - Développement initial du projet.

## Licence

Ce projet est sous licence MIT. Vous pouvez l'utiliser librement, modifier et distribuer le code.
