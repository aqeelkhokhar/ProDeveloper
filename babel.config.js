module.exports = {
    presets: ["module:@react-native/babel-preset"],
    plugins: [
        "react-native-reanimated/plugin",
        [
            "module-resolver",
            {
                root: ["./MyApp"],
                extensions: [
                    ".ios.js",
                    ".android.js",
                    ".js",
                    ".ts",
                    ".tsx",
                    ".json",
                ],
                alias: {
                    tests: ["./tests/"],
                    "@components": "./src/components",
                },
            },
        ],
    ],
};
