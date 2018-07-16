# generator-minimal-typescript [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Yeoman generator to make a minimal Typescript module

## Installation

First, install [Yeoman](http://yeoman.io) and generator-minimal-typescript using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-minimal-typescript
```

Then generate your new project:

```bash
mkdir my-package
cd my-package
yo minimal-typescript
```

produces:
```
.
├── README.md
├── package.json
├── src
│   └── index.ts
├── tsconfig.json
└── tslint.json
```

dependencies:
```
  "dependencies": {
    "tslib": "latest"
  },
  "devDependencies": {
    "@types/node": "10.5.2",
    "ts-node": "latest",
    "tslint": "latest",
    "typescript": "latest"
  },
  "scripts": {
    "build": "rm -rf lib && tsc"
  },
```

Write your TypeScript code in `./src`

Build with `npm run build`

.ts and .tsx (React) files are compiled to `./lib` as `es5` JavaScript, ready to publish to npm.


## Getting To Know Yeoman

 * [Learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Chris Sattinger](https:/github.com/crucialfelix)


[npm-image]: https://badge.fury.io/js/generator-minimal-typescript.svg
[npm-url]: https://npmjs.org/package/generator-minimal-typescript
[travis-image]: https://travis-ci.org/crucialfelix/generator-minimal-typescript.svg?branch=master
[travis-url]: https://travis-ci.org/crucialfelix/generator-minimal-typescript
[daviddm-image]: https://david-dm.org/crucialfelix/generator-minimal-typescript.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/crucialfelix/generator-minimal-typescript
