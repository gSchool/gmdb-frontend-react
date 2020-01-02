export class HomePage {
  navigate() {
    return cy.visit('/');
  }

  async getChildren(matcher = '> *') {
    return cy.get(`#root ${matcher}`);
  }

  assertChildren() {
    this.getChildren().should('have.length', 0);
    return this;
  }
}
