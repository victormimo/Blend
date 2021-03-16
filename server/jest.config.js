module.exports = {
  setupFilesAfterEnv: ["./setup.js"],
  clearMocks: true,
  maxWorkers: 1,
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.[t]s?(x)",
    "!**/__tests__/coverage/**",
    "!**/__tests__/utils/**",
    "!**/__tests__/images/**",
    "!**/.history/**",
  ],
};
