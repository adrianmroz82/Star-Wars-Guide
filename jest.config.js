// eslint-disable-next-line no-undef
module.exports = {
  rootDir: "./src",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
    "\\.(css|less|scss|sass)$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/test/unit/setupTests.ts"],
};
