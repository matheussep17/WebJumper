Cypress.Commands.add("cenario2", () => {
  cy.visit("https://wj-qa-automation-test.github.io/qa-test/");
  cy.get("#iframe_panel").iframe().get("#btn_one").click();
  cy.get("#iframe_panel").iframe().get("#btn_two").click();
  cy.get("#iframe_panel").iframe().get("#btn_link").click();
  cy.verifica_botões();
});
