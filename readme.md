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
- Il est déroutant pour les adeptes du css dans une feuille de style.
#
# B. Prise en main avec tailwind Playground
[exo 1](https://play.tailwindcss.com/n5NvGaEP9g?size=656x793)  
[exo 2](https://play.tailwindcss.com/FecFvIWkls?size=656x793)
#
# C. Installation
## Installer la dépendance live-server sur votre ordinateur
```bash
# voir la doc https://www.npmjs.com/package/live-server
npm install -g live-server
# on peut en ligne de commande choisir son browser
live-server --browser=firefox
# ou avec un dossier 
live-server dist/ --browser=firefox
```
## Extension dans visual studio code
Installer `tailwindcss intellisense`
## Installer tailwindcss
1. Installer `nodejs` pour bénéficier de `npm` _(node package manager)_
2. Eventuellement on peut commencer par un `npm init -y`
3. Sinon ouvrir la documentation de tailwind et suivre les étapes.
    - installer comme dépendance : `npm install -D tailwindcss`
    - installer le fichier de configuration `npx tailwindcss init`
    - on crée le dossier css avec `input.css` et copier les 3 lignes
4. petit changement
    - la doc propose de compiler depuis des fichiers dans src `"./src/**/*.{html,js}"`
    - On va préférer `"./dist/**/*.{html,js}"`
## Compiler
1. compilation automatique avec surveillance de changements
    - `npx tailwindcss -i ./src/input.css -o ./dist/css/output.css --watch`
    -  le fichier `dist/ouput.css` est créé avec les classes de bases (reset)
2. on peut créer le fichier `dist/index.html `et commencer à intégrer à l'aide de la doc
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
3. Voir le fichier output.css. la classe `.text-teal-500 `a été ajoutée

#
# D. Configuration
## Default config
- On peut obtenir le fichier de configuration par défaut en faisant `npx tailwindcss init --full tailwind.default.config.js`.
- Mais on ne va pas le modifier, plutôt étendre son contenu an utilisant `tailwind.config.js` .
## Etendre la config des font-size
```js
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
      '10xl': ['9rem', { lineHeight: '1' }],
    },
    },
  },
  plugins: [],
}
```
Essayons d'utiliser cette nouvelle classe dans le code html
```html
<!-- 
    la classe n'apparaît pas dans la liste des classes d'autocomplétion.
-->
 <h1 class="text-teal-600 text-10xl">Hello world</h1>
<!-- 
    Mais une fois compilé ça marche. Utilisez l'inspecteur pour vérifier output.css
-->

```
- Recompilation  : ` npx tailwindcss -i ./src/input.css -o ./dist/css/output.css --watch`
## Etendre les couleurs
Ajoutons une couleur nommée primary déclinée en 2 teintes
```js
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'#90be6d',
          200:'#43aa8b'
        }
      },
      fontSize: {
      '10xl': ['9rem', { lineHeight: '1' }],
    },
    },
  },
  plugins: [],
}

```
Essayons cette nouvelle classe dans le code html.
```html
<a href="" class="text-primary-100 hover:text-primary-200 text-2xl">Click here</a>

```
