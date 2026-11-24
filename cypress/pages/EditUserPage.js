import BasePage from './BasePage';

const normalizeSpaces = (text) => text.replace(/\s+/g, ' ').trim();

class EditUserPage extends BasePage {
  assertUserDetails({ userRole, status, username, employeeName }) {
    cy.url().should('include', '/admin/saveSystemUser/');
    cy.contains('h6', 'Edit User').should('be.visible');

    this.inputGroup('User Role')
      .find('.oxd-select-text-input')
      .should('have.text', userRole);

    this.inputGroup('Status')
      .find('.oxd-select-text-input')
      .should('have.text', status);

    this.inputGroup('Username')
      .find('input')
      .should('have.value', username);


    this.inputGroup('Employee Name')
      .find('input')
      .should(($input) => {
        expect(normalizeSpaces($input.val())).to.eq(
          normalizeSpaces(employeeName)
        );
      });
  }
}

export default new EditUserPage();