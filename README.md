# Vanilla JS

First we are going to create our project folder and then run this command to initialize the project:

```js
npm init -y

```

Now lets setup a generic .gitignore using this command

```js
npx gitignore node
```

Now lets initialize the git repo and make our first commit

```js
git init
git add .
git commit -m "Inital commit";

```

The next thing to do is create a repo on github and copy and past the code that they provide for you.

```js
git remote add origin https://github.com/C5m7b4/vanilla-js-2.git

git push -u origin master
```

Now let's create a new branch and get started with things

```js
git checkout -b branch1

```

We are going to build a javascript single page application so I am suggesting we use webpack, so lets get that installed and then we can work on some dependencies:

```js
  npm install --save-dev webpack webpack-cli
  npm install --save-dev prettier
```

now create a file in the root of the project called .prettierrc and give it this:

```js
{}
```

We also need to install webpack-dev-server to serve up our files

```js
npm install --save-dev webpack-dev-server
```

Now we are going to create a public folder in our root and create an index.html, but we are also going to need to install one more package:

```js
npm install --save-dev html-webpack-plugin

```

We also need to add a start script to our package.json like so

```json
"start":"webpack serve --open"
```

For safe keeping, we will also create a src folder and add an index.js with a console comment letting us know that everything is ready to go.

Now, let setup the meat and potatoes of our config. We are going to create three webpack configs. The common one, one for development, and one for production
