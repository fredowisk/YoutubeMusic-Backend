export default {
	roots: ["<rootDir>/tests"],
	collectCoverageFrom: ["<rootDir>/src/**/*.ts", "!<rootDir>/src/main/**"],
	coverageDirectory: "coverage",
	coverageProvider: "babel",
	testEnvironment: "node",
	transform: {
		".+\\.ts$": "ts-jest",
	},
	testMatch: [""],
	moduleNameMapper: {
		"@/tests/(.*)": "<rootDir>/tests/$1",
		"@/(.*)": "<rootDir>/src/$1",
	},
};
