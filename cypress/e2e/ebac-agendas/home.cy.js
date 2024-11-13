describe('Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Deve adicionar um novo contato', () => {
        cy.get('[type="text"]').type('John Pork');
        cy.get('[type="email"]').type('JohnPork@gmail.com');
        cy.get('[type="tel"]').type('1234567890');
        cy.get('.adicionar').click();

        cy.wait(3000);
        
        cy.contains('John Pork').should('exist');
        cy.contains('JohnPork@gmail.com').should('exist');
        cy.contains('1234567890').should('exist');
    });

    it('Deve editar um contato existente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click();
        cy.get('[type="text"]').clear().type('Shaolin M. de Porco');
        cy.get('[type="email"]').clear().type('ShaolinMatadorDePorco@gmail.com');
        cy.get('[type="tel"]').clear().type('0987654321');
        cy.get('.alterar').click();

        cy.wait(3000);

        cy.contains('Shaolin M. de Porco').should('exist');
        cy.contains('ShaolinMatadorDePorco@gmail.com').should('exist');
        cy.contains('0987654321').should('exist');
    });

    it('Deve remover um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click();

        cy.contains('Shaolin M. de Porco').should('not.exist');
    });
});
