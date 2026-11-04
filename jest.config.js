module.exports = {
  preset: 'jest-expo',
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native[^/]*|@react-native(-community)?|expo[^/]*|@expo(nent)?|@ai-sdk|@workflow|ai)/)',
  ],
};
