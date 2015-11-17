# [instantsearch.js](https://community.algolia.com/instantsearch.js/) widget using React

[demo]: ./demo.gif

This repository holds a custom widget for [instantsearch.js](https://community.algolia.com/instantsearch.js/). It's using [React](https://facebook.github.io/react/).

Read more on how to create widgets in
the [instantsearch.js documentation](https://community.algolia.com/instantsearch.js/documentation/#custom-widgets).

We also have a more complex example using React: [instantsearch-googlemaps](https://github.com/instantsearch/instantsearch-googlemaps).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Code](#code)
- [Demo](#demo)
- [Development](#development)
- [Testing](#testing)
- [Publishing the widget](#publishing-the-widget)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Code

**Read** [the code](./src/).

## Demo

![Demo of the widget][demo]

To run the example you can:
  + clone this repository
  + run `npm run dev` in the cloned repository
  + open http://localhost:3000

## Development

```sh
npm run dev
```

## Testing

```sh
npm test
```

## Publishing the widget

We provide everything for this boilerplate for you to publish it
on both [npm](https://npmjs.org/) and [jsDelivr](https://www.jsdelivr.com/).

If you want to do the same with your widget, [create a new jsDelivr project](https://github.com/jsdelivr/jsdelivr/blob/master/CONTRIBUTING.md). Then use the `npm run release` task from this project.

Example:

```sh
SEMVER_TOKEN=minor npm run release
```

[instantsearch-googlemaps](https://github.com/instantsearch/instantsearch-googlemaps) is an example
project that is deployed and usable on both npm and jsDelivr.
