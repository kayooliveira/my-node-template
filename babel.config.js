module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      }
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    ["module-resolver", {
        alias: {
          "@/*": "./src/*",
          "@database/*": "./src/database/*",
          "@entities/*": "./src/entities/*",
          "@providers/*": "./src/providers/*",
          "@repositories/*": "./src/repositories/*",
          "@useCases/*": "./src/useCases/*",
        }
      }]
  ],
  ignore: [
    "**/*.spec.ts",
  ]
}