const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ui7un1",
  e2e: {
    baseUrl:
      "https://sqlverifier-staging-08050d656f7a.herokuapp.com/?page=1&sort=id,asc",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
