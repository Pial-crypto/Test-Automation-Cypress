import BasePage from './BasePage';

class AddUserPage extends BasePage {
  selectUserRole(role) {
    this.selectDropdownOption('User Role', role);
  }

  selectStatus(status) {
    this.selectDropdownOption('Status', status);
  }


  selectEmployee(searchHint) {
    this.inputGroup('Employee Name').find('input').type(searchHint);

    cy.get('.oxd-autocomplete-dropdown .oxd-autocomplete-option')
      .first()
      .should(($option) => {
        expect($option.text()).not.to.contain('Searching');
      })
      .invoke('text')
      .then((name) => cy.wrap(name.trim()).as('selectedEmployeeName'));

    cy.get('.oxd-autocomplete-dropdown .oxd-autocomplete-option')
      .first()
      .click();
  }

  typeUsername(username) {
    this.typeInto('Username', username);
  }

  typePassword(password) {
    this.typeInto('Password', password, { log: false });
    this.typeInto('Confirm Password', password, { log: false });
  }

  fillUserForm({ userRole, status, employeeSearchHint, username, password }) {
    this.selectUserRole(userRole);
    this.selectEmployee(employeeSearchHint);
    this.selectStatus(status);
    this.typeUsername(username);
    this.typePassword(password);
  }

  save() {
    this.clickButton('Save');
    this.assertSuccessToast();
    cy.url().should('include', '/admin/viewSystemUsers');
  }
}

export default new AddUserPage();