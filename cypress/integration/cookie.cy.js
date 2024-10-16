describe('Cookie', () => {

  beforeEach(() => {
    cy.visit('/examples/cookie.html');
    cy.clearAllCookies();
  });

  const setCookie = (name, value, days) => {
    cy.get('#cookieName').type(name);
    cy.get('#cookieValue').type(value);
    cy.get('#cookieDays').type(days);
    cy.get('#setCookie').click();
  };

  it('should set a cookie', () => {
    setCookie('profile', 'JohnDoe', '7');

    cy.getCookie('profile').should('have.property', 'value', 'JohnDoe');
  });

  it('should get the cookie value', () => {
    setCookie('profile', 'JohnDoe', '7');

    cy.get('#getCookieByName').type('profile');
    cy.get('#getCookie').click();

    cy.get('#cookieValueText').should('have.text', 'Value: JohnDoe');
  });

  it('should remove the cookie', () => {
    setCookie('profile', 'JohnDoe', '7');

    cy.get('#removeCookieByName').type('profile');
    cy.get('#removeCookie').click();

    cy.getCookie('profile').should('be.null');
  });
});

