import { faker } from "@faker-js/faker";
import { LoginPage } from "../../pages/loginPage";
const loginPageElements = require("../../fixtures/pages/loginPageSelectors.json");

describe("verifier login - UI", () => {
  it("user can login", () => {
    let loginPage = new LoginPage();
    let oldPassword = "Loki12345";
    let newPassword = faker.internet.password(8);
    cy.log(newPassword);

    cy.visit("/");
    cy.get('[data-cy="accountMenu"] > .d-flex > span').click();
    cy.get('[data-cy="login"] > span').click();
    loginPage.login("loki", oldPassword);
    cy.changePassword(oldPassword, newPassword);

    cy.get('[data-cy="accountMenu"] > .d-flex').click();
    cy.get('[data-cy="logout"]').click();
    cy.get("h4").should("exist");

    cy.get('[data-cy="accountMenu"] > .d-flex > span').click();
    cy.get('[data-cy="login"] > span').click();
    cy.get(loginPageElements.loginField).type("loki");
    cy.get(loginPageElements.passwordField).type(newPassword);
    cy.get(loginPageElements.submitButton).click();

    cy.changePasswordBack(newPassword, oldPassword);
  });
});
