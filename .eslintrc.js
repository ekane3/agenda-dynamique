module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Vérifie les règles des Hooks
    'react-hooks/exhaustive-deps': 'warn', // Vérifie les tableaux de dépendances
  },
};
