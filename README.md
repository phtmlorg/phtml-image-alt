# pHTML Image Alt [<img src="https://phtml.io/logo.svg" alt="pHTML" width="90" height="90" align="right">][phtml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[pHTML Image Alt] lets you add alt attributes to images in HTML.

```html
<img src="/path/to/image-1.jpg" alt="Mother Nature's Son">
<img src="/path/to/image-2.jpg">
<img src="/path/to/image-3.jpg" alt="">
<img src="/path/to/image-4.jpg">

<!-- becomes -->

<img src="/path/to/image-1.jpg" alt="Mother Nature's Son">
<img src="/path/to/image-2.jpg" alt>
<img src="/path/to/image-3.jpg" alt="">
<img src="/path/to/image-4.jpg" alt>
```

## Usage

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

[pHTML Image Alt] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [CLI](INSTALL.md#phtml-cli) | [Eleventy](INSTALL.md#eleventy) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- |

## Options

### alts

The `alts` option defines alt attributes by a matching `src` attribute value.

```js
phtmlImageAlt({ alts: {
  '/path/to/image-2.jpg': 'Martha My Dear'
} });
```

```html
<img src="/path/to/image-1.jpg" alt="Mother Nature's Son">
<img src="/path/to/image-2.jpg">
<img src="/path/to/image-3.jpg" alt="">
<img src="/path/to/image-4.jpg">

<!-- becomes -->

<img src="/path/to/image-1.jpg" alt="Mother Nature's Son">
<img src="/path/to/image-2.jpg" alt="Martha My Dear">
<img src="/path/to/image-3.jpg" alt="">
<img src="/path/to/image-4.jpg" alt>
```

[cli-img]: https://img.shields.io/travis/phtmlorg/phtml-image-alt.svg
[cli-url]: https://travis-ci.org/phtmlorg/phtml-image-alt
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/@phtml/image-alt.svg
[npm-url]: https://www.npmjs.com/package/@phtml/image-alt

[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Image Alt]: https://github.com/phtmlorg/phtml-image-alt
