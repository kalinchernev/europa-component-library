const path = require('path');
const pkg = require('./package.json');
const rootPkg = require('../../../package.json');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = path.resolve(__dirname, isProd ? './dist' : './build');

const nodeModules = path.resolve(__dirname, '../../../node_modules');

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${
  pkg.version
} Built on ${new Date().toISOString()}`;

const { apps } = rootPkg;
const app = apps['storybook-ec'];

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, 'src/ec-core.js'),
      dest: path.resolve(outputFolder, 'scripts/ec-core.js'),
      options: {
        banner,
        moduleName: 'ECL',
        sourceMap: isProd ? false : 'inline',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/ec-core.scss'),
      dest: path.resolve(outputFolder, 'styles/ec-core.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/ec-core-print.scss'),
      dest: path.resolve(outputFolder, 'styles/ec-core-print.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(nodeModules, '@ecl/resources-ec-icons/dist'),
      to: path.resolve(outputFolder, 'images/icons'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/resources-ec-social-icons/dist'),
      to: path.resolve(outputFolder, 'images/social-icons'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/resources-ec-logo'),
      to: path.resolve(outputFolder, 'images/logo'),
    },
  ],
  watch: {
    init: {
      proxy: `${app.host}:${app.port}`,
    },
    handlers: [
      {
        pattern: `${path.resolve(__dirname, '..')}/(dev|ec-core)/src/*.scss`,
        events: [
          {
            on: 'change',
            name: 'dev/ec-core presets scss changes',
            command: 'npm run build:styles',
            message: 'New styles ready',
            reload: '*.css',
          },
        ],
      },
      {
        pattern: `${path.resolve(__dirname, '..')}/(dev|ec-core)/src/*.js`,
        events: [
          {
            on: 'change',
            name: 'dev/ec-core presets javascript changes',
            command: 'npm run build:scripts',
            message: 'New scripts ready',
            reload: true,
          },
        ],
      },
      {
        pattern: `${path.resolve(
          __dirname,
          '../..'
        )}/implementations/vanilla/**/*.scss`,
        events: [
          {
            on: 'change',
            name: 'vanilla scss changes',
            command: 'npm run build:styles',
            message: 'New styles ready',
            reload: '*.css',
          },
        ],
      },
      {
        pattern: `${path.resolve(
          __dirname,
          '../..'
        )}/implementations/vanilla/**/*.js`,
        events: [
          {
            on: 'change',
            name: 'vanilla javascript changes',
            command: 'npm run build:scripts',
            message: 'New scripts ready',
            reload: true,
          },
        ],
      },
      {
        pattern: `${path.resolve(
          __dirname,
          '../..'
        )}/themes/(dev|ec-core)/**/*.scss`,
        events: [
          {
            on: 'change',
            name: 'theme scss changes',
            command: 'npm run build:styles',
            message: 'New styles ready',
            reload: '*.css',
          },
        ],
      },
    ],
  },
};
