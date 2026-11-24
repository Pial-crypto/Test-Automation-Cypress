export default class BasePage {
 
  inputGroup(label) {
    const exactLabel = new RegExp(`^\\s*${label}\\s*$`);
    return cy
      .contains('.oxd-input-group label', exactLabel)
      .closest('.oxd-input-group');
  }

  typeInto(label, value, options = {}) {
    this.inputGroup(label).find('input').clear().type(value, options);
  }

  selectDropdownOption(label, optionText) {
    this.inputGroup(label).find('.oxd-select-text').click();
    cy.contains('.oxd-select-dropdown .oxd-select-option', optionText).click();
  }

  clickButton(name) {
    cy.contains('button', new RegExp(`^\\s*${name}\\s*$`)).click();
  }

  assertSuccessToast() {
    cy.get('.oxd-toast').should('be.visible').and('contain.text', 'Success');
  }
}