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
    - on crée le dossier css avec `input.css` et copier les 3 lignes suivantes : 
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
4. Pour la surveillance des changements que vous effectuez et la compilation du css, remplacer `"./src/**/*.{html,js}"` par `"./dist/**/*.{html,js}"`
## Compiler
1. Voici la ligne de compilation automatique avec surveillance de changements
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
3. Voir le fichier `output.css`, la classe `.text-teal-500 `a été ajoutée

#
# D. Configuration
## script raccourci
On peut placer la commande de compilation dans `package.json`.
```json
  "scripts": {
    "watch": "npx tailwindcss -i ./src/input.css -o ./dist/css/output.css --watch"
  },
```
On peut ajouter aussi l'exécution dans un navigateur choisi
```json
  "scripts": {
    "test": "live-server ./dist --browser=firefox",
    "watch": "npx tailwindcss -i ./src/input.css -o ./dist/css/output.css --watch"
  },
```
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
# E. Classes dynamiques
- On peut choisir une couleur et lui appliquer une opacité.
- On peut choisir directement la couleur en hexadecimal par exemple.
- __NB__ on peut imaginer un utilisation plus approndie en mixant ces techniques à JS (React, Vue)
```html
    <hr class="my-4">
    <section class="w-40 h-40 border-2 grid place-content-center relative">
        <h1 class="text-2xl text-[#c717aa]">I am here</h1>
        <div class="absolute w-full h-full bg-amber-600/90 hover:bg-amber-600/50"></div>
    </section>
```
## Classes personnalisées
- Dans cet exemple, on constate les répétitions
```html
    <hr class="my-10">
    <ul class="ml-10">
        <li class=" font-sans text-slate-900 hover:text-slate-500 uppercase cursor-pointer">Lorem ipsum dolor amet consectetur.</li>
        <li class=" font-sans text-slate-900 hover:text-slate-500 uppercase cursor-pointer">Laudantium  dolorem temporibus?</li>
        <li class=" font-sans text-slate-900 hover:text-slate-500 uppercase cursor-pointer">Voluptatem ipsa, molestiae corporis!</li>
        <li class=" font-sans text-slate-900 hover:text-slate-500 uppercase cursor-pointer">Assumenda laborum cum dolor.</li>
    </ul>
```
Mais heureusement, on peut créer une classe de la façon suivante :
```css
/* dans output.css, on crée la classe qui va appliquer les classes tailwind */
@layer components {

    .item {
        @apply font-sans text-slate-900 hover:text-slate-500 uppercase cursor-pointer;
    }

}

```
Puis dans la partie html
```html
    <ul class="ml-10">
        <li class="item">Lorem ipsum dolor amet consectetur.</li>
        <li class="item">Laudantium  dolorem temporibus?</li>
        <li class="item">Voluptatem ipsa, molestiae corporis!</li>
        <li class="item">Assumenda laborum cum dolor.</li>
    </ul>
```
#
# F. Ajouter une police de caractères
#
## Exemple de police Google.
Prenons la police `'Archivo Narrow'` que nous sélectionnons dans https://fonts.google.com/  
Dans le fichier input.css, on insère l'import
```css
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;500;600;700&display=swap');

@tailwind base;

/* ... suite */
```
Dans le fichier `tailwind.config.js` 
```js
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#90be6d',
          200: '#43aa8b'
        }
      },
      fontSize: {
        '10xl': ['9rem', {
          lineHeight: '1'
        }],
      },
      fontFamily: {
        'archivo': ['Archivo Narrow']
      }
    },
  },
  plugins: [],
}
```



