describe('Tabs', () => {
  beforeEach(() => {
    cy.visit('/examples/tabs.html');
  });

  const customClassTabs = () => cy.get('[data-tabs="openByClass"]');
  const defaultClassTabs = () => cy.get('[data-tabs]:not([data-tabs="openByClass"])');

  it('should switch tabs with default class', () => {
    const tabButtons = defaultClassTabs().find('[data-tab-button]');
    const tabContents = defaultClassTabs().find('[data-tab-content]');

    tabButtons.each((button, index) => {
      cy.wrap(button).click();

      tabContents.each((content, contentIndex) => {
        if (index === contentIndex) {
          cy.wrap(content).should('be.visible');
        } else {
          cy.wrap(content).should('not.be.visible');
        }
      });
    });
  });

  it('should toggle tabs in openByClass mode with custom classes', () => {
    const tabButtons = customClassTabs().find('[data-tab-button]');
    const tabContents = customClassTabs().find('[data-tab-content]');
    const activeButtonClass = 'custom-button-class';
    const activeContentClass = 'custom-content-class';

    tabButtons.each((button, index) => {
      cy.wrap(button).click().should('have.class', activeButtonClass);

      tabContents.each((content, contentIndex) => {
        if (index === contentIndex) {
          cy.wrap(content).should('have.class', activeContentClass);
        } else {
          cy.wrap(content).should('not.have.class', activeContentClass);
        }
      });
    });
  });

  it('should close the previously opened tab with default classes', () => {
    const tabButtons = defaultClassTabs().find('[data-tab-button]');
    const tabContents = defaultClassTabs().find('[data-tab-content]');

    tabButtons.each((button, index) => {
      cy.wrap(button).click();

      tabContents.each((content, contentIndex) => {
        if (index === contentIndex) {
          cy.wrap(content).should('be.visible');
        } else {
          cy.wrap(content).should('not.be.visible');
        }
      });
    });

    tabButtons.each((button, index) => {
      cy.wrap(button).click();

      tabContents.each((content, contentIndex) => {
        if (index === contentIndex) {
          cy.wrap(content).should('be.visible');
        } else {
          cy.wrap(content).should('not.be.visible');
        }
      });
    });
  });
});
