Cypress.Commands.add("click_by_contains", (text) => {
  cy.contains(text).click();
});
