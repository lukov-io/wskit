describe('Accordion', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/examples/accordion.html');
  });

  const singleAccordion = () => cy.get('[data-accordion="single"]');
  const multipleAccordion = () => cy.get('[data-accordion="multiple"]');

  it('should toggle the clicked item', () => {
    const firstItem = singleAccordion().find('[data-accordion-item]').first();

    singleAccordion().find(".accordion__item-content").should('not.be.visible');

    firstItem.click();
    firstItem.should('have.class', 'active');

    firstItem.click();
    firstItem.should('not.have.class', 'active');
  });

  it('should close other items in single mode', () => {
    singleAccordion().find('[data-accordion-item]')
        .each((item, index) => {
      cy.wrap(item).click();

      singleAccordion().find('[data-accordion-item]')
          .each((otherItem, otherIndex) => {
        if (otherIndex !== index) {
          cy.wrap(otherItem).should('not.have.class', 'active');
        }
      });
    });
  });

  it('should toggle the clicked item and apply custom active class', () => {
    const firstItem = multipleAccordion().find('[data-accordion-item]').first();

    singleAccordion().find(".accordion__item-content").should('not.be.visible');

    multipleAccordion().invoke('attr', 'data-item-active-class')
        .then((activeClass) => {
      firstItem.click().should('have.class', activeClass);
      firstItem.click().should('not.have.class', activeClass);
    });
  });

  it('should activate all items in multiple mode', () => {
    multipleAccordion().find('[data-accordion-item]')
        .each((item) => {
      cy.wrap(item).click();
    });

    multipleAccordion().find('[data-accordion-item]')
        .each((otherItem) => {
      cy.wrap(otherItem).should('have.class', 'custom-class');
    });
  });
});
