Cypress.Commands.add("cenario2", () => {
  cy.visit("https://wj-qa-automation-test.github.io/qa-test/");
  cy.click_button_iframe("#iframe_panel", "#btn_one")
  cy.click_button_iframe("#iframe_panel", "#btn_two")
  cy.click_button_iframe("#iframe_panel", "#btn_link")
  cy.verifica_botões();
});
