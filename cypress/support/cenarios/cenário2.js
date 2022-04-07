Cypress.Commands.add("cenario2", () => {
  cy.visit("https://wj-qa-automation-test.github.io/qa-test/");
  cy.get("#panel_body_one").within(() => {
    cy.verifica_botões();
  });
});
