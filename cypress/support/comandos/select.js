Cypress.Commands.add("select_value", (id, value) => {
  cy.get(id).select(value);
});
