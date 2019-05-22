module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    './node_modules/prettier-stylelint/config.js',
  ],
  rules: {
    'declaration-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'else',
          'each',
          'include',
          'extend',
          'mixin',
          'return',
          'content',
        ],
      },
    ],
    'selector-type-no-unknown': [true, { ignore: ['custom-elements'] }],
  },
}
