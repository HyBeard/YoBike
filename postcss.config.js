const postcssImport = require('postcss-import');
const postcssPurgeCss = require('@fullhuman/postcss-purgecss');
const postcssPxToRem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
const postcssSortMediaQueries = require('postcss-sort-media-queries');

module.exports = ({ webpack }) => {
  const isProd = webpack.mode === 'production';

  return {
    plugins: [
      postcssImport({ path: ['./src/styles'] }),
      postcssPurgeCss({
        content: ['./src/**/*.html'],
        whitelistPatterns: [/visible/, /active/, /hidden/, /transparent/, /expanded/, /slick/],
      }),
      isProd ? autoprefixer() : false,
      isProd ? postcssSortMediaQueries() : false,
      postcssPxToRem({ propList: ['*', '!*border*'], selectorBlackList: ['hamburger'] }),
    ],
  };
};
