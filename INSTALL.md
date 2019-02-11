# Installing pHTML Image Alt

[pHTML Image Alt] runs in all Node environments, with special instructions for:

| [Node](#node) | [pHTML CLI](#phtml-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

Add [pHTML Image Alt] to your project:

```bash
npm install @phtml/image-alt --save-dev
```

Use [pHTML Image Alt] to process your HTML:

```js
const phtmlImageAlt = require('@phtml/image-alt');

phtmlImageAlt.process(YOUR_HTML /*, processOptions, pluginOptions */);
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml');
const phtmlImageAlt = require('@phtml/image-alt');

phtml([
  phtmlImageAlt(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */);
```

## pHTML CLI

Add [pHTML CLI] to your project:

```bash
npm install phtml-cli --save-dev
```

Use [pHTML Image Alt] in your `phtml.config.js` configuration file:

```js
const phtmlImageAlt = require('@phtml/image-alt');

module.exports = {
  plugins: [
    phtmlImageAlt(/* pluginOptions */)
  ]
}
```

## Webpack

Add [pHTML Loader] to your project:

```bash
npm install phtml-loader --save-dev
```

Use [pHTML Image Alt] in your Webpack configuration:

```js
const phtmlImageAlt = require('@phtml/image-alt');

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'style-loader',
          { loader: 'html-loader', options: { importLoaders: 1 } },
          { loader: 'phtml-loader', options: {
            ident: 'phtml',
            plugins: () => [
              phtmlImageAlt(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire pHTML] to your project:

```bash
npm install react-app-rewired react-app-rewire-html --save-dev
```

Use [React App Rewire pHTML] and [pHTML Image Alt] in your
`config-overrides.js` file:

```js
const reactAppRewirePHTML = require('react-app-rewire-phtml');
const phtmlImageAlt = require('@phtml/image-alt');

module.exports = config => reactAppRewirePHTML(config, {
  plugins: () => [
    phtmlImageAlt(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp pHTML] to your project:

```bash
npm install gulp-phtml --save-dev
```

Use [pHTML Image Alt] in your Gulpfile:

```js
const phtml = require('gulp-phtml');
const phtmlImageAlt = require('@phtml/image-alt');

gulp.task('html', () => gulp.src('./src/*.html').pipe(
  phtml([
    phtmlImageAlt(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [pHTML Image Alt] in your Gruntfile:

```js
const phtmlImageAlt = require('@phtml/image-alt');

grunt.loadNpmTasks('grunt-phtml');

grunt.initConfig({
  phtml: {
    options: {
      use: [
       phtmlImageAlt(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.html'
    }
  }
});
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML CLI]: https://github.com/phtmlorg/phtml-cli
[pHTML Loader]: https://github.com/phtmlorg/phtml-loader
[pHTML Image Alt]: https://github.com/phtmlorg/phtml-image-alt
[React App Rewire pHTML]: https://github.com/phtmlorg/react-app-rewire-phtml
[React App Rewired]: https://github.com/timarney/react-app-rewired
