module.exports = async () => {
    return {
      verbose: true,
      transformIgnorePatterns: ["node_modules/(?!axios)/"],
      testEnvironment: 'jsdom'
    };
};

