module.exports = {
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "sweetapplepumpkinpie",
          name: "https://github.com/sweetapplepumpkinpie/electron-vue",
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
}
