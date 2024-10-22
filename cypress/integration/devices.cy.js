describe('Device Type Detection Example', () => {
  beforeEach(() => {
    cy.visit('/devices.html');
  });

  describe('Small Mobile Devices', () => {
    it('should display small mobile in portrait mode', () => {
      cy.viewport(320, 480);
      cy.get('#check-device').click();
      cy.get('#result').should('have.text', 'You are using: a small mobile device in portrait mode.');
    });

    it('should display small mobile in landscape mode', () => {
      cy.viewport(480, 319);
      cy.get('#check-device').click();
      cy.get('#result').should('have.text', 'You are using: a small mobile device in landscape mode.');
    });
  });

  describe('Mobile Devices', () => {
    it('should display mobile device in portrait mode', () => {
      cy.viewport(375, 667);
      cy.get('#check-device').click();
      cy.get('#result').should('have.text', 'You are using: a mobile device in portrait mode.');
    });

    it('should display mobile device in landscape mode', () => {
      cy.viewport(667, 375);
      cy.get('#check-device').click();
      cy.get('#result').should('have.text', 'You are using: a mobile device in landscape mode.');
    });
  });

  describe('Tablet Devices', () => {
    it('should display tablet in portrait mode', () => {
      cy.viewport(768, 1024);
      cy.get('#check-device').click();
      cy.get('#result').should('have.text', 'You are using: a tablet in portrait mode.');
    });

    it('should display tablet in landscape mode', () => {
      cy.viewport(1024, 768);
      cy.get('#check-device').click();
      cy.get('#result').should('have.text', 'You are using: a tablet in landscape mode.');
    });
  });

  describe('Desktop Devices', () => {
    it('should display desktop type', () => {
      cy.viewport(1280, 800);
      cy.get('#check-device').click();
      cy.get('#result').should('have.text', 'You are using: a desktop computer.');
    });
  });
});
