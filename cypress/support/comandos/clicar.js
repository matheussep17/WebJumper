Cypress.Commands.add("click_by_contains", (text) => {
  cy.contains(text).click();
});

Cypress.Commands.add("click_button_iframe", (id_frame, id) => {
  cy.get(id_frame).iframe().get(id).click();
});