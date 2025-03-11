# Front-End Banking Application

Ce projet consiste à développer le front-end d'une application bancaire en utilisant **React** et **Redux** pour offrir une expérience utilisateur dynamique et réactive, intégrer le front-end avec un back-end à l’aide d’appels API REST, tout en assurant une gestion efficace des états avec Redux.

## Fonctionnalités Principales

- **Appels API REST** : Connexion fluide entre le front-end et le back-end.
- **Gestion d'état avec Redux** : Pour maintenir un état global cohérent.
- **Documentation API avec Swagger** : Pour modéliser les points d’accès et assurer une communication claire entre les équipes.

## Technologies Utilisées

- **React** : Pour créer l’interface utilisateur dynamique.
- **Redux** : Pour la gestion de l’état global de l’application.
- **Swagger** : Pour définir et documenter les points d'accès API.
- **Node.js** : Pour exécuter le code JavaScript côté serveur.

## Objectifs Pédagogiques

- **Afficher des données back-end** sur l’interface via des appels API.
- **Configurer les routes API** pour une communication client/serveur fluide.
- **Implémenter la gestion des données avec Redux**, garantissant un fonctionnement optimal de l’application.


## Phases du Projet

### Phase 1 : Authentification des utilisateurs

1. **Créer une application web complète et responsive avec React** :
   - Implémentez la page d'accueil, la page de connexion, et la page de profil en vous basant sur les mockups fournis.
   - Le back-end et les routes API nécessaires sont déjà prêts. Vous trouverez la documentation Swagger dans le dépôt.

2. **Fonctionnalités de l'application** :
   - L'utilisateur peut visiter la page d'accueil.
   - L'utilisateur peut se connecter et gérer les erreurs (e.g., nom d'utilisateur ou mot de passe incorrect).
   - L'utilisateur peut se déconnecter.
   - L'utilisateur ne peut voir son profil qu'après une connexion réussie.
   - L'utilisateur peut modifier son pseudo, mais pas son prénom ni son nom.

3. **Utilisation de Redux** :
   - Gérez le state global de l'application avec Redux, même si cela peut sembler excessif à ce stade. Cela facilitera la gestion de données plus complexes dans les futures phases.

---

### Phase 2 : Transactions

1. **Gestion des transactions** :
   - Visualiser toutes les transactions pour le mois en cours, groupées par compte.
   - Visualiser les détails d'une transaction dans une autre vue.
   - Ajouter, modifier ou supprimer des informations sur une transaction (ajout/suppression de transactions non supportés).

2. **Proposition de routes API** :
   - Fournissez un document décrivant les routes API nécessaires pour la gestion des transactions. Ce document doit suivre les directives de Swagger et être exporté en fichier YAML.

3. **Spécifications des endpoints API** :
   - Méthode HTTP (e.g., GET, POST, PATCH).
   - Route (e.g., `/transactions`).
   - Description de chaque endpoint.
   - Paramètres acceptés.
   - Réponses possibles avec codes HTTP correspondants.

---