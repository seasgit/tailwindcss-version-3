# A. Introduction
Tailwidcss est un framework de plus bas niveau que Bootstrap.
- Dans Bootstrap, des composants sont prêts à être utilisés
- dans tailwindcss, il faut tout créer à partir de classes utilitaires.
## Méthologie
tailwindcss utilise en quelques sortes la méthodologie `atomic design`
## Avantages
- bien customiser le style des éléments de page.
- bien gérer la taille des fichiers ainsi que la compatibilité avec `postcss`
## inconvénients
- Il est très verbeux côté html.
- Il est déroutant pour les adeptes du css dans une feuille de style
# B. Installation
1. Installer `nodejs` pour bénéficier de `npm` _(node package manager)_
2. Eventuellement on peut commencer par un `npm init -y`
3. Sinon ouvrir la documentation de tailwind et suivre les étapes.
    - installer comme dépendance : `npm install -D tailwindcss`
    - installer le fichier de configuration `npx tailwindcss init`
    - on crée le dossier css avec `input.css` et copier les 3 lignes
4. petit changement
    - la doc propose de compiler depuis des fichiers dans src `"./src/**/*.{html,js}"`
    - On va préférer `"./dist/**/*.{html,js}"`
5. compilation automatique avec surveillance de changements
    - `npx tailwindcss -i ./src/input.css -o ./dist/css/output.css --watch`
    -  le fichier `dist/ouput.css` est créé avec les classes de bases (reset)
6. on peut créer le fichier `dist/index.html `et commencer à intégrer à l'aide de la doc
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tailwindcss first</title>
    <link rel="stylesheet" href="./css/output.css">
</head>
<body>
    <h1 class="text-8xl text-teal-500">Mon titre</h1>
</body>
```
## Installer la dépendance live-serve sur votre ordinateur
```bash
# voir la doc https://www.npmjs.com/package/live-server
npm install -g live-server
# on peut en ligen de commande choisir son browser
live-server --browser=firefox
# ou
live-server dist/ --browser=firefox
```