describe('User can see list of projects', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
        cy.get('#projects-tab').click();
    })

    it('displays the first project', () => {
        cy.get('#project-1').within(() => {
            cy.get('.ui.header').should('contain', 'My First Website');
            cy.get(('.image')).should('exist');
            cy.get('.description').should('contain', 'a first go');
        })
    });

    it('displays second project', () => {
        cy.get('#project-2').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'Address Book');
            cy.get('.description').should('contain', 'shortly after my')
        })
    })

    it('displays third project', () => {
        cy.get('#project-3').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('ui.header').should('contain', 'ATM');
            cy.get('.description').should('contain', 'simple SIM')
        })
    });
});