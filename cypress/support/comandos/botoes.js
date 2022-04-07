Cypress.Commands.add("verifica_botões", () => {
  cy.assert_contains_not_visible("One");
  cy.assert_contains_not_visible("Two");
  cy.assert_contains_not_visible("Four");
});
