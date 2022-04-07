describe("Test", () => {
  it("Cenário 1", () => {
    cy.visit("https://wj-qa-automation-test.github.io/qa-test/");
    cy.contains("One").click();
    cy.contains("Two").click();
    cy.contains("Four").click();
    cy.contains("One").should("not.visible");
    cy.contains("Two").should("not.visible");
    cy.contains("Four").should("not.visible");
  });

  it("Cenário 2", () => {
    cy.visit("https://wj-qa-automation-test.github.io/qa-test/");
    cy.get("#panel_body_one").within(() => {
      cy.contains("One").click();
      cy.contains("Two").click();
      cy.contains("Four").click();
      cy.contains("One").should("not.visible");
      cy.contains("Two").should("not.visible");
      cy.contains("Four").should("not.visible");
    });
  });

  it("Cenário 3", () => {
    cy.visit("https://wj-qa-automation-test.github.io/qa-test/");
    cy.get("#first_name").type("Matheus");
    cy.contains("One").click();
    cy.contains("OptionThree").click();
    cy.get('#select_box').select('option_two')
    cy.xpath("//img[@alt='selenium']").should("be.visible");
  });
});
