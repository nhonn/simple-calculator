module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            src: "./src",
            assets: "./src/assets",
            components: "./src/components",
            screens: "./src/screens",
            contexts: "./src/contexts",
            reducers: "./src/reducers",
          },
        },
      ],
    ],
  };
};
