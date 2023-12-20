export class LoginPage {
  elements = {
    loginField: () => cy.get('[data-cy="username"]'),
    passwordField: () => cy.get('[data-cy="password"]'),
    submitButton: () => cy.get('[data-cy="submit"] > span'),
  };

  login(login, password) {
    this.elements.loginField().type(login);
    this.elements.passwordField().type(password);
    this.elements.submitButton().click();
  }
}
