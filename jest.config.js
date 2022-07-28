module.exports = {
    testEnvironment: 'node',
    preset: 'ts-jest/presets/js-with-babel-esm',
    setupFilesAfterEnv: [
        'jest-extended'
    ],
    moduleDirectories: [
        'node_modules',
        'src'
    ],
    transformIgnorePatterns: [
        '\\.pnp\\.[^\\/]+$'
    ],
};
