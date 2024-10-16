describe('Read More Functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/examples/readMore.html');
  });

  const defaultReadMore = () => cy.get('[data-read-more]:not([data-read-more-active-class])');
  const customReadMore = () => cy.get('[data-read-more][data-read-more-active-class]');

  describe('Default Read More', () => {
    it('should have hidden content initially', () => {
      verifyContentVisibility(defaultReadMore(), false);
    });

    it('should display content and change button text when clicked', () => {
      toggleContent(defaultReadMore());
      verifyContentVisibility(defaultReadMore(), true);
      verifyButtonText(defaultReadMore(), 'Hide');
    });

    it('should hide content and change button text back when clicked again', () => {
      toggleContent(defaultReadMore());
      toggleContent(defaultReadMore());
      verifyContentVisibility(defaultReadMore(), false);
      verifyButtonText(defaultReadMore(), 'Read More');
    });
  });

  describe('Custom Read More', () => {
    it('should have hidden content initially', () => {
      verifyContentVisibility(customReadMore(), false);
    });

    it('should display content and change button text when clicked', () => {
      toggleContent(customReadMore());
      verifyContentVisibility(customReadMore(), true);
      verifyButtonText(customReadMore(), 'Hide');
    });

    it('should have data-read-more-active-class attribute set', () => {
      customReadMore().should('have.attr', 'data-read-more-active-class', 'custom-class');
    });

    it('should hide content and change button text back when clicked again', () => {
      toggleContent(customReadMore());
      toggleContent(customReadMore());
      verifyContentVisibility(customReadMore(), false);
      verifyButtonText(customReadMore(), 'Read More');
    });

    it('should remove custom class when content is hidden', () => {
      customReadMore().should('not.have.class', 'custom-class');
      toggleContent(customReadMore());
      toggleContent(customReadMore());
      customReadMore().should('not.have.class', 'custom-class');
    });
  });

  function toggleContent(selector) {
    selector.find('[data-read-more-toggler]').click();
  }

  function verifyContentVisibility(selector, isVisible) {
    if (isVisible) {
      selector.find('.read-more__content').should('be.visible');
    } else {
      selector.find('.read-more__content').should('not.be.visible');
    }
  }

  function verifyButtonText(selector, expectedText) {
    selector.find('[data-read-more-toggler]').should('have.text', expectedText);
  }
});
