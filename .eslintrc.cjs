module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // The project does not use PropTypes (no prop-types dependency); props are plain objects
    // built from src/constants, so this rule only produced noise (66 errors already on main).
    'react/prop-types': 'off',
    // react-three-fiber props are three.js constructor args and material/light options, not DOM attributes.
    'react/no-unknown-property': [
      'error',
      { ignore: ['args', 'polygonOffset', 'polygonOffsetFactor', 'flatShading', 'intensity', 'position'] },
    ],
    // Every section is exported through the SectionWrapper HOC (template pattern), which this
    // dev-only Fast Refresh hint cannot follow; it affects hot reload only, never the build.
    'react-refresh/only-export-components': 'off',
  },
}
