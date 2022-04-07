Cypress.Commands.add("cenario3", () => {
  cy.visit("https://wj-qa-automation-test.github.io/qa-test/");
  cy.write_by_id("#first_name", "Matheus");
  cy.click_by_contains("One");
  cy.click_by_contains("OptionThree");
  cy.select_value("#select_box", "option_two");
  cy.assert_xpath_visible("//img[@alt='selenium']");
});
