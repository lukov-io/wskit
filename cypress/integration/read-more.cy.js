describe('Read More Functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/examples/readMore.html'); // Убедитесь, что путь правильный
  });

  const defaultReadMore = () => cy.get('[data-read-more]:not([data-read-more-active-class])');
  const customReadMore = () => cy.get('[data-read-more][data-read-more-active-class]');

  describe('Default Read More', () => {
    it('should have hidden content initially', () => {
      defaultReadMore().find('.read-more__content').should('not.be.visible');
    });

    it('should display content and change button text when clicked', () => {
      defaultReadMore().find('[data-read-more-toggler]').click();
      defaultReadMore().find('.read-more__content').should('be.visible');
      defaultReadMore().find('[data-read-more-toggler]').should('have.text', 'Hide');
    });

    it('should hide content and change button text back when clicked again', () => {
      defaultReadMore().find('[data-read-more-toggler]').click();
      defaultReadMore().find('[data-read-more-toggler]').click();
      defaultReadMore().find('.read-more__content').should('not.be.visible');
      defaultReadMore().find('[data-read-more-toggler]').should('have.text', 'Read More');
    });
  });

  describe('Custom Read More', () => {
    it('should have hidden content initially', () => {
      customReadMore().find('.read-more__content').should('not.be.visible');
    });

    it('should display content and change button text when clicked', () => {
      customReadMore().find('[data-read-more-toggler]').click();
      customReadMore().find('.read-more__content').should('be.visible');
      customReadMore().find('[data-read-more-toggler]').should('have.text', 'Hide');
    });

    it('should have data-read-more-active-class attribute set', () => {
      customReadMore().should('have.attr', 'data-read-more-active-class', 'custom-class');
    });

    it('should hide content and change button text back when clicked again', () => {
      customReadMore().find('[data-read-more-toggler]').click();
      customReadMore().find('[data-read-more-toggler]').click();
      customReadMore().find('.read-more__content').should('not.be.visible');
      customReadMore().find('[data-read-more-toggler]').should('have.text', 'Read More');
    });

    it('should remove custom class when content is hidden', () => {
      customReadMore().find('[data-read-more-toggler]').click();
      customReadMore().find('[data-read-more-toggler]').click();
      customReadMore().should('not.have.class', 'custom-class');
    });
  });
});
