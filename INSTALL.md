# Installing pHTML Image Alt

[pHTML Image Alt] runs in all Node environments, with special instructions for:

| [Node](#node) | [CLI](#phtml-cli) | [Eleventy](#eleventy) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- |

## Node

Add [pHTML Image Alt] to your project:

```bash
npm install @phtmlorg/image-alt --save-dev
```

Use [pHTML Image Alt] to process your HTML:

```js
const phtmlImageAlt = require('@phtmlorg/image-alt')

phtmlImageAlt.process(YOUR_HTML /*, processOptions, pluginOptions */)
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml')
const phtmlImageAlt = require('@phtmlorg/image-alt')

phtml([
  phtmlImageAlt(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */)
```

## CLI

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtmlorg/image-alt
```

Alternatively, add [pHTML Image Alt] to your `phtml.config.js` configuration file:

```js
module.exports = {
  plugins: [
    ['@phtmlorg/image-alt', /* pluginOptions */]
  ]
}
```

## Eleventy

Add [pHTML Eleventy] and [pHTML Image Alt] to your Eleventy project:

```sh
npm install @phtmlorg/image-alt @phtml/11ty --save-dev
```

Use [pHTML Eleventy] and [pHTML Image Alt] in your Eleventy configuration:

```js
const phtml11ty = require('@phtml/11ty')
const phtmlImageAlt = require('@phtmlorg/image-alt')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    use: [
      phtmlImageAlt(/* pluginOptions */)
    ]
  })
}
```

## Gulp

Add [Gulp pHTML] and [pHTML Image Alt] to your project:

```bash
npm install @phtmlorg/image-alt gulp-phtml --save-dev
```

Use [Gulp pHTML] and [pHTML Image Alt] in your Gulpfile:

```js
const gulp = require('gulp')
const gulpPhtml = require('gulp-phtml')
const phtmlImageAlt = require('@phtmlorg/image-alt')

gulp.task('html',
  () => gulp.src('./src/*.html').pipe(
    gulpPhtml({
      plugins: [
        phtmlImageAlt(/* pluginOptions */)
      ]
    })
  ).pipe(
    gulp.dest('dist')
  )
)
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [Grunt pHTML] and [pHTML Image Alt] in your Gruntfile:

```js
const phtmlImageAlt = require('@phtmlorg/image-alt')

grunt.loadNpmTasks('grunt-phtml')

grunt.initConfig({
  phtml: {
    options: {
      plugins: [
        phtmlImageAlt(/* pluginOptions */)
      ]
    },
    dist: {
      files: [{
        expand: true,
        src: 'src/*.html',
        dest: 'dest'
      }]
    }
  }
})
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Eleventy]: https://github.com/phtmlorg/phtml-11ty
[pHTML Image Alt]: https://github.com/phtmlorg/phtml-image-alt
