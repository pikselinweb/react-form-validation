/** @format */

describe('Registration form', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	describe('Form Email', () => {
		it('email field should not be empty', () => {
			cy.get('[data-cy=submit-button]').click();
			cy.contains('Email field is a required field.').should('be.visible');
		});

		it('should enter a valid email', () => {
			cy.get('[data-cy=form__email]').click().type('test');
			cy.get('[data-cy=submit-button]').click();
			cy.contains('Email should be a valid email').should('be.visible');
		});

		it('should not show an error message', () => {
			cy.get('[data-cy=form__email]').click().type('test@email.com');
			cy.get('[data-cy=submit-button]').click();
			cy.contains('Email should be a valid email').should('not.exist');
		});
	});
});
