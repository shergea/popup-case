/// <reference types="cypress" />

describe("input-tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("headline", () => {
    const newItem = "Feed the cat";
    cy.get("input[id=headline]").clear().type(`${newItem}`);

    cy.get("[data-test=popup-headline]").first().should("have.text", newItem);
  });

  it("description", () => {
    const newItem = "Description Message";
    cy.get("textarea[id=description]").clear().type(`${newItem}`);

    cy.get("[data-test=popup-description]")
      .first()
      .should("have.text", newItem);
  });

  it("buttonText", () => {
    const newItem = "Button Message";
    cy.get("input[id=buttonText]").clear().type(`${newItem}`);

    cy.get("[data-test=popup-1] button[type=submit]")
      .first()
      .should("have.text", newItem);
  });

  it("successMessage", () => {
    const newItem = "Success Message";
    cy.get("input[id=successMessage]").clear().type(`${newItem}`);
    cy.get("[data-test=popup-1] input[name=fullName]")
      .first()
      .clear()
      .type("Emre Yoruk");
    cy.get("[data-test=popup-1] input[name=email]")
      .first()
      .clear()
      .type("test@email.com");
    cy.get("[data-test=popup-1] select[name=font]").first().select(5);
    cy.get("[data-test=popup-1] button[type=submit]").first().click();

    cy.get("[data-test=popup-1] [data-test=popup-successMessage]")
      .first()
      .should("have.text", newItem);
  });

  it("fontSelector", () => {
    cy.get("select[id=fontSelector]").first().select(2);
    cy.get("select[id=fontSelector]")
      .first()
      .invoke("val")
      .then((val1) => {
        let font = val1.replace(/'/g,"");
        cy.get("[data-test=popup-1]")
          .first()
          .should('have.css', "font-family", font);
      });
  });
});
