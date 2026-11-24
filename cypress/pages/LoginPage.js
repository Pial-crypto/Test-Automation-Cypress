import BasePage from './BasePage';

class LoginPage extends BasePage {
  visit() {
    cy.visit('/web/index.php/auth/login');
    cy.get('input[name="username"]').should('be.visible');
  }

  login(username, password) {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password, { log: false });
    cy.get('button[type="submit"]').click();
  }

  assertLoginSuccess() {
    cy.url().should('include', '/dashboard');
    cy.get('.oxd-topbar-header-breadcrumb').should('contain.text', 'Dashboard');
  }
}

export default new LoginPage();