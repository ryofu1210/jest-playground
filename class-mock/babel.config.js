// jestがcommonJSにしか対応しておらず、ES Moduleが読み込めないため、babelでトランスパイルする
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
