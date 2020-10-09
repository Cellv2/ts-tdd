const esModules = ["whatwg-fetch", "msw/node"].join("|"); // you can put more if there is others

module.exports = {
    roots: ["<rootDir>/src"],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    transform: {
        "^.+\\.(ts|tsx)|(js|jsx)$": "ts-jest",
    },
    setupFiles: ["./jest.setup.js"],
    transformIgnorePatterns: [`./node_modules/(?!${esModules})`],
};
