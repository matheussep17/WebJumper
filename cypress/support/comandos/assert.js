Cypress.Commands.add("assert_contains_visible", (expected) => {
  cy.contains(expected).should("be.visible");
});

Cypress.Commands.add("assert_xpath_visible", (xpath) => {
  cy.xpath(xpath).should("be.visible");
});

Cypress.Commands.add("assert_contains_not_visible", (expected) => {
  cy.contains(expected).should("not.visible");
});
