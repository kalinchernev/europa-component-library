const sass = require('sass');
const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const bannerPlugin = require('postcss-banner');
const getSystem = require('../utils/getSystem');

const getPlugins = (options) => {
  const plugins = [];

  plugins.push(autoprefixer({ grid: 'no-autoplace' }));

  if (process.env.NODE_ENV === 'production') {
    if (options.banner) {
      plugins.push(
        bannerPlugin({
          banner: options.banner,
          important: true,
          inline: true,
        })
      );
    }

    plugins.push(cssnano({ safe: true }));
  }

  return plugins;
};

const buildStyles = (entry, dest, options) => {
  const plugins = getPlugins(options);

  let postcssSourceMap = false;
  if (options.sourceMap === true) {
    postcssSourceMap = true; // inline
  } else if (options.sourceMap === 'file') {
    postcssSourceMap = { inline: false }; // as a file
  }

  const sassResult = sass.renderSync({
    file: entry,
    outFile: dest,
    functions: {
      'getsystem()': () => new sass.types.String(getSystem() || ''),
    },
    sourceMap: options.sourceMap === true,
    sourceMapContents: options.sourceMap === true,
    sourceMapEmbed: options.sourceMap === true,
    includePaths: [
      path.resolve(process.cwd(), 'node_modules'),
      ...(options.includePaths || []),
    ],
  });

  postcss(plugins)
    .process(sassResult.css, {
      map: postcssSourceMap,
      from: entry,
      to: dest,
    })
    .then((postcssResult) => {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, postcssResult.css);

      if (postcssResult.map) {
        fs.writeFileSync(`${dest}.map`, postcssResult.map);
      }
    });
};

module.exports = {
  getPlugins,
  buildStyles,
};
