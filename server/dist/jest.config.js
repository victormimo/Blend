"use strict";
module.exports = {
    setupFilesAfterEnv: ["./setup.js"],
    clearMocks: true,
    maxWorkers: 1,
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "!**/__tests__/coverage/**",
        "!**/__tests__/utils/**",
        "!**/__tests__/images/**",
        "!**/.history/**",
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9qZXN0LmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLGtCQUFrQixFQUFFLENBQUMsWUFBWSxDQUFDO0lBQ2xDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFVBQVUsRUFBRSxDQUFDO0lBQ2IsTUFBTSxFQUFFLFNBQVM7SUFDakIsZUFBZSxFQUFFLE1BQU07SUFDdkIsU0FBUyxFQUFFO1FBQ1QsNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLGlCQUFpQjtLQUNsQjtDQUNGLENBQUMifQ==