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
# C. VSCode Installations
## Installer la dépendance live-server sur votre ordinateur
```bash
# voir la doc https://www.npmjs.com/package/live-server
npm install -g live-server
# on peut en ligne de commande choisir son browser
live-server --browser=firefox
# ou avec un dossier 
live-server dist/ --browser=firefox
```
## Extension pour tailwind
Installer `tailwindcss intellisense`

# D. Installer tailwindcss méthode 1
1. Installer `nodejs` pour bénéficier de `npm` _(node package manager)_
2. Suivez la documentation pour l'installation.
3. pour la partie Configure your template paths,  
- Remplacer `"./src/**/*.{html,js}"` par `"./dist/**/*.{html,js}"`
- Le fichier html à surveiller sera dans un dossier à la racine, nommé dist.

4. Commande de compilation raccourcie
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
5. Créer le fichier ./dist/index.html
- Essayez quelques intégrations de texte avec des classes de tailwindcss
- Ouvrez le terminal et exécutez `npm run watch`
#
# E. Installation avec POSTCSS
  > __NB :__  
  >  La version 2 est plus riche car elle permet d'ajouter des plugins tel que l'autoprefixer.  
## postcss cli
1. Dans le terminal, tapez :  `npm i -g postcss-cli`, cela permet d'exécuter des commandes en ligne de postcss
2. Créez un nouveau projet et exécuter dedans un `npm init -y` pour créer le `package.json`
3. Suivez ensuite la procédure de la documentation.
-  NB : Ajouter -p  à la cmd : `npx tailwindcss init -p`
4. Puis dans package.json le script de raccourci devient ceci : 
```js
 "scripts": {
    "dev": "postcss ./src/input.css -o ./dist/output.css --watch"
  },
```
5. Créer le fichier ./dist/index.html
- Essayez quelques intégrations de texte avec des classes de tailwindcss
- Ouvrez le terminal et exécutez `npm run watch`


#
# F. Configuration
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
Ajoutons une couleur nommée __primary__, déclinée en 2 teintes
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
- __NB__ on peut imaginer une utilisation plus approndie en mixant ces techniques à JS (React, Vue)
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



