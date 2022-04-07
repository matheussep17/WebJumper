Cypress.Commands.add("cenario1", () => {
  cy.visit("https://wj-qa-automation-test.github.io/qa-test/");
  cy.click_by_contains("One");
  cy.click_by_contains("Two");
  cy.click_by_contains("Four");
  cy.verifica_botões();
});
