Cypress.Commands.add("verifica_botões", () => {
  cy.click_by_contains("One");
  cy.click_by_contains("Two");
  cy.click_by_contains("Four");
  cy.assert_contains_not_visible("One");
  cy.assert_contains_not_visible("Two");
  cy.assert_contains_not_visible("Four");
});

Cypress.Commands.add("cenario1", () => {
  cy.visit("https://wj-qa-automation-test.github.io/qa-test/");
  cy.verifica_botões();
});
