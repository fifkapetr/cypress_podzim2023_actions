describe("Github Actions Tests", () => {
  it("Open pmtool, fill username and check its value", { tags: "@e2e" }, () => {
    cy.visit("http://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.get("#username").should("have.value", "admin");
  });
});
