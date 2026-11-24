import BasePage from './BasePage';

class AdminPage extends BasePage {
  openFromMenu() {
    cy.contains('.oxd-main-menu-item', 'Admin').click();
    cy.url().should('include', '/admin/viewSystemUsers');
    cy.contains('h5', 'System Users').should('be.visible');
  }

  clickAdd() {
    this.clickButton('Add');
    cy.url().should('include', '/admin/saveSystemUser');
  }

  searchByUsername(username) {
    this.typeInto('Username', username);
    this.clickButton('Search');
  }

  assertSingleRecordFound(username) {
    cy.contains('(1) Record Found').should('be.visible');
    cy.get('.oxd-table-body .oxd-table-card')
      .should('have.length', 1)
      .and('contain.text', username);
  }

  openUserRecord(username) {
    cy.contains('.oxd-table-card', username)
      .find('.bi-pencil-fill')
      .click();
  }
}

export default new AdminPage();